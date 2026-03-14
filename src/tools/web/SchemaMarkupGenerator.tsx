import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const SchemaMarkupGenerator: React.FC = () => {
  const [type, setType] = useState('Organization');
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [logo, setLogo] = useState('');
  const [output, setOutput] = useState('');

  const generate = () => {
    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': type
    };
    
    if (name) schema.name = name;
    if (url) schema.url = url;
    if (logo) schema.logo = logo;
    
    setOutput(`<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`);
  };

  return (
    <ToolWrapper
      title="Schema Markup Generator"
      description="Generate JSON-LD schema for SEO"
      icon="📊"
      inputValue={name}
      outputValue={output}
      outputLabel="Schema Markup (JSON-LD)"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-schema-markup.json"
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="type" className="form-label">Schema Type:</label>
          <select
            id="type"
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Organization">Organization</option>
            <option value="LocalBusiness">Local Business</option>
            <option value="Person">Person</option>
            <option value="Article">Article</option>
            <option value="Product">Product</option>
            <option value="Recipe">Recipe</option>
            <option value="Event">Event</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div className="col-md-6">
          <label htmlFor="logo" className="form-label">Logo URL:</label>
          <input
            type="url"
            id="logo"
            className="form-control"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate Schema</button>
    </ToolWrapper>
  );
};

export default SchemaMarkupGenerator;
