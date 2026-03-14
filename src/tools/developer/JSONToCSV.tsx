import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const JSONToCSV: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const convert = () => {
    try {
      const data = JSON.parse(input);
      const array = Array.isArray(data) ? data : [data];
      
      if (array.length === 0) {
        setOutput('');
        return;
      }

      const headers = Object.keys(array[0]);
      const csvRows = [
        headers.join(','),
        ...array.map(row => 
          headers.map(fieldName => {
            const value = row[fieldName];
            const escaped = String(value ?? '').replace(/"/g, '""');
            return `"${escaped}"`;
          }).join(',')
        )
      ];
      
      setOutput(csvRows.join('\n'));
      setError('');
    } catch (e) {
      setError(`Invalid JSON: ${(e as Error).message}`);
      setOutput('');
    }
  };

  return (
    <ToolWrapper
      title="JSON to CSV"
      description="Convert JSON to CSV format"
      icon="📊"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter JSON array:</label>
        <textarea
          id="input"
          className="form-control font-monospace"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]'
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-primary" onClick={convert}>Convert to CSV</button>
    </ToolWrapper>
  );
};

export default JSONToCSV;
