import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TransformGenerator: React.FC = () => {
  const [rotate, setRotate] = useState(0);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [output, setOutput] = useState('');

  const generate = () => {
    const transforms: string[] = [];
    if (rotate !== 0) transforms.push(`rotate(${rotate}deg)`);
    if (scaleX !== 1 || scaleY !== 1) transforms.push(`scale(${scaleX}, ${scaleY})`);
    if (translateX !== 0 || translateY !== 0) transforms.push(`translate(${translateX}px, ${translateY}px)`);
    if (skewX !== 0 || skewY !== 0) transforms.push(`skew(${skewX}deg, ${skewY}deg)`);
    setOutput(`transform: ${transforms.join(' ')};`);
  };

  return (
    <ToolWrapper
      title="CSS Transform Generator"
      description="Generate CSS transforms"
      icon="🔃"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label className="form-label">Rotate: {rotate}°</label>
          <input
            type="range"
            className="form-range"
            min="-180"
            max="180"
            value={rotate}
            onChange={(e) => setRotate(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Scale X: {scaleX}</label>
          <input
            type="range"
            className="form-range"
            min="0.1"
            max="3"
            step="0.1"
            value={scaleX}
            onChange={(e) => setScaleX(parseFloat(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Scale Y: {scaleY}</label>
          <input
            type="range"
            className="form-range"
            min="0.1"
            max="3"
            step="0.1"
            value={scaleY}
            onChange={(e) => setScaleY(parseFloat(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Translate X: {translateX}px</label>
          <input
            type="range"
            className="form-range"
            min="-100"
            max="100"
            value={translateX}
            onChange={(e) => setTranslateX(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Translate Y: {translateY}px</label>
          <input
            type="range"
            className="form-range"
            min="-100"
            max="100"
            value={translateY}
            onChange={(e) => setTranslateY(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Skew X: {skewX}°</label>
          <input
            type="range"
            className="form-range"
            min="-45"
            max="45"
            value={skewX}
            onChange={(e) => setSkewX(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Skew Y: {skewY}°</label>
          <input
            type="range"
            className="form-range"
            min="-45"
            max="45"
            value={skewY}
            onChange={(e) => setSkewY(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="border rounded p-4" style={{ height: '200px', overflow: 'hidden' }}>
          <div
            className="bg-primary bg-opacity-25 border d-inline-block p-4"
            style={{
              transform: `rotate(${rotate}deg) scale(${scaleX}, ${scaleY}) translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`
            }}
          >
            Transform Box
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate CSS</button>
    </ToolWrapper>
  );
};

export default TransformGenerator;
