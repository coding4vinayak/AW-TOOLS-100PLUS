# Abetworks Tools - Deployment & SEO Guide

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/abetworks/abetworks-tools)

### Option 2: Manual Deploy

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## 📋 Pre-Deployment Checklist

### 1. Update Configuration Files

#### Update `index.html`
- Domain: `https://tools.abetworks.in`
- Update social media handles in meta tags
- Add Pinterest verification code if needed

#### Update `public/sitemap.xml`
- Add all your tool URLs
- Update lastmod dates regularly

#### Update `src/components/Footer.tsx`
- Replace social media links with actual Abetworks profiles:
  - Twitter: `https://twitter.com/abetworks`
  - Facebook: `https://www.facebook.com/abetworks`
  - LinkedIn: `https://www.linkedin.com/company/abetworks`
  - GitHub: `https://github.com/abetworks`
  - Instagram: `https://www.instagram.com/abetworks`
  - YouTube: `https://www.youtube.com/@abetworks`

---

## 🔧 Build Commands

### Using Yarn (Recommended)
```bash
# Install dependencies
yarn install

# Development
yarn dev

# Production build
yarn build

# Preview production build
yarn preview
```

### Using npm
```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📊 SEO Optimization Features

### Implemented SEO Features:

1. **Meta Tags**
   - Title tags with keywords
   - Meta descriptions
   - Open Graph tags for social sharing
   - Twitter Card tags
   - Canonical URLs

2. **Structured Data (JSON-LD)**
   - WebSite schema
   - SoftwareApplication schema
   - BreadcrumbList schema
   - Organization schema

3. **Performance Optimization**
   - Code splitting (React, Bootstrap vendors)
   - Minification with esbuild
   - Optimized chunk sizes
   - Preconnect to external domains
   - DNS prefetch

4. **Technical SEO**
   - robots.txt with crawl directives
   - sitemap.xml with all pages
   - Clean URLs
   - Mobile-responsive design
   - Fast page load times

5. **Content SEO**
   - Semantic HTML
   - Proper heading hierarchy
   - Alt text for images
   - Descriptive link text

---

## 🌐 Domain Configuration

### Custom Domain on Vercel (Subdomain)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your subdomain: `tools.abetworks.in`
4. Update DNS records on your domain provider:

### Recommended DNS Settings for Subdomain

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | tools | cname.vercel-dns.com | 3600 |

**Note:** Since this is a subdomain, use CNAME record instead of A record.

### After DNS Setup:
1. Wait for DNS propagation (can take up to 48 hours)
2. Verify SSL certificate is active on Vercel
3. Test the subdomain access

---

## 📈 Post-Deployment SEO Tasks

### 1. Submit to Search Engines

- **Google Search Console**: https://search.google.com/search-console
- **Bing Webmaster Tools**: https://www.bing.com/webmasters
- Add property: `https://tools.abetworks.in`

### 2. Verify Social Media Profiles

- Twitter Cards Validator: https://cards-dev.twitter.com/validator
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

### 3. Monitor Performance

- **Google Analytics**: Add tracking code to `index.html`
- **Vercel Analytics**: Enable in project settings
- **Core Web Vitals**: Monitor in Google Search Console

### 4. Build Backlinks

- Submit to product hunt
- List on tool directories
- Guest posting on relevant blogs
- Social media promotion

---

## 🔒 Security Headers (Configured in vercel.json)

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

---

## 📦 Bundle Size Optimization

Current build output:
- Total JS: ~794 KB (gzipped: ~210 KB)
- Total CSS: ~245 KB (gzipped: ~34 KB)
- HTML: ~6 KB (gzipped: ~2 KB)

### Tips for Further Optimization:
1. Lazy load heavy components
2. Use dynamic imports for routes
3. Optimize images (use WebP format)
4. Remove unused CSS
5. Tree-shake unused code

---

## 🧪 Testing

### Before Deployment
```bash
# Lint code
yarn lint

# Build locally
yarn build

# Preview build
yarn preview
```

### After Deployment
- Test all tools functionality
- Verify responsive design on mobile
- Check page load speed (PageSpeed Insights)
- Test dark mode toggle
- Verify search functionality
- Test all social media links
- Verify subdomain is accessible

---

## 📝 Environment Variables (if needed)

Create a `.env` file for local development:

```env
# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# API Keys (if any)
VITE_API_KEY=your_api_key_here
```

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Vercel Deployment Fails
```bash
# Check build logs
vercel logs

# Try dry run
vercel --dry-run
```

### DNS Issues
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

### SEO Not Working
- Verify meta tags in page source
- Check robots.txt is accessible
- Submit sitemap to Google Search Console
- Use Google Rich Results Test

---

## 📞 Support

For issues or questions:
- GitHub Issues: https://github.com/abetworks/abetworks-tools/issues
- Email: support@abetworks.in
- Twitter: @abetworks

---

**Built with ❤️ by Abetworks**
