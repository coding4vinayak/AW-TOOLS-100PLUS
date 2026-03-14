import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const JSFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const format = () => {
    // Simple JS formatter - for production, use a library like prettier
    let formatted = input
      .replace(/\{/g, '{\n')
      .replace(/\}/g, '\n}')
      .replace(/;/g, ';\n')
      .replace(/\n\s*\n/g, '\n');
    
    // Add indentation
    const lines = formatted.split('\n');
    let indent = 0;
    formatted = lines.map(line => {
      line = line.trim();
      if (line.startsWith('}')) indent--;
      const result = '  '.repeat(Math.max(0, indent)) + line;
      if (line.endsWith('{')) indent++;
      return result;
    }).join('\n');
    
    setOutput(formatted);
  };

  return (
    <ToolWrapper
      title="JavaScript Formatter"
      description="Format and beautify JavaScript"
      icon="📜"
      inputValue={input}
      outputValue={output}
      outputLabel="Formatted JavaScript"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-formatted.js"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter JavaScript:</label>
        <textarea
          id="input"
          className="form-control font-monospace"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='function hello(){console.log("world");}'
        />
      </div>
      <button className="btn btn-primary" onClick={format}>Format JavaScript</button>
    </ToolWrapper>
  );
};

export default JSFormatter;
