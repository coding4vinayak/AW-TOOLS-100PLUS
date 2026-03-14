import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CSSMinifier: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const minify = () => {
    let minified = input
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Collapse whitespace
      .replace(/\s*([{}:;,])\s*/g, '$1') // Remove spaces around special chars
      .replace(/;}/g, '}') // Remove trailing semicolons
      .trim();
    setOutput(minified);
  };

  return (
    <ToolWrapper
      title="CSS Minifier"
      description="Minify CSS code"
      icon="🗜️"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter CSS:</label>
        <textarea
          id="input"
          className="form-control font-monospace"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='body { color: red; margin: 0; }'
        />
      </div>
      <button className="btn btn-primary" onClick={minify}>Minify CSS</button>
    </ToolWrapper>
  );
};

export default CSSMinifier;
