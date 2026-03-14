import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const BusinessModelCanvas: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [data, setData] = useState({
    keyPartners: '',
    keyActivities: '',
    keyResources: '',
    valuePropositions: '',
    customerRelationships: '',
    channels: '',
    customerSegments: '',
    costStructure: '',
    revenueStreams: ''
  });
  const [canvas, setCanvas] = useState('');

  const generateCanvas = () => {
    const name = businessName || 'Business';
    const output = `
# BUSINESS MODEL CANVAS
## ${name.toUpperCase()}

---

## 1. KEY PARTNERS
${data.keyPartners || 'Not specified'}
- Who are our key partners?
- Who are our key suppliers?
- Which key resources are we acquiring from partners?
- Which key activities do partners perform?

---

## 2. KEY ACTIVITIES
${data.keyActivities || 'Not specified'}
- What key activities does our value proposition require?
- What activities do our distribution channels require?
- What activities do our customer relationships require?
- What activities do our revenue streams require?

---

## 3. KEY RESOURCES
${data.keyResources || 'Not specified'}
- What key resources does our value proposition require?
- What resources do our distribution channels require?
- What resources do our customer relationships require?
- What resources do our revenue streams require?

---

## 4. VALUE PROPOSITIONS
${data.valuePropositions || 'Not specified'}
- What core value do we deliver to customers?
- Which customer problems are we helping to solve?
- What bundles of products/services are we offering?
- Which customer needs are we satisfying?

---

## 5. CUSTOMER RELATIONSHIPS
${data.customerRelationships || 'Not specified'}
- What type of relationship does each customer segment expect?
- Which ones have we established?
- How are they integrated with the rest of our business model?
- How costly are they?

---

## 6. CHANNELS
${data.channels || 'Not specified'}
- Through which channels do our customer segments want to be reached?
- How are we reaching them now?
- Which channels work best?
- Which channels are most cost-efficient?

---

## 7. CUSTOMER SEGMENTS
${data.customerSegments || 'Not specified'}
- For whom are we creating value?
- Who are our most important customers?
- What are their demographics/psychographics?
- What are their needs and pain points?

---

## 8. COST STRUCTURE
${data.costStructure || 'Not specified'}
- What are the most important costs inherent in our business model?
- Which key resources are most expensive?
- Which key activities are most expensive?
- Is the business more cost-driven or value-driven?

---

## 9. REVENUE STREAMS
${data.revenueStreams || 'Not specified'}
- For what value are customers willing to pay?
- How do they currently pay?
- How would they prefer to pay?
- What is the revenue potential of each stream?

---

## SUMMARY
This Business Model Canvas provides a comprehensive overview of ${name}'s business strategy and operations. Review each section regularly and update as the business evolves.
`.trim();

    setCanvas(output);
  };

  const FieldGroup = ({ label, field, placeholder }: { label: string, field: keyof typeof data, placeholder: string }) => (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <textarea
        className="form-control"
        rows={3}
        value={data[field]}
        onChange={(e) => setData({ ...data, [field]: e.target.value })}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <ToolWrapper
      title="Business Model Canvas Generator"
      description="Create a comprehensive Business Model Canvas to visualize and design your business strategy"
      icon="📐"
      inputValue={businessName}
      outputValue={canvas}
      outputLabel="Business Model Canvas"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-business-model-canvas.md"
    >
      <div className="mb-3">
        <label htmlFor="businessName" className="form-label">Business/Project Name</label>
        <input
          type="text"
          className="form-control"
          id="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Enter business name"
        />
      </div>

      <div className="row g-3">
        <div className="col-md-4">
          <FieldGroup
            label="🤝 Key Partners"
            field="keyPartners"
            placeholder="Suppliers, partners, alliances..."
          />
        </div>
        <div className="col-md-4">
          <FieldGroup
            label="⚙️ Key Activities"
            field="keyActivities"
            placeholder="Production, problem-solving, platform..."
          />
        </div>
        <div className="col-md-4">
          <FieldGroup
            label="💎 Key Resources"
            field="keyResources"
            placeholder="Physical, intellectual, human, financial..."
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="🎯 Value Propositions"
            field="valuePropositions"
            placeholder="What value do you deliver? What problems do you solve?"
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="👥 Customer Segments"
            field="customerSegments"
            placeholder="Who are your most important customers?"
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="💬 Customer Relationships"
            field="customerRelationships"
            placeholder="Personal, automated, self-service, community..."
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="📢 Channels"
            field="channels"
            placeholder="Web, retail, wholesale, sales force..."
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="💰 Cost Structure"
            field="costStructure"
            placeholder="Fixed costs, variable costs, economies of scale..."
          />
        </div>
        <div className="col-md-6">
          <FieldGroup
            label="💵 Revenue Streams"
            field="revenueStreams"
            placeholder="Sales, subscriptions, licensing, advertising..."
          />
        </div>
      </div>

      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary btn-lg" onClick={generateCanvas}>
          📐 Generate Business Model Canvas
        </button>
        <button
          className="btn btn-outline-secondary btn-lg"
          onClick={() => {
            setData({
              keyPartners: '',
              keyActivities: '',
              keyResources: '',
              valuePropositions: '',
              customerRelationships: '',
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
        <LeadCaptureForm toolName="Business Model Canvas" compact />
      </div>
    </ToolWrapper>
  );
};

export default BusinessModelCanvas;
