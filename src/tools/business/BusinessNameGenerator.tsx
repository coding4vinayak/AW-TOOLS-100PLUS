import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import ToolSEOTemplate from '../../components/ToolSEOTemplate';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const BusinessNameGenerator: React.FC = () => {
  const [keywords, setKeywords] = useState('');
  const [industry, setIndustry] = useState('');
  const [style, setStyle] = useState('modern');
  const [names, setNames] = useState<string[]>([]);

  const prefixes = {
    modern: ['Nova', 'Zen', 'Flux', 'Pulse', 'Spark', 'Glow', 'Nex', 'Quantum', 'Vivid', 'Prism'],
    classic: ['Prime', 'Elite', 'Premier', 'Superior', 'Classic', 'Heritage', 'Legacy', 'Crown', 'Royal', 'Grand'],
    tech: ['Tech', 'Digital', 'Cyber', 'Data', 'Cloud', 'Net', 'Web', 'Smart', 'Auto', 'Bot'],
    creative: ['Studio', 'Lab', 'Hub', 'Space', 'Collective', 'Works', 'Factory', 'House', 'Co', 'Group']
  };

  const suffixes = {
    modern: ['ify', 'ly', 'io', 'ex', 'on', 'ix', 'ax', 'os', 'us', 'ia'],
    classic: ['Corp', 'Inc', 'Ltd', 'Co', 'Group', 'Partners', 'Associates', 'Ventures', 'Holdings', 'Enterprises'],
    tech: ['Tech', 'Soft', 'Sys', 'Labs', 'Hub', 'Stack', 'Base', 'Core', 'Link', 'Net'],
    creative: ['Studio', 'Lab', 'Hub', 'Space', 'Collective', 'Works', 'Factory', 'House', 'Co', 'Group']
  };

  const generateNames = () => {
    if (!keywords.trim()) return;
    const keywordList = keywords.split(',').map(k => k.trim()).filter(k => k);
    const generated: string[] = [];
    const prefixList = prefixes[style as keyof typeof prefixes];
    const suffixList = suffixes[style as keyof typeof suffixes];
    keywordList.forEach(keyword => {
      suffixList.forEach(suffix => { generated.push(`${keyword}${suffix}`); });
      prefixList.forEach(prefix => { generated.push(`${prefix}${keyword}`); });
    });
    for (let i = 0; i < keywordList.length; i++) {
      for (let j = i + 1; j < keywordList.length; j++) {
        generated.push(`${keywordList[i]}${keywordList[j]}`);
        generated.push(`${keywordList[i]} ${keywordList[j]}`);
      }
    }
    if (industry) {
      prefixList.forEach(prefix => { generated.push(`${prefix} ${industry}`); });
    }
    const adjectives = ['Bright', 'Swift', 'Bold', 'Clear', 'Fresh', 'Pure', 'True', 'Free', 'Open', 'Smart'];
    adjectives.forEach(adj => {
      keywordList.forEach(keyword => {
        generated.push(`${adj}${keyword}`);
        generated.push(`${adj} ${keyword}`);
      });
    });
    const unique = [...new Set(generated)].slice(0, 50);
    setNames(unique);
  };

  const output = names.length > 0 ? names.map((name, i) => `${i + 1}. ${name}`).join('\n') : 'Enter keywords...';

  return (
    <>
      <ToolWrapper title="Business Name Generator" description="Generate catchy business names" icon="💼" inputValue={keywords} outputValue={output} outputLabel="Generated Names" showCopy={true} showDownload={true} downloadFilename="business-names.txt">
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="keywords" className="form-label">Keywords *</label>
            <input type="text" className="form-control" id="keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="e.g., tech, cloud, data" />
          </div>
          <div className="col-md-6">
            <label htmlFor="industry" className="form-label">Industry</label>
            <input type="text" className="form-control" id="industry" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="e.g., Software" />
          </div>
          <div className="col-md-6">
            <label htmlFor="style" className="form-label">Name Style</label>
            <select className="form-select" id="style" value={style} onChange={(e) => setStyle(e.target.value)}>
              <option value="modern">Modern & Trendy</option>
              <option value="classic">Classic & Professional</option>
              <option value="tech">Tech-Focused</option>
              <option value="creative">Creative & Unique</option>
            </select>
          </div>
          <div className="col-12">
            <button className="btn btn-primary btn-lg" onClick={generateNames}>🚀 Generate Names</button>
          </div>
        </div>
        <div className="mt-4"><LeadCaptureForm toolName="Business Name Generator" compact /></div>
      </ToolWrapper>
      <div className="container">
        <ToolSEOTemplate toolName="Business Name Generator" description="Generate catchy, memorable, and unique business names for your startup, brand, or company in seconds. Our AI-powered tool creates professional business names tailored to your industry." keywords={['business name generator', 'company name ideas', 'startup name generator', 'brand name generator', 'free business naming tool', 'online business name creator', 'startup name ideas', 'company naming tool']} category="business" />
      </div>
    </>
  );
};

export default BusinessNameGenerator;
