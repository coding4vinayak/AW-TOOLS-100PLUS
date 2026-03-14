import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const BusinessPlanOutline: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [description, setDescription] = useState('');
  const [outline, setOutline] = useState('');

  const generateOutline = () => {
    const name = businessName || 'Your Business';
    const ind = industry || 'Your Industry';
    
    const plan = `
# BUSINESS PLAN OUTLINE
## ${name.toUpperCase()}

---

## 1. EXECUTIVE SUMMARY
- Business Name: ${name}
- Industry: ${ind}
- Business Overview: ${description || 'Brief description of your business'}
- Mission Statement: [To be defined]
- Key Objectives: [List 3-5 primary goals]
- Financial Highlights: [Summary of projections]

---

## 2. COMPANY DESCRIPTION
### 2.1 Business Overview
- Legal Structure: [LLC, Corporation, Partnership, etc.]
- Location: [Business address/region]
- History: [When founded, background]

### 2.2 Mission Statement
[Define your core purpose]

### 2.3 Vision Statement
[Define your long-term aspiration]

### 2.4 Core Values
- [Value 1]
- [Value 2]
- [Value 3]

---

## 3. MARKET ANALYSIS
### 3.1 Industry Overview
- Current market size
- Growth trends
- Key industry drivers

### 3.2 Target Market
- Primary customer segments
- Demographics
- Psychographics
- Pain points addressed

### 3.3 Competitive Analysis
- Direct competitors
- Indirect competitors
- Competitive advantages
- Market positioning

### 3.4 SWOT Analysis
- Strengths
- Weaknesses
- Opportunities
- Threats

---

## 4. PRODUCTS AND SERVICES
### 4.1 Product/Service Line
- [Product/Service 1]: Description
- [Product/Service 2]: Description
- [Product/Service 3]: Description

### 4.2 Unique Value Proposition
[What makes you different]

### 4.3 Pricing Strategy
[Pricing model and rationale]

### 4.4 Future Products/Services
[Roadmap for expansion]

---

## 5. MARKETING AND SALES STRATEGY
### 5.1 Marketing Strategy
- Brand positioning
- Marketing channels
- Content strategy
- Social media strategy

### 5.2 Sales Strategy
- Sales process
- Sales channels
- Sales targets
- Customer retention

### 5.3 Advertising Plan
- Paid advertising
- PR strategy
- Partnerships

---

## 6. OPERATIONS PLAN
### 6.1 Location and Facilities
- Physical location requirements
- Equipment needs
- Technology infrastructure

### 6.2 Supply Chain
- Suppliers
- Inventory management
- Quality control

### 6.3 Staffing Plan
- Organizational structure
- Key hires needed
- Training programs

---

## 7. MANAGEMENT TEAM
### 7.1 Key Team Members
- [Name], [Role]: [Background]
- [Name], [Role]: [Background]

### 7.2 Advisory Board
- [Advisor Name]: [Expertise]

### 7.3 Hiring Plan
- Immediate hires
- Future hires

---

## 8. FINANCIAL PLAN
### 8.1 Startup Costs
- Equipment: $[amount]
- Inventory: $[amount]
- Marketing: $[amount]
- Legal/Professional: $[amount]
- Working Capital: $[amount]
- Total: $[amount]

### 8.2 Revenue Projections
- Year 1: $[amount]
- Year 2: $[amount]
- Year 3: $[amount]

### 8.3 Expense Projections
- Fixed Costs: $[amount]/month
- Variable Costs: $[amount]/month

### 8.4 Break-Even Analysis
[Calculate break-even point]

### 8.5 Funding Requirements
- Amount needed: $[amount]
- Use of funds
- Proposed terms

---

## 9. APPENDIX
- Resumes of key team members
- Market research data
- Product images/specifications
- Legal documents
- References
`.trim();

    setOutline(plan);
  };

  return (
    <ToolWrapper
      title="Business Plan Outline Generator"
      description="Create a comprehensive business plan structure for your startup or existing business"
      icon="📋"
      inputValue={businessName}
      outputValue={outline}
      outputLabel="Business Plan Outline"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-business-plan-outline.md"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="businessName" className="form-label">Business Name</label>
          <input
            type="text"
            className="form-control"
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Enter your business name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="industry" className="form-label">Industry</label>
          <input
            type="text"
            className="form-control"
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="e.g., E-commerce, SaaS, Restaurant"
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">Business Description</label>
          <textarea
            className="form-control"
            id="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Briefly describe what your business does..."
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" onClick={generateOutline}>
            📝 Generate Business Plan Outline
          </button>
        </div>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Business Plan Outline Generator" compact />
      </div>
    </ToolWrapper>
  );
};

export default BusinessPlanOutline;
