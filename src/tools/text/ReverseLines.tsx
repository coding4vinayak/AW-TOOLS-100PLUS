import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const ReverseLines: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const reverse = () => {
    const lines = input.split('\n');
    setOutput(lines.reverse().join('\n'));
  };

  return (
    <ToolWrapper
      title="Reverse Lines"
      description="Reverse the order of lines"
      icon="⏪"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-reversed-lines.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter lines to reverse..."
        />
      </div>
      <button className="btn btn-primary" onClick={reverse}>Reverse Lines</button>
    </ToolWrapper>
  );
};

export default ReverseLines;
