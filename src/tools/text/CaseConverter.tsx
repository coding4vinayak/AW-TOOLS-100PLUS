import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CaseConverter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const toUpperCase = () => setOutput(input.toUpperCase());
  const toLowerCase = () => setOutput(input.toLowerCase());
  
  const toTitleCase = () => {
    setOutput(input.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    ));
  };
  
  const toSentenceCase = () => {
    setOutput(input.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase()));
  };

  const toCamelCase = () => {
    setOutput(input.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    ).replace(/\s+/g, ''));
  };

  const toKebabCase = () => {
    setOutput(input.toLowerCase().replace(/\s+/g, '-'));
  };

  const toSnakeCase = () => {
    setOutput(input.toLowerCase().replace(/\s+/g, '_'));
  };

  return (
    <ToolWrapper
      title="Case Converter"
      description="Convert text to various cases"
      icon="🔠"
      inputValue={input}
      outputValue={output}
      outputLabel="Converted Text"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-converted-text.txt"
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
        <button className="btn btn-outline-primary" onClick={toUpperCase}>UPPERCASE</button>
        <button className="btn btn-outline-primary" onClick={toLowerCase}>lowercase</button>
        <button className="btn btn-outline-primary" onClick={toTitleCase}>Title Case</button>
        <button className="btn btn-outline-primary" onClick={toSentenceCase}>Sentence case</button>
        <button className="btn btn-outline-primary" onClick={toCamelCase}>camelCase</button>
        <button className="btn btn-outline-primary" onClick={toKebabCase}>kebab-case</button>
        <button className="btn btn-outline-primary" onClick={toSnakeCase}>snake_case</button>
      </div>
      {output && (
        <div className="mb-3">
          <label className="form-label">Result:</label>
          <textarea
            className="form-control"
            rows={5}
            value={output}
            readOnly
          />
        </div>
      )}
    </ToolWrapper>
  );
};

export default CaseConverter;
