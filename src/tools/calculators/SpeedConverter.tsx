import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const SpeedConverter: React.FC = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('kmh');
  const [toUnit, setToUnit] = useState('mph');
  const [output, setOutput] = useState('');

  const units: Record<string, number> = {
    ms: 1, kmh: 3.6, mph: 2.23694, knot: 1.94384, mach: 0.00293
  };

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    
    const inMs = v / units[fromUnit];
    const result = inMs * units[toUnit];
    
    setOutput(`${v} ${fromUnit.toUpperCase()} = ${result.toFixed(4)} ${toUnit.toUpperCase()}`);
  };

  return (
    <ToolWrapper
      title="Speed Converter"
      description="Convert between speed units"
      icon="🚀"
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
            placeholder="100"
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
            <option value="ms">Meters/second</option>
            <option value="kmh">Kilometers/hour</option>
            <option value="mph">Miles/hour</option>
            <option value="knot">Knots</option>
            <option value="mach">Mach</option>
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
            <option value="ms">Meters/second</option>
            <option value="kmh">Kilometers/hour</option>
            <option value="mph">Miles/hour</option>
            <option value="knot">Knots</option>
            <option value="mach">Mach</option>
          </select>
        </div>
      </div>
      <button className="btn btn-primary" onClick={convert}>Convert</button>
    </ToolWrapper>
  );
};

export default SpeedConverter;
