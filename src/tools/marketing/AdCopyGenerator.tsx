import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const AdCopyGenerator: React.FC = () => {
  const [product, setProduct] = useState('');
  const [platform, setPlatform] = useState('facebook');
  const [audience, setAudience] = useState('');
  const [copy, setCopy] = useState('');

  const generate = () => {
    if (!product.trim()) return;

    const templates: Record<string, Array<{ headline: string; body: string; cta: string }>> = {
      facebook: [
        {
          headline: `Transform Your Life with ${product}`,
          body: `Discover why thousands are switching to ${product}. Limited time offer - Get 50% off your first order!`,
          cta: 'Shop Now'
        },
        {
          headline: `The ${product} Everyone's Talking About`,
          body: `Join the revolution. ${product} has helped 10,000+ customers achieve their goals. See what the hype is about!`,
          cta: 'Learn More'
        },
        {
          headline: `Stop Struggling with ${product} Problems`,
          body: `Our solution makes it easy. Try ${product} risk-free for 30 days. Love it or your money back.`,
          cta: 'Get Started'
        },
        {
          headline: `Flash Sale: ${product}`,
          body: `48 hours only! Save big on ${product}. Don't miss out on this incredible deal.`,
          cta: 'Claim Deal'
        },
        {
          headline: `Finally: ${product} That Actually Works`,
          body: `No more disappointment. ${product} delivers real results. See our 5-star reviews!`,
          cta: 'See Results'
        }
      ],
      google: [
        {
          headline: `${product} | Official Site`,
          body: `Shop ${product} Today. Free Shipping on Orders Over $50. 30-Day Returns.`,
          cta: 'Shop Now'
        },
        {
          headline: `Best ${product} Deals`,
          body: `Compare Prices on ${product}. Find the Perfect Match for Your Needs.`,
          cta: 'Compare'
        },
        {
          headline: `${product} - Buy Online`,
          body: `Huge Selection. Great Prices. Fast Delivery. Order ${product} Today.`,
          cta: 'Order Now'
        },
        {
          headline: `Top Rated ${product}`,
          body: `See Why Customers Love ${product}. 4.9/5 Stars from 5000+ Reviews.`,
          cta: 'Read Reviews'
        }
      ],
      linkedin: [
        {
          headline: `Elevate Your Business with ${product}`,
          body: `Professional-grade ${product} designed for modern teams. See how industry leaders are using ${product} to drive results.`,
          cta: 'Request Demo'
        },
        {
          headline: `The Enterprise Solution for ${product}`,
          body: `Trusted by Fortune 500 companies. ${product} helps teams work smarter, not harder.`,
          cta: 'Contact Sales'
        },
        {
          headline: `Transform Your Workflow with ${product}`,
          body: `Join 10,000+ professionals who've streamlined their ${product} process. Book a personalized demo today.`,
          cta: 'Book Demo'
        }
      ],
      instagram: [
        {
          headline: `✨ ${product} ✨`,
          body: `The wait is over! ${product} is finally here. Tap to shop the collection before it sells out! 🛒`,
          cta: 'Shop Now'
        },
        {
          headline: `POV: You Found ${product}`,
          body: `Life-changing doesn't even begin to describe it. ${product} is a must-have. Link in bio! 🔗`,
          cta: 'Learn More'
        },
        {
          headline: `Your Sign to Try ${product}`,
          body: `This is it. The ${product} you've been searching for. Don't sleep on this! 😴`,
          cta: 'Shop Now'
        }
      ]
    };

    const platformCopy = templates[platform] || templates.facebook;
    
    const output = `
# AD COPY FOR ${platform.toUpperCase()}
## Product: ${product}
## Target Audience: ${audience || 'General'}

---

### Ad Variations

${platformCopy.map((ad, i) => `**Ad ${i + 1}:**

**Headline:** ${ad.headline}

**Body:** ${ad.body}

**CTA:** ${ad.cta}

---`).join('\n')}

---

## AD COPY BEST PRACTICES

✅ **Do:**
- Lead with the biggest benefit
- Use social proof (reviews, numbers)
- Create urgency when appropriate
- Match landing page messaging
- Test multiple variations

❌ **Don't:**
- Make false claims
- Use vague language
- Forget the CTA
- Ignore character limits
- Skip A/B testing

---

## PLATFORM-SPECIFIC TIPS

${platform === 'facebook' ? `- Use eye-catching visuals
- Keep primary text under 125 characters
- Use carousel for multiple products
- Retarget website visitors` : platform === 'google' ? `- Include keywords in headlines
- Use all headline and description space
- Add sitelink extensions
- Focus on search intent` : platform === 'linkedin' ? `- Lead with business value
- Use professional tone
- Target by job title/company
- Use lead gen forms` : `- Use high-quality lifestyle images
- Keep copy short and punchy
- Use Stories for urgency
- Leverage influencer partnerships`}

---

## A/B TESTING IDEAS

1. Test different headlines
2. Try various CTAs
3. Compare long vs short copy
4. Test different images/videos
5. Try different audience segments

---

*Generated by Abetworks Ad Copy Generator*
`.trim();

    setCopy(output);
  };

  return (
    <ToolWrapper
      title="Ad Copy Generator"
      description="Create high-converting ad copy for Facebook, Google, LinkedIn, and Instagram"
      icon="📢"
      inputValue={product}
      outputValue={copy}
      outputLabel="Ad Copy"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-ad-copy.md"
    >
      <div className="row g-3">
        <div className="col-12">
          <label className="form-label">Product/Service *</label>
          <input
            type="text"
            className="form-control"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="e.g., Fitness app, Marketing software"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Platform</label>
          <select className="form-select" value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option value="facebook">Facebook/Meta</option>
            <option value="google">Google Ads</option>
            <option value="linkedin">LinkedIn</option>
            <option value="instagram">Instagram</option>
            <option value="tiktok">TikTok</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Target Audience (optional)</label>
          <input
            type="text"
            className="form-control"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="e.g., Small business owners, Fitness enthusiasts"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" onClick={generate}>📢 Generate Ad Copy</button>
        </div>
      </div>
      <div className="mt-4"><LeadCaptureForm toolName="Ad Copy Generator" compact /></div>
    </ToolWrapper>
  );
};

export default AdCopyGenerator;
