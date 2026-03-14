import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const LengthConverter: React.FC = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('ft');
  const [output, setOutput] = useState('');

  const units: Record<string, number> = {
    mm: 0.001, cm: 0.01, m: 1, km: 1000,
    in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.34
  };

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    
    const inMeters = v * units[fromUnit];
    const result = inMeters / units[toUnit];
    
    setOutput(`${v} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`);
  };

  return (
    <ToolWrapper
      title="Length Converter"
      description="Convert between length units"
      icon="📏"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <label htmlFor="value" className="form-label">Value:</label>
          <input
            type="number"
            id="value"
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="1"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="fromUnit" className="form-label">From:</label>
          <select
            id="fromUnit"
            className="form-select"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            <option value="mm">Millimeters</option>
            <option value="cm">Centimeters</option>
            <option value="m">Meters</option>
            <option value="km">Kilometers</option>
            <option value="in">Inches</option>
            <option value="ft">Feet</option>
            <option value="yd">Yards</option>
            <option value="mi">Miles</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="toUnit" className="form-label">To:</label>
          <select
            id="toUnit"
            className="form-select"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            <option value="mm">Millimeters</option>
            <option value="cm">Centimeters</option>
            <option value="m">Meters</option>
            <option value="km">Kilometers</option>
            <option value="in">Inches</option>
            <option value="ft">Feet</option>
            <option value="yd">Yards</option>
            <option value="mi">Miles</option>
          </select>
        </div>
      </div>
      <button className="btn btn-primary" onClick={convert}>Convert</button>
    </ToolWrapper>
  );
};

export default LengthConverter;
