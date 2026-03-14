import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const UUIDGenerator: React.FC = () => {
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);

  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  const generate = () => {
    const newUuids = Array.from({ length: count }, () => generateUUID());
    setUuids(newUuids);
  };

  const output = uuids.join('\n');

  return (
    <ToolWrapper
      title="UUID Generator"
      description="Generate unique UUIDs (v4)"
      icon="🆔"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="count" className="form-label">Number of UUIDs:</label>
        <input
          type="number"
          id="count"
          className="form-control"
          min="1"
          max="100"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value) || 1)}
        />
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate UUIDs</button>
    </ToolWrapper>
  );
};

export default UUIDGenerator;
