import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const HTMLMinifier: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const minify = () => {
    let minified = input
      .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
      .replace(/\s+/g, ' ') // Collapse whitespace
      .replace(/>\s+</g, '><') // Remove spaces between tags
      .trim();
    setOutput(minified);
  };

  return (
    <ToolWrapper
      title="HTML Minifier"
      description="Minify HTML code"
      icon="🗜️"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter HTML:</label>
        <textarea
          id="input"
          className="form-control font-monospace"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='<div>  <p> Hello </p>  </div>'
        />
      </div>
      <button className="btn btn-primary" onClick={minify}>Minify HTML</button>
    </ToolWrapper>
  );
};

export default HTMLMinifier;
