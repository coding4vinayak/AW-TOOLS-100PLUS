import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TextTrimmer: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [trimLines, setTrimLines] = useState(true);
  const [trimStart, setTrimStart] = useState(true);
  const [trimEnd, setTrimEnd] = useState(true);
  const [removeExtraSpaces, setRemoveExtraSpaces] = useState(false);

  const handleTrim = () => {
    let result = input;
    
    if (trimLines) {
      result = result.split('\n').map(line => {
        let trimmed = line;
        if (trimStart) trimmed = trimmed.trimStart();
        if (trimEnd) trimmed = trimmed.trimEnd();
        return trimmed;
      }).join('\n');
    } else {
      if (trimStart) result = result.trimStart();
      if (trimEnd) result = result.trimEnd();
    }
    
    if (removeExtraSpaces) {
      result = result.replace(/\s+/g, ' ');
    }
    
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Text Trimmer"
      description="Trim whitespace from text"
      icon="✂️"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-trimmed-text.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to trim..."
        />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="trimLines"
            checked={trimLines}
            onChange={(e) => setTrimLines(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="trimLines">
            Trim each line
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="trimStart"
            checked={trimStart}
            onChange={(e) => setTrimStart(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="trimStart">
            Trim start
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="trimEnd"
            checked={trimEnd}
            onChange={(e) => setTrimEnd(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="trimEnd">
            Trim end
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="removeExtraSpaces"
            checked={removeExtraSpaces}
            onChange={(e) => setRemoveExtraSpaces(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="removeExtraSpaces">
            Remove extra spaces
          </label>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleTrim}>Trim Text</button>
    </ToolWrapper>
  );
};

export default TextTrimmer;
