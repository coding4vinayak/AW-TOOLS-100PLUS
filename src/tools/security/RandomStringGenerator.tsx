import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const RandomStringGenerator: React.FC = () => {
  const [length, setLength] = useState(16);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [result, setResult] = useState('');

  const generate = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeLetters) chars += letters;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (chars === '') {
      setResult('Please select at least one option');
      return;
    }

    let str = '';
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setResult(str);
  };

  return (
    <ToolWrapper
      title="Random String Generator"
      description="Generate random strings for any purpose"
      icon="🎲"
      outputValue={result}
    >
      <div className="mb-3">
        <label className="form-label">String Length: {length}</label>
        <input
          type="range"
          className="form-range"
          min="4"
          max="128"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </div>
      
      <div className="mb-3">
        <div className="form-check me-3 d-inline-block">
          <input
            type="checkbox"
            className="form-check-input"
            id="letters"
            checked={includeLetters}
            onChange={(e) => setIncludeLetters(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="letters">Letters (a-z, A-Z)</label>
        </div>
        <div className="form-check me-3 d-inline-block">
          <input
            type="checkbox"
            className="form-check-input"
            id="numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="numbers">Numbers (0-9)</label>
        </div>
        <div className="form-check d-inline-block">
          <input
            type="checkbox"
            className="form-check-input"
            id="symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="symbols">Symbols</label>
        </div>
      </div>
      
      <button className="btn btn-primary" onClick={generate}>Generate Random String</button>
    </ToolWrapper>
  );
};

export default RandomStringGenerator;
