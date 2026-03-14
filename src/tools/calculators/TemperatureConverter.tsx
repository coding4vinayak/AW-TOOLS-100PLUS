import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TemperatureConverter: React.FC = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState<'C' | 'F' | 'K'>('C');
  const [toUnit, setToUnit] = useState<'C' | 'F' | 'K'>('F');
  const [output, setOutput] = useState('');

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    
    let inCelsius = v;
    if (fromUnit === 'F') inCelsius = (v - 32) * 5/9;
    if (fromUnit === 'K') inCelsius = v - 273.15;
    
    let result = inCelsius;
    if (toUnit === 'F') result = (inCelsius * 9/5) + 32;
    else if (toUnit === 'K') result = inCelsius + 273.15;
    else result = inCelsius;
    
    setOutput(`${v}°${fromUnit} = ${result.toFixed(2)}°${toUnit}`);
  };

  return (
    <ToolWrapper
      title="Temperature Converter"
      description="Convert between temperature units"
      icon="🌡️"
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
            placeholder="0"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="fromUnit" className="form-label">From:</label>
          <select
            id="fromUnit"
            className="form-select"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as 'C' | 'F' | 'K')}
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="toUnit" className="form-label">To:</label>
          <select
            id="toUnit"
            className="form-select"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as 'C' | 'F' | 'K')}
          >
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </div>
      </div>
      <button className="btn btn-primary" onClick={convert}>Convert</button>
    </ToolWrapper>
  );
};

export default TemperatureConverter;
