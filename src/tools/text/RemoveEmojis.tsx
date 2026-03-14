import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const RemoveEmojis: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const removeEmojis = () => {
    const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;
    const result = input.replace(emojiRegex, '');
    setOutput(result);
  };

  return (
    <ToolWrapper
      title="Remove Emojis"
      description="Strip emojis from text"
      icon="😐"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-emoji-free-text.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text with emojis..."
        />
      </div>
      <button className="btn btn-primary" onClick={removeEmojis}>Remove Emojis</button>
    </ToolWrapper>
  );
};

export default RemoveEmojis;
