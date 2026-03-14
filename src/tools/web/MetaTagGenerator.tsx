import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const MetaTagGenerator: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [author, setAuthor] = useState('');
  const [output, setOutput] = useState('');

  const generate = () => {
    let meta = '';
    if (title) meta += `<title>${title}</title>\n`;
    if (description) meta += `<meta name="description" content="${description}">\n`;
    if (keywords) meta += `<meta name="keywords" content="${keywords}">\n`;
    if (author) meta += `<meta name="author" content="${author}">\n`;
    meta += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
    meta += `<meta charset="UTF-8">`;
    setOutput(meta);
  };

  return (
    <ToolWrapper
      title="Meta Tag Generator"
      description="Generate SEO meta tags for your website"
      icon="🏷️"
      inputValue={title}
      outputValue={output}
      outputLabel="Generated Meta Tags"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-meta-tags.html"
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Page Title:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="My Awesome Page"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="author" className="form-label">Author:</label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            className="form-control"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A brief description of your page..."
          />
        </div>
        <div className="col-12">
          <label htmlFor="keywords" className="form-label">Keywords (comma-separated):</label>
          <input
            type="text"
            id="keywords"
            className="form-control"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="seo, meta, tags, website"
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate Meta Tags</button>
    </ToolWrapper>
  );
};

export default MetaTagGenerator;
