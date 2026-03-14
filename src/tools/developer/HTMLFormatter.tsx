import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const HTMLFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const format = () => {
    let html = input.trim();
    let formatted = '';
    let indent = 0;
    
    html.split(/>\s*</).forEach((node, index) => {
      if (index === 0) {
        formatted += node;
        return;
      }
      
      if (node.match(/^\/\w/)) {
        indent--;
      }
      
      formatted += '\n' + '  '.repeat(indent) + '<' + node + '>';
      
      if (node.match(/^<?\w[^>]*[^\/]$/) && !node.startsWith('?') && !node.startsWith('!')) {
        indent++;
      }
    });
    
    setOutput(formatted.trim());
  };

  return (
    <ToolWrapper
      title="HTML Formatter"
      description="Format and beautify HTML code"
      icon="🌐"
      inputValue={input}
      outputValue={output}
      outputLabel="Formatted HTML"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-formatted.html"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter HTML:</label>
        <textarea
          id="input"
          className="form-control font-monospace"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='<div><p>Hello</p></div>'
        />
      </div>
      <button className="btn btn-primary" onClick={format}>Format HTML</button>
    </ToolWrapper>
  );
};

export default HTMLFormatter;
