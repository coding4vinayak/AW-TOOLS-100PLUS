import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const HTMLEntityDecoder: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const decode = () => {
    const entities: Record<string, string> = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
      '&apos;': "'",
      '&nbsp;': ' '
    };
    const regex = new RegExp(Object.keys(entities).join('|'), 'g');
    const result = input.replace(regex, entity => entities[entity]);
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="HTML Entity Decoder"
      description="Decode HTML entities"
      icon="🔣"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter HTML entities:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='&lt;div&gt;Hello&lt;/div&gt;'
        />
      </div>
      <button className="btn btn-primary" onClick={decode}>Decode HTML Entities</button>
    </ToolWrapper>
  );
};

export default HTMLEntityDecoder;
