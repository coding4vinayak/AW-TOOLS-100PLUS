import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const PercentageCalculator: React.FC = () => {
  const [value, setValue] = useState('');
  const [percent, setPercent] = useState('');
  const [output, setOutput] = useState('');

  const calculate = () => {
    const v = parseFloat(value);
    const p = parseFloat(percent);
    if (!isNaN(v) && !isNaN(p)) {
      const result = (v * p) / 100;
      setOutput(`${p}% of ${v} = ${result.toFixed(2)}`);
    }
  };

  return (
    <ToolWrapper
      title="Percentage Calculator"
      description="Calculate percentages"
      icon="📊"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="percent" className="form-label">Percentage:</label>
          <input
            type="number"
            id="percent"
            className="form-control"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            placeholder="20"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="value" className="form-label">Value:</label>
          <input
            type="number"
            id="value"
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="100"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={calculate}>Calculate</button>
    </ToolWrapper>
  );
};

export default PercentageCalculator;
