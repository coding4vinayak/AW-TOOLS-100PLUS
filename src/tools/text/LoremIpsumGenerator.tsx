import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const LoremIpsumGenerator: React.FC = () => {
  const [paragraphs, setParagraphs] = useState(3);
  const [output, setOutput] = useState('');

  const loremParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const generate = () => {
    const result = Array(paragraphs).fill(loremParagraph).join('\n\n');
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Lorem Ipsum Generator"
      description="Generate placeholder Lorem Ipsum text"
      icon="📜"
      inputValue={paragraphs.toString()}
      outputValue={output}
      outputLabel="Lorem Ipsum Text"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-lorem-ipsum.txt"
    >
      <div className="mb-3">
        <label htmlFor="paragraphs" className="form-label">Number of paragraphs:</label>
        <input
          type="number"
          id="paragraphs"
          className="form-control"
          min="1"
          max="50"
          value={paragraphs}
          onChange={(e) => setParagraphs(parseInt(e.target.value) || 1)}
        />
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate Lorem Ipsum</button>
    </ToolWrapper>
  );
};

export default LoremIpsumGenerator;
