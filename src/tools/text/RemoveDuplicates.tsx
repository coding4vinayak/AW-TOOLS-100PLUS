import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const RemoveDuplicates: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);

  const handleRemove = () => {
    const lines = input.split('\n');
    const seen = new Set<string>();
    const result: string[] = [];

    lines.forEach(line => {
      const key = caseSensitive ? line : line.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        result.push(line);
      }
    });

    setOutput(result.join('\n'));
  };

  return (
    <ToolWrapper
      title="Remove Duplicate Lines"
      description="Remove duplicate lines from text"
      icon="🗑️"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-unique-lines.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter lines of text..."
        />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="caseSensitive"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="caseSensitive">
            Case sensitive
          </label>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleRemove}>Remove Duplicates</button>
    </ToolWrapper>
  );
};

export default RemoveDuplicates;
