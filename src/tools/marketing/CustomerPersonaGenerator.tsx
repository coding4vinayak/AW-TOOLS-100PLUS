import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const CustomerPersonaGenerator: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [industry, setIndustry] = useState('');
  const [persona, setPersona] = useState('');

  const generate = () => {
    const product = productName || 'Product';
    const ind = industry || 'Industry';

    const output = `
# CUSTOMER PERSONA
## For: ${product.toUpperCase()}
## Industry: ${ind}

---

## PERSONA 1: "Professional Paul"

### Demographics
- **Age:** 32-45
- **Gender:** Any
- **Location:** Urban/Suburban
- **Income:** $75,000 - $150,000
- **Education:** Bachelor's degree or higher
- **Occupation:** Manager, Director, Business Owner

### Psychographics
- **Values:** Efficiency, quality, work-life balance
- **Interests:** Technology, productivity, professional development
- **Personality:** Goal-oriented, analytical, busy
- **Lifestyle:** Works 50+ hours/week, values time-saving solutions

### Goals & Motivations
- Advance career/business
- Increase productivity
- Reduce stress and overwhelm
- Stay competitive in market
- Achieve better work-life balance

### Pain Points & Challenges
- Too many tools, not enough time
- Overwhelmed by complexity
- Budget constraints
- Difficulty finding reliable solutions
- Fear of making wrong choice

### Buying Behavior
- **Research Style:** Reads reviews, compares options
- **Decision Factors:** Quality, ROI, ease of use, support
- **Objections:** Price, implementation time, learning curve
- **Influencers:** Peers, industry experts, online reviews

### Preferred Channels
- **Social Media:** LinkedIn, Twitter
- **Content:** Blog posts, webinars, case studies
- **Communication:** Email, phone calls
- **Search:** Google, industry forums

### Marketing Messages That Resonate
- "Save 10+ hours per week"
- "Trusted by 10,000+ professionals"
- "ROI in 30 days or money back"
- "Easy setup, no learning curve"
- "24/7 expert support"

---

## PERSONA 2: "Entrepreneur Emma"

### Demographics
- **Age:** 25-40
- **Gender:** Any
- **Location:** Major cities, tech hubs
- **Income:** $50,000 - $200,000 (variable)
- **Education:** Mixed (degree or self-taught)
- **Occupation:** Startup Founder, Freelancer, Solopreneur

### Psychographics
- **Values:** Innovation, independence, growth
- **Interests:** Startups, technology, networking
- **Personality:** Risk-taker, ambitious, adaptable
- **Lifestyle:** Flexible schedule, wears many hats

### Goals & Motivations
- Scale business quickly
- Minimize costs while maximizing value
- Find competitive advantages
- Build sustainable revenue
- Create personal brand

### Pain Points & Challenges
- Limited budget and resources
- Time management struggles
- Finding reliable vendors
- Scaling challenges
- Work-life balance

### Buying Behavior
- **Research Style:** Quick research, values peer recommendations
- **Decision Factors:** Price, scalability, features
- **Objections:** Long-term commitment, hidden costs
- **Influencers:** Other entrepreneurs, podcasts, social media

### Preferred Channels
- **Social Media:** Twitter, Instagram, LinkedIn
- **Content:** Podcasts, YouTube, short-form video
- **Communication:** Chat, social media, email
- **Search:** Google, Reddit, Product Hunt

### Marketing Messages That Resonate
- "Built for startups, priced for solopreneurs"
- "Scale from 1 to 1000 customers"
- "Free to start, upgrade when ready"
- "Join 5,000+ founders"
- "Everything you need, nothing you don't"

---

## PERSONA 3: "Small Business Sam"

### Demographics
- **Age:** 40-60
- **Gender:** Any
- **Location:** Small towns to mid-size cities
- **Income:** $60,000 - $120,000
- **Education:** High school to Bachelor's
- **Occupation:** Small Business Owner

### Psychographics
- **Values:** Stability, community, reliability
- **Interests:** Local business, family, hobbies
- **Personality:** Practical, cautious, loyal
- **Lifestyle:** Business is life, community-focused

### Goals & Motivations
- Maintain steady revenue
- Compete with larger businesses
- Build local reputation
- Provide for family
- Create legacy

### Pain Points & Challenges
- Limited marketing budget
- Competition from chains/online
- Finding and keeping staff
- Keeping up with technology
- Cash flow management

### Buying Behavior
- **Research Style:** Asks peers, reads local reviews
- **Decision Factors:** Value, local support, reliability
- **Objections:** Technology complexity, ongoing costs
- **Influencers:** Local business groups, chamber of commerce

### Preferred Channels
- **Social Media:** Facebook, Nextdoor
- **Content:** Local news, how-to guides
- **Communication:** Phone, in-person, email
- **Search:** Google My Business, Yelp

### Marketing Messages That Resonate
- "Support local businesses like yours"
- "No tech skills needed"
- "Affordable pricing, no surprises"
- "Local support team"
- "Join 500+ local businesses"

---

## HOW TO USE THESE PERSONAS

### Content Creation
- Write blog posts addressing their pain points
- Create videos answering their questions
- Develop case studies they relate to

### Product Development
- Build features that solve their problems
- Design UX for their skill level
- Price for their budget

### Marketing Strategy
- Target ads to their demographics
- Use language that resonates
- Meet them on their preferred channels

### Sales Approach
- Address their specific objections
- Highlight relevant benefits
- Use appropriate social proof

---

*Generated by Abetworks Customer Persona Generator*
`.trim();

    setPersona(output);
  };

  return (
    <ToolWrapper
      title="Customer Persona Generator"
      description="Create detailed buyer personas to improve your marketing and product strategy"
      icon="👤"
      inputValue={productName}
      outputValue={persona}
      outputLabel="Customer Personas"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-customer-personas.md"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Product/Service Name *</label>
          <input type="text" className="form-control" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Industry *</label>
          <input type="text" className="form-control" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="e.g., SaaS, Retail, Healthcare" />
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" onClick={generate}>👤 Generate Personas</button>
        </div>
      </div>
      <div className="mt-4"><LeadCaptureForm toolName="Customer Persona Generator" compact /></div>
    </ToolWrapper>
  );
};

export default CustomerPersonaGenerator;
