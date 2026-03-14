import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const RemoveEmptyLines: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleRemove = () => {
    const result = input.split('\n').filter(line => line.trim()).join('\n');
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Remove Empty Lines"
      description="Remove blank lines from text"
      icon="🧹"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-trimmed-lines.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text with empty lines..."
        />
      </div>
      <button className="btn btn-primary" onClick={handleRemove}>Remove Empty Lines</button>
    </ToolWrapper>
  );
};

export default RemoveEmptyLines;
