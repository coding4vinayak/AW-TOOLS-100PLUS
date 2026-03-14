import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const FlexboxGenerator: React.FC = () => {
  const [direction, setDirection] = useState('row');
  const [justify, setJustify] = useState('flex-start');
  const [align, setAlign] = useState('stretch');
  const [wrap, setWrap] = useState('nowrap');
  const [gap, setGap] = useState(0);
  const [output, setOutput] = useState('');

  const generate = () => {
    const css = `display: flex;
flex-direction: ${direction};
justify-content: ${justify};
align-items: ${align};
flex-wrap: ${wrap};
gap: ${gap}px;`;
    setOutput(css);
  };

  return (
    <ToolWrapper
      title="Flexbox Generator"
      description="Generate CSS flexbox layouts"
      icon="📱"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="direction" className="form-label">Direction:</label>
          <select
            id="direction"
            className="form-select"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="row">Row</option>
            <option value="row-reverse">Row Reverse</option>
            <option value="column">Column</option>
            <option value="column-reverse">Column Reverse</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="justify" className="form-label">Justify Content:</label>
          <select
            id="justify"
            className="form-select"
            value={justify}
            onChange={(e) => setJustify(e.target.value)}
          >
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
            <option value="space-evenly">Space Evenly</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="align" className="form-label">Align Items:</label>
          <select
            id="align"
            className="form-select"
            value={align}
            onChange={(e) => setAlign(e.target.value)}
          >
            <option value="stretch">Stretch</option>
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="baseline">Baseline</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="wrap" className="form-label">Flex Wrap:</label>
          <select
            id="wrap"
            className="form-select"
            value={wrap}
            onChange={(e) => setWrap(e.target.value)}
          >
            <option value="nowrap">No Wrap</option>
            <option value="wrap">Wrap</option>
            <option value="wrap-reverse">Wrap Reverse</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Gap: {gap}px</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="50"
            value={gap}
            onChange={(e) => setGap(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="mb-3">
        <div
          className="border rounded p-2"
          style={{
            display: 'flex',
            flexDirection: direction as 'row' | 'row-reverse' | 'column' | 'column-reverse',
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap as 'nowrap' | 'wrap' | 'wrap-reverse',
            gap: `${gap}px`,
            minHeight: '150px'
          }}
        >
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="bg-primary bg-opacity-25 border p-3">
              Item {i}
            </div>
          ))}
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate CSS</button>
    </ToolWrapper>
  );
};

export default FlexboxGenerator;
