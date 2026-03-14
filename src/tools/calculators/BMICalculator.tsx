import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [output, setOutput] = useState('');

  const calculate = () => {
    let h = parseFloat(height);
    let w = parseFloat(weight);
    let bmi = 0;

    if (isNaN(h) || isNaN(w)) return;

    if (unit === 'metric') {
      // Height in cm, weight in kg
      bmi = w / ((h / 100) ** 2);
    } else {
      // Height in inches, weight in lbs
      bmi = 703 * w / (h ** 2);
    }

    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    setOutput(`BMI: ${bmi.toFixed(1)}\nCategory: ${category}`);
  };

  return (
    <ToolWrapper
      title="BMI Calculator"
      description="Calculate Body Mass Index"
      icon="⚖️"
      outputValue={output}
    >
      <div className="mb-3">
        <div className="btn-group" role="group">
          <button
            className={`btn ${unit === 'metric' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setUnit('metric')}
          >
            Metric (cm/kg)
          </button>
          <button
            className={`btn ${unit === 'imperial' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setUnit('imperial')}
          >
            Imperial (in/lbs)
          </button>
        </div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="height" className="form-label">Height ({unit === 'metric' ? 'cm' : 'in'}):</label>
          <input
            type="number"
            id="height"
            className="form-control"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === 'metric' ? '175' : '69'}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="weight" className="form-label">Weight ({unit === 'metric' ? 'kg' : 'lbs'}):</label>
          <input
            type="number"
            id="weight"
            className="form-control"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'metric' ? '70' : '154'}
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={calculate}>Calculate BMI</button>
    </ToolWrapper>
  );
};

export default BMICalculator;
