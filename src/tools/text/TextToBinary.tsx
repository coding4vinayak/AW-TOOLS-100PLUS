import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TextToBinary: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const convertToBinary = () => {
    const binary = input.split('').map(char => {
      return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
    setOutput(binary);
  };

  return (
    <ToolWrapper
      title="Text to Binary"
      description="Convert text to binary code"
      icon="0️⃣1️⃣"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-binary-output.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to convert to binary..."
        />
      </div>
      <button className="btn btn-primary" onClick={convertToBinary}>Convert to Binary</button>
    </ToolWrapper>
  );
};

export default TextToBinary;
