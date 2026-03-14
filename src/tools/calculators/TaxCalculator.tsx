import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TaxCalculator: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [output, setOutput] = useState('');

  const calculate = () => {
    const a = parseFloat(amount);
    const t = parseFloat(taxRate);
    if (!isNaN(a) && !isNaN(t)) {
      const taxAmount = (a * t) / 100;
      const total = a + taxAmount;
      setOutput(`Amount: $${a.toFixed(2)}\nTax Rate: ${t}%\nTax Amount: $${taxAmount.toFixed(2)}\nTotal: $${total.toFixed(2)}`);
    }
  };

  return (
    <ToolWrapper
      title="Tax Calculator"
      description="Calculate tax amounts"
      icon="💰"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="amount" className="form-label">Amount ($):</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="100"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="taxRate" className="form-label">Tax Rate (%):</label>
          <input
            type="number"
            id="taxRate"
            className="form-control"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            placeholder="10"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={calculate}>Calculate</button>
    </ToolWrapper>
  );
};

export default TaxCalculator;
