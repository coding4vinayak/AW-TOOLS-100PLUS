import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const SEOAuditChecklist: React.FC = () => {
  const [url, setUrl] = useState('');
  const [audit, setAudit] = useState('');

  const generate = () => {
    const siteUrl = url || 'yoursite.com';
    
    const output = `
# SEO AUDIT CHECKLIST
## Website: ${siteUrl}

---

## 🔍 TECHNICAL SEO

### Crawlability
- [ ] Robots.txt is accessible and properly configured
- [ ] XML sitemap exists and is submitted to Google
- [ ] No crawl errors in Google Search Console
- [ ] Site is accessible (no 5xx errors)
- [ ] HTTPS is properly implemented
- [ ] No blocked resources in robots.txt

### Indexation
- [ ] Correct number of pages indexed
- [ ] No indexation of duplicate content
- [ ] Proper use of noindex tags
- [ ] Canonical tags implemented correctly
- [ ] Pagination handled properly
- [ ] Parameter handling configured in GSC

### Site Performance
- [ ] Page load time under 3 seconds
- [ ] Core Web Vitals passing
- [ ] Mobile page speed optimized
- [ ] Images properly compressed
- [ ] CSS/JS minified
- [ ] Browser caching enabled

### Mobile Optimization
- [ ] Mobile-friendly design
- [ ] Responsive layout
- [ ] Touch elements properly sized
- [ ] No intrusive interstitials
- [ ] Mobile viewport configured
- [ ] Font sizes readable on mobile

---

## 📝 ON-PAGE SEO

### Title Tags
- [ ] Unique title for each page
- [ ] Title length 30-60 characters
- [ ] Primary keyword included
- [ ] Brand name included (where appropriate)
- [ ] Compelling and click-worthy
- [ ] No keyword stuffing

### Meta Descriptions
- [ ] Unique description for each page
- [ ] Length 120-160 characters
- [ ] Includes target keywords
- [ ] Contains call-to-action
- [ ] Accurately describes page content
- [ ] No duplicate descriptions

### Headings
- [ ] Single H1 per page
- [ ] H1 includes primary keyword
- [ ] Logical heading hierarchy (H1 > H2 > H3)
- [ ] Headings are descriptive
- [ ] No skipped heading levels
- [ ] Keywords in subheadings where relevant

### Content Quality
- [ ] Content is original and valuable
- [ ] No thin content (<300 words)
- [ ] Keywords used naturally
- [ ] Content updated regularly
- [ ] Internal links included
- [ ] External links to authoritative sources
- [ ] Images have alt text
- [ ] Content matches search intent

### URL Structure
- [ ] URLs are short and descriptive
- [ ] Keywords in URLs
- [ ] Hyphens separate words
- [ ] No unnecessary parameters
- [ ] Consistent URL structure
- [ ] No uppercase letters

---

## 🔗 OFF-PAGE SEO

### Backlinks
- [ ] Quality backlinks from authoritative sites
- [ ] Diverse anchor text profile
- [ ] No toxic/spammy backlinks
- [ ] Links from relevant industry sites
- [ ] Natural link growth pattern
- [ ] No paid link schemes

### Local SEO (if applicable)
- [ ] Google Business Profile claimed
- [ ] NAP (Name, Address, Phone) consistent
- [ ] Local citations built
- [ ] Reviews being collected
- [ ] Responding to all reviews
- [ ] Local schema markup implemented

### Social Signals
- [ ] Active social media presence
- [ ] Content shared on social platforms
- [ ] Social sharing buttons on site
- [ ] Open Graph tags implemented
- [ ] Twitter Card tags implemented

---

## 📊 CONTENT STRATEGY

### Keyword Research
- [ ] Primary keywords identified
- [ ] Secondary/LSI keywords mapped
- [ ] Long-tail keywords targeted
- [ ] Search intent understood
- [ ] Keyword difficulty assessed
- [ ] Competitor keywords analyzed

### Content Calendar
- [ ] Regular publishing schedule
- [ ] Topics aligned with keywords
- [ ] Mix of content types
- [ ] Seasonal content planned
- [ ] Evergreen content maintained
- [ ] Content gaps identified

---

## 📈 ANALYTICS & TRACKING

### Google Analytics
- [ ] GA4 properly installed
- [ ] Goals/conversions configured
- [ ] E-commerce tracking (if applicable)
- [ ] Site search tracking enabled
- [ ] Custom dimensions set up
- [ ] Regular reporting scheduled

### Google Search Console
- [ ] Property verified
- [ ] Sitemap submitted
- [ ] Performance reports reviewed
- [ ] Coverage errors monitored
- [ ] Manual actions checked
- [ ] Enhancements reviewed

### Rank Tracking
- [ ] Target keywords tracked
- [ ] Competitor rankings monitored
- [ ] Local rankings tracked (if applicable)
- [ ] Regular ranking reports reviewed
- [ ] Algorithm updates monitored

---

## ✅ QUICK WINS

1. Fix any crawl errors immediately
2. Optimize pages ranking on page 2
3. Update outdated content
4. Add internal links to important pages
5. Compress large images
6. Fix broken links
7. Add schema markup where missing
8. Improve meta descriptions for low CTR pages

---

## 📅 ONGOING MAINTENANCE

### Weekly
- [ ] Check for crawl errors
- [ ] Monitor rankings
- [ ] Review analytics

### Monthly
- [ ] Full site audit
- [ ] Content performance review
- [ ] Backlink profile check
- [ ] Competitor analysis

### Quarterly
- [ ] Technical SEO deep dive
- [ ] Content gap analysis
- [ ] Strategy review and adjustment

---

## 🛠️ RECOMMENDED TOOLS

- **Technical:** Screaming Frog, Sitebulb, DeepCrawl
- **Rank Tracking:** Ahrefs, SEMrush, SERPWatcher
- **Analytics:** Google Analytics, Google Search Console
- **Page Speed:** PageSpeed Insights, GTmetrix, WebPageTest
- **Backlinks:** Ahrefs, Majestic, Moz

---

*Generated by Abetworks SEO Audit Checklist*
`.trim();

    setAudit(output);
  };

  return (
    <ToolWrapper
      title="SEO Audit Checklist"
      description="Complete SEO audit checklist to identify issues and optimization opportunities"
      icon="📋"
      inputValue={url}
      outputValue={audit}
      outputLabel="SEO Audit Checklist"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-seo-audit-checklist.md"
    >
      <div className="row g-3">
        <div className="col-12">
          <label className="form-label">Website URL (optional)</label>
          <input type="url" className="form-control" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://yoursite.com" />
        </div>
        <div className="col-12">
          <p className="text-muted">Generate a comprehensive SEO audit checklist customized for your website. Use this checklist to identify issues and track your optimization progress.</p>
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" onClick={generate}>📋 Generate Checklist</button>
        </div>
      </div>
      <div className="mt-4"><LeadCaptureForm toolName="SEO Audit Checklist" compact /></div>
    </ToolWrapper>
  );
};

export default SEOAuditChecklist;
