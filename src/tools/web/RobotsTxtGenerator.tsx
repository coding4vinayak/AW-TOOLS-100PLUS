import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const RobotsTxtGenerator: React.FC = () => {
  const [rules, setRules] = useState<{userAgent: string; allow: string; disallow: string}[]>([
    { userAgent: '*', allow: '', disallow: '' }
  ]);
  const [sitemap, setSitemap] = useState('');
  const [output, setOutput] = useState('');

  const addRule = () => {
    setRules([...rules, { userAgent: '*', allow: '', disallow: '' }]);
  };

  const updateRule = (index: number, field: keyof typeof rules[0], value: string) => {
    const newRules = [...rules];
    newRules[index][field] = value;
    setRules(newRules);
  };

  const generate = () => {
    let robots = '';
    rules.forEach(rule => {
      robots += `User-agent: ${rule.userAgent || '*'}\n`;
      if (rule.allow) robots += `Allow: ${rule.allow}\n`;
      if (rule.disallow) robots += `Disallow: ${rule.disallow}\n`;
      robots += '\n';
    });
    if (sitemap) robots += `Sitemap: ${sitemap}`;
    setOutput(robots.trim());
  };

  return (
    <ToolWrapper
      title="Robots.txt Generator"
      description="Generate robots.txt file for SEO"
      icon="🤖"
      inputValue={sitemap}
      outputValue={output}
      outputLabel="robots.txt"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-robots.txt"
    >
      <div className="mb-3">
        {rules.map((rule, index) => (
          <div key={index} className="card mb-2">
            <div className="card-body">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="User-agent"
                    value={rule.userAgent}
                    onChange={(e) => updateRule(index, 'userAgent', e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Allow"
                    value={rule.allow}
                    onChange={(e) => updateRule(index, 'allow', e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Disallow"
                    value={rule.disallow}
                    onChange={(e) => updateRule(index, 'disallow', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className="btn btn-sm btn-outline-primary" onClick={addRule}>+ Add Rule</button>
      </div>
      <div className="mb-3">
        <label htmlFor="sitemap" className="form-label">Sitemap URL:</label>
        <input
          type="url"
          id="sitemap"
          className="form-control"
          value={sitemap}
          onChange={(e) => setSitemap(e.target.value)}
          placeholder="https://example.com/sitemap.xml"
        />
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate robots.txt</button>
    </ToolWrapper>
  );
};

export default RobotsTxtGenerator;
