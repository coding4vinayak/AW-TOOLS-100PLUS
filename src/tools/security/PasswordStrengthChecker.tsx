import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const PasswordStrengthChecker: React.FC = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);

  const checkStrength = (pwd: string) => {
    let score = 0;
    const checks: string[] = [];

    if (pwd.length >= 8) score++;
    else checks.push('Use at least 8 characters');

    if (pwd.length >= 12) score++;
    else checks.push('Consider using 12+ characters');

    if (/[a-z]/.test(pwd)) score++;
    else checks.push('Add lowercase letters');

    if (/[A-Z]/.test(pwd)) score++;
    else checks.push('Add uppercase letters');

    if (/[0-9]/.test(pwd)) score++;
    else checks.push('Add numbers');

    if (/[^a-zA-Z0-9]/.test(pwd)) score++;
    else checks.push('Add special characters');

    setStrength(score);
    setFeedback(checks);
  };

  const getStrengthLabel = () => {
    if (strength <= 2) return { text: 'Weak', class: 'text-danger' };
    if (strength <= 4) return { text: 'Medium', class: 'text-warning' };
    return { text: 'Strong', class: 'text-success' };
  };

  const label = getStrengthLabel();

  return (
    <ToolWrapper
      title="Password Strength Checker"
      description="Check how strong your password is"
      icon="💪"
      inputValue={password}
    >
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Enter Password:</label>
        <input
          type="text"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            checkStrength(e.target.value);
          }}
          placeholder="Enter password to check..."
        />
      </div>

      {password && (
        <>
          <div className="mb-3">
            <div className="d-flex justify-content-between mb-1">
              <span>Strength:</span>
              <span className={`fw-bold ${label.class}`}>{label.text}</span>
            </div>
            <div className="progress" style={{ height: '10px' }}>
              <div
                className={`progress-bar ${strength <= 2 ? 'bg-danger' : strength <= 4 ? 'bg-warning' : 'bg-success'}`}
                style={{ width: `${(strength / 6) * 100}%` }}
              />
            </div>
          </div>

          {feedback.length > 0 && (
            <div className="alert alert-info">
              <strong>Improvements:</strong>
              <ul className="mb-0 mt-2">
                {feedback.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {feedback.length === 0 && (
            <div className="alert alert-success">
              Great! Your password is strong.
            </div>
          )}
        </>
      )}
    </ToolWrapper>
  );
};

export default PasswordStrengthChecker;
