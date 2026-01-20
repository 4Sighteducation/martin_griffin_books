# Contact Form Setup Guide

The contact form now uses **Vercel Serverless Functions** - no third-party services needed (except for the email sending API).

---

## 📧 Choose Your Email Service

You have **3 options** for sending emails. Pick the one that works best:

### **Option 1: SendGrid (Most Popular)** ⭐

**Pros:**
- Free tier: 100 emails/day forever
- Very reliable
- Good documentation

**Setup:**
1. Sign up at [sendgrid.com](https://sendgrid.com/)
2. Create an API key
3. Verify a sender email address
4. Use file: `api/contact.js`

**Environment Variables (add to Vercel):**
```
SENDGRID_API_KEY=your_api_key_here
SENDER_EMAIL=noreply@martingriffinbooks.com
RECIPIENT_EMAIL=martin@example.com
```

---

### **Option 2: Resend (Recommended - Easiest)** 🌟

**Pros:**
- Free tier: 3,000 emails/month
- Simpler API than SendGrid
- Modern, developer-friendly
- Better deliverability

**Setup:**
1. Sign up at [resend.com](https://resend.com/)
2. Get API key
3. Verify your domain (or use their test domain)
4. Rename `api/contact-resend.js` to `api/contact.js`

**Environment Variables (add to Vercel):**
```
RESEND_API_KEY=your_api_key_here
RECIPIENT_EMAIL=martin@example.com
```

**NOTE:** To use Resend, rename the file:
```bash
mv api/contact-resend.js api/contact.js
```

---

### **Option 3: SMTP / Gmail (Use Existing Email)**

**Pros:**
- Use Martin's existing email
- No third-party service needed
- Direct SMTP connection

**Cons:**
- Gmail has sending limits (500/day)
- Need to create App Password
- Slightly more complex

**Setup for Gmail:**
1. Enable 2-Factor Authentication on Gmail
2. Create App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Install nodemailer: `npm install nodemailer`
4. Rename `api/contact-nodemailer.js` to `api/contact.js`

**Environment Variables (add to Vercel):**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=martin@gmail.com
SMTP_PASSWORD=your_16_character_app_password
RECIPIENT_EMAIL=martin@gmail.com
```

**NOTE:** To use SMTP, rename the file:
```bash
mv api/contact-nodemailer.js api/contact.js
npm install nodemailer
```

---

## 🚀 Setting Up Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add the variables for your chosen service:
   - Click **Add New**
   - Enter variable name (e.g., `SENDGRID_API_KEY`)
   - Enter value
   - Select **Production**, **Preview**, and **Development**
   - Click **Save**
4. Repeat for each variable
5. **Redeploy** your site for changes to take effect

---

## 🎯 My Recommendation

**Use Resend** - Here's why:
- ✅ 3,000 emails/month free (plenty for a author website)
- ✅ Simplest API (less code to maintain)
- ✅ Better deliverability than SendGrid
- ✅ Modern dashboard
- ✅ Can send from `@martingriffinbooks.com` once domain is verified

---

## 📝 Quick Setup Instructions

### If using Resend (recommended):

```bash
# 1. Rename the file
mv api/contact-resend.js api/contact.js

# 2. Delete the others (optional, for cleaner repo)
rm api/contact-nodemailer.js
```

### Then in Vercel:

1. **Add environment variables:**
   - `RESEND_API_KEY` = (your Resend API key)
   - `RECIPIENT_EMAIL` = martin@example.com

2. **Redeploy the site**

3. **Test the contact form**

---

## 🧪 Testing

After deployment:
1. Visit your website
2. Scroll to the contact form
3. Fill it out and submit
4. Check Martin's email

If it doesn't work:
- Check Vercel deployment logs
- Verify environment variables are set
- Check your email service dashboard for errors

---

## 💰 Cost Comparison

| Service | Free Tier | Cost After |
|---------|-----------|------------|
| **Resend** | 3,000/month | $20/month for 50k |
| **SendGrid** | 100/day (3k/month) | $20/month for 40k |
| **Gmail SMTP** | 500/day (15k/month) | Free (but unreliable for automated sends) |

For an author website, you'll probably get 5-20 emails per month, so **all options are free**.

---

## 🔒 Security Notes

- ✅ Form validates input
- ✅ Email addresses validated
- ✅ Rate limiting can be added if needed
- ✅ API keys are never exposed to the browser
- ✅ CORS protection included

---

## 📧 What the Email Looks Like

When someone submits the form, Martin receives:

**Subject:** "New message from [Name] - Martin Griffin Books"

**Body:**
```
New Contact Form Submission

From: John Doe
Email: john@example.com

Message:
Hi Martin, I just finished reading The Second Stranger and 
loved it! When is the next book coming out?
```

The "Reply To" is set to the sender's email, so Martin can just hit reply.

---

## ⚙️ Advanced: Adding Spam Protection (Optional)

If Martin starts getting spam, we can add:
1. **Turnstile** (Cloudflare's free CAPTCHA)
2. **reCAPTCHA** (Google)
3. **hCaptcha** (privacy-focused)
4. **Rate limiting** (built into Vercel)

Let me know if you want this!

---

## 📞 Contact Form Features

Current features:
- ✅ Name, email, message fields
- ✅ Client-side validation
- ✅ Loading state during submission
- ✅ Success/error messages
- ✅ Email validation
- ✅ Mobile-responsive design
- ✅ Accessible (keyboard navigation, screen readers)

---

## 🔄 Current Status

- ✅ Contact form component created
- ✅ Three serverless function options ready
- ⏳ Choose which email service to use
- ⏳ Add environment variables to Vercel
- ⏳ Test the form

Ready to go - just pick your email service and add the API keys!
