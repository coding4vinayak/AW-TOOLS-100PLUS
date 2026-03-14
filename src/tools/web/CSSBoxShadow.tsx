import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CSSBoxShadow: React.FC = () => {
  const [horizontal, setHorizontal] = useState(5);
  const [vertical, setVertical] = useState(5);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#000000');
  const [opacity, setOpacity] = useState(0.3);
  const [inset, setInset] = useState(false);
  const [output, setOutput] = useState('');

  const generate = () => {
    const rgbaColor = color + Math.round(opacity * 255).toString(16).padStart(2, '0');
    const shadow = `${inset ? 'inset ' : ''}${horizontal}px ${vertical}px ${blur}px ${spread}px ${rgbaColor}`;
    setOutput(`box-shadow: ${shadow};`);
  };

  return (
    <ToolWrapper
      title="CSS Box Shadow Generator"
      description="Generate CSS box-shadow property"
      icon="📦"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <label className="form-label">Horizontal Offset: {horizontal}px</label>
          <input
            type="range"
            className="form-range"
            min="-50"
            max="50"
            value={horizontal}
            onChange={(e) => setHorizontal(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Vertical Offset: {vertical}px</label>
          <input
            type="range"
            className="form-range"
            min="-50"
            max="50"
            value={vertical}
            onChange={(e) => setVertical(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Blur Radius: {blur}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="100"
            value={blur}
            onChange={(e) => setBlur(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Spread Radius: {spread}px</label>
          <input
            type="range"
            className="form-range"
            min="-50"
            max="50"
            value={spread}
            onChange={(e) => setSpread(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Color:</label>
          <input
            type="color"
            className="form-control form-control-color w-100"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Opacity: {opacity}</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="1"
            step="0.1"
            value={opacity}
            onChange={(e) => setOpacity(parseFloat(e.target.value))}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="inset"
              checked={inset}
              onChange={(e) => setInset(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="inset">Inset</label>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div
          className="border rounded p-4 text-center"
          style={{ boxShadow: output.replace('box-shadow: ', '').replace(';', '') }}
        >
          Preview Box
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate CSS</button>
    </ToolWrapper>
  );
};

export default CSSBoxShadow;
