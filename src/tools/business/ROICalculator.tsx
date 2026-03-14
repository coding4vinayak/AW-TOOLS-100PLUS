import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const ROICalculator: React.FC = () => {
  const [investmentName, setInvestmentName] = useState('');
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    finalValue: 15000,
    investmentPeriod: 12,
    periodType: 'months'
  });
  const [result, setResult] = useState('');

  const calculate = () => {
    const name = investmentName || 'Investment';
    const { initialInvestment, finalValue, investmentPeriod, periodType } = inputs;
    
    const netProfit = finalValue - initialInvestment;
    const roi = ((finalValue - initialInvestment) / initialInvestment) * 100;
    
    // Annualize ROI
    const periodsPerYear = periodType === 'months' ? 12 : periodType === 'quarters' ? 4 : 1;
    const annualizedPeriods = investmentPeriod / periodsPerYear;
    const annualizedROI = annualizedPeriods > 0 ? (((1 + roi / 100) ** (1 / annualizedPeriods)) - 1) * 100 : 0;

    // Sensitivity analysis
    const halfPeriodROI = annualizedPeriods > 0 ? (((1 + roi / 100) ** (1 / (annualizedPeriods * 0.5))) - 1) * 100 : 0;
    const doublePeriodROI = annualizedPeriods > 0 ? (((1 + roi / 100) ** (1 / (annualizedPeriods * 2))) - 1) * 100 : 0;
    const halfPeriodLabel = halfPeriodROI > 1000 ? '>1000' : halfPeriodROI.toFixed(1);
    const doublePeriodLabel = doublePeriodROI.toFixed(1);

    // Break-even scenarios
    const scenarios = [
      { label: 'Conservative (-20%)', finalValue: finalValue * 0.8 },
      { label: 'Expected', finalValue: finalValue },
      { label: 'Optimistic (+20%)', finalValue: finalValue * 1.2 },
      { label: 'Very Optimistic (+50%)', finalValue: finalValue * 1.5 }
    ];

    const scenarioRows = scenarios.map(s => {
      const profit = s.finalValue - initialInvestment;
      const roi = (profit / initialInvestment) * 100;
      return `| ${s.label} | $${s.finalValue.toLocaleString()} | $${profit.toLocaleString()} | ${roi.toFixed(1)}% |`;
    }).join('\n');

    const output = `
# ROI (RETURN ON INVESTMENT) ANALYSIS
## ${name.toUpperCase()}

---

## INVESTMENT SUMMARY

| Metric | Value |
|--------|-------|
| Initial Investment | $${initialInvestment.toLocaleString()} |
| Final Value | $${finalValue.toLocaleString()} |
| Investment Period | ${investmentPeriod} ${periodType} |
| Net Profit/Loss | **$${netProfit.toLocaleString()}** |

---

## KEY METRICS

### 📊 Return on Investment
**ROI:** ${roi >= 0 ? '+' : ''}${roi.toFixed(2)}%

### 📈 Annualized ROI
**Annualized ROI:** ${annualizedROI >= 0 ? '+' : ''}${annualizedROI.toFixed(2)}%

### 💰 Profit Multiple
**Return Multiple:** ${(finalValue / initialInvestment).toFixed(2)}x

### ⏱️ Payback Period
${roi > 0 ? `**Time to Double:** ${(72 / annualizedROI).toFixed(1)} ${periodType} (Rule of 72)` : 'N/A - Investment is not profitable'}

---

## SCENARIO ANALYSIS

| Scenario | Final Value | Profit/Loss | ROI |
|----------|-------------|-------------|-----|
${scenarioRows}

---

## ROI BENCHMARKS

### Investment Performance Rating
${roi >= 20 ? `
✅ **Excellent Return** (${roi.toFixed(1)}%)
Your investment significantly outperforms typical market returns.
` : roi >= 10 ? `
✅ **Good Return** (${roi.toFixed(1)}%)
Your investment beats average market returns.
` : roi >= 0 ? `
⚠️ **Modest Return** (${roi.toFixed(1)}%)
Your investment is profitable but below market averages.
` : `
❌ **Negative Return** (${roi.toFixed(1)}%)
Your investment has lost value. Consider reviewing your strategy.
`}

### Comparison to Benchmarks
| Benchmark | Typical Annual Return | Your Performance |
|-----------|----------------------|------------------|
| Savings Account | 0.5-2% | ${annualizedROI >= 2 ? '✅ Outperforming' : '⚠️ Underperforming'} |
| Bonds | 3-5% | ${annualizedROI >= 5 ? '✅ Outperforming' : '⚠️ Underperforming'} |
| Stock Market (S&P 500) | 8-10% | ${annualizedROI >= 10 ? '✅ Outperforming' : '⚠️ Underperforming'} |
| Real Estate | 6-12% | ${annualizedROI >= 12 ? '✅ Outperforming' : '⚠️ Underperforming'} |
| Venture Capital | 20-30% | ${annualizedROI >= 30 ? '✅ Outperforming' : '⚠️ Underperforming'} |

---

## BREAK-EVEN ANALYSIS

To break even on this investment:
- **Minimum Final Value Needed:** $${initialInvestment.toLocaleString()}
- **Current Buffer:** $${netProfit.toLocaleString()} (${((netProfit / initialInvestment) * 100).toFixed(1)}% above break-even)

---

## SENSITIVITY ANALYSIS

### Impact of Investment Period on Annualized ROI

| Period | Annualized ROI |
|--------|----------------|
| ${investmentPeriod * 0.5} ${periodType} (Half) | ${halfPeriodLabel}% |
| ${investmentPeriod} ${periodType} (Current) | ${annualizedROI.toFixed(1)}% |
| ${investmentPeriod * 2} ${periodType} (Double) | ${doublePeriodLabel}% |

---

## RECOMMENDATIONS

${roi > 0 ? `
### ✅ What's Working
- Your investment is generating positive returns
- Consider reinvesting profits to compound growth
- Review if risk level matches your goals
` : `
### ⚠️ Areas for Improvement
- Review investment thesis and assumptions
- Consider cutting losses if outlook is poor
- Diversify to reduce risk
`}

### Next Steps
1. **Review Regularly** - Monitor performance against benchmarks
2. **Rebalance** - Adjust allocation based on goals
3. **Tax Planning** - Consider tax implications of gains/losses
4. **Risk Assessment** - Ensure risk matches your tolerance
5. **Diversification** - Don't put all capital in one investment

---

## FORMULA REFERENCE

**ROI Formula:**
\`\`\`
ROI = ((Final Value - Initial Investment) / Initial Investment) × 100
ROI = ((${finalValue.toLocaleString()} - $${initialInvestment.toLocaleString()}) / $${initialInvestment.toLocaleString()}) × 100
ROI = ${roi.toFixed(2)}%
\`\`\`

**Annualized ROI Formula:**
\`\`\`
Annualized ROI = ((1 + ROI)^(1/Years) - 1) × 100
Annualized ROI = ${annualizedROI.toFixed(2)}%
\`\`\`

---

*Generated by Abetworks ROI Calculator*
`.trim();

    setResult(output);
  };

  return (
    <ToolWrapper
      title="ROI Calculator"
      description="Calculate Return on Investment (ROI) with detailed analysis and scenario planning"
      icon="📈"
      inputValue={investmentName}
      outputValue={result}
      outputLabel="ROI Analysis"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-roi-analysis.md"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="investmentName" className="form-label">Investment Name</label>
          <input
            type="text"
            className="form-control"
            id="investmentName"
            value={investmentName}
            onChange={(e) => setInvestmentName(e.target.value)}
            placeholder="e.g., Marketing Campaign, Stock Investment"
          />
        </div>
      </div>

      <hr className="my-4" />

      <h5 className="mb-3">Investment Details</h5>
      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Initial Investment ($) *</label>
          <input
            type="number"
            className="form-control"
            value={inputs.initialInvestment}
            onChange={(e) => setInputs({ ...inputs, initialInvestment: parseFloat(e.target.value) || 0 })}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Final Value / Return ($) *</label>
          <input
            type="number"
            className="form-control"
            value={inputs.finalValue}
            onChange={(e) => setInputs({ ...inputs, finalValue: parseFloat(e.target.value) || 0 })}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Period *</label>
          <input
            type="number"
            className="form-control"
            value={inputs.investmentPeriod}
            onChange={(e) => setInputs({ ...inputs, investmentPeriod: parseInt(e.target.value) || 1 })}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Period Type</label>
          <select
            className="form-select"
            value={inputs.periodType}
            onChange={(e) => setInputs({ ...inputs, periodType: e.target.value })}
          >
            <option value="months">Months</option>
            <option value="quarters">Quarters</option>
            <option value="years">Years</option>
          </select>
        </div>
      </div>

      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary btn-lg" onClick={calculate}>
          📈 Calculate ROI
        </button>
        <button
          className="btn btn-outline-secondary btn-lg"
          onClick={() => {
            setInputs({ initialInvestment: 10000, finalValue: 15000, investmentPeriod: 12, periodType: 'months' });
            setResult('');
          }}
        >
          Reset
        </button>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="ROI Calculator" compact />
      </div>
    </ToolWrapper>
  );
};

export default ROICalculator;
