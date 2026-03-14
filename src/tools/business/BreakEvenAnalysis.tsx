import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const BreakEvenAnalysis: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [inputs, setInputs] = useState({
    fixedCosts: 5000,
    pricePerUnit: 100,
    variableCostPerUnit: 40,
    unitsSold: 100
  });
  const [result, setResult] = useState('');

  const calculate = () => {
    const name = businessName || 'Business';
    const { fixedCosts, pricePerUnit, variableCostPerUnit, unitsSold } = inputs;
    
    const contributionMargin = pricePerUnit - variableCostPerUnit;
    const breakEvenUnits = contributionMargin > 0 ? Math.ceil(fixedCosts / contributionMargin) : 0;
    const breakEvenRevenue = breakEvenUnits * pricePerUnit;
    const currentRevenue = unitsSold * pricePerUnit;
    const currentCosts = fixedCosts + (unitsSold * variableCostPerUnit);
    const currentProfit = currentRevenue - currentCosts;
    const marginOfSafety = unitsSold > breakEvenUnits ? ((unitsSold - breakEvenUnits) / unitsSold * 100).toFixed(1) : 0;

    const output = `
# BREAK-EVEN ANALYSIS
## ${name.toUpperCase()}

---

## INPUT SUMMARY

| Metric | Value |
|--------|-------|
| Fixed Costs (Monthly) | $${fixedCosts.toLocaleString()} |
| Price Per Unit | $${pricePerUnit.toLocaleString()} |
| Variable Cost Per Unit | $${variableCostPerUnit.toLocaleString()} |
| Current Units Sold/Month | ${unitsSold.toLocaleString()} |

---

## KEY RESULTS

### 🎯 Break-Even Point

**Units to Break Even:** ${breakEvenUnits.toLocaleString()} units

**Revenue to Break Even:** $${breakEvenRevenue.toLocaleString()}

**Contribution Margin:** $${contributionMargin.toLocaleString()} per unit (${((contributionMargin / pricePerUnit) * 100).toFixed(1)}%)

---

## CURRENT PERFORMANCE

| Metric | Value |
|--------|-------|
| Current Revenue | $${currentRevenue.toLocaleString()} |
| Current Total Costs | $${currentCosts.toLocaleString()} |
| **Current Profit/Loss** | **${currentProfit >= 0 ? '$' + currentProfit.toLocaleString() : '-$' + Math.abs(currentProfit).toLocaleString()}** |
| Units Above Break-Even | ${Math.max(0, unitsSold - breakEvenUnits).toLocaleString()} |
| Margin of Safety | ${marginOfSafety}% |

---

## SCENARIO ANALYSIS

### What-If Scenarios

| Scenario | Units | Revenue | Costs | Profit |
|----------|-------|---------|-------|--------|
| Conservative (-20%) | ${Math.floor(unitsSold * 0.8)} | $${(unitsSold * 0.8 * pricePerUnit).toLocaleString()} | $${(fixedCosts + unitsSold * 0.8 * variableCostPerUnit).toLocaleString()} | $${(unitsSold * 0.8 * pricePerUnit - fixedCosts - unitsSold * 0.8 * variableCostPerUnit).toLocaleString()} |
| Current | ${unitsSold} | $${currentRevenue.toLocaleString()} | $${currentCosts.toLocaleString()} | $${currentProfit.toLocaleString()} |
| Optimistic (+20%) | ${Math.floor(unitsSold * 1.2)} | $${(unitsSold * 1.2 * pricePerUnit).toLocaleString()} | $${(fixedCosts + unitsSold * 1.2 * variableCostPerUnit).toLocaleString()} | $${(unitsSold * 1.2 * pricePerUnit - fixedCosts - unitsSold * 1.2 * variableCostPerUnit).toLocaleString()} |
| Optimistic (+50%) | ${Math.floor(unitsSold * 1.5)} | $${(unitsSold * 1.5 * pricePerUnit).toLocaleString()} | $${(fixedCosts + unitsSold * 1.5 * variableCostPerUnit).toLocaleString()} | $${(unitsSold * 1.5 * pricePerUnit - fixedCosts - unitsSold * 1.5 * variableCostPerUnit).toLocaleString()} |

---

## MONTHLY PROJECTION

| Month | Units | Revenue | Fixed Costs | Variable Costs | Total Costs | Profit |
|-------|-------|---------|-------------|----------------|-------------|--------|
| 1 | ${Math.floor(breakEvenUnits * 0.5)} | $${(breakEvenUnits * 0.5 * pricePerUnit).toLocaleString()} | $${fixedCosts.toLocaleString()} | $${(breakEvenUnits * 0.5 * variableCostPerUnit).toLocaleString()} | $${(fixedCosts + breakEvenUnits * 0.5 * variableCostPerUnit).toLocaleString()} | $${(breakEvenUnits * 0.5 * pricePerUnit - fixedCosts - breakEvenUnits * 0.5 * variableCostPerUnit).toLocaleString()} |
| 2 | ${Math.floor(breakEvenUnits * 0.75)} | $${(breakEvenUnits * 0.75 * pricePerUnit).toLocaleString()} | $${fixedCosts.toLocaleString()} | $${(breakEvenUnits * 0.75 * variableCostPerUnit).toLocaleString()} | $${(fixedCosts + breakEvenUnits * 0.75 * variableCostPerUnit).toLocaleString()} | $${(breakEvenUnits * 0.75 * pricePerUnit - fixedCosts - breakEvenUnits * 0.75 * variableCostPerUnit).toLocaleString()} |
| 3 (Break-Even) | ${breakEvenUnits} | $${breakEvenRevenue.toLocaleString()} | $${fixedCosts.toLocaleString()} | $${(breakEvenUnits * variableCostPerUnit).toLocaleString()} | $${breakEvenRevenue.toLocaleString()} | $0 |
| 4 | ${Math.floor(breakEvenUnits * 1.25)} | $${(breakEvenUnits * 1.25 * pricePerUnit).toLocaleString()} | $${fixedCosts.toLocaleString()} | $${(breakEvenUnits * 1.25 * variableCostPerUnit).toLocaleString()} | $${(fixedCosts + breakEvenUnits * 1.25 * variableCostPerUnit).toLocaleString()} | $${(breakEvenUnits * 1.25 * pricePerUnit - fixedCosts - breakEvenUnits * 1.25 * variableCostPerUnit).toLocaleString()} |
| 5 | ${Math.floor(breakEvenUnits * 1.5)} | $${(breakEvenUnits * 1.5 * pricePerUnit).toLocaleString()} | $${fixedCosts.toLocaleString()} | $${(breakEvenUnits * 1.5 * variableCostPerUnit).toLocaleString()} | $${(fixedCosts + breakEvenUnits * 1.5 * variableCostPerUnit).toLocaleString()} | $${(breakEvenUnits * 1.5 * pricePerUnit - fixedCosts - breakEvenUnits * 1.5 * variableCostPerUnit).toLocaleString()} |
| 6 | ${Math.floor(breakEvenUnits * 2)} | $${(breakEvenUnits * 2 * pricePerUnit).toLocaleString()} | $${fixedCosts.toLocaleString()} | $${(breakEvenUnits * 2 * variableCostPerUnit).toLocaleString()} | $${(fixedCosts + breakEvenUnits * 2 * variableCostPerUnit).toLocaleString()} | $${(breakEvenUnits * 2 * pricePerUnit - fixedCosts - breakEvenUnits * 2 * variableCostPerUnit).toLocaleString()} |

---

## KEY INSIGHTS

### To Reduce Break-Even Point:
1. **Increase Price** - Each $1 increase reduces break-even by ${(fixedCosts / ((pricePerUnit + 1) - variableCostPerUnit)).toFixed(0) - breakEvenUnits} units
2. **Reduce Variable Costs** - Each $1 reduction reduces break-even by ${(fixedCosts / (pricePerUnit - (variableCostPerUnit - 1))).toFixed(0) - breakEvenUnits} units
3. **Reduce Fixed Costs** - Each $100 reduction lowers break-even by ${(100 / contributionMargin).toFixed(1)} units

### Risk Assessment:
${unitsSold > breakEvenUnits 
  ? `✅ **Profitable** - You're selling ${(unitsSold - breakEvenUnits).toLocaleString()} units above break-even with a ${marginOfSafety}% margin of safety.`
  : `⚠️ **Below Break-Even** - You need to sell ${(breakEvenUnits - unitsSold).toLocaleString()} more units to break even.`}

---

## RECOMMENDATIONS

1. **Focus on Volume** - Prioritize reaching ${breakEvenUnits.toLocaleString()} units/month
2. **Review Pricing** - Consider if price can be increased without losing sales
3. **Control Costs** - Look for ways to reduce fixed or variable costs
4. **Monitor Regularly** - Track actual vs. projected numbers monthly
`.trim();

    setResult(output);
  };

  return (
    <ToolWrapper
      title="Break-Even Analysis Calculator"
      description="Calculate your break-even point and understand the path to profitability"
      icon="⚖️"
      inputValue={businessName}
      outputValue={result}
      outputLabel="Break-Even Analysis"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-break-even-analysis.md"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="businessName" className="form-label">Business Name</label>
          <input
            type="text"
            className="form-control"
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Your business name"
          />
        </div>
      </div>

      <hr className="my-4" />

      <h5 className="mb-3">Input Your Numbers</h5>
      <div className="row g-3">
        <div className="col-md-3">
          <label className="form-label">Fixed Costs (Monthly) *</label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              value={inputs.fixedCosts}
              onChange={(e) => setInputs({ ...inputs, fixedCosts: parseFloat(e.target.value) || 0 })}
            />
          </div>
          <small className="text-muted">Rent, salaries, insurance, etc.</small>
        </div>
        <div className="col-md-3">
          <label className="form-label">Price Per Unit *</label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              value={inputs.pricePerUnit}
              onChange={(e) => setInputs({ ...inputs, pricePerUnit: parseFloat(e.target.value) || 0 })}
            />
          </div>
          <small className="text-muted">Selling price per unit</small>
        </div>
        <div className="col-md-3">
          <label className="form-label">Variable Cost Per Unit *</label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              value={inputs.variableCostPerUnit}
              onChange={(e) => setInputs({ ...inputs, variableCostPerUnit: parseFloat(e.target.value) || 0 })}
            />
          </div>
          <small className="text-muted">Materials, labor, shipping</small>
        </div>
        <div className="col-md-3">
          <label className="form-label">Current Units Sold/Month</label>
          <input
            type="number"
            className="form-control"
            value={inputs.unitsSold}
            onChange={(e) => setInputs({ ...inputs, unitsSold: parseInt(e.target.value) || 0 })}
          />
        </div>
      </div>

      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary btn-lg" onClick={calculate}>
          📊 Calculate Break-Even Point
        </button>
        <button
          className="btn btn-outline-secondary btn-lg"
          onClick={() => {
            setInputs({ fixedCosts: 5000, pricePerUnit: 100, variableCostPerUnit: 40, unitsSold: 100 });
            setResult('');
          }}
        >
          Reset
        </button>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Break-Even Analysis" compact />
      </div>
    </ToolWrapper>
  );
};

export default BreakEvenAnalysis;
