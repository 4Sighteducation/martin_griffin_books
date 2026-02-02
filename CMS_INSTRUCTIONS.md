# Content Management System (CMS) Instructions

## For Martin: How to Edit Your Website

Your website now has an **Admin Panel** where you can edit all the content without touching any code!

---

## 🔐 Accessing the Admin Panel

Once your website is live on Vercel with your custom domain, you can access the admin panel at:

```
https://yourdomain.com/admin
```

For example: `https://www.martingriffinbooks.com/admin`

---

## 📝 What You Can Edit

### 1. **Homepage Content**
- Hero title and subtitle
- Hero description
- About section (all three paragraphs)

### 2. **Contact Information**
- Contact heading
- Contact description
- Formspree form ID (for the contact form)

### 3. **Books**
- Add new books
- Edit existing books:
  - Title
  - Cover image
  - Tagline (the italic quote)
  - Description paragraphs (1-3)
  - Amazon and Goodreads links
  - Slideshow images (for multiple cover editions)

### 4. **SEO & Metadata**
- Site title and description
- Social media links (Twitter, Facebook, Instagram)

---

## 🎯 How to Make Edits

1. **Go to `/admin`** on your website
2. **Log in** with your GitHub account
3. **Click on the section** you want to edit (Homepage, Books, etc.)
4. **Make your changes** in the editor
5. **Click "Save"** to keep working, then **move your changes to "Ready"** when you're done.
6. Your changes will automatically create a **Pull Request** for Tony to review and merge.
7. After Tony merges, Vercel will rebuild and your live website will update (usually 1-2 minutes).

---

## 📚 Adding a New Book

1. Go to `/admin`
2. Click **"Books"** in the sidebar
3. Click **"New Book"**
4. Fill in all the fields:
   - **Title**: The book's title
   - **Order**: Display order (1 = first, 2 = second, etc.)
   - **Cover Image**: Upload the main cover image
   - **Tagline**: A short quote or tagline
   - **Description Paragraphs**: 1-3 paragraphs about the book
   - **Amazon/Goodreads Links**: Buy links
   - **Has Slideshow**: Toggle ON if you want multiple covers to rotate
   - **Slideshow Images**: Add multiple covers with captions
5. Click **"Publish"**

---

## 🖼️ Adding Images

When uploading images:
- The CMS will automatically save them to the `public/images` folder
- Use high-quality images (but not too large - under 2MB is ideal)
- For book covers: ideally 600-800px wide

---

## ⚠️ Important Notes

- **Changes are NOT instant** - Vercel needs 1-2 minutes to rebuild the site
- **Always click "Save" or "Publish"** before closing the admin panel
- **Preview your changes** - after saving, wait 2 minutes then refresh your live site
- **If something breaks** - don't worry! We can always revert to a previous version via GitHub

---

## 🔧 Setting Up (One-Time Setup)

### GitHub login (one-time setup)

To use the admin panel, you need:

1. A GitHub account
2. To be invited by Tony to use the CMS (no repository access is required)

**Tony will help you with the initial setup!**

---

## 🆘 Need Help?

If you have any issues:
1. Try refreshing the page
2. Check that you're logged in
3. Contact Tony for assistance

---

## 🎨 Favicon (Website Icon)

Your website now uses "The Last Visitor" book cover as the favicon (the little icon you see in browser tabs and bookmarks). This appears:
- In browser tabs
- In bookmarks
- In Google search results
- On mobile home screens

If you want to change it to a different image, let Tony know!
