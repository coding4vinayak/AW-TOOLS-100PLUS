import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import ToolSEOTemplate from '../../components/ToolSEOTemplate';

const JSONFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e) {
      setError(`Invalid JSON: ${(e as Error).message}`);
      setOutput('');
    }
  };
  return (
    <>
      <ToolWrapper title="JSON Formatter" description="Format and validate JSON" icon="📋" inputValue={input} outputValue={output} outputLabel="Formatted JSON" showCopy={true} showDownload={true} downloadFilename="formatted.json">
        <div className="mb-3">
          <label htmlFor="input" className="form-label">Enter JSON:</label>
          <textarea id="input" className="form-control font-monospace" rows={8} value={input} onChange={(e) => setInput(e.target.value)} placeholder='{"key": "value"}' />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary" onClick={format}>Format JSON</button>
      </ToolWrapper>
      <div className="container">
        <ToolSEOTemplate toolName="JSON Formatter" description="Format, beautify, and validate JSON data online for free. Our JSON formatter makes your JSON code readable and well-structured with proper indentation." keywords={['json formatter', 'json beautifier', 'json validator', 'format json online', 'json pretty print', 'free json formatter', 'online json formatter', 'json syntax checker']} category="developer" />
      </div>
    </>
  );
};
export default JSONFormatter;
