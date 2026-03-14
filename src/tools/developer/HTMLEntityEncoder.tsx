import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const HTMLEntityEncoder: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const encode = () => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    const result = input.replace(/[&<>"']/g, char => entities[char]);
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="HTML Entity Encoder"
      description="Encode special characters to HTML entities"
      icon="🔣"
      outputValue={output}
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='<script>alert("XSS")</script>'
        />
      </div>
      <button className="btn btn-primary" onClick={encode}>Encode HTML Entities</button>
    </ToolWrapper>
  );
};

export default HTMLEntityEncoder;
