import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generate = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (chars === '') {
      setPassword('Please select at least one option');
      return;
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <ToolWrapper
      title="Password Generator"
      description="Generate secure random passwords"
      icon="🔐"
      inputValue={length.toString()}
      outputValue={password}
      outputLabel="Generated Password"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-passwords.txt"
    >
      <div className="mb-3">
        <label className="form-label">Password Length: {length}</label>
        <input
          type="range"
          className="form-range"
          min="4"
          max="64"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </div>
      
      <div className="mb-3">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="uppercase"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="uppercase">Uppercase (A-Z)</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="lowercase"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="lowercase">Lowercase (a-z)</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="numbers">Numbers (0-9)</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="symbols">Symbols (!@#$...)</label>
        </div>
      </div>
      
      <button className="btn btn-primary" onClick={generate}>Generate Password</button>
    </ToolWrapper>
  );
};

export default PasswordGenerator;
