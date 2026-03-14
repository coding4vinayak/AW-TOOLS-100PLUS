import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const CharacterCounter: React.FC = () => {
  const [input, setInput] = useState('');

  const getCharAnalysis = (text: string) => {
    const chars = text.split('');
    const letters = chars.filter(c => /[a-zA-Z]/.test(c)).length;
    const uppercase = chars.filter(c => /[A-Z]/.test(c)).length;
    const lowercase = chars.filter(c => /[a-z]/.test(c)).length;
    const numbers = chars.filter(c => /[0-9]/.test(c)).length;
    const spaces = chars.filter(c => /\s/.test(c)).length;
    const special = chars.filter(c => /[^a-zA-Z0-9\s]/.test(c)).length;
    
    // Most common character
    const charCount: Record<string, number> = {};
    chars.forEach(c => {
      charCount[c] = (charCount[c] || 0) + 1;
    });
    const mostCommon = Object.entries(charCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    return {
      total: text.length,
      letters,
      uppercase,
      lowercase,
      numbers,
      spaces,
      special,
      mostCommon
    };
  };

  const stats = getCharAnalysis(input);

  return (
    <ToolWrapper
      title="Character Counter"
      description="Detailed character analysis of your text"
      icon="🔤"
      outputValue={
        `Total Characters: ${stats.total}\n` +
        `Letters: ${stats.letters} (Uppercase: ${stats.uppercase}, Lowercase: ${stats.lowercase})\n` +
        `Numbers: ${stats.numbers}\n` +
        `Spaces: ${stats.spaces}\n` +
        `Special Characters: ${stats.special}\n` +
        `\nMost Common Characters:\n` +
        stats.mostCommon.map(([char, count]) => `"${char}": ${count}`).join('\n')
      }
      outputLabel="Character Analysis"
      showDownload={true}
      downloadFilename="abetworks-character-analysis.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={10}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste your text here..."
        />
      </div>
      <div className="row g-3">
        <div className="col-6 col-md-4">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h3 className="mb-0">{stats.total}</h3>
              <small className="text-muted">Total Chars</small>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h3 className="mb-0">{stats.letters}</h3>
              <small className="text-muted">Letters</small>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h3 className="mb-0">{stats.numbers}</h3>
              <small className="text-muted">Numbers</small>
            </div>
          </div>
        </div>
      </div>
    </ToolWrapper>
  );
};

export default CharacterCounter;
