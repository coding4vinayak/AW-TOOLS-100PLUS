import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const URLEncoder: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => {
    setOutput(encodeURIComponent(input));
  };

  return (
    <ToolWrapper
      title="URL Encoder"
      description="Encode URL components"
      icon="🔗"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter URL or text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="https://example.com/path with spaces"
        />
      </div>
      <button className="btn btn-primary" onClick={encode}>Encode URL</button>
    </ToolWrapper>
  );
};

export default URLEncoder;
