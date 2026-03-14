import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const LineShuffler: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const shuffle = () => {
    const lines = input.split('\n').filter(l => l.trim());
    // Fisher-Yates shuffle
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    setOutput(lines.join('\n'));
  };

  return (
    <ToolWrapper
      title="Line Shuffler"
      description="Randomize the order of lines"
      icon="🔀"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-shuffled-lines.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter lines to shuffle..."
        />
      </div>
      <button className="btn btn-primary" onClick={shuffle}>Shuffle Lines</button>
    </ToolWrapper>
  );
};

export default LineShuffler;
