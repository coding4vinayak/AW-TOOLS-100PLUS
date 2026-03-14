import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const ToggleCase: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const toggle = () => {
    const result = input.split('').map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      }
      return char.toUpperCase();
    }).join('');
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Toggle Case"
      description="Swap the case of each letter"
      icon="🔃"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-toggled-case.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to toggle case..."
        />
      </div>
      <button className="btn btn-primary" onClick={toggle}>Toggle Case</button>
    </ToolWrapper>
  );
};

export default ToggleCase;
