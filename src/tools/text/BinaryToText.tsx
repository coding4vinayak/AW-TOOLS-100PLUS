import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const BinaryToText: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const convertToText = () => {
    try {
      const binary = input.replace(/\s+/g, '').split(/(?=[01]{8})/);
      const text = binary.map(byte => {
        if (!/^[01]{8}$/.test(byte)) return '';
        return String.fromCharCode(parseInt(byte, 2));
      }).join('');
      setOutput(text);
      setError('');
    } catch {
      setError('Invalid binary input. Please enter valid 8-bit binary values.');
      setOutput('');
    }
  };

  return (
    <ToolWrapper
      title="Binary to Text"
      description="Convert binary code to text"
      icon="🔡"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-decoded-text.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter binary code:</label>
        <textarea
          id="input"
          className="form-control"
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter binary (e.g., 01001000 01100101 01101100 01101100 01101111)"
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-primary" onClick={convertToText}>Convert to Text</button>
    </ToolWrapper>
  );
};

export default BinaryToText;
