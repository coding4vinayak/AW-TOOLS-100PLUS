import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TextReverser: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const reverseText = () => {
    setOutput(input.split('').reverse().join(''));
  };

  const reverseWords = () => {
    setOutput(input.split(' ').reverse().join(' '));
  };

  const reverseLines = () => {
    setOutput(input.split('\n').reverse().join('\n'));
  };

  return (
    <ToolWrapper
      title="Text Reverser"
      description="Reverse text, words, or lines"
      icon="🔄"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-reversed-text.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste your text here..."
        />
      </div>
      <div className="d-flex flex-wrap gap-2 mb-3">
        <button className="btn btn-primary" onClick={reverseText}>Reverse Text</button>
        <button className="btn btn-outline-primary" onClick={reverseWords}>Reverse Words</button>
        <button className="btn btn-outline-primary" onClick={reverseLines}>Reverse Lines</button>
      </div>
    </ToolWrapper>
  );
};

export default TextReverser;
