import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import ToolSEOTemplate from '../../components/ToolSEOTemplate';

const WordCounter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const countWords = (text: string) => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim()).length;
    const lines = text.split(/\n/).filter(l => l.trim()).length;
    return { words, characters, charactersNoSpaces, sentences, paragraphs, lines };
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    const stats = countWords(value);
    setOutput(`Words: ${stats.words}\nCharacters: ${stats.characters}\nCharacters (no spaces): ${stats.charactersNoSpaces}\nSentences: ${stats.sentences}\nParagraphs: ${stats.paragraphs}\nLines: ${stats.lines}`);
  };
  return (
    <>
      <ToolWrapper title="Word Counter" description="Count words, characters, sentences, and paragraphs" icon="📊" inputValue={input} outputValue={output} outputLabel="Statistics" showCopy={true} showDownload={true} downloadFilename="abetworks-word-count-stats.txt">
        <div className="mb-3">
          <label htmlFor="input" className="form-label">Enter your text:</label>
          <textarea id="input" className="form-control" rows={10} value={input} onChange={handleInputChange} placeholder="Type or paste your text here..." />
        </div>
      </ToolWrapper>
      <div className="container">
        <ToolSEOTemplate toolName="Word Counter" description="Count words, characters, sentences, and paragraphs in your text instantly and for free. Perfect for writers, students, bloggers, and professionals." keywords={['word counter', 'word count tool', 'character counter', 'count words online', 'free word counter', 'online word counter', 'text statistics', 'word counter with characters']} category="text" />
      </div>
    </>
  );
};
export default WordCounter;
