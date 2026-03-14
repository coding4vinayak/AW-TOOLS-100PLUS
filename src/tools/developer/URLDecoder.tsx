import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const URLDecoder: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const decode = () => {
    try {
      setOutput(decodeURIComponent(input));
      setError('');
    } catch (e) {
      setError('Invalid URL encoded input');
      setOutput('');
    }
  };

  return (
    <ToolWrapper
      title="URL Decoder"
      description="Decode URL components"
      icon="🔗"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter encoded URL:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="https%3A%2F%2Fexample.com%2Fpath"
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-primary" onClick={decode}>Decode URL</button>
    </ToolWrapper>
  );
};

export default URLDecoder;
