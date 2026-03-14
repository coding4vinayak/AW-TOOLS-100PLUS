import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const FindAndReplace: React.FC = () => {
  const [input, setInput] = useState('');
  const [findText, setFindText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [output, setOutput] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [replaceAll, setReplaceAll] = useState(true);

  const handleReplace = () => {
    if (!findText) return;
    
    let result = input;
    if (caseSensitive) {
      if (replaceAll) {
        result = input.split(findText).join(replaceText);
      } else {
        result = input.replace(findText, replaceText);
      }
    } else {
      const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), replaceAll ? 'gi' : 'i');
      result = input.replace(regex, replaceText);
    }
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Find and Replace"
      description="Find and replace text with options"
      icon="🔍"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-replaced-text.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste your text here..."
        />
      </div>
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="find" className="form-label">Find:</label>
          <input
            type="text"
            id="find"
            className="form-control"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
            placeholder="Text to find"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="replace" className="form-label">Replace with:</label>
          <input
            type="text"
            id="replace"
            className="form-control"
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
            placeholder="Replacement text"
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="form-check me-3 d-inline-block">
          <input
            type="checkbox"
            className="form-check-input"
            id="caseSensitive"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="caseSensitive">
            Case sensitive
          </label>
        </div>
        <div className="form-check d-inline-block">
          <input
            type="checkbox"
            className="form-check-input"
            id="replaceAll"
            checked={replaceAll}
            onChange={(e) => setReplaceAll(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="replaceAll">
            Replace all
          </label>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleReplace} disabled={!findText}>
        Replace
      </button>
    </ToolWrapper>
  );
};

export default FindAndReplace;
