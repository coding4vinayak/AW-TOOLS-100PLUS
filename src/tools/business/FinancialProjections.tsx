import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const FinancialProjections: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [inputs, setInputs] = useState({
    startingRevenue: 10000,
    growthRate: 10,
    grossMargin: 60,
    operatingExpenses: 5000,
    projectionMonths: 12
  });
  const [projections, setProjections] = useState('');

  const calculate = () => {
    const name = businessName || 'Business';
    const { startingRevenue, growthRate, grossMargin, operatingExpenses, projectionMonths } = inputs;
    
    let revenue = startingRevenue;
    let totalRevenue = 0;
    let totalGrossProfit = 0;
    let totalExpenses = 0;
    let totalNetIncome = 0;
    let endingCash = 0;

    const rows = [];
    for (let i = 1; i <= projectionMonths; i++) {
      revenue = Math.round(revenue * (1 + growthRate / 100));
      const grossProfit = revenue * (grossMargin / 100);
      const expenses = operatingExpenses;
      const netIncome = grossProfit - expenses;
      endingCash += netIncome;
      
      totalRevenue += revenue;
      totalGrossProfit += grossProfit;
      totalExpenses += expenses;
      totalNetIncome += netIncome;

      rows.push(`| Month ${i} | $${revenue.toLocaleString()} | $${grossProfit.toLocaleString()} | $${expenses.toLocaleString()} | $${netIncome.toLocaleString()} | $${endingCash.toLocaleString()} |`);
    }

    const output = `
# FINANCIAL PROJECTIONS
## ${name.toUpperCase()}

---

## ASSUMPTIONS

| Metric | Value |
|--------|-------|
| Starting Monthly Revenue | $${startingRevenue.toLocaleString()} |
| Monthly Growth Rate | ${growthRate}% |
| Gross Margin | ${grossMargin}% |
| Monthly Operating Expenses | $${operatingExpenses.toLocaleString()} |
| Projection Period | ${projectionMonths} months |

---

## MONTHLY PROJECTIONS

| Month | Revenue | Gross Profit | OpEx | Net Income | Cumulative Cash |
|-------|---------|--------------|------|------------|-----------------|
${rows.join('\n')}

---

## SUMMARY

| Metric | Total |
|--------|-------|
| Total Revenue | $${totalRevenue.toLocaleString()} |
| Total Gross Profit | $${totalGrossProfit.toLocaleString()} |
| Total Operating Expenses | $${totalExpenses.toLocaleString()} |
| **Total Net Income** | **$${totalNetIncome.toLocaleString()}** |
| Average Monthly Revenue | $${(totalRevenue / projectionMonths).toLocaleString()} |
| Average Monthly Net Income | $${(totalNetIncome / projectionMonths).toLocaleString()} |

---

## KEY METRICS

- **Profit Margin:** ${((totalNetIncome / totalRevenue) * 100).toFixed(1)}%
- **Revenue Growth (Month 1 to ${projectionMonths}):** ${((revenue - startingRevenue) / startingRevenue * 100).toFixed(0)}%
- **Break-Even Month:** ${totalNetIncome > 0 ? 'Profitable from start' : 'Not profitable in projection period'}

---

## RECOMMENDATIONS

1. Monitor actual vs. projected numbers monthly
2. Adjust growth rate based on market response
3. Review operating expenses for optimization opportunities
4. Plan for cash flow needs during growth phases
`.trim();

    setProjections(output);
  };

  return (
    <ToolWrapper
      title="Financial Projections Tool"
      description="Create detailed financial projections for your business plan or forecasting"
      icon="📊"
      inputValue={businessName}
      outputValue={projections}
      outputLabel="Financial Projections"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-financial-projections.md"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Business Name</label>
          <input type="text" className="form-control" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Starting Revenue ($)</label>
          <input type="number" className="form-control" value={inputs.startingRevenue} onChange={(e) => setInputs({ ...inputs, startingRevenue: parseInt(e.target.value) || 0 })} />
        </div>
        <div className="col-md-3">
          <label className="form-label">Growth Rate (%)</label>
          <input type="number" className="form-control" value={inputs.growthRate} onChange={(e) => setInputs({ ...inputs, growthRate: parseFloat(e.target.value) || 0 })} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Gross Margin (%)</label>
          <input type="number" className="form-control" value={inputs.grossMargin} onChange={(e) => setInputs({ ...inputs, grossMargin: parseFloat(e.target.value) || 0 })} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Monthly OpEx ($)</label>
          <input type="number" className="form-control" value={inputs.operatingExpenses} onChange={(e) => setInputs({ ...inputs, operatingExpenses: parseInt(e.target.value) || 0 })} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Projection Period (months)</label>
          <input type="number" className="form-control" value={inputs.projectionMonths} onChange={(e) => setInputs({ ...inputs, projectionMonths: parseInt(e.target.value) || 12 })} />
        </div>
      </div>
      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary btn-lg" onClick={calculate}>📊 Generate Projections</button>
      </div>
      <div className="mt-4"><LeadCaptureForm toolName="Financial Projections" compact /></div>
    </ToolWrapper>
  );
};

export default FinancialProjections;
