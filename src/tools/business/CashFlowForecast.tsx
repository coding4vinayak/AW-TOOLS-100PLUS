import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const CashFlowForecast: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [startingBalance, setStartingBalance] = useState(10000);
  const [monthlyData, setMonthlyData] = useState([
    { month: 'Month 1', cashIn: 5000, cashOut: 4000 },
    { month: 'Month 2', cashIn: 6000, cashOut: 4500 },
    { month: 'Month 3', cashIn: 7000, cashOut: 5000 },
    { month: 'Month 4', cashIn: 7500, cashOut: 5200 },
    { month: 'Month 5', cashIn: 8000, cashOut: 5500 },
    { month: 'Month 6', cashIn: 8500, cashOut: 5800 }
  ]);
  const [forecast, setForecast] = useState('');

  const updateMonth = (index: number, field: string, value: string | number) => {
    const updated = [...monthlyData];
    (updated[index] as any)[field] = value;
    setMonthlyData(updated);
  };

  const addMonth = () => {
    const nextNum = monthlyData.length + 1;
    setMonthlyData([...monthlyData, { month: `Month ${nextNum}`, cashIn: 0, cashOut: 0 }]);
  };

  const removeMonth = (index: number) => {
    if (monthlyData.length > 1) {
      setMonthlyData(monthlyData.filter((_, i) => i !== index));
    }
  };

  const generateForecast = () => {
    const name = businessName || 'Business';
    let balance = startingBalance;
    let totalIn = 0;
    let totalOut = 0;
    let minBalance = balance;
    let maxBalance = balance;

    const rows = monthlyData.map((data) => {
      const netFlow = data.cashIn - data.cashOut;
      balance += netFlow;
      totalIn += data.cashIn;
      totalOut += data.cashOut;
      
      if (balance < minBalance) minBalance = balance;
      if (balance > maxBalance) maxBalance = balance;

      return `| ${data.month} | $${data.cashIn.toLocaleString()} | $${data.cashOut.toLocaleString()} | $${netFlow.toLocaleString()} | $${balance.toLocaleString()} |`;
    });

    const avgMonthlyIn = totalIn / monthlyData.length;
    const avgMonthlyOut = totalOut / monthlyData.length;
    const avgNetFlow = avgMonthlyIn - avgMonthlyOut;

    const output = `
# CASH FLOW FORECAST
## ${name.toUpperCase()}

---

## SUMMARY

| Metric | Value |
|--------|-------|
| Starting Balance | $${startingBalance.toLocaleString()} |
| Total Cash In | $${totalIn.toLocaleString()} |
| Total Cash Out | $${totalOut.toLocaleString()} |
| **Ending Balance** | **$${balance.toLocaleString()}** |
| Net Cash Flow | $${(totalIn - totalOut).toLocaleString()} |

---

## KEY INSIGHTS

| Metric | Value |
|--------|-------|
| Minimum Balance | $${minBalance.toLocaleString()} |
| Maximum Balance | $${maxBalance.toLocaleString()} |
| Average Monthly In | $${avgMonthlyIn.toLocaleString()} |
| Average Monthly Out | $${avgMonthlyOut.toLocaleString()} |
| Average Net Flow | $${avgNetFlow.toLocaleString()} |

${minBalance < 0 ? `
⚠️ **CASH FLOW WARNING:** Your balance goes negative (${minBalance.toLocaleString()}). Consider:
- Securing a line of credit
- Delaying non-essential expenses
- Accelerating receivables collection
` : `✅ **Positive Cash Flow:** Your balance stays positive throughout the forecast period.`}

---

## MONTHLY BREAKDOWN

| Month | Cash In | Cash Out | Net Flow | Ending Balance |
|-------|---------|----------|----------|----------------|
${rows.join('\n')}

---

## CASH FLOW TRENDS

### Monthly Cash In
${monthlyData.map((d, i) => `- **${d.month}:** $${d.cashIn.toLocaleString()}`).join('\n')}

### Monthly Cash Out
${monthlyData.map((d, i) => `- **${d.month}:** $${d.cashOut.toLocaleString()}`).join('\n')}

### Net Cash Flow by Month
${monthlyData.map((d, i) => `- **${d.month}:** $${(d.cashIn - d.cashOut).toLocaleString()}`).join('\n')}

---

## RECOMMENDATIONS

1. **Monitor Receivables** - Ensure customers pay on time
2. **Manage Payables** - Negotiate favorable payment terms with suppliers
3. **Maintain Reserve** - Keep 3-6 months of operating expenses as buffer
4. **Review Regularly** - Update forecast monthly with actual numbers
5. **Plan for Seasonality** - Account for peak and slow periods

---

## ACTION ITEMS

- [ ] Review and adjust monthly projections
- [ ] Identify opportunities to accelerate cash inflows
- [ ] Find ways to delay or reduce cash outflows
- [ ] Set up cash flow monitoring system
- [ ] Establish line of credit as backup
`.trim();

    setForecast(output);
  };

  return (
    <ToolWrapper
      title="Cash Flow Forecast Tool"
      description="Project your cash flow to ensure you have enough liquidity to run your business"
      icon="💵"
      inputValue={businessName}
      outputValue={forecast}
      outputLabel="Cash Flow Forecast"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-cash-flow-forecast.md"
    >
      <div className="row g-3 mb-4">
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
        <div className="col-md-6">
          <label htmlFor="startingBalance" className="form-label">Starting Cash Balance ($) *</label>
          <input
            type="number"
            className="form-control"
            id="startingBalance"
            value={startingBalance}
            onChange={(e) => setStartingBalance(parseFloat(e.target.value) || 0)}
          />
        </div>
      </div>

      <h5 className="mb-3">Monthly Projections</h5>
      
      <div className="table-responsive mb-3">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Month</th>
              <th>Cash In ($)</th>
              <th>Cash Out ($)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((data, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={data.month}
                    onChange={(e) => updateMonth(index, 'month', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={data.cashIn}
                    onChange={(e) => updateMonth(index, 'cashIn', parseFloat(e.target.value) || 0)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={data.cashOut}
                    onChange={(e) => updateMonth(index, 'cashOut', parseFloat(e.target.value) || 0)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeMonth(index)}
                    disabled={monthlyData.length === 1}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex gap-3 mb-4">
        <button className="btn btn-outline-primary" onClick={addMonth}>
          + Add Month
        </button>
        <button className="btn btn-primary btn-lg" onClick={generateForecast}>
          💵 Generate Cash Flow Forecast
        </button>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Cash Flow Forecast" compact />
      </div>
    </ToolWrapper>
  );
};

export default CashFlowForecast;
