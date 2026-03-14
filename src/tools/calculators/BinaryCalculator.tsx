import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const BinaryCalculator: React.FC = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply' | 'divide'>('add');
  const [output, setOutput] = useState('');

  const toDecimal = (bin: string) => parseInt(bin, 2);
  const toBinary = (dec: number) => (dec >>> 0).toString(2);

  const calculate = () => {
    const n1 = toDecimal(num1);
    const n2 = toDecimal(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      setOutput('Invalid binary input');
      return;
    }
    
    let result = 0;
    switch (operation) {
      case 'add': result = n1 + n2; break;
      case 'subtract': result = n1 - n2; break;
      case 'multiply': result = n1 * n2; break;
      case 'divide': result = n2 !== 0 ? Math.floor(n1 / n2) : 0; break;
    }
    
    setOutput(`Binary: ${toBinary(result)}\nDecimal: ${result}`);
  };

  return (
    <ToolWrapper
      title="Binary Calculator"
      description="Perform binary arithmetic operations"
      icon="0️⃣1️⃣"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-5">
          <label htmlFor="num1" className="form-label">Binary Number 1:</label>
          <input
            type="text"
            id="num1"
            className="form-control font-monospace"
            value={num1}
            onChange={(e) => setNum1(e.target.value.replace(/[^01]/g, ''))}
            placeholder="1010"
          />
        </div>
        <div className="col-md-2 d-flex align-items-end">
          <select
            className="form-select"
            value={operation}
            onChange={(e) => setOperation(e.target.value as typeof operation)}
          >
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">×</option>
            <option value="divide">÷</option>
          </select>
        </div>
        <div className="col-md-5">
          <label htmlFor="num2" className="form-label">Binary Number 2:</label>
          <input
            type="text"
            id="num2"
            className="form-control font-monospace"
            value={num2}
            onChange={(e) => setNum2(e.target.value.replace(/[^01]/g, ''))}
            placeholder="1100"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={calculate}>Calculate</button>
    </ToolWrapper>
  );
};

export default BinaryCalculator;
