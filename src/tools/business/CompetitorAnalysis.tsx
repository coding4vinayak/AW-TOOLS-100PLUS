import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const CompetitorAnalysis: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [competitors, setCompetitors] = useState([
    { name: '', website: '', strengths: '', weaknesses: '', pricing: '' }
  ]);
  const [analysis, setAnalysis] = useState('');

  const addCompetitor = () => {
    setCompetitors([...competitors, { name: '', website: '', strengths: '', weaknesses: '', pricing: '' }]);
  };

  const updateCompetitor = (index: number, field: string, value: string) => {
    const updated = [...competitors];
    (updated[index] as any)[field] = value;
    setCompetitors(updated);
  };

  const removeCompetitor = (index: number) => {
    if (competitors.length > 1) {
      setCompetitors(competitors.filter((_, i) => i !== index));
    }
  };

  const generateAnalysis = () => {
    const name = companyName || 'Your Company';
    
    const output = `
# COMPETITOR ANALYSIS REPORT
## ${name.toUpperCase()}

---

## COMPETITOR OVERVIEW

${competitors.map((c, i) => `### Competitor ${i + 1}: ${c.name || 'Unnamed'}
${c.website ? `**Website:** ${c.website}` : ''}

**Strengths:**
${c.strengths || 'Not specified'}

**Weaknesses:**
${c.weaknesses || 'Not specified'}

**Pricing:**
${c.pricing || 'Not specified'}

---`).join('\n')}

## COMPARATIVE ANALYSIS

### Market Positioning
| Aspect | ${name} | ${competitors[0]?.name || 'Competitor 1'} | ${competitors[1]?.name || 'Competitor 2'} |
|--------|---------|----------|----------|
| Price Point | [Your price] | ${competitors[0]?.pricing || 'N/A'} | ${competitors[1]?.pricing || 'N/A'} |
| Key Strength | [Your strength] | ${competitors[0]?.strengths.split('\n')[0] || 'N/A'} | ${competitors[1]?.strengths.split('\n')[0] || 'N/A'} |
| Main Weakness | [Your weakness] | ${competitors[0]?.weaknesses.split('\n')[0] || 'N/A'} | ${competitors[1]?.weaknesses.split('\n')[0] || 'N/A'} |

### SWOT Summary

#### Your Competitive Advantages
- [Identify based on competitor weaknesses]
- [What you do better than others]
- [Unique features or services]

#### Areas for Improvement
- [Address competitor strengths you lack]
- [Market gaps to fill]
- [Customer complaints about competitors]

---

## STRATEGIC RECOMMENDATIONS

### Differentiation Strategies
1. **Focus on underserved segments** - Target customers competitors are ignoring
2. **Emphasize unique strengths** - Double down on what you do best
3. **Address competitor weaknesses** - Solve problems others ignore
4. **Innovate on pricing** - Consider alternative pricing models
5. **Superior customer experience** - Win on service quality

### Marketing Opportunities
- Position against competitor weaknesses
- Highlight your unique advantages
- Target competitor dissatisfied customers
- Create comparison content
- Leverage customer testimonials

### Product/Service Opportunities
- Features competitors lack
- Service improvements based on competitor gaps
- Pricing model innovations
- Bundle offerings differently

---

## ACTION PLAN

### Immediate Actions (30 days)
- [ ] Complete detailed feature comparison
- [ ] Analyze competitor customer reviews
- [ ] Identify top 3 differentiation opportunities

### Short-term Actions (90 days)
- [ ] Develop messaging around key differentiators
- [ ] Create comparison landing pages
- [ ] Launch targeted campaigns

### Long-term Strategy (12 months)
- [ ] Develop unique features/services
- [ ] Build sustainable competitive advantages
- [ ] Establish market leadership position

---

## MONITORING

Track these competitor metrics monthly:
- Website traffic changes
- New feature releases
- Pricing changes
- Marketing campaigns
- Customer sentiment
- Market share shifts
`.trim();

    setAnalysis(output);
  };

  return (
    <ToolWrapper
      title="Competitor Analysis Tool"
      description="Analyze your competitors to identify opportunities and develop winning strategies"
      icon="⚔️"
      inputValue={companyName}
      outputValue={analysis}
      outputLabel="Competitor Analysis Report"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-competitor-analysis.md"
    >
      <div className="mb-4">
        <label htmlFor="companyName" className="form-label">Your Company Name</label>
        <input
          type="text"
          className="form-control"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter your company name"
        />
      </div>

      <h5 className="mb-3">Add Competitors</h5>
      {competitors.map((competitor, index) => (
        <div key={index} className="card border-0 shadow-sm mb-3">
          <div className="card-header bg-light d-flex justify-content-between align-items-center">
            <span className="fw-semibold">Competitor {index + 1}</span>
            {competitors.length > 1 && (
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeCompetitor(index)}
              >
                Remove
              </button>
            )}
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={competitor.name}
                  onChange={(e) => updateCompetitor(index, 'name', e.target.value)}
                  placeholder="Competitor name"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Website</label>
                <input
                  type="text"
                  className="form-control"
                  value={competitor.website}
                  onChange={(e) => updateCompetitor(index, 'website', e.target.value)}
                  placeholder="https://..."
                />
              </div>
              <div className="col-12">
                <label className="form-label">Strengths</label>
                <textarea
                  className="form-control"
                  rows={2}
                  value={competitor.strengths}
                  onChange={(e) => updateCompetitor(index, 'strengths', e.target.value)}
                  placeholder="What are they good at?"
                />
              </div>
              <div className="col-12">
                <label className="form-label">Weaknesses</label>
                <textarea
                  className="form-control"
                  rows={2}
                  value={competitor.weaknesses}
                  onChange={(e) => updateCompetitor(index, 'weaknesses', e.target.value)}
                  placeholder="Where do they fall short?"
                />
              </div>
              <div className="col-12">
                <label className="form-label">Pricing</label>
                <input
                  type="text"
                  className="form-control"
                  value={competitor.pricing}
                  onChange={(e) => updateCompetitor(index, 'pricing', e.target.value)}
                  placeholder="e.g., $99/month, Premium pricing, Budget-friendly"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="d-flex gap-3 mb-4">
        <button className="btn btn-outline-primary" onClick={addCompetitor}>
          + Add Competitor
        </button>
        <button className="btn btn-primary btn-lg" onClick={generateAnalysis}>
          📊 Generate Analysis
        </button>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Competitor Analysis" compact />
      </div>
    </ToolWrapper>
  );
};

export default CompetitorAnalysis;
