import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const TargetAudienceFinder: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [industry, setIndustry] = useState('');
  const [audience, setAudience] = useState('');
  const [result, setResult] = useState('');

  const generate = () => {
    const product = productName || 'Your Product';
    const ind = industry || 'your industry';
    const target = audience || 'your target audience';

    const output = `
# TARGET AUDIENCE ANALYSIS
## ${product.toUpperCase()}

---

## PRIMARY TARGET AUDIENCE

### Demographics
- **Age Range:** 25-45 years
- **Gender:** All (or specify based on product)
- **Income Level:** Middle to upper-middle class
- **Education:** College-educated or higher
- **Location:** Urban and suburban areas
- **Occupation:** Professionals, entrepreneurs, managers

### Psychographics
- **Values:** Quality, efficiency, innovation, work-life balance
- **Interests:** Technology, personal development, health & wellness
- **Lifestyle:** Busy professionals seeking convenient solutions
- **Personality:** Goal-oriented, early adopters, value-conscious

### Behavioral Characteristics
- **Buying Habits:** Research before purchase, value reviews
- **Brand Loyalty:** Moderate, willing to switch for better value
- **Usage Rate:** Regular users of similar products/services
- **Decision Criteria:** Quality, price, convenience, customer service

---

## CUSTOMER PERSONAS

### Persona 1: "Professional Paul"
- **Age:** 32
- **Occupation:** Marketing Manager
- **Goals:** Increase productivity, advance career
- **Pain Points:** Limited time, information overload
- **Motivation:** Efficiency and results
- **Preferred Channels:** LinkedIn, email, industry blogs

### Persona 2: "Entrepreneur Emma"
- **Age:** 28
- **Occupation:** Startup Founder
- **Goals:** Scale business, reduce costs
- **Pain Points:** Limited budget, wearing many hats
- **Motivation:** Growth and innovation
- **Preferred Channels:** Twitter, podcasts, webinars

### Persona 3: "Small Business Sam"
- **Age:** 45
- **Occupation:** Small Business Owner
- **Goals:** Improve operations, increase revenue
- **Pain Points:** Competition, resource constraints
- **Motivation:** Stability and profitability
- **Preferred Channels:** Facebook, local networks, Google

---

## MARKET SEGMENTATION

### Geographic Segments
- Primary: [Specify regions/cities]
- Secondary: [Expand markets]

### Demographic Segments
- Age groups most likely to convert
- Income brackets that can afford product
- Education levels that value offering

### Psychographic Segments
- Lifestyle alignment with product
- Values that match brand
- Interests that correlate with usage

### Behavioral Segments
- Usage occasions
- Benefits sought
- User status (first-time, regular, loyal)

---

## WHERE TO FIND THEM

### Online Channels
- **Social Media:** LinkedIn, Twitter, Facebook, Instagram
- **Content:** Industry blogs, podcasts, YouTube
- **Communities:** Reddit, Quora, specialized forums
- **Search:** Google keywords related to ${ind}

### Offline Channels
- Industry conferences and events
- Networking groups
- Trade shows
- Local business associations

### Paid Advertising
- Google Ads (search and display)
- Social media advertising
- Industry publications
- Podcast sponsorships

---

## KEY MESSAGES BY SEGMENT

### For Professionals
"Save time and boost productivity with ${product}"

### For Entrepreneurs
"Scale your business efficiently with ${product}"

### For Small Businesses
"Compete with the big players using ${product}"

---

## NEXT STEPS
1. Validate assumptions with customer interviews
2. Create detailed customer journey maps
3. Develop segment-specific marketing campaigns
4. Set up analytics to track segment performance
5. Continuously refine based on data
`.trim();

    setResult(output);
  };

  return (
    <ToolWrapper
      title="Target Audience Finder"
      description="Define and understand your ideal target audience with detailed customer personas"
      icon="🎯"
      inputValue={productName}
      outputValue={result}
      outputLabel="Target Audience Analysis"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-target-audience.md"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="productName" className="form-label">Product/Service Name *</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="e.g., ProjectPro Software"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="industry" className="form-label">Industry *</label>
          <input
            type="text"
            className="form-control"
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="e.g., SaaS, E-commerce, Consulting"
          />
        </div>
        <div className="col-12">
          <label htmlFor="audience" className="form-label">Who do you think needs this? (Optional)</label>
          <textarea
            className="form-control"
            id="audience"
            rows={3}
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="Describe who you believe would benefit from your product..."
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" onClick={generate}>
            🎯 Generate Target Audience Analysis
          </button>
        </div>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Target Audience Finder" compact />
      </div>
    </ToolWrapper>
  );
};

export default TargetAudienceFinder;
