import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const OpenGraphGenerator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [siteName, setSiteName] = useState('');
  const [type, setType] = useState('website');
  const [output, setOutput] = useState('');

  const generate = () => {
    let og = '';
    if (title) og += `<meta property="og:title" content="${title}">\n`;
    if (description) og += `<meta property="og:description" content="${description}">\n`;
    if (url) og += `<meta property="og:url" content="${url}">\n`;
    if (image) og += `<meta property="og:image" content="${image}">\n`;
    if (siteName) og += `<meta property="og:site_name" content="${siteName}">\n`;
    og += `<meta property="og:type" content="${type}">`;
    setOutput(og);
  };

  return (
    <ToolWrapper
      title="Open Graph Generator"
      description="Generate Open Graph tags for social media"
      icon="📱"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="url" className="form-label">URL:</label>
          <input
            type="url"
            id="url"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            className="form-control"
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="image" className="form-label">Image URL:</label>
          <input
            type="url"
            id="image"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="siteName" className="form-label">Site Name:</label>
          <input
            type="text"
            id="siteName"
            className="form-control"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="type" className="form-label">Type:</label>
          <select
            id="type"
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="website">Website</option>
            <option value="article">Article</option>
            <option value="product">Product</option>
            <option value="video">Video</option>
          </select>
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate OG Tags</button>
    </ToolWrapper>
  );
};

export default OpenGraphGenerator;
