import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const WeightConverter: React.FC = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('kg');
  const [toUnit, setToUnit] = useState('lbs');
  const [output, setOutput] = useState('');

  const units: Record<string, number> = {
    mg: 0.001, g: 1, kg: 1000, t: 1000000,
    oz: 28.3495, lbs: 453.592, st: 6350.29
  };

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    
    const inGrams = v * units[fromUnit];
    const result = inGrams / units[toUnit];
    
    setOutput(`${v} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`);
  };

  return (
    <ToolWrapper
      title="Weight Converter"
      description="Convert between weight units"
      icon="⚖️"
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
            <option value="mg">Milligrams</option>
            <option value="g">Grams</option>
            <option value="kg">Kilograms</option>
            <option value="t">Tonnes</option>
            <option value="oz">Ounces</option>
            <option value="lbs">Pounds</option>
            <option value="st">Stone</option>
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
            <option value="mg">Milligrams</option>
            <option value="g">Grams</option>
            <option value="kg">Kilograms</option>
            <option value="t">Tonnes</option>
            <option value="oz">Ounces</option>
            <option value="lbs">Pounds</option>
            <option value="st">Stone</option>
          </select>
        </div>
      </div>
      <button className="btn btn-primary" onClick={convert}>Convert</button>
    </ToolWrapper>
  );
};

export default WeightConverter;
