import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const PhoneValidator: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('US');
  const [result, setResult] = useState<{ valid: boolean; message: string; formatted: string } | null>(null);

  const validate = () => {
    const patterns: Record<string, { regex: RegExp; format: string }> = {
      US: {
        regex: /^(\+1)?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
        format: '+1 (XXX) XXX-XXXX'
      },
      UK: {
        regex: /^(\+44)?[-.\s]?\(?\d{3,5}\)?[-.\s]?\d{6,7}$/,
        format: '+44 XXXX XXXXXX'
      },
      IN: {
        regex: /^(\+91)?[-.\s]?\d{10}$/,
        format: '+91 XXXXX XXXXX'
      },
      AU: {
        regex: /^(\+61)?[-.\s]?\(?\d{2,3}\)?[-.\s]?\d{3}[-.\s]?\d{3}$/,
        format: '+61 X XXXX XXX'
      },
      DE: {
        regex: /^(\+49)?[-.\s]?\(?\d{3,5}\)?[-.\s]?\d{4,9}$/,
        format: '+49 XXX XXXXXXX'
      }
    };

    const pattern = patterns[country];
    const valid = pattern.regex.test(phone.replace(/\s/g, ''));
    
    setResult({
      valid,
      message: valid ? 'Valid phone number' : 'Invalid phone number format',
      formatted: pattern.format
    });
  };

  return (
    <ToolWrapper
      title="Phone Validator"
      description="Validate phone numbers"
      icon="📱"
      inputValue={phone}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="country" className="form-label">Country:</label>
          <select
            id="country"
            className="form-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>
      
      <button className="btn btn-primary" onClick={validate}>Validate</button>
      
      {result && (
        <>
          <div className={`alert mt-3 ${result.valid ? 'alert-success' : 'alert-danger'}`}>
            <strong>{result.valid ? '✓ Valid' : '✗ Invalid'}:</strong> {result.message}
          </div>
          {!result.valid && (
            <div className="alert alert-info">
              Expected format: {result.formatted}
            </div>
          )}
        </>
      )}
    </ToolWrapper>
  );
};

export default PhoneValidator;
