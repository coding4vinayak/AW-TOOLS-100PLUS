import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const ValuePropositionGenerator: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [targetCustomer, setTargetCustomer] = useState('');
  const [customerProblem, setCustomerProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [benefits, setBenefits] = useState('');
  const [competitors, setCompetitors] = useState('');
  const [valueProps, setValueProps] = useState('');

  const generate = () => {
    const product = productName || '[Product]';
    const customer = targetCustomer || '[target customer]';
    const problem = customerProblem || '[problem]';
    const sol = solution || '[solution]';
    const benefitList = benefits.split(',').map(b => b.trim()).filter(b => b);
    const comp = competitors || '[competitors]';

    const templates = [
      // Standard Format
      `For ${customer} who ${problem}, ${product} is a ${sol} that ${benefitList[0] || 'delivers key benefits'}. Unlike ${comp}, we ${benefitList[1] || 'offer unique value'}.`,

      // Steve Blank Format
      `We help ${customer} ${sol} by ${benefitList[0] || 'solving their key problem'}.`,

      // Geoffrey Moore Format
      `For ${customer} who ${problem}, ${product} is a ${sol} that ${benefitList.join(', ')}. Unlike ${comp}, our product ${benefitList[1] || 'provides unique differentiation'}.`,

      // Problem-Solution Format
      `${customer} struggles with ${problem}. ${product} solves this by ${sol}, delivering ${benefitList.join(', ')}.`,

      // Benefit-First Format
      `${benefitList[0] || 'Transform your results'}. ${product} helps ${customer} ${sol} so they can overcome ${problem}.`,

      // One-Liner Format
      `${product} helps ${customer} ${sol} without ${problem}.`,

      // Extended Value Proposition
      `**Headline:** ${benefitList[0] || 'Achieve More with Less Effort'}

**Sub-headline:** ${product} helps ${customer} ${sol}

**Key Benefits:**
${benefitList.map(b => `• ${b}`).join('\n') || '• Benefit 1\n• Benefit 2\n• Benefit 3'}

**Why Choose Us:**
Unlike ${comp}, ${product} ${benefitList[1] || 'offers a unique approach'} that ${benefitList[2] || 'delivers superior results'}.`
    ];

    setValueProps(templates.join('\n\n---\n\n'));
  };

  return (
    <ToolWrapper
      title="Value Proposition Generator"
      description="Craft compelling value propositions that clearly communicate your unique value to customers"
      icon="💎"
      inputValue={productName}
      outputValue={valueProps}
      outputLabel="Generated Value Propositions"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-value-proposition.md"
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
            placeholder="e.g., Acme Software"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="targetCustomer" className="form-label">Target Customer *</label>
          <input
            type="text"
            className="form-control"
            id="targetCustomer"
            value={targetCustomer}
            onChange={(e) => setTargetCustomer(e.target.value)}
            placeholder="e.g., small business owners, marketers"
          />
        </div>
        <div className="col-12">
          <label htmlFor="customerProblem" className="form-label">Customer Problem *</label>
          <textarea
            className="form-control"
            id="customerProblem"
            rows={2}
            value={customerProblem}
            onChange={(e) => setCustomerProblem(e.target.value)}
            placeholder="What problem does your customer have?"
          />
        </div>
        <div className="col-12">
          <label htmlFor="solution" className="form-label">Your Solution *</label>
          <textarea
            className="form-control"
            id="solution"
            rows={2}
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            placeholder="How does your product solve this problem?"
          />
        </div>
        <div className="col-12">
          <label htmlFor="benefits" className="form-label">Key Benefits (comma-separated) *</label>
          <input
            type="text"
            className="form-control"
            id="benefits"
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
            placeholder="e.g., saves time, reduces costs, increases revenue"
          />
        </div>
        <div className="col-12">
          <label htmlFor="competitors" className="form-label">Main Competitors/Alternatives</label>
          <input
            type="text"
            className="form-control"
            id="competitors"
            value={competitors}
            onChange={(e) => setCompetitors(e.target.value)}
            placeholder="What do customers use now?"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" onClick={generate}>
            ✨ Generate Value Propositions
          </button>
        </div>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Value Proposition Generator" compact />
      </div>
    </ToolWrapper>
  );
};

export default ValuePropositionGenerator;
