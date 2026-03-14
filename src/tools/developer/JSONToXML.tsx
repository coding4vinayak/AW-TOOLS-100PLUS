import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const JSONToXML: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const jsonToXml = (obj: unknown): string => {
    if (obj === null || obj === undefined) return '';
    if (typeof obj !== 'object') return String(obj);
    
    if (Array.isArray(obj)) {
      return obj.map((item, i) => `<item_${i}>${jsonToXml(item)}</item_${i}>`).join('');
    }
    
    return Object.entries(obj as Record<string, unknown>).map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return `<${key}>${jsonToXml(value)}</${key}>`;
      }
      return `<${key}>${value}</${key}>`;
    }).join('');
  };

  const convert = () => {
    try {
      const parsed = JSON.parse(input);
      let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
      xml += '<root>\n';
      xml += jsonToXml(parsed);
      xml += '\n</root>';
      setOutput(xml);
      setError('');
    } catch (e) {
      setError(`Invalid JSON: ${(e as Error).message}`);
      setOutput('');
    }
  };

  return (
    <ToolWrapper
      title="JSON to XML"
      description="Convert JSON to XML format"
      icon="🔄"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter JSON:</label>
        <textarea
          id="input"
          className="form-control font-monospace"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"name": "John", "age": 30}'
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-primary" onClick={convert}>Convert to XML</button>
    </ToolWrapper>
  );
};

export default JSONToXML;
