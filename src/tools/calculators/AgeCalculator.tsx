import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const AgeCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState('');
  const [output, setOutput] = useState('');

  const calculate = () => {
    if (!birthDate) return;
    
    const birth = new Date(birthDate);
    const now = new Date();
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    
    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    const totalDays = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    
    setOutput(`Age: ${years} years, ${months} months, ${days} days\n\nTotal:\n- ${totalMonths} months\n- ${totalWeeks} weeks\n- ${totalDays} days`);
  };

  return (
    <ToolWrapper
      title="Age Calculator"
      description="Calculate age from birth date"
      icon="🎂"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="birthDate" className="form-label">Date of Birth:</label>
        <input
          type="date"
          id="birthDate"
          className="form-control"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={calculate}>Calculate Age</button>
    </ToolWrapper>
  );
};

export default AgeCalculator;
