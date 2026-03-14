import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const AlternatingCase: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [startWith, setStartWith] = useState<'upper' | 'lower'>('upper');

  const alternate = () => {
    let isUpper = startWith === 'upper';
    const result = input.split('').map(char => {
      if (/[a-zA-Z]/.test(char)) {
        const converted = isUpper ? char.toUpperCase() : char.toLowerCase();
        isUpper = !isUpper;
        return converted;
      }
      return char;
    }).join('');
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Alternating Case"
      description="Create alternating uppercase/lowercase pattern"
      icon="〰️"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-alternating-case.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text for alternating case..."
        />
      </div>
      <div className="mb-3">
        <label className="form-label d-block">Start with:</label>
        <div className="btn-group" role="group">
          <button
            className={`btn ${startWith === 'upper' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setStartWith('upper')}
          >
            Uppercase
          </button>
          <button
            className={`btn ${startWith === 'lower' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setStartWith('lower')}
          >
            Lowercase
          </button>
        </div>
      </div>
      <button className="btn btn-primary" onClick={alternate}>Apply Alternating Case</button>
    </ToolWrapper>
  );
};

export default AlternatingCase;
