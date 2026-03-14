import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TextComparator: React.FC = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [output, setOutput] = useState('');

  const compare = () => {
    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');
    
    const onlyIn1 = lines1.filter(line => !lines2.includes(line));
    const onlyIn2 = lines2.filter(line => !lines1.includes(line));
    const inBoth = lines1.filter(line => lines2.includes(line));

    let result = '=== Comparison Results ===\n\n';
    result += `Lines only in Text 1: ${onlyIn1.length}\n`;
    onlyIn1.forEach(l => result += `  - ${l}\n`);
    result += `\nLines only in Text 2: ${onlyIn2.length}\n`;
    onlyIn2.forEach(l => result += `  - ${l}\n`);
    result += `\nLines in both: ${inBoth.length}\n`;
    
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Text Comparator"
      description="Compare two texts and find differences"
      icon="⚖️"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-text-comparison.txt"
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="text1" className="form-label">Text 1:</label>
          <textarea
            id="text1"
            className="form-control"
            rows={8}
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Enter first text..."
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="text2" className="form-label">Text 2:</label>
          <textarea
            id="text2"
            className="form-control"
            rows={8}
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Enter second text..."
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={compare}>Compare Texts</button>
    </ToolWrapper>
  );
};

export default TextComparator;
