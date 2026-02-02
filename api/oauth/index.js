// Vercel Serverless Function: GitHub OAuth entrypoint for Decap CMS
//
// Decap opens a popup to:
//   <base_url>/<auth_endpoint>?provider=github&site_id=...
// We redirect the user to GitHub's OAuth authorize URL and then back to /api/oauth/callback.

function getOrigin(req) {
  const proto =
    (req.headers["x-forwarded-proto"] || "").split(",")[0]?.trim() || "https";
  const host = (req.headers["x-forwarded-host"] || req.headers.host || "")
    .split(",")[0]
    .trim();
  return `${proto}://${host}`;
}

function randomState() {
  // Good enough for OAuth state in this context
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).send("Method Not Allowed");
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return res
      .status(500)
      .send("Missing GITHUB_CLIENT_ID environment variable.");
  }

  const origin = getOrigin(req);
  const redirectUri = `${origin}/api/oauth/callback`;
  const state = randomState();

  // Decap usually sends provider=github. We only support GitHub here.
  // For public repos, Open Authoring can work with `public_repo`. (Private repos would need `repo`.)
  const scope =
    typeof req.query.scope === "string" ? req.query.scope : "public_repo";

  // Store state in a short-lived cookie to mitigate CSRF.
  res.setHeader(
    "Set-Cookie",
    `decap_oauth_state=${encodeURIComponent(
      state,
    )}; Path=/; HttpOnly; SameSite=Lax; Max-Age=600`,
  );

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", scope);
  authorizeUrl.searchParams.set("state", state);

  res.writeHead(302, { Location: authorizeUrl.toString() });
  res.end();
}

