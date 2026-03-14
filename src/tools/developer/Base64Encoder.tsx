import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const Base64Encoder: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => {
    try {
      setOutput(btoa(input));
    } catch (e) {
      setOutput('Error: Invalid input for Base64 encoding');
    }
  };

  return (
    <ToolWrapper
      title="Base64 Encoder"
      description="Encode text to Base64"
      icon="🔐"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter text to encode:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encode..."
        />
      </div>
      <button className="btn btn-primary" onClick={encode}>Encode to Base64</button>
    </ToolWrapper>
  );
};

export default Base64Encoder;
