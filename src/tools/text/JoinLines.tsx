import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const JoinLines: React.FC = () => {
  const [input, setInput] = useState('');
  const [delimiter, setDelimiter] = useState(', ');
  const [output, setOutput] = useState('');

  const join = () => {
    const lines = input.split('\n').filter(l => l.trim());
    setOutput(lines.join(delimiter));
  };

  return (
    <ToolWrapper
      title="Join Lines"
      description="Join lines with a delimiter"
      icon="🔗"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-joined-lines.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter lines to join..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="delimiter" className="form-label">Delimiter:</label>
        <input
          type="text"
          id="delimiter"
          className="form-control"
          value={delimiter}
          onChange={(e) => setDelimiter(e.target.value)}
          placeholder="e.g., comma, space"
        />
      </div>
      <button className="btn btn-primary" onClick={join}>Join Lines</button>
    </ToolWrapper>
  );
};

export default JoinLines;
