# Martin Griffin Books

Official website for author Martin Griffin, featuring his psychological thriller novels.

## 🚀 Technology Stack

- **Astro** - Fast, modern static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript

## 📚 Features

- Beautiful, responsive design
- SEO optimized with meta tags and structured data
- Image slideshow for book covers
- Contact form integration
- Fast loading times and excellent Core Web Vitals
- Sitemap generation

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

### To update book information:
Edit `src/pages/index.astro`

### To add more book cover images:
1. Add images to `public/images/`
2. Update the slideshow arrays in `index.astro`

### To update contact form:
Replace `YOUR_FORM_ID` in the contact form with your Formspree form ID, or use an alternative form service.

## 📄 License

© 2026 Martin Griffin. All rights reserved.
