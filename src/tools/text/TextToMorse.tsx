import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TextToMorse: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const morseCode: Record<string, string> = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', ' ': '/'
  };

  const convertToMorse = () => {
    const morse = input.toUpperCase().split('').map(char => {
      return morseCode[char] || char;
    }).join(' ');
    setOutput(morse);
  };

  return (
    <ToolWrapper
      title="Text to Morse Code"
      description="Convert text to Morse code"
      icon="📡"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-morse-code.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to convert to Morse code..."
        />
      </div>
      <button className="btn btn-primary" onClick={convertToMorse}>Convert to Morse</button>
    </ToolWrapper>
  );
};

export default TextToMorse;
