# Vercel Deployment & CMS Setup Guide

## For Tony: Setting Up the Website with CMS

---

## 📦 Part 1: Deploy to Vercel (Done ✓)

The GitHub repo is ready. To deploy:

1. Go to [vercel.com](https://vercel.com)
2. Import `4Sighteducation/martin_griffin_books`
3. Vercel will auto-detect Astro settings
4. Click **Deploy**

---

## 🔐 Part 2: Enable the CMS (Decap CMS)

To enable Martin to edit content through `/admin`, we need to set up authentication.

### Option A: Netlify Identity (Recommended for Simplicity)

1. **Create a free Netlify account** at [netlify.com](https://netlify.com)
2. **Create a new site** (just for Identity - we're still hosting on Vercel)
3. **Enable Identity**:
   - Go to **Site Settings** → **Identity**
   - Click **Enable Identity**
4. **Enable Git Gateway**:
   - In Identity settings, go to **Services** → **Git Gateway**
   - Click **Enable Git Gateway**
5. **Invite Martin**:
   - Go to **Identity** tab
   - Click **Invite users**
   - Enter Martin's email
6. **Get the Identity URL**:
   - Copy the API endpoint (looks like: `https://your-site.netlify.app/.netlify/identity`)
7. **Add to Vercel**:
   - In Vercel project settings → **Environment Variables**
   - Add: `NETLIFY_IDENTITY_URL` = (the URL you copied)
   - Redeploy the site

### Option B: GitHub OAuth (More Technical)

1. Create a GitHub OAuth App
2. Configure the callback URL
3. Add credentials to Vercel
4. Update `public/admin/config.yml`

**Netlify Identity is easier and free!**

---

## 🌐 Part 3: Connect Custom Domain

Once the domain DNS is updated:

1. In Vercel project → **Settings** → **Domains**
2. Add: `martingriffinbooks.com` and `www.martingriffinbooks.com`
3. Follow Vercel's DNS instructions
4. Wait for DNS propagation (up to 48 hours, usually 10-30 minutes)
5. Vercel automatically provides SSL certificate

---

## 📧 Part 4: Set Up Contact Form

The contact form needs a Formspree account:

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free plan works fine)
3. Create a new form
4. Copy the form ID (looks like: `xyzabc123`)
5. Martin can add this in the CMS under **Contact Information** → **Formspree Form ID**
6. Or you can edit `src/content/contact.json` directly

---

## 🎨 Part 5: Generate Proper Favicon (Optional Improvement)

The current favicon uses an SVG. To create proper multi-size favicons:

1. Go to [favicon.io](https://favicon.io/favicon-converter/)
2. Upload `public/images/last-visitor-uk.jpg`
3. Download the favicon package
4. Replace the files in `public/`

Or use this command-line tool:
```bash
npm install -g sharp-cli
sharp public/images/last-visitor-uk.jpg --resize 32 --output public/favicon-32x32.png
sharp public/images/last-visitor-uk.jpg --resize 192 --output public/favicon-192x192.png
```

---

## 🔍 Part 6: SEO Enhancements (After Launch)

### Immediate:
- ✅ Meta tags (done)
- ✅ Sitemap (done)
- ✅ robots.txt (done)
- ✅ Structured data (done)

### After Launch:
1. **Google Search Console**:
   - Add and verify the site
   - Submit the sitemap: `https://martingriffinbooks.com/sitemap-index.xml`
   
2. **Google Analytics** (optional):
   - Create a GA4 property
   - Add tracking code to `BaseLayout.astro`

3. **Social Media Meta Tags**:
   - Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

4. **Page Speed**:
   - Test with [PageSpeed Insights](https://pagespeed.web.dev/)
   - Astro sites are usually already fast!

---

## 📊 Monitoring & Analytics

Consider adding:
- **Vercel Analytics** (built-in, easy to enable in Vercel dashboard)
- **Google Analytics 4** (more detailed insights)
- **Plausible Analytics** (privacy-friendly alternative)

---

## 🚀 Deployment Workflow

Once everything is set up:
1. Martin edits content in `/admin`
2. Saves changes
3. Changes commit to GitHub automatically
4. Vercel rebuilds the site (1-2 minutes)
5. Site updates automatically

---

## 🐛 Troubleshooting

### CMS won't load
- Check that Netlify Identity is enabled
- Verify the identity URL in Vercel environment variables
- Clear browser cache

### Changes not appearing
- Wait 2-3 minutes for build to complete
- Check Vercel deployment logs
- Verify changes were committed to GitHub

### Contact form not working
- Verify Formspree form ID is correct
- Check that Martin updated the ID in the CMS

---

## 📝 Content Management Tips for Martin

1. **Keep descriptions concise** - readers scan, not read
2. **Update regularly** - Google likes fresh content
3. **Use good quality images** - but not too large (under 2MB)
4. **Test on mobile** - most readers will be on phones

---

## ✅ Launch Checklist

- [ ] Vercel deployment successful
- [ ] Custom domain connected
- [ ] SSL certificate active (automatic with Vercel)
- [ ] Netlify Identity configured
- [ ] Martin can log in to `/admin`
- [ ] Contact form with Formspree ID configured
- [ ] Favicon displays correctly
- [ ] Site submitted to Google Search Console
- [ ] Social media meta tags tested
- [ ] Mobile responsive check
- [ ] All book links working (Amazon, Goodreads)
