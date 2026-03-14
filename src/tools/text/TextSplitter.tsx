import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TextSplitter: React.FC = () => {
  const [input, setInput] = useState('');
  const [delimiter, setDelimiter] = useState(',');
  const [output, setOutput] = useState('');

  const split = () => {
    const parts = input.split(delimiter);
    setOutput(parts.map((p, i) => `[${i}]: ${p}`).join('\n'));
  };

  return (
    <ToolWrapper
      title="Text Splitter"
      description="Split text by delimiter"
      icon="✂️"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-split-text.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to split..."
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
          placeholder="e.g., comma, space, semicolon"
        />
        <div className="form-text">Common delimiters: , (comma), ; (semicolon), | (pipe), space</div>
      </div>
      <button className="btn btn-primary" onClick={split}>Split Text</button>
    </ToolWrapper>
  );
};

export default TextSplitter;
