import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const XMLFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const formatXML = (xml: string): string => {
    let formatted = '';
    let indent = '';
    xml.split(/>\s*</).forEach(node => {
      if (node.match(/^\/\w/)) {
        indent = indent.substring(2);
      }
      formatted += indent + '<' + node + '>\n';
      if (node.match(/^<?\w[^>]*[^\/]$/) && !node.startsWith('?')) {
        indent += '  ';
      }
    });
    return formatted.substring(1, formatted.length - 2);
  };

  const format = () => {
    try {
      const minified = input.replace(/\s+/g, ' ').trim();
      const formatted = formatXML(minified);
      setOutput(formatted);
      setError('');
    } catch (e) {
      setError(`Invalid XML: ${(e as Error).message}`);
      setOutput('');
    }
  };

  return (
    <ToolWrapper
      title="XML Formatter"
      description="Format and beautify XML"
      icon="📄"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter XML:</label>
        <textarea
          id="input"
          className="form-control font-monospace"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='<root><item>value</item></root>'
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-primary" onClick={format}>Format XML</button>
    </ToolWrapper>
  );
};

export default XMLFormatter;
