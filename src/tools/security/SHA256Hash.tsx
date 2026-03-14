import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const SHA256Hash: React.FC = () => {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  const generate = async () => {
    if (input) {
      try {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        setHash(hashHex);
      } catch (e) {
        setHash('Error: Web Crypto API not available');
      }
    }
  };

  return (
    <ToolWrapper
      title="SHA-256 Hash Generator"
      description="Generate SHA-256 hash from text"
      icon="🔏"
      outputValue={hash}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter Text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash..."
        />
      </div>
      
      <button className="btn btn-primary" onClick={generate}>Generate SHA-256 Hash</button>
      
      <div className="alert alert-success mt-3">
        <strong>Note:</strong> SHA-256 is a cryptographically secure hash function 
        recommended for security applications.
      </div>
    </ToolWrapper>
  );
};

export default SHA256Hash;
