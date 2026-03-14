import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const DateCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');
  const [days, setDays] = useState('');
  const [output, setOutput] = useState('');

  const calculate = () => {
    if (!startDate || !days) return;
    
    const date = new Date(startDate);
    const d = parseInt(days);
    
    if (operation === 'add') {
      date.setDate(date.getDate() + d);
    } else {
      date.setDate(date.getDate() - d);
    }
    
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setOutput(`Result: ${date.toLocaleDateString('en-US', options)}\n(${date.toISOString().split('T')[0]})`);
  };

  return (
    <ToolWrapper
      title="Date Calculator"
      description="Add or subtract days from a date"
      icon="📅"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="startDate" className="form-label">Start Date:</label>
          <input
            type="date"
            id="startDate"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="operation" className="form-label">Operation:</label>
          <select
            id="operation"
            className="form-select"
            value={operation}
            onChange={(e) => setOperation(e.target.value as 'add' | 'subtract')}
          >
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="days" className="form-label">Number of Days:</label>
          <input
            type="number"
            id="days"
            className="form-control"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="30"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={calculate}>Calculate</button>
    </ToolWrapper>
  );
};

export default DateCalculator;
