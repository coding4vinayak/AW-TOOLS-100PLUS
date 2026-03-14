import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const ElevatorPitchGenerator: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [uniqueValue, setUniqueValue] = useState('');
  const [pitch, setPitch] = useState('');

  const generatePitch = () => {
    const name = companyName || '[Company Name]';
    const audience = targetAudience || '[target audience]';
    const prob = problem || '[problem]';
    const sol = solution || '[solution]';
    const value = uniqueValue || '[unique value]';

    const pitches = [
      // Standard Format
      `${name} helps ${audience} who struggle with ${prob}. Our ${sol} ${value}.`,

      // Problem-First Format
      `Did you know ${audience} face ${prob}? ${name} solves this with ${sol}, ${value}.`,

      // Question Format
      `What if ${audience} could ${sol}? With ${name}, they can. We help ${audience} overcome ${prob} by ${value}.`,

      // Story Format
      `We started ${name} because we saw ${audience} struggling with ${prob}. Our ${sol} ${value}, making life easier for our customers.`,

      // Benefit-First Format
      `${value}. That's what ${name} delivers to ${audience} by solving ${prob} with our ${sol}.`,

      // 30-Second Extended Pitch
      `Hi, I'm with ${name}. We work with ${audience} who are facing ${prob}. This is a significant challenge because it costs them time, money, and resources. Our solution is ${sol}, which ${value}. Unlike competitors, we ${value}. We're looking for [partners/investments/customers] to help us scale.`
    ];

    setPitch(pitches.join('\n\n---\n\n'));
  };

  return (
    <ToolWrapper
      title="Elevator Pitch Generator"
      description="Craft a compelling 30-second elevator pitch for your business"
      icon="🎯"
      inputValue={companyName}
      outputValue={pitch}
      outputLabel="Generated Elevator Pitches"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-elevator-pitch.txt"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="companyName" className="form-label">Company/Product Name *</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g., Acme Inc"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="targetAudience" className="form-label">Target Audience *</label>
          <input
            type="text"
            className="form-control"
            id="targetAudience"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            placeholder="e.g., small business owners, busy parents"
          />
        </div>
        <div className="col-12">
          <label htmlFor="problem" className="form-label">Problem You Solve *</label>
          <textarea
            className="form-control"
            id="problem"
            rows={2}
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="What pain point does your audience experience?"
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
            placeholder="How does your product/service solve this problem?"
          />
        </div>
        <div className="col-12">
          <label htmlFor="uniqueValue" className="form-label">Unique Value Proposition *</label>
          <textarea
            className="form-control"
            id="uniqueValue"
            rows={2}
            value={uniqueValue}
            onChange={(e) => setUniqueValue(e.target.value)}
            placeholder="What makes you different from competitors?"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" onClick={generatePitch}>
            ✨ Generate Elevator Pitch
          </button>
        </div>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Elevator Pitch Generator" compact />
      </div>
    </ToolWrapper>
  );
};

export default ElevatorPitchGenerator;
