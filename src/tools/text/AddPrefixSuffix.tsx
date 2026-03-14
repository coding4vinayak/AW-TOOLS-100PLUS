import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const AddPrefixSuffix: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');

  const handleAdd = () => {
    const lines = input.split('\n');
    const result = lines.map(line => {
      if (!line.trim()) return line;
      return prefix + line + suffix;
    });
    setOutput(result.join('\n'));
  };

  return (
    <ToolWrapper
      title="Add Prefix/Suffix"
      description="Add prefix or suffix to each line"
      icon="➕"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-prefixed-suffixed-lines.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter lines..."
        />
      </div>
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="prefix" className="form-label">Prefix:</label>
          <input
            type="text"
            id="prefix"
            className="form-control"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            placeholder="e.g., - "
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="suffix" className="form-label">Suffix:</label>
          <input
            type="text"
            id="suffix"
            className="form-control"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
            placeholder="e.g., ,"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleAdd}>Add Prefix/Suffix</button>
    </ToolWrapper>
  );
};

export default AddPrefixSuffix;
