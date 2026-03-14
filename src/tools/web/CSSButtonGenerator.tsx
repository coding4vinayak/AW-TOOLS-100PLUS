import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CSSButtonGenerator: React.FC = () => {
  const [bgColor, setBgColor] = useState('#2563eb');
  const [textColor, setTextColor] = useState('#ffffff');
  const [paddingX, setPaddingX] = useState(20);
  const [paddingY, setPaddingY] = useState(10);
  const [borderRadius, setBorderRadius] = useState(5);
  const [fontSize, setFontSize] = useState(16);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderColor, setBorderColor] = useState('#000000');
  const [output, setOutput] = useState('');

  const generate = () => {
    const css = `.btn-custom {
  background-color: ${bgColor};
  color: ${textColor};
  padding: ${paddingY}px ${paddingX}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  border: ${borderWidth > 0 ? `${borderWidth}px solid ${borderColor}` : 'none'};
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-custom:hover {
  opacity: 0.9;
}`;
    setOutput(css);
  };

  return (
    <ToolWrapper
      title="CSS Button Generator"
      description="Create custom button styles"
      icon="🔘"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <label className="form-label">Background Color:</label>
          <input
            type="color"
            className="form-control form-control-color w-100"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Text Color:</label>
          <input
            type="color"
            className="form-control form-control-color w-100"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Font Size: {fontSize}px</label>
          <input
            type="range"
            className="form-range"
            min="10"
            max="32"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Padding X: {paddingX}px</label>
          <input
            type="range"
            className="form-range"
            min="5"
            max="50"
            value={paddingX}
            onChange={(e) => setPaddingX(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Padding Y: {paddingY}px</label>
          <input
            type="range"
            className="form-range"
            min="5"
            max="30"
            value={paddingY}
            onChange={(e) => setPaddingY(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Border Radius: {borderRadius}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="50"
            value={borderRadius}
            onChange={(e) => setBorderRadius(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Border Width: {borderWidth}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            value={borderWidth}
            onChange={(e) => setBorderWidth(parseInt(e.target.value))}
          />
        </div>
        {borderWidth > 0 && (
          <div className="col-md-6">
            <label className="form-label">Border Color:</label>
            <input
              type="color"
              className="form-control form-control-color w-100"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="mb-3">
        <button
          className="border-0"
          style={{
            backgroundColor: bgColor,
            color: textColor,
            padding: `${paddingY}px ${paddingX}px`,
            borderRadius: `${borderRadius}px`,
            fontSize: `${fontSize}px`,
            border: borderWidth > 0 ? `${borderWidth}px solid ${borderColor}` : 'none'
          }}
        >
          Preview Button
        </button>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate CSS</button>
    </ToolWrapper>
  );
};

export default CSSButtonGenerator;
