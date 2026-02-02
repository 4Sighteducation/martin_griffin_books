// Vercel Serverless Function: GitHub OAuth callback for Decap CMS
//
// Exchanges GitHub code -> access_token, then returns a small HTML page that
// postMessages the token back to the opener window (Decap CMS).

function getOrigin(req) {
  const proto =
    (req.headers["x-forwarded-proto"] || "").split(",")[0]?.trim() || "https";
  const host = (req.headers["x-forwarded-host"] || req.headers.host || "")
    .split(",")[0]
    .trim();
  return `${proto}://${host}`;
}

function readCookie(req, name) {
  const cookie = req.headers.cookie || "";
  const parts = cookie.split(";").map((p) => p.trim());
  for (const part of parts) {
    if (!part.startsWith(`${name}=`)) continue;
    return decodeURIComponent(part.slice(name.length + 1));
  }
  return null;
}

function htmlForMessage({ provider, status, payload, targetOrigin }) {
  const message = `authorization:${provider}:${status}:${JSON.stringify(
    payload,
  )}`;
  return `<!doctype html>
<html>
  <head><meta charset="utf-8" /></head>
  <body>
    <script>
      (function() {
        var msg = ${JSON.stringify(message)};
        var target = ${JSON.stringify(targetOrigin)};
        if (window.opener) {
          window.opener.postMessage(msg, target);
        }
        window.close();
      })();
    </script>
  </body>
</html>`;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).send("Method Not Allowed");
  }

  const origin = getOrigin(req);
  const targetOrigin = origin;

  const provider = "github";
  const code = typeof req.query.code === "string" ? req.query.code : null;
  const state = typeof req.query.state === "string" ? req.query.state : null;

  const expectedState = readCookie(req, "decap_oauth_state");
  if (!state || !expectedState || state !== expectedState) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res
      .status(200)
      .send(
        htmlForMessage({
          provider,
          status: "error",
          payload: { error: "Invalid OAuth state. Please try again." },
          targetOrigin,
        }),
      );
  }

  if (!code) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res
      .status(200)
      .send(
        htmlForMessage({
          provider,
          status: "error",
          payload: { error: "Missing code. Please try again." },
          targetOrigin,
        }),
      );
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res
      .status(500)
      .send("Missing GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET env vars.");
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenJson = await tokenRes.json().catch(() => null);
  const accessToken = tokenJson?.access_token;

  // Clear the state cookie
  res.setHeader(
    "Set-Cookie",
    "decap_oauth_state=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0",
  );
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (!tokenRes.ok || !accessToken) {
    const details =
      tokenJson?.error_description ||
      tokenJson?.error ||
      "OAuth token exchange failed.";
    return res
      .status(200)
      .send(
        htmlForMessage({
          provider,
          status: "error",
          payload: { error: details },
          targetOrigin,
        }),
      );
  }

  return res
    .status(200)
    .send(
      htmlForMessage({
        provider,
        status: "success",
        payload: { token: accessToken, provider },
        targetOrigin,
      }),
    );
}

