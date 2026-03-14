import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CSSGradientGenerator: React.FC = () => {
  const [type, setType] = useState<'linear' | 'radial'>('linear');
  const [direction, setDirection] = useState('to right');
  const [color1, setColor1] = useState('#2563eb');
  const [color2, setColor2] = useState('#7c3aed');
  const [angle, setAngle] = useState(90);
  const [output, setOutput] = useState('');

  const generate = () => {
    if (type === 'linear') {
      const dir = direction === 'angle' ? `${angle}deg` : direction;
      setOutput(`background: linear-gradient(${dir}, ${color1}, ${color2});`);
    } else {
      setOutput(`background: radial-gradient(circle, ${color1}, ${color2});`);
    }
  };

  return (
    <ToolWrapper
      title="CSS Gradient Generator"
      description="Create CSS gradient backgrounds"
      icon="🌈"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="type" className="form-label">Type:</label>
          <select
            id="type"
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value as 'linear' | 'radial')}
          >
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
          </select>
        </div>
        {type === 'linear' && (
          <>
            <div className="col-md-6">
              <label htmlFor="direction" className="form-label">Direction:</label>
              <select
                id="direction"
                className="form-select"
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
              >
                <option value="to right">To Right</option>
                <option value="to left">To Left</option>
                <option value="to bottom">To Bottom</option>
                <option value="to top">To Top</option>
                <option value="to bottom right">To Bottom Right</option>
                <option value="to bottom left">To Bottom Left</option>
                <option value="to top right">To Top Right</option>
                <option value="to top left">To Top Left</option>
                <option value="angle">Custom Angle</option>
              </select>
            </div>
            {direction === 'angle' && (
              <div className="col-md-6">
                <label className="form-label">Angle: {angle}°</label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="360"
                  value={angle}
                  onChange={(e) => setAngle(parseInt(e.target.value))}
                />
              </div>
            )}
          </>
        )}
        <div className="col-md-6">
          <label className="form-label">Color 1:</label>
          <input
            type="color"
            className="form-control form-control-color w-100"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Color 2:</label>
          <input
            type="color"
            className="form-control form-control-color w-100"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3">
        <div
          className="border rounded p-4 text-center text-white"
          style={{
            height: '150px',
            background: type === 'linear'
              ? `linear-gradient(${direction === 'angle' ? `${angle}deg` : direction}, ${color1}, ${color2})`
              : `radial-gradient(circle, ${color1}, ${color2})`
          }}
        >
          Preview
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate CSS</button>
    </ToolWrapper>
  );
};

export default CSSGradientGenerator;
