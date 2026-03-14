import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

interface SWOTItem {
  id: string;
  text: string;
}

const SWOTAnalysis: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [strengths, setStrengths] = useState<SWOTItem[]>([{ id: '1', text: '' }]);
  const [weaknesses, setWeaknesses] = useState<SWOTItem[]>([{ id: '1', text: '' }]);
  const [opportunities, setOpportunities] = useState<SWOTItem[]>([{ id: '1', text: '' }]);
  const [threats, setThreats] = useState<SWOTItem[]>([{ id: '1', text: '' }]);
  const [analysis, setAnalysis] = useState('');

  const addSWOTItem = (type: string) => {
    const newItem = { id: Date.now().toString(), text: '' };
    if (type === 'strengths') setStrengths([...strengths, newItem]);
    if (type === 'weaknesses') setWeaknesses([...weaknesses, newItem]);
    if (type === 'opportunities') setOpportunities([...opportunities, newItem]);
    if (type === 'threats') setThreats([...threats, newItem]);
  };

  const updateSWOTItem = (type: string, id: string, text: string) => {
    if (type === 'strengths') {
      setStrengths(strengths.map(s => s.id === id ? { ...s, text } : s));
    }
    if (type === 'weaknesses') {
      setWeaknesses(weaknesses.map(w => w.id === id ? { ...w, text } : w));
    }
    if (type === 'opportunities') {
      setOpportunities(opportunities.map(o => o.id === id ? { ...o, text } : o));
    }
    if (type === 'threats') {
      setThreats(threats.map(t => t.id === id ? { ...t, text } : t));
    }
  };

  const removeSWOTItem = (type: string, id: string) => {
    if (type === 'strengths' && strengths.length > 1) {
      setStrengths(strengths.filter(s => s.id !== id));
    }
    if (type === 'weaknesses' && weaknesses.length > 1) {
      setWeaknesses(weaknesses.filter(w => w.id !== id));
    }
    if (type === 'opportunities' && opportunities.length > 1) {
      setOpportunities(opportunities.filter(o => o.id !== id));
    }
    if (type === 'threats' && threats.length > 1) {
      setThreats(threats.filter(t => t.id !== id));
    }
  };

  const generateAnalysis = () => {
    const name = companyName || 'Company';
    const strengthList = strengths.filter(s => s.text.trim()).map(s => `• ${s.text}`).join('\n');
    const weaknessList = weaknesses.filter(w => w.text.trim()).map(w => `• ${w.text}`).join('\n');
    const opportunityList = opportunities.filter(o => o.text.trim()).map(o => `• ${o.text}`).join('\n');
    const threatList = threats.filter(t => t.text.trim()).map(t => `• ${t.text}`).join('\n');

    const output = `
# SWOT ANALYSIS
## ${name.toUpperCase()}

---

## 💪 STRENGTHS (Internal)
${strengthList || '• No strengths listed'}

---

## 📉 WEAKNESSES (Internal)
${weaknessList || '• No weaknesses listed'}

---

## 🚀 OPPORTUNITIES (External)
${opportunityList || '• No opportunities listed'}

---

## ⚠️ THREATS (External)
${threatList || '• No threats listed'}

---

## STRATEGIC RECOMMENDATIONS

### SO Strategies (Leverage)
Use your strengths to capitalize on opportunities.

### WO Strategies (Overcome)
Address weaknesses to take advantage of opportunities.

### ST Strategies (Protect)
Use strengths to minimize threats.

### WT Strategies (Defend)
Develop defensive strategies to prevent weaknesses from making you vulnerable to threats.

---

## ACTION ITEMS
1. [ ] Prioritize top 3 strengths to leverage
2. [ ] Identify critical weaknesses to address
3. [ ] Select key opportunities to pursue
4. [ ] Develop contingency plans for major threats
`.trim();

    setAnalysis(output);
  };

  const renderSWOTSection = (type: string, items: SWOTItem[], icon: string, color: string, title: string) => (
    <div className="card border-0 h-100" style={{ borderColor: color }}>
      <div className="card-header text-white" style={{ backgroundColor: color }}>
        <h5 className="mb-0">{icon} {title}</h5>
      </div>
      <div className="card-body">
        {items.map((item, idx) => (
          <div key={item.id} className="mb-2 d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder={`Enter ${title.toLowerCase()}...`}
              value={item.text}
              onChange={(e) => updateSWOTItem(type, item.id, e.target.value)}
            />
            {items.length > 1 && (
              <button
                className="btn btn-outline-danger"
                onClick={() => removeSWOTItem(type, item.id)}
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          className="btn btn-outline-secondary btn-sm mt-2"
          onClick={() => addSWOTItem(type)}
        >
          + Add {title}
        </button>
      </div>
    </div>
  );

  return (
    <ToolWrapper
      title="SWOT Analysis Tool"
      description="Conduct a comprehensive SWOT analysis to identify your strategic position"
      icon="📊"
      inputValue={companyName}
      outputValue={analysis}
      outputLabel="SWOT Analysis Report"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-swot-analysis.md"
    >
      <div className="mb-4">
        <label htmlFor="companyName" className="form-label">Company/Project Name</label>
        <input
          type="text"
          className="form-control"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter name for this analysis"
        />
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          {renderSWOTSection('strengths', strengths, '💪', '#059669', 'Strengths')}
        </div>
        <div className="col-md-6">
          {renderSWOTSection('weaknesses', weaknesses, '📉', '#dc2626', 'Weaknesses')}
        </div>
        <div className="col-md-6">
          {renderSWOTSection('opportunities', opportunities, '🚀', '#2563eb', 'Opportunities')}
        </div>
        <div className="col-md-6">
          {renderSWOTSection('threats', threats, '⚠️', '#d97706', 'Threats')}
        </div>
      </div>

      <div className="d-flex gap-3">
        <button className="btn btn-primary btn-lg" onClick={generateAnalysis}>
          📊 Generate SWOT Analysis
        </button>
        <button
          className="btn btn-outline-secondary btn-lg"
          onClick={() => {
            setStrengths([{ id: '1', text: '' }]);
            setWeaknesses([{ id: '1', text: '' }]);
            setOpportunities([{ id: '1', text: '' }]);
            setThreats([{ id: '1', text: '' }]);
            setAnalysis('');
          }}
        >
          Clear All
        </button>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="SWOT Analysis" compact />
      </div>
    </ToolWrapper>
  );
};

export default SWOTAnalysis;
