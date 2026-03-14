import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TransitionGenerator: React.FC = () => {
  const [property, setProperty] = useState('all');
  const [duration, setDuration] = useState(0.3);
  const [timing, setTiming] = useState('ease');
  const [delay, setDelay] = useState(0);
  const [output, setOutput] = useState('');

  const generate = () => {
    setOutput(`transition: ${property} ${duration}s ${timing} ${delay > 0 ? `${delay}s` : ''};`.trim());
  };

  return (
    <ToolWrapper
      title="CSS Transition Generator"
      description="Generate CSS transitions"
      icon="🔄"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="property" className="form-label">Property:</label>
          <select
            id="property"
            className="form-select"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
          >
            <option value="all">All</option>
            <option value="opacity">Opacity</option>
            <option value="transform">Transform</option>
            <option value="background-color">Background Color</option>
            <option value="width">Width</option>
            <option value="height">Height</option>
            <option value="color">Color</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Duration: {duration}s</label>
          <input
            type="range"
            className="form-range"
            min="0.1"
            max="3"
            step="0.1"
            value={duration}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="timing" className="form-label">Timing Function:</label>
          <select
            id="timing"
            className="form-select"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
          >
            <option value="ease">Ease</option>
            <option value="ease-in">Ease In</option>
            <option value="ease-out">Ease Out</option>
            <option value="ease-in-out">Ease In Out</option>
            <option value="linear">Linear</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Delay: {delay}s</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="2"
            step="0.1"
            value={delay}
            onChange={(e) => setDelay(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="mb-3">
        <div
          className="bg-primary bg-opacity-25 border p-4 text-center"
          style={{
            transition: `${property} ${duration}s ${timing} ${delay > 0 ? `${delay}s` : ''}`,
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.opacity = '0.7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.opacity = '1';
          }}
        >
          Hover to see transition
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate CSS</button>
    </ToolWrapper>
  );
};

export default TransitionGenerator;
