import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const MissionVisionGenerator: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [values, setValues] = useState('');
  const [goal, setGoal] = useState('');
  const [audience, setAudience] = useState('');
  const [results, setResults] = useState({ mission: '', vision: '' });

  const generate = () => {
    const name = companyName || 'Our Company';
    const ind = industry || 'our industry';
    const valList = values.split(',').map(v => v.trim()).filter(v => v) || ['excellence', 'innovation'];
    const primaryGoal = goal || 'make a positive impact';
    const targetAudience = audience || 'our customers';

    const missionTemplates = [
      `To ${primaryGoal} by providing exceptional ${ind} solutions that empower ${targetAudience} to achieve their full potential.`,
      `Our mission is to deliver innovative ${ind} services that exceed expectations and create lasting value for ${targetAudience}.`,
      `To be the trusted partner for ${targetAudience}, providing ${ind} solutions guided by ${valList.join(', ')}, and ${valList.join(' and ')}.`,
      `We exist to ${primaryGoal} through ${ind} excellence, fostering ${valList[0] || 'innovation'} and ${valList[1] || 'growth'} for ${targetAudience}.`,
      `To empower ${targetAudience} with ${ind} solutions that inspire ${primaryGoal} and build a better future.`
    ];

    const visionTemplates = [
      `To be the leading ${ind} company, recognized for ${valList.join(', ')}, and setting the standard for excellence in ${ind}.`,
      `A world where ${targetAudience} can ${primaryGoal} effortlessly, powered by our innovative ${ind} solutions.`,
      `To transform ${ind} by ${primaryGoal}, creating a future where ${valList.join(' and ')} drive every decision.`,
      `Our vision is to be the most trusted ${ind} partner, known for ${valList.join(', ')}, and inspiring ${targetAudience} to achieve more.`,
      `To pioneer the future of ${ind}, where ${primaryGoal} is accessible to all ${targetAudience}.`
    ];

    const mission = missionTemplates.map((m, i) => `**Option ${i + 1}:**\n${m}`).join('\n\n');
    const vision = visionTemplates.map((v, i) => `**Option ${i + 1}:**\n${v}`).join('\n\n');

    setResults({ mission, vision });
  };

  const output = results.mission 
    ? `# MISSION STATEMENT\n\n${results.mission}\n\n---\n\n# VISION STATEMENT\n\n${results.vision}`
    : 'Fill in the details and click Generate...';

  return (
    <ToolWrapper
      title="Mission & Vision Statement Generator"
      description="Create powerful mission and vision statements that define your company's purpose and future"
      icon="🎯"
      inputValue={companyName}
      outputValue={output}
      outputLabel="Generated Statements"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-mission-vision.md"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="companyName" className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Your company name"
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
            placeholder="e.g., Technology, Healthcare"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="values" className="form-label">Core Values (comma-separated)</label>
          <input
            type="text"
            className="form-control"
            id="values"
            value={values}
            onChange={(e) => setValues(e.target.value)}
            placeholder="e.g., integrity, innovation, excellence"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="audience" className="form-label">Target Audience</label>
          <input
            type="text"
            className="form-control"
            id="audience"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="Who do you serve?"
          />
        </div>
        <div className="col-12">
          <label htmlFor="goal" className="form-label">Primary Goal/Purpose</label>
          <input
            type="text"
            className="form-control"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="What impact do you want to make?"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" onClick={generate}>
            ✨ Generate Mission & Vision
          </button>
        </div>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Mission & Vision Generator" compact />
      </div>
    </ToolWrapper>
  );
};

export default MissionVisionGenerator;
