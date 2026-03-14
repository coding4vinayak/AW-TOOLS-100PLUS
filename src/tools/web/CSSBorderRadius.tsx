import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CSSBorderRadius: React.FC = () => {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [output, setOutput] = useState('');

  const generate = () => {
    const radius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
    setOutput(`border-radius: ${radius};`);
  };

  return (
    <ToolWrapper
      title="CSS Border Radius Generator"
      description="Generate CSS border-radius property"
      icon="🔲"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label className="form-label">Top Left: {topLeft}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={topLeft}
            onChange={(e) => setTopLeft(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Top Right: {topRight}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={topRight}
            onChange={(e) => setTopRight(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Bottom Right: {bottomRight}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={bottomRight}
            onChange={(e) => setBottomRight(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Bottom Left: {bottomLeft}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={bottomLeft}
            onChange={(e) => setBottomLeft(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="mb-3">
        <div
          className="border bg-primary bg-opacity-10 p-4 text-center"
          style={{ borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` }}
        >
          Preview Box
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate CSS</button>
    </ToolWrapper>
  );
};

export default CSSBorderRadius;
