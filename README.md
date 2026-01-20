# Martin Griffin Books

Official website for author Martin Griffin, featuring his psychological thriller novels.

## 🚀 Technology Stack

- **Astro** - Fast, modern static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## 📚 Features

- Beautiful, responsive design
- **Content Management System (CMS)** - Edit content without coding at `/admin`
- SEO optimized with meta tags and structured data
- Image slideshow for book covers
- Contact form integration
- Fast loading times and excellent Core Web Vitals
- Sitemap generation
- Favicon using "The Last Visitor" book cover

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This site is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel, and it will automatically deploy on every push to the main branch.

### Build Settings for Vercel:
- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 📝 Updating Content

### For Martin (Non-Technical):
Access the admin panel at `/admin` to edit all content through a user-friendly interface.
See **CMS_INSTRUCTIONS.md** for detailed instructions.

### For Developers:
- Edit content files in `src/content/`
- Books: `src/content/books/*.json`
- Homepage: `src/content/homepage.json`
- Contact: `src/content/contact.json`
- SEO: `src/content/seo.json`

See **VERCEL_SETUP.md** for deployment and CMS configuration instructions.

## 📄 License

© 2026 Martin Griffin. All rights reserved.
