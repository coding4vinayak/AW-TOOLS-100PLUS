import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('15');
  const [people, setPeople] = useState('1');
  const [output, setOutput] = useState('');

  const calculate = () => {
    const b = parseFloat(bill);
    const t = parseFloat(tipPercent);
    const p = parseInt(people);
    if (!isNaN(b) && !isNaN(t) && !isNaN(p) && p > 0) {
      const tipAmount = (b * t) / 100;
      const total = b + tipAmount;
      const perPerson = total / p;
      setOutput(`Bill Amount: $${b.toFixed(2)}\nTip (${t}%): $${tipAmount.toFixed(2)}\nTotal: $${total.toFixed(2)}\nPer Person: $${perPerson.toFixed(2)}`);
    }
  };

  return (
    <ToolWrapper
      title="Tip Calculator"
      description="Calculate tips and split bills"
      icon="💵"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="bill" className="form-label">Bill Amount ($):</label>
          <input
            type="number"
            id="bill"
            className="form-control"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            placeholder="100"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="tipPercent" className="form-label">Tip (%):</label>
          <select
            id="tipPercent"
            className="form-select"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
          >
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="18">18%</option>
            <option value="20">20%</option>
            <option value="25">25%</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        {tipPercent === 'custom' && (
          <div className="col-md-6">
            <label htmlFor="customTip" className="form-label">Custom Tip (%):</label>
            <input
              type="number"
              id="customTip"
              className="form-control"
              onChange={(e) => setTipPercent(e.target.value)}
              placeholder="Enter %"
            />
          </div>
        )}
        <div className="col-md-6">
          <label htmlFor="people" className="form-label">Number of People:</label>
          <input
            type="number"
            id="people"
            className="form-control"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            min="1"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={calculate}>Calculate</button>
    </ToolWrapper>
  );
};

export default TipCalculator;
