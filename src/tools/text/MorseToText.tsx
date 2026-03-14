import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const MorseToText: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const morseCode: Record<string, string> = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
    '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
    '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
    '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
    '---..': '8', '----.': '9', '/': ' '
  };

  const convertToText = () => {
    const text = input.trim().split(/\s+/).map(code => {
      return morseCode[code] || '';
    }).join('');
    setOutput(text);
  };

  return (
    <ToolWrapper
      title="Morse Code to Text"
      description="Convert Morse code to text"
      icon="📟"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-morse-decoded.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter Morse code:</label>
        <textarea
          id="input"
          className="form-control"
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Morse code (e.g., .... . .-.. .-.. ---)"
        />
      </div>
      <button className="btn btn-primary" onClick={convertToText}>Convert to Text</button>
    </ToolWrapper>
  );
};

export default MorseToText;
