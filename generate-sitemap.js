// Complete Sitemap for Abetworks Tools - 100+ Tools
// Generated: 2026-03-14
import { writeFileSync } from 'fs';

const baseUrl = 'https://tools.abetworks.in';
const today = new Date().toISOString().split('T')[0];

// All tool paths from toolsData
const toolPaths = [
  // Text Tools (30)
  'word-counter', 'character-counter', 'case-converter', 'text-reverser', 'remove-duplicates',
  'find-and-replace', 'text-to-slug', 'lorem-ipsum-generator', 'text-comparator', 'line-sorter',
  'line-shuffler', 'add-prefix-suffix', 'remove-empty-lines', 'text-trimmer', 'text-to-binary',
  'binary-to-text', 'text-to-morse', 'morse-to-text', 'remove-emojis', 'text-splitter',
  'join-lines', 'reverse-lines', 'toggle-case', 'random-case', 'alternating-case', 'quote-generator',
  
  // Business Tools (18)
  'business-name-generator', 'business-plan-outline', 'elevator-pitch-generator', 'mission-vision-generator',
  'swot-analysis', 'business-model-canvas', 'lean-canvas', 'value-proposition-generator',
  'target-audience-finder', 'competitor-analysis', 'revenue-model-calculator', 'break-even-analysis',
  'cash-flow-forecast', 'pricing-strategy-calculator', 'roi-calculator', 'financial-projections',
  'funding-calculator', 'currency-converter',
  
  // Marketing Tools (15)
  'hashtag-generator', 'social-media-post-generator', 'content-calendar-generator',
  'email-subject-line-generator', 'blog-title-generator', 'youtube-title-generator',
  'instagram-caption-generator', 'linkedin-post-generator', 'tweet-generator', 'ad-copy-generator',
  'landing-page-copy-generator', 'call-to-action-generator', 'marketing-funnel-builder',
  'customer-persona-generator', 'brand-voice-generator',
  
  // SEO Tools (10)
  'keyword-density-checker', 'meta-tag-analyzer', 'serp-simulator', 'rich-snippet-generator',
  'canonical-tag-generator', 'hreflang-tag-generator', 'open-graph-preview', 'twitter-card-preview',
  'seo-audit-checklist', 'backlink-tracker',
  
  // Freelancer Tools (10)
  'invoice-generator', 'contract-template-generator', 'proposal-template-generator', 'rate-calculator',
  'portfolio-builder', 'client-onboarding-checklist', 'testimonial-request-generator',
  
  // Developer Tools (20)
  'json-formatter', 'json-minifier', 'json-to-xml', 'json-to-csv', 'xml-formatter',
  'html-formatter', 'html-minifier', 'css-formatter', 'css-minifier', 'js-formatter',
  'js-minifier', 'sql-formatter', 'code-diff-checker', 'markdown-previewer', 'base64-encoder',
  'base64-decoder', 'url-encoder', 'url-decoder', 'html-entity-encoder', 'html-entity-decoder',
  
  // Web Tools (23)
  'meta-tag-generator', 'open-graph-generator', 'schema-markup-generator', 'robots-txt-generator',
  'sitemap-generator', 'htaccess-generator', 'css-box-shadow', 'css-border-radius',
  'css-gradient-generator', 'css-grid-generator', 'flexbox-generator', 'keyframe-generator',
  'transition-generator', 'transform-generator', 'css-button-generator', 'clip-path-generator',
  'qr-code-generator', 'color-converter', 'contrast-checker', 'uuid-generator', 'weather-forecaster',
  'ip-lookup', 'web-scraper',
  
  // Calculators (15)
  'percentage-calculator', 'discount-calculator', 'tax-calculator', 'tip-calculator',
  'bmi-calculator', 'age-calculator', 'date-calculator', 'time-zone-converter', 'length-converter',
  'weight-converter', 'temperature-converter', 'speed-converter', 'data-storage-converter',
  'binary-calculator', 'hex-calculator',
  
  // Image Tools (10)
  'image-resizer', 'image-compressor', 'image-format-converter', 'image-cropper', 'image-rotator',
  'image-flipper', 'grayscale-converter', 'brightness-contrast', 'image-to-base64', 'base64-to-image',
  
  // Security Tools (10)
  'password-generator', 'password-strength-checker', 'email-validator', 'phone-validator',
  'credit-card-validator', 'md5-hash-generator', 'sha256-hash-generator', 'random-string-generator',
  'user-agent-parser', 'ip-lookup'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Main Pages -->
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/category/all</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Category Pages -->
  <url>
    <loc>${baseUrl}/category/text</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/category/developer</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/category/web</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/category/calculators</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/category/image</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/category/security</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/category/business</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/category/marketing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/category/seo</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/category/freelancer</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- All Tool Pages -->
`;

toolPaths.forEach(path => {
  sitemap += `  <url>
    <loc>${baseUrl}/tool/${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

sitemap += `</urlset>\n`;

console.log(`\n✅ Complete Sitemap Generated!`);
console.log(`\n📊 Statistics:`);
console.log(`   - Homepage: 1`);
console.log(`   - Main Pages: 3`);
console.log(`   - Category Pages: 10`);
console.log(`   - Tool Pages: ${toolPaths.length}`);
console.log(`   - Total URLs: ${1 + 3 + 10 + toolPaths.length}`);
console.log(`\n💾 Saved to: public/sitemap.xml\n`);

writeFileSync('public/sitemap.xml', sitemap);
