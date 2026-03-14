import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const RandomCase: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const randomize = () => {
    const result = input.split('').map(char => {
      if (/[a-zA-Z]/.test(char)) {
        return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
      }
      return char;
    }).join('');
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Random Case"
      description="Random uppercase/lowercase for each letter"
      icon="🎲"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-random-case.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to randomize case..."
        />
      </div>
      <button className="btn btn-primary" onClick={randomize}>Randomize Case</button>
    </ToolWrapper>
  );
};

export default RandomCase;
