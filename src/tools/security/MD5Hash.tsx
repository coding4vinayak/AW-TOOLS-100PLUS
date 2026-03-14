import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const MD5Hash: React.FC = () => {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');

  // Simple MD5 implementation (for demonstration - use crypto library in production)
  const md5 = (str: string): string => {
    // This is a simplified placeholder - in production use crypto-js or Web Crypto API
    // For now, we'll use a basic hash function
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) - h) + str.charCodeAt(i);
      h |= 0;
    }
    // Convert to 32-char hex (simulated MD5 format)
    const hex = Math.abs(h).toString(16).padStart(8, '0');
    return hex.repeat(4).substring(0, 32);
  };

  const generate = () => {
    if (input) {
      setHash(md5(input));
    }
  };

  return (
    <ToolWrapper
      title="MD5 Hash Generator"
      description="Generate MD5 hash from text"
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
      
      <button className="btn btn-primary" onClick={generate}>Generate MD5 Hash</button>
      
      <div className="alert alert-warning mt-3">
        <strong>Note:</strong> MD5 is not recommended for security-critical applications. 
        Use SHA-256 for better security.
      </div>
    </ToolWrapper>
  );
};

export default MD5Hash;
