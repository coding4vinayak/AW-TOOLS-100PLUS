import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const ClipPathGenerator: React.FC = () => {
  const [shape, setShape] = useState<'polygon' | 'circle' | 'ellipse' | 'inset'>('polygon');
  const [polygon, setPolygon] = useState('50% 0%, 100% 50%, 50% 100%, 0% 50%');
  const [circleRadius, setCircleRadius] = useState(50);
  const [circleX, setCircleX] = useState(50);
  const [circleY, setCircleY] = useState(50);
  const [ellipseX, setEllipseX] = useState(50);
  const [ellipseY, setEllipseY] = useState(50);
  const [inset, setInset] = useState(0);
  const [output, setOutput] = useState('');

  const generate = () => {
    let clipPath = '';
    switch (shape) {
      case 'polygon':
        clipPath = `clip-path: polygon(${polygon});`;
        break;
      case 'circle':
        clipPath = `clip-path: circle(${circleRadius}% at ${circleX}% ${circleY}%);`;
        break;
      case 'ellipse':
        clipPath = `clip-path: ellipse(${ellipseX}% ${ellipseY}% at 50% 50%);`;
        break;
      case 'inset':
        clipPath = `clip-path: inset(${inset}%);`;
        break;
    }
    setOutput(clipPath);
  };

  const getClipPathValue = () => {
    switch (shape) {
      case 'polygon':
        return `polygon(${polygon})`;
      case 'circle':
        return `circle(${circleRadius}% at ${circleX}% ${circleY}%)`;
      case 'ellipse':
        return `ellipse(${ellipseX}% ${ellipseY}% at 50% 50%)`;
      case 'inset':
        return `inset(${inset}%)`;
    }
  };

  return (
    <ToolWrapper
      title="CSS Clip Path Generator"
      description="Generate CSS clip-path shapes"
      icon="✂️"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="shape" className="form-label">Shape:</label>
          <select
            id="shape"
            className="form-select"
            value={shape}
            onChange={(e) => setShape(e.target.value as typeof shape)}
          >
            <option value="polygon">Polygon</option>
            <option value="circle">Circle</option>
            <option value="ellipse">Ellipse</option>
            <option value="inset">Inset</option>
          </select>
        </div>
        {shape === 'polygon' && (
          <div className="col-12">
            <label htmlFor="polygon" className="form-label">Polygon Points:</label>
            <input
              type="text"
              id="polygon"
              className="form-control"
              value={polygon}
              onChange={(e) => setPolygon(e.target.value)}
              placeholder="50% 0%, 100% 50%, 50% 100%, 0% 50%"
            />
            <div className="form-text">Format: x1% y1%, x2% y2%, ...</div>
          </div>
        )}
        {shape === 'circle' && (
          <>
            <div className="col-md-4">
              <label className="form-label">Radius: {circleRadius}%</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={circleRadius}
                onChange={(e) => setCircleRadius(parseInt(e.target.value))}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Center X: {circleX}%</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={circleX}
                onChange={(e) => setCircleX(parseInt(e.target.value))}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Center Y: {circleY}%</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={circleY}
                onChange={(e) => setCircleY(parseInt(e.target.value))}
              />
            </div>
          </>
        )}
        {shape === 'ellipse' && (
          <>
            <div className="col-md-6">
              <label className="form-label">Radius X: {ellipseX}%</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={ellipseX}
                onChange={(e) => setEllipseX(parseInt(e.target.value))}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Radius Y: {ellipseY}%</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={ellipseY}
                onChange={(e) => setEllipseY(parseInt(e.target.value))}
              />
            </div>
          </>
        )}
        {shape === 'inset' && (
          <div className="col-12">
            <label className="form-label">Inset: {inset}%</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="50"
              value={inset}
              onChange={(e) => setInset(parseInt(e.target.value))}
            />
          </div>
        )}
      </div>
      <div className="mb-3">
        <div className="border rounded p-4 d-flex justify-content-center">
          <div
            className="bg-primary bg-opacity-25"
            style={{
              width: '200px',
              height: '200px',
              clipPath: getClipPathValue()
            }}
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate CSS</button>
    </ToolWrapper>
  );
};

export default ClipPathGenerator;
