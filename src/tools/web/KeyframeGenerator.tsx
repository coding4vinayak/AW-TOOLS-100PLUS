import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const KeyframeGenerator: React.FC = () => {
  const [name, setName] = useState('fadeIn');
  const [fromOpacity, setFromOpacity] = useState(0);
  const [toOpacity, setToOpacity] = useState(1);
  const [fromTransform, setFromTransform] = useState('translateY(-20px)');
  const [toTransform, setToTransform] = useState('translateY(0)');
  const [output, setOutput] = useState('');

  const generate = () => {
    const css = `@keyframes ${name} {
  from {
    opacity: ${fromOpacity};
    transform: ${fromTransform};
  }
  to {
    opacity: ${toOpacity};
    transform: ${toTransform};
  }
}`;
    setOutput(css);
  };

  return (
    <ToolWrapper
      title="CSS Keyframe Generator"
      description="Generate CSS animation keyframes"
      icon="🎬"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Animation Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">From Opacity: {fromOpacity}</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="1"
            step="0.1"
            value={fromOpacity}
            onChange={(e) => setFromOpacity(parseFloat(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">To Opacity: {toOpacity}</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="1"
            step="0.1"
            value={toOpacity}
            onChange={(e) => setToOpacity(parseFloat(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="fromTransform" className="form-label">From Transform:</label>
          <input
            type="text"
            id="fromTransform"
            className="form-control"
            value={fromTransform}
            onChange={(e) => setFromTransform(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="toTransform" className="form-label">To Transform:</label>
          <input
            type="text"
            id="toTransform"
            className="form-control"
            value={toTransform}
            onChange={(e) => setToTransform(e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate Keyframes</button>
    </ToolWrapper>
  );
};

export default KeyframeGenerator;
