import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const SitemapGenerator: React.FC = () => {
  const [urls, setUrls] = useState('');
  const [changefreq, setChangefreq] = useState('weekly');
  const [priority, setPriority] = useState('0.5');
  const [output, setOutput] = useState('');

  const generate = () => {
    const urlList = urls.split('\n').filter(u => u.trim());
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    urlList.forEach(url => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${url.trim()}</loc>\n`;
      sitemap += `    <changefreq>${changefreq}</changefreq>\n`;
      sitemap += `    <priority>${priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    setOutput(sitemap);
  };

  return (
    <ToolWrapper
      title="Sitemap Generator"
      description="Generate sitemap.xml for SEO"
      icon="🗺️"
      inputValue={urls}
      outputValue={output}
      outputLabel="sitemap.xml"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-sitemap.xml"
    >
      <div className="mb-3">
        <label htmlFor="urls" className="form-label">URLs (one per line):</label>
        <textarea
          id="urls"
          className="form-control"
          rows={6}
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          placeholder="https://example.com&#10;https://example.com/about"
        />
      </div>
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="changefreq" className="form-label">Change Frequency:</label>
          <select
            id="changefreq"
            className="form-select"
            value={changefreq}
            onChange={(e) => setChangefreq(e.target.value)}
          >
            <option value="always">Always</option>
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="never">Never</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="priority" className="form-label">Priority:</label>
          <select
            id="priority"
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="0.1">0.1</option>
            <option value="0.2">0.2</option>
            <option value="0.3">0.3</option>
            <option value="0.4">0.4</option>
            <option value="0.5">0.5</option>
            <option value="0.6">0.6</option>
            <option value="0.7">0.7</option>
            <option value="0.8">0.8</option>
            <option value="0.9">0.9</option>
            <option value="1.0">1.0</option>
          </select>
        </div>
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate Sitemap</button>
    </ToolWrapper>
  );
};

export default SitemapGenerator;
