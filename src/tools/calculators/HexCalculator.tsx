import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const HexCalculator: React.FC = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply' | 'divide'>('add');
  const [output, setOutput] = useState('');

  const toDecimal = (hex: string) => parseInt(hex, 16);
  const toHex = (dec: number) => (dec >>> 0).toString(16).toUpperCase();

  const calculate = () => {
    const n1 = toDecimal(num1);
    const n2 = toDecimal(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      setOutput('Invalid hexadecimal input');
      return;
    }
    
    let result = 0;
    switch (operation) {
      case 'add': result = n1 + n2; break;
      case 'subtract': result = n1 - n2; break;
      case 'multiply': result = n1 * n2; break;
      case 'divide': result = n2 !== 0 ? Math.floor(n1 / n2) : 0; break;
    }
    
    setOutput(`Hexadecimal: ${toHex(result)}\nDecimal: ${result}`);
  };

  return (
    <ToolWrapper
      title="Hex Calculator"
      description="Perform hexadecimal arithmetic operations"
      icon="🔢"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-5">
          <label htmlFor="num1" className="form-label">Hex Number 1:</label>
          <input
            type="text"
            id="num1"
            className="form-control font-monospace"
            value={num1}
            onChange={(e) => setNum1(e.target.value.replace(/[^0-9A-Fa-f]/g, '').toUpperCase())}
            placeholder="1A"
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
          <label htmlFor="num2" className="form-label">Hex Number 2:</label>
          <input
            type="text"
            id="num2"
            className="form-control font-monospace"
            value={num2}
            onChange={(e) => setNum2(e.target.value.replace(/[^0-9A-Fa-f]/g, '').toUpperCase())}
            placeholder="2B"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={calculate}>Calculate</button>
    </ToolWrapper>
  );
};

export default HexCalculator;
