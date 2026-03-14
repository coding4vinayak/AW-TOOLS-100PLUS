import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const DiscountCalculator: React.FC = () => {
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [output, setOutput] = useState('');

  const calculate = () => {
    const p = parseFloat(price);
    const d = parseFloat(discount);
    if (!isNaN(p) && !isNaN(d)) {
      const saved = (p * d) / 100;
      const final = p - saved;
      setOutput(`Original Price: $${p.toFixed(2)}\nDiscount: ${d}%\nAmount Saved: $${saved.toFixed(2)}\nFinal Price: $${final.toFixed(2)}`);
    }
  };

  return (
    <ToolWrapper
      title="Discount Calculator"
      description="Calculate discounts and sale prices"
      icon="🏷️"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">Original Price ($):</label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="100"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="discount" className="form-label">Discount (%):</label>
          <input
            type="number"
            id="discount"
            className="form-control"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="20"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={calculate}>Calculate</button>
    </ToolWrapper>
  );
};

export default DiscountCalculator;
