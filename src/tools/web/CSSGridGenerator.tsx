import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CSSGridGenerator: React.FC = () => {
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(10);
  const [output, setOutput] = useState('');

  const generate = () => {
    const css = `display: grid;
grid-template-columns: repeat(${columns}, 1fr);
grid-template-rows: repeat(${rows}, 1fr);
gap: ${gap}px;`;
    setOutput(css);
  };

  return (
    <ToolWrapper
      title="CSS Grid Generator"
      description="Generate CSS grid layouts"
      icon="📐"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <label className="form-label">Columns: {columns}</label>
          <input
            type="range"
            className="form-range"
            min="1"
            max="12"
            value={columns}
            onChange={(e) => setColumns(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Rows: {rows}</label>
          <input
            type="range"
            className="form-range"
            min="1"
            max="12"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-4">
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
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gap: `${gap}px`
          }}
        >
          {Array.from({ length: columns * rows }).map((_, i) => (
            <div key={i} className="bg-primary bg-opacity-25 border p-3 text-center">
              Item {i + 1}
            </div>
          ))}
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate CSS</button>
    </ToolWrapper>
  );
};

export default CSSGridGenerator;
