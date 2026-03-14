import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const LeanCanvas: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [data, setData] = useState({
    problem: '',
    solution: '',
    keyMetrics: '',
    uniqueValueProp: '',
    unfairAdvantage: '',
    channels: '',
    customerSegments: '',
    costStructure: '',
    revenueStreams: ''
  });
  const [canvas, setCanvas] = useState('');

  const generateCanvas = () => {
    const name = businessName || 'Startup';
    const output = `
# LEAN CANVAS
## ${name.toUpperCase()}

---

## 1. PROBLEM
${data.problem || 'Not specified'}
- What are the top 3 problems your customers face?
- What are the existing alternatives?

---

## 2. SOLUTION
${data.solution || 'Not specified'}
- What are the top 3 features that solve the problems?
- How does your solution address customer pain points?

---

## 3. KEY METRICS
${data.keyMetrics || 'Not specified'}
- What are the key activities you measure?
- Customer acquisition cost (CAC)
- Lifetime value (LTV)
- Monthly recurring revenue (MRR)
- Churn rate
- Activation rate

---

## 4. UNIQUE VALUE PROPOSITION
${data.uniqueValueProp || 'Not specified'}
- What makes you different and worth buying?
- Clear, specific message about the value you deliver
- Why you are different and better than the competition

---

## 5. UNFAIR ADVANTAGE
${data.unfairAdvantage || 'Not specified'}
- What can't be easily copied or bought?
- Inside information, authority figure
- Personal authority, dream team, existing customers
- Word of mouth, network effects

---

## 6. CHANNELS
${data.channels || 'Not specified'}
- How will you reach customers?
- Online marketing, social media
- Content marketing, SEO
- Sales, partnerships
- Referral programs

---

## 7. CUSTOMER SEGMENTS
${data.customerSegments || 'Not specified'}
- Who are your target customers?
- Early adopters
- Demographics, psychographics
- Customer personas

---

## 8. COST STRUCTURE
${data.costStructure || 'Not specified'}
- What are your major costs?
- Fixed costs (rent, salaries)
- Variable costs (marketing, production)
- Customer acquisition costs

---

## 9. REVENUE STREAMS
${data.revenueStreams || 'Not specified'}
- How will you make money?
- Revenue model (subscription, freemium, etc.)
- Pricing strategy
- Lifetime value

---

## NEXT STEPS
1. Validate problems with customer interviews
2. Build MVP to test solution
3. Define and track key metrics
4. Iterate based on feedback
`.trim();

    setCanvas(output);
  };

  const FieldGroup = ({ label, field, placeholder, rows = 3 }: { label: string, field: keyof typeof data, placeholder: string, rows?: number }) => (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <textarea
        className="form-control"
        rows={rows}
        value={data[field]}
        onChange={(e) => setData({ ...data, [field]: e.target.value })}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <ToolWrapper
      title="Lean Canvas Generator"
      description="Create a Lean Canvas to validate and communicate your startup idea"
      icon="🚀"
      inputValue={businessName}
      outputValue={canvas}
      outputLabel="Lean Canvas"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-lean-canvas.md"
    >
      <div className="mb-3">
        <label htmlFor="businessName" className="form-label">Startup/Project Name</label>
        <input
          type="text"
          className="form-control"
          id="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Enter startup name"
        />
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <FieldGroup
            label="❗ Problem"
            field="problem"
            placeholder="List top 3 problems your customers face..."
            rows={4}
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="✅ Solution"
            field="solution"
            placeholder="List top 3 features that solve the problems..."
            rows={4}
          />
        </div>
        <div className="col-md-4">
          <FieldGroup
            label="📊 Key Metrics"
            field="keyMetrics"
            placeholder="What activities do you measure?..."
          />
        </div>
        <div className="col-md-8">
          <FieldGroup
            label="💎 Unique Value Proposition"
            field="uniqueValueProp"
            placeholder="Clear message about why you're different and worth buying..."
            rows={4}
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="🏆 Unfair Advantage"
            field="unfairAdvantage"
            placeholder="What can't be easily copied?..."
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="📢 Channels"
            field="channels"
            placeholder="How will you reach customers?..."
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="👥 Customer Segments"
            field="customerSegments"
            placeholder="Who are your target customers?..."
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="💰 Cost Structure"
            field="costStructure"
            placeholder="What are your major costs?..."
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="💵 Revenue Streams"
            field="revenueStreams"
            placeholder="How will you make money?..."
          />
        </div>
      </div>

      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary btn-lg" onClick={generateCanvas}>
          🚀 Generate Lean Canvas
        </button>
        <button
          className="btn btn-outline-secondary btn-lg"
          onClick={() => {
            setData({
              problem: '',
              solution: '',
              keyMetrics: '',
              uniqueValueProp: '',
              unfairAdvantage: '',
              channels: '',
              customerSegments: '',
              costStructure: '',
              revenueStreams: ''
            });
            setCanvas('');
          }}
        >
          Clear All
        </button>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Lean Canvas" compact />
      </div>
    </ToolWrapper>
  );
};

export default LeanCanvas;
