import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const SQLFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const format = () => {
    const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'ON', 'AND', 'OR', 'ORDER', 'BY', 'GROUP', 'HAVING', 'LIMIT', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE', 'CREATE', 'TABLE', 'ALTER', 'DROP'];
    
    let formatted = input.toUpperCase().split(/\s+/).map(word => {
      return keywords.includes(word) ? '\n' + word : word;
    }).join(' ');
    
    setOutput(formatted.trim());
  };

  return (
    <ToolWrapper
      title="SQL Formatter"
      description="Format SQL queries"
      icon="🗄️"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter SQL:</label>
        <textarea
          id="input"
          className="form-control font-monospace"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='SELECT * FROM users WHERE id = 1'
        />
      </div>
      <button className="btn btn-primary" onClick={format}>Format SQL</button>
    </ToolWrapper>
  );
};

export default SQLFormatter;
