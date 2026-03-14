import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const MarkdownPreviewer: React.FC = () => {
  const [input, setInput] = useState('');

  const parseMarkdown = (text: string): string => {
    let html = text
      // Headers
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      // Bold
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      // Code blocks
      .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank">$1</a>')
      // Images
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" class="img-fluid" />')
      // Blockquotes
      .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
      // Unordered lists
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      // Line breaks
      .replace(/\n/gim, '<br />');
    
    return html;
  };

  return (
    <ToolWrapper
      title="Markdown Previewer"
      description="Live markdown preview"
      icon="📝"
      inputValue={input}
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="input" className="form-label">Markdown:</label>
          <textarea
            id="input"
            className="form-control font-monospace"
            rows={15}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="# Heading&#10;**bold** and *italic*&#10;- List item"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Preview:</label>
          <div
            className="border rounded p-3 bg-light"
            style={{ minHeight: '300px', maxHeight: '400px', overflowY: 'auto' }}
            dangerouslySetInnerHTML={{ __html: parseMarkdown(input) }}
          />
        </div>
      </div>
    </ToolWrapper>
  );
};

export default MarkdownPreviewer;
