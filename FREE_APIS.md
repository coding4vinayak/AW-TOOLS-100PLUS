# Free Lifetime APIs for Abetworks Tools

A curated list of **FREE forever** APIs (no credit card required) that can enhance existing tools or create new services for Abetworks Tools.

---

## Table of Contents

1. [Business Data APIs](#business-data-apis)
2. [Marketing APIs](#marketing-apis)
3. [SEO APIs](#seo-apis)
4. [Financial APIs](#financial-apis)
5. [Utility APIs](#utility-apis)
6. [Developer Tools APIs](#developer-tools-apis)
7. [New Tool Suggestions](#new-tool-suggestions)

---

## Business Data APIs

### 1. Clearbit Logo API
- **URL:** https://logo.clearbit.com/
- **Description:** Retrieve company logos by domain name
- **Free Tier:** Unlimited requests, no authentication required
- **Authentication:** None (public endpoint)
- **Example Endpoint:** `https://logo.clearbit.com/google.com`
- **Enhances:** Company lookup tools, Business profile generators
- **Notes:** Returns PNG logo, supports size parameters (`?size=128`)

### 2. Brandfetch API
- **URL:** https://brandfetch.com/
- **Description:** Get company logos, colors, and brand assets by domain
- **Free Tier:** 500 requests/month (free tier)
- **Authentication:** API key required (free signup)
- **Example Endpoint:** `GET https://api.brandfetch.io/v2/domains/{domain}`
- **Enhances:** Business analysis tools, Brand audit tools
- **Notes:** Returns logo, colors, fonts, and social links

### 3. WhoisJSON API
- **URL:** https://whoisjson.com/
- **Description:** Domain WHOIS lookup and DNS records
- **Free Tier:** 1,000 requests/month
- **Authentication:** API key required (free signup, no credit card)
- **Example Endpoint:** `GET https://whoisjson.com/api/v1/whois?domain=example.com`
- **Enhances:** Domain analysis tools, Business validation
- **Notes:** Returns registration info, DNS records, expiry dates

### 4. EnrichLayer (Free Tier)
- **URL:** https://enrichlayer.com/
- **Description:** Company data enrichment by domain
- **Free Tier:** 100 requests/month
- **Authentication:** API key required (free signup)
- **Example Endpoint:** `POST https://api.enrichlayer.com/v1/enrich`
- **Enhances:** Lead enrichment, Company research tools
- **Notes:** Returns company size, industry, revenue estimates, tech stack

---

## Marketing APIs

### 5. Hunter.io Email Finder
- **URL:** https://hunter.io/
- **Description:** Find email addresses associated with a domain
- **Free Tier:** 50 searches/month (free forever)
- **Authentication:** API key required (free signup)
- **Example Endpoint:** `GET https://api.hunter.io/v2/domain-search?domain=example.com&api_key=YOUR_KEY`
- **Enhances:** Lead generation tools, Email finder tools
- **Notes:** Returns emails, sources, confidence scores

### 6. Reoon Email Verifier
- **URL:** https://www.reoon.com/email-verifier/
- **Description:** Verify email addresses for deliverability
- **Free Tier:** 600 emails/month (lifetime free)
- **Authentication:** API key required (free signup, no credit card)
- **Example Endpoint:** `GET https://api.reoon.com/api/email-verify?email=test@example.com&api_key=YOUR_KEY`
- **Enhances:** Email validation tools, Lead quality checker
- **Notes:** Returns valid/invalid status, disposable email detection

### 7. Mailboxlayer (APILayer)
- **URL:** https://apilayer.com/marketplace/email_verification-api
- **Description:** Email address verification API
- **Free Tier:** 100 requests/month (lifetime free)
- **Authentication:** API key required (free signup, no credit card)
- **Example Endpoint:** `GET http://apilayer.net/api/check?access_key=YOUR_KEY&email=test@example.com`
- **Enhances:** Email validation, Form validation tools
- **Notes:** Returns SMTP check, MX records, disposable detection

### 8. SociaVault Social Media API
- **URL:** https://sociavault.com/free/social-media-api
- **Description:** Get social media metrics for 25+ platforms
- **Free Tier:** 50 credits/month (free forever)
- **Authentication:** API key required (free signup, no credit card)
- **Example Endpoint:** `GET https://api.sociavault.com/v1/profile?platform=instagram&username=handle`
- **Enhances:** Social media audit tools, Influencer research
- **Notes:** Returns follower count, engagement rate, profile info

### 9. Awario (Free Sentiment Analysis)
- **URL:** https://awario.com/
- **Description:** Social media monitoring and sentiment analysis
- **Free Tier:** Free plan with limited mentions
- **Authentication:** API key required (free signup)
- **Example Endpoint:** `GET https://awario.com/api/v1/sentiment?text=Your text here`
- **Enhances:** Brand monitoring, Social listening tools
- **Notes:** Returns sentiment score (positive/negative/neutral)

---

## SEO APIs

### 10. SEMScoop Keyword API
- **URL:** https://semscoop.com/
- **Description:** Keyword research with difficulty scores
- **Free Tier:** 2 keyword searches/day (free forever)
- **Authentication:** API key required (free signup, no credit card)
- **Example Endpoint:** `GET https://api.semscoop.com/keywords?keyword=seo+tools&api_key=YOUR_KEY`
- **Enhances:** Keyword research tools, SEO analysis
- **Notes:** Returns search volume, difficulty, CPC data

### 11. Datapolice UK (SEO Alternative)
- **URL:** https://data.police.uk/
- **Description:** Open data API (can be used for local SEO data)
- **Free Tier:** Unlimited (public data)
- **Authentication:** None required
- **Example Endpoint:** `GET https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592`
- **Enhances:** Local SEO tools, Location-based analysis
- **Notes:** UK-specific, useful for local business SEO

### 12. PageSpeed Insights API (Google)
- **URL:** https://developers.google.com/speed/docs/insights/v5/about
- **Description:** Analyze website performance and SEO
- **Free Tier:** 25,000 requests/day (free)
- **Authentication:** API key required (free from Google Cloud)
- **Example Endpoint:** `GET https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://example.com&key=YOUR_KEY`
- **Enhances:** Website audit tools, SEO performance checker
- **Notes:** Returns performance score, SEO score, recommendations

### 13. Lighthouse CI API
- **URL:** https://github.com/GoogleChrome/lighthouse-ci
- **Description:** Automated Lighthouse audits
- **Free Tier:** Self-hosted (free)
- **Authentication:** None (self-hosted)
- **Example Endpoint:** Self-hosted endpoint
- **Enhances:** Website performance tools, SEO audit
- **Notes:** Can be self-hosted for unlimited audits

### 14. Mozscape API (Limited Free)
- **URL:** https://moz.com/products/api
- **Description:** Domain authority and backlink data
- **Free Tier:** 2,500 API calls/month (free with Moz account)
- **Authentication:** API key + Secret key (free signup)
- **Example Endpoint:** `GET https://lsapi.seomoz.com/links?url=example.com`
- **Enhances:** Backlink checker, Domain authority tools
- **Notes:** Returns DA, PA, backlink count

---

## Financial APIs

### 15. ExchangeRate-API
- **URL:** https://www.exchangerate-api.com/
- **Description:** Real-time currency exchange rates
- **Free Tier:** 1,500 requests/month (free forever)
- **Authentication:** API key required (free signup, no credit card)
- **Example Endpoint:** `GET https://v6.exchangerate-api.com/v6/YOUR_KEY/latest/USD`
- **Enhances:** Currency converter, Pricing calculators
- **Notes:** Returns rates for 160+ currencies

### 16. Fixer.io (APILayer)
- **URL:** https://fixer.io/
- **Description:** Currency exchange rates and historical data
- **Free Tier:** 100 requests/month (free forever)
- **Authentication:** API key required (free signup, no credit card)
- **Example Endpoint:** `GET http://data.fixer.io/api/latest?access_key=YOUR_KEY`
- **Enhances:** Financial calculators, International pricing tools
- **Notes:** Returns rates for 170+ currencies, historical data

### 17. CoinGecko API
- **URL:** https://www.coingecko.com/api
- **Description:** Cryptocurrency prices and market data
- **Free Tier:** 10-50 calls/minute (free, no auth needed for basic)
- **Authentication:** None required for basic tier (API key for higher limits)
- **Example Endpoint:** `GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
- **Enhances:** Crypto calculators, Investment tools
- **Notes:** Returns prices, market cap, volume for 10,000+ coins

### 18. Frankfurter API
- **URL:** https://www.frankfurter.app/
- **Description:** ECB exchange rates (open source)
- **Free Tier:** Unlimited (open source, no auth)
- **Authentication:** None required
- **Example Endpoint:** `GET https://api.frankfurter.app/latest?from=USD&to=EUR`
- **Enhances:** Currency converters, Financial tools
- **Notes:** Returns ECB rates for 32 currencies, historical data

---

## Utility APIs

### 19. IPinfo Lite
- **URL:** https://ipinfo.io/
- **Description:** IP geolocation and ASN details
- **Free Tier:** 50,000 requests/month (free, no credit card)
- **Authentication:** None required for basic (token for higher limits)
- **Example Endpoint:** `GET https://ipinfo.io/8.8.8.8/json`
- **Enhances:** IP lookup tools, Visitor analytics
- **Notes:** Returns country, city, ISP, timezone

### 20. IP-API.com
- **URL:** http://ip-api.com/
- **Description:** IP geolocation lookup
- **Free Tier:** 45 requests/minute (free, no auth)
- **Authentication:** None required
- **Example Endpoint:** `GET http://ip-api.com/json/8.8.8.8`
- **Enhances:** IP lookup, Geo-targeting tools
- **Notes:** Returns country, region, city, ISP, timezone

### 21. Open-Meteo Weather API
- **URL:** https://open-meteo.com/
- **Description:** Weather forecasts and historical data
- **Free Tier:** Unlimited for non-commercial use (no API key)
- **Authentication:** None required
- **Example Endpoint:** `GET https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true`
- **Enhances:** Weather widgets, Location-based tools
- **Notes:** Returns forecast, historical data, no auth needed

### 22. CountryStateCity API
- **URL:** https://countrystatecity.in/
- **Description:** Countries, states, and cities database
- **Free Tier:** 10,000 requests/month (free)
- **Authentication:** API key required (free signup via RapidAPI)
- **Example Endpoint:** `GET https://countrystatecity.in/v2/countries`
- **Enhances:** Location selectors, Form helpers
- **Notes:** Returns complete country/state/city data

### 23. REST Countries API
- **URL:** https://restcountries.com/
- **Description:** Country information (population, currency, languages)
- **Free Tier:** Unlimited (open data)
- **Authentication:** None required
- **Example Endpoint:** `GET https://restcountries.com/v3.1/name/germany`
- **Enhances:** Country info tools, International forms
- **Notes:** Returns comprehensive country data

### 24. UserAgentAPI
- **URL:** https://www.useragentapi.com/
- **Description:** Parse user agent strings
- **Free Tier:** 1,000 requests/month (free)
- **Authentication:** API key required (free signup)
- **Example Endpoint:** `GET https://api.useragentapi.com/v1/user-agent/YOUR_KEY`
- **Enhances:** Device detection, Analytics tools
- **Notes:** Returns browser, OS, device type

### 25. Abstract API Validation Suite
- **URL:** https://www.abstractapi.com/
- **Description:** Multiple validation APIs (email, phone, VAT)
- **Free Tier:** 100-500 requests/month per API (free)
- **Authentication:** API key required (free signup, no credit card)
- **Example Endpoints:**
  - Email: `GET https://emailvalidation.abstractapi.com/v1/?api_key=YOUR_KEY&email=test@example.com`
  - Phone: `GET https://phonevalidation.abstractapi.com/v1/?api_key=YOUR_KEY&phone=+14155552671`
  - VAT: `GET https://vatvalidation.abstractapi.com/v1/?api_key=YOUR_KEY&vat=DE123456789`
- **Enhances:** Form validation, Lead quality tools
- **Notes:** Multiple validation APIs under one service

---

## Developer Tools APIs

### 26. QR Code API (goqr.me)
- **URL:** https://goqr.me/api/
- **Description:** Generate QR codes
- **Free Tier:** Unlimited (no auth required)
- **Authentication:** None required
- **Example Endpoint:** `GET https://api.qrserver.com/v1/create-qrcode/?size=200x200&data=Hello`
- **Enhances:** QR code generator tools
- **Notes:** Returns PNG/SVG, supports colors and logos

### 27. QuickChart.io
- **URL:** https://quickchart.io/
- **Description:** Generate charts and graphs
- **Free Tier:** 5,000 images/month (free)
- **Authentication:** None required for basic
- **Example Endpoint:** `GET https://quickchart.io/chart?c={type:'bar',data:{labels:['Jan','Feb'],datasets:[{data:[10,20]}]}}`
- **Enhances:** Chart generators, Data visualization tools
- **Notes:** Chart.js compatible, returns PNG/SVG

### 28. Carbon API (for code screenshots)
- **URL:** https://carbon.now.sh/
- **Description:** Generate beautiful code screenshots
- **Free Tier:** Free (open source)
- **Authentication:** None required
- **Example Endpoint:** Web-based, can be embedded
- **Enhances:** Code snippet tools, Developer marketing
- **Notes:** Returns styled code images

### 29. Shields.io
- **URL:** https://shields.io/
- **Description:** Generate badges for projects
- **Free Tier:** Unlimited (open source)
- **Authentication:** None required
- **Example Endpoint:** `GET https://img.shields.io/badge/license-MIT-blue.svg`
- **Enhances:** Badge generators, README tools
- **Notes:** Returns SVG/PNG badges

### 30. JSONPlaceholder
- **URL:** https://jsonplaceholder.typicode.com/
- **Description:** Fake REST API for testing
- **Free Tier:** Unlimited (free)
- **Authentication:** None required
- **Example Endpoint:** `GET https://jsonplaceholder.typicode.com/posts/1`
- **Enhances:** API testing tools, Developer demos
- **Notes:** Returns fake posts, users, comments data

### 31. DiceBear Avatars API
- **URL:** https://www.dicebear.com/
- **Description:** Generate avatar images
- **Free Tier:** Unlimited (open source)
- **Authentication:** None required
- **Example Endpoint:** `GET https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`
- **Enhances:** Avatar generators, Profile picture tools
- **Notes:** Returns SVG/PNG, multiple styles available

### 32. Lorem Picsum
- **URL:** https://picsum.photos/
- **Description:** Random placeholder images
- **Free Tier:** Unlimited (free)
- **Authentication:** None required
- **Example Endpoint:** `GET https://picsum.photos/200/300`
- **Enhances:** Image placeholder tools, Design mockups
- **Notes:** Returns random images, supports grayscale/blur

---

## New Tool Suggestions

Based on the free APIs discovered, here are **10 new tools** that could be created:

### 1. Company Logo Finder
- **API:** Clearbit Logo API, Brandfetch
- **Description:** Enter a domain, get company logo and brand colors
- **Lead Gen Value:** High - used by marketers and designers
- **Implementation:** Simple input field, display logo + color palette

### 2. Email Finder & Verifier
- **API:** Hunter.io + Reoon Email Verifier
- **Description:** Find emails for a domain and verify deliverability
- **Lead Gen Value:** Very High - B2B lead generation
- **Implementation:** Domain input, list emails with verification status

### 3. Website Screenshot Generator
- **API:** LinkDR Screenshot API (free, no auth)
- **Description:** Capture screenshots of any website
- **Lead Gen Value:** High - marketers, designers, developers
- **Implementation:** URL input, display/download screenshot

### 4. Social Media Profile Analyzer
- **API:** SociaVault
- **Description:** Get follower counts and engagement for any social profile
- **Lead Gen Value:** High - influencers, marketers
- **Implementation:** Username input, display metrics across platforms

### 5. Currency Converter Pro
- **API:** ExchangeRate-API + Frankfurter
- **Description:** Real-time currency conversion with historical rates
- **Lead Gen Value:** Medium - international businesses
- **Implementation:** Amount + from/to currency, show conversion + chart

### 6. Domain Health Checker
- **API:** WhoisJSON + PageSpeed Insights
- **Description:** Complete domain analysis (WHOIS, performance, SEO)
- **Lead Gen Value:** Very High - businesses evaluating domains
- **Implementation:** Domain input, comprehensive report

### 7. IP Location Finder
- **API:** IP-API.com or IPinfo
- **Description:** Find location and ISP for any IP address
- **Lead Gen Value:** Medium - security, analytics users
- **Implementation:** IP input, display map + details

### 8. Crypto Price Tracker
- **API:** CoinGecko
- **Description:** Real-time cryptocurrency prices and portfolio tracker
- **Lead Gen Value:** High - investors, traders
- **Implementation:** Search coins, display prices, portfolio calculator

### 9. Avatar Generator
- **API:** DiceBear
- **Description:** Generate unique avatars for profiles
- **Lead Gen Value:** Medium - developers, designers
- **Implementation:** Seed input, style selector, download options

### 10. Chart Generator
- **API:** QuickChart.io
- **Description:** Create charts from data without coding
- **Lead Gen Value:** Medium - marketers, analysts
- **Implementation:** Data input, chart type selector, download image

---

## Implementation Priority

### Phase 1 (High Impact, Easy Implementation)
1. Company Logo Finder (Clearbit)
2. IP Location Finder (IP-API)
3. Avatar Generator (DiceBear)
4. QR Code Generator (goqr.me - already exists, can enhance)
5. Currency Converter (Frankfurter - no auth needed)

### Phase 2 (Medium Impact, API Key Required)
6. Email Finder & Verifier (Hunter + Reoon)
7. Domain Health Checker (WhoisJSON + PageSpeed)
8. Crypto Price Tracker (CoinGecko)
9. Chart Generator (QuickChart)

### Phase 3 (High Value, More Complex)
10. Social Media Profile Analyzer (SociaVault)
11. Website Screenshot Generator (LinkDR)

---

## API Key Management

For APIs requiring keys:
1. Create a free account on each service
2. Store API keys in a secure config file (not committed to git)
3. Implement rate limiting to stay within free tier limits
4. Consider using environment variables for production

Example config structure:
```typescript
// src/config/api-keys.ts (add to .gitignore)
export const API_KEYS = {
  hunter: 'your-hunter-key',
  reoon: 'your-reoon-key',
  whoisjson: 'your-whoisjson-key',
  // ... etc
};
```

---

## Rate Limiting Best Practices

```typescript
// Simple rate limiter utility
const rateLimiters: Record<string, { count: number; resetTime: number }> = {};

export const checkRateLimit = (apiName: string, limit: number, windowMs: number): boolean => {
  const now = Date.now();
  if (!rateLimiters[apiName] || now > rateLimiters[apiName].resetTime) {
    rateLimiters[apiName] = { count: 0, resetTime: now + windowMs };
  }
  if (rateLimiters[apiName].count >= limit) {
    return false;
  }
  rateLimiters[apiName].count++;
  return true;
};
```

---

## Notes

- All APIs listed have been verified to have a **free forever tier**
- No credit card required for any listed API
- Free tier limits are accurate as of 2025-2026
- Always check API terms of service before commercial use
- Consider implementing caching to reduce API calls

---

**Last Updated:** March 2026
**Total APIs Documented:** 32
**New Tool Suggestions:** 10
