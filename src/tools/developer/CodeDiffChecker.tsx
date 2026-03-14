import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CodeDiffChecker: React.FC = () => {
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [output, setOutput] = useState('');

  const compare = () => {
    const lines1 = code1.split('\n');
    const lines2 = code2.split('\n');
    const maxLines = Math.max(lines1.length, lines2.length);
    
    let result = '';
    for (let i = 0; i < maxLines; i++) {
      const line1 = lines1[i] || '';
      const line2 = lines2[i] || '';
      
      if (line1 === line2) {
        result += `  ${i + 1}: ${line1}\n`;
      } else {
        if (line1) result += `- ${i + 1}: ${line1}\n`;
        if (line2) result += `+ ${i + 1}: ${line2}\n`;
      }
    }
    
    setOutput(result || 'No differences found');
  };

  return (
    <ToolWrapper
      title="Code Diff Checker"
      description="Compare two code snippets"
      icon="⚖️"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="code1" className="form-label">Original Code:</label>
          <textarea
            id="code1"
            className="form-control font-monospace"
            rows={10}
            value={code1}
            onChange={(e) => setCode1(e.target.value)}
            placeholder="Enter original code..."
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="code2" className="form-label">New Code:</label>
          <textarea
            id="code2"
            className="form-control font-monospace"
            rows={10}
            value={code2}
            onChange={(e) => setCode2(e.target.value)}
            placeholder="Enter new code..."
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={compare}>Compare Code</button>
    </ToolWrapper>
  );
};

export default CodeDiffChecker;
