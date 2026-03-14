import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const DataStorageConverter: React.FC = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('GB');
  const [toUnit, setToUnit] = useState('MB');
  const [output, setOutput] = useState('');

  const units: Record<string, number> = {
    B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3, TB: 1024 ** 4, PB: 1024 ** 5
  };

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    
    const inBytes = v * units[fromUnit];
    const result = inBytes / units[toUnit];
    
    setOutput(`${v} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`);
  };

  return (
    <ToolWrapper
      title="Data Storage Converter"
      description="Convert between data size units"
      icon="💾"
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
            <option value="B">Bytes</option>
            <option value="KB">Kilobytes</option>
            <option value="MB">Megabytes</option>
            <option value="GB">Gigabytes</option>
            <option value="TB">Terabytes</option>
            <option value="PB">Petabytes</option>
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
            <option value="B">Bytes</option>
            <option value="KB">Kilobytes</option>
            <option value="MB">Megabytes</option>
            <option value="GB">Gigabytes</option>
            <option value="TB">Terabytes</option>
            <option value="PB">Petabytes</option>
          </select>
        </div>
      </div>
      <button className="btn btn-primary" onClick={convert}>Convert</button>
    </ToolWrapper>
  );
};

export default DataStorageConverter;
