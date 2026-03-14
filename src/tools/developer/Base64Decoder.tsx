import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const Base64Decoder: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const decode = () => {
    try {
      setOutput(atob(input));
      setError('');
    } catch (e) {
      setError('Invalid Base64 input');
      setOutput('');
    }
  };

  return (
    <ToolWrapper
      title="Base64 Decoder"
      description="Decode Base64 to text"
      icon="🔓"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter Base64 to decode:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="SGVsbG8gV29ybGQ="
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-primary" onClick={decode}>Decode Base64</button>
    </ToolWrapper>
  );
};

export default Base64Decoder;
