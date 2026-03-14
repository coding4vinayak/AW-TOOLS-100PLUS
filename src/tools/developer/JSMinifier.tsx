import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const JSMinifier: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const minify = () => {
    let minified = input
      .replace(/\/\/.*$/gm, '') // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
      .replace(/\n/g, '') // Remove newlines
      .replace(/\s+/g, ' ') // Collapse whitespace
      .replace(/\s*([{};:,()=+\-*/&|!<>?.])\s*/g, '$1') // Remove spaces around operators
      .trim();
    setOutput(minified);
  };

  return (
    <ToolWrapper
      title="JavaScript Minifier"
      description="Minify JavaScript code"
      icon="🗜️"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter JavaScript:</label>
        <textarea
          id="input"
          className="form-control font-monospace"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='function hello() { console.log("world"); }'
        />
      </div>
      <button className="btn btn-primary" onClick={minify}>Minify JavaScript</button>
    </ToolWrapper>
  );
};

export default JSMinifier;
