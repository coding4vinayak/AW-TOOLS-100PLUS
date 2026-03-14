import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CSSFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const format = () => {
    let css = input.trim();
    let formatted = '';
    let indent = 0;
    
    css.split(/([{};])/).forEach(token => {
      if (!token) return;
      
      if (token === '{') {
        formatted += ' {\n';
        indent++;
        formatted += '  '.repeat(indent);
      } else if (token === '}') {
        formatted = formatted.trimEnd();
        formatted += '\n';
        indent--;
        formatted += '  '.repeat(indent) + '}\n';
        formatted += '  '.repeat(indent);
      } else if (token === ';') {
        formatted += ';\n' + '  '.repeat(indent);
      } else {
        formatted += token.trim();
      }
    });
    
    setOutput(formatted.trim());
  };

  return (
    <ToolWrapper
      title="CSS Formatter"
      description="Format and beautify CSS"
      icon="🎨"
      inputValue={input}
      outputValue={output}
      outputLabel="Formatted CSS"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-formatted.css"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter CSS:</label>
        <textarea
          id="input"
          className="form-control font-monospace"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='body{color:red;margin:0;}'
        />
      </div>
      <button className="btn btn-primary" onClick={format}>Format CSS</button>
    </ToolWrapper>
  );
};

export default CSSFormatter;
