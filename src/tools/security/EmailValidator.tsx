import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const EmailValidator: React.FC = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<{ valid: boolean; message: string } | null>(null);

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(email);
    
    let message = '';
    if (valid) {
      message = 'Valid email address';
    } else {
      if (!email.includes('@')) message = 'Missing @ symbol';
      else if (!email.includes('.')) message = 'Missing domain extension';
      else if (email.startsWith('@') || email.endsWith('@')) message = 'Invalid @ position';
      else message = 'Invalid email format';
    }
    
    setResult({ valid, message });
  };

  return (
    <ToolWrapper
      title="Email Validator"
      description="Validate email addresses"
      icon="📧"
      inputValue={email}
    >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Enter Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
        />
      </div>
      
      <button className="btn btn-primary" onClick={validate}>Validate</button>
      
      {result && (
        <div className={`alert mt-3 ${result.valid ? 'alert-success' : 'alert-danger'}`}>
          <strong>{result.valid ? '✓ Valid' : '✗ Invalid'}:</strong> {result.message}
        </div>
      )}
    </ToolWrapper>
  );
};

export default EmailValidator;
