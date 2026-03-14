import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TextToSlug: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const convertToSlug = () => {
    const slug = input
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setOutput(slug);
  };

  return (
    <ToolWrapper
      title="Text to Slug"
      description="Convert text to URL-friendly slug"
      icon="🔗"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-slug.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to convert to slug..."
        />
      </div>
      <button className="btn btn-primary" onClick={convertToSlug}>Convert to Slug</button>
      {output && (
        <div className="mt-3">
          <div className="alert alert-success mb-0">
            <strong>Slug:</strong> {output}
          </div>
        </div>
      )}
    </ToolWrapper>
  );
};

export default TextToSlug;
