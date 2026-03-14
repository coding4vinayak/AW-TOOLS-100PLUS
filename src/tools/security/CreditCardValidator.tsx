import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CreditCardValidator: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [result, setResult] = useState<{ valid: boolean; message: string; type: string } | null>(null);

  const luhnCheck = (num: string): boolean => {
    const digits = num.replace(/\D/g, '').split('').reverse();
    let sum = 0;
    
    for (let i = 0; i < digits.length; i++) {
      let digit = parseInt(digits[i]);
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    
    return sum % 10 === 0;
  };

  const getCardType = (num: string): string => {
    const patterns: Record<string, RegExp> = {
      'Visa': /^4/,
      'Mastercard': /^5[1-5]/,
      'American Express': /^3[47]/,
      'Discover': /^6(?:011|5)/,
      'JCB': /^35/,
      'Diners Club': /^3(?:0[0-5]|[68])/
    };
    
    for (const [type, pattern] of Object.entries(patterns)) {
      if (pattern.test(num)) return type;
    }
    return 'Unknown';
  };

  const validate = () => {
    const num = cardNumber.replace(/\s/g, '');
    const valid = luhnCheck(num) && num.length >= 13 && num.length <= 19;
    const type = getCardType(num);
    
    setResult({
      valid,
      message: valid ? 'Valid card number (Luhn check passed)' : 'Invalid card number',
      type
    });
  };

  return (
    <ToolWrapper
      title="Credit Card Validator"
      description="Validate credit card numbers using Luhn algorithm"
      icon="💳"
      inputValue={cardNumber}
    >
      <div className="mb-3">
        <label htmlFor="cardNumber" className="form-label">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          className="form-control"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value.replace(/[^\d\s]/g, ''))}
          placeholder="4111 1111 1111 1111"
          maxLength={19}
        />
        <div className="form-text">
          For testing only. Never enter real card numbers.
        </div>
      </div>
      
      <button className="btn btn-primary" onClick={validate}>Validate</button>
      
      {result && (
        <div className={`alert mt-3 ${result.valid ? 'alert-success' : 'alert-danger'}`}>
          <strong>{result.valid ? '✓ Valid' : '✗ Invalid'}:</strong> {result.message}
          {result.valid && <div><strong>Card Type:</strong> {result.type}</div>}
        </div>
      )}
    </ToolWrapper>
  );
};

export default CreditCardValidator;
