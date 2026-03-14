import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';
import { useRateLimit } from '../../hooks/useRateLimit';
import RateLimitAlert from '../../components/RateLimitAlert';

const WebScraper: React.FC = () => {
  const { isLimited, limit, incrementUsage } = useRateLimit('web-scraper', 100); // Increased limit to 100/day

  const [url, setUrl] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const scrapeWebsite = async () => {
    if (!url.trim()) {
      setError('Please enter a valid URL.');
      return;
    }

    // Basic URL validation
    let targetUrl = url;
    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = 'https://' + targetUrl;
      setUrl(targetUrl);
    }

    if (!incrementUsage()) {
      return; // Stop if rate limit exceeded
    }

    setLoading(true);
    setError('');
    setHtmlContent('');

    try {
      // Using AllOrigins as a free CORS proxy to fetch HTML content directly from the browser
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      if (data.contents) {
        setHtmlContent(data.contents);
      } else {
        throw new Error('Failed to retrieve content. The site might be blocking scrapers.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while fetching the URL. The site may be protected or unreachable.');
    } finally {
      setLoading(false);
    }
  };

  // Helper to extract basic text (very naive approach for a simple tool)
  const extractTextOnly = () => {
    if (!htmlContent) return '';
    try {
      const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
      return doc.body?.innerText || 'No readable text found.';
    } catch (e) {
      return 'Error parsing HTML to text.';
    }
  };

  const [viewMode, setViewMode] = useState<'html' | 'text'>('html');
  const displayContent = viewMode === 'html' ? htmlContent : extractTextOnly();

  // Safe hostname helper for filename
  const getSafeHostname = () => {
    try {
      if (!url) return 'web-source';
      const parsedUrl = new URL(url.startsWith('http') ? url : `https://${url}`);
      return parsedUrl.hostname.replace(/\./g, '-');
    } catch {
      return 'web-source';
    }
  };

  return (
    <ToolWrapper
      title="Simple Web Scraper"
      description="Extract raw HTML or plain text from any public webpage."
      icon="🕸️"
      inputValue={url}
      outputValue={displayContent}
      outputLabel={viewMode === 'html' ? "Raw HTML Source" : "Extracted Text"}
      showCopy={true}
      showDownload={true}
      downloadFilename={`abetworks-scrape-${getSafeHostname()}.txt`}
    >
      <div className="card shadow-sm p-4 mb-4">
        <h4 className="card-title mb-3">Target URL</h4>
        <div className="input-group mb-3">
          <input 
            type="url" 
            className="form-control form-control-lg" 
            placeholder="https://example.com" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && scrapeWebsite()}
          />
          <button 
            className="btn btn-primary" 
            onClick={scrapeWebsite}
            disabled={loading || isLimited}
          >
            {loading ? 'Scraping...' : 'Extract Content 🚀'}
          </button>
        </div>

        <RateLimitAlert isLimited={isLimited} limit={limit} toolName="Simple Web Scraper" />

        {error && <div className="alert alert-danger">{error}</div>}

        {htmlContent && (
          <div className="mt-3">
            <div className="mb-3 d-flex gap-2">
               <button 
                  className={`btn btn-sm ${viewMode === 'html' ? 'btn-secondary' : 'btn-outline-secondary'}`}
                  onClick={() => setViewMode('html')}
               >
                 View Raw HTML
               </button>
               <button 
                  className={`btn btn-sm ${viewMode === 'text' ? 'btn-secondary' : 'btn-outline-secondary'}`}
                  onClick={() => setViewMode('text')}
               >
                 View Extracted Text
               </button>
            </div>
            <div className="bg-light border rounded p-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontSize: '14px' }}>
                {displayContent.substring(0, 50000)} {/* Prevent massive lockups on huge pages */}
                {displayContent.length > 50000 && "\n\n... [Content Truncated for Display. Use Download/Copy for full version] ..."}
              </pre>
            </div>
            <small className="text-muted d-block mt-2">
              Note: This tool uses a basic CORS proxy and cannot execute JavaScript or bypass advanced bot protection (like Cloudflare).
            </small>
          </div>
        )}
      </div>

      <div className="mt-4"><LeadCaptureForm toolName="Web Scraper" compact /></div>
    </ToolWrapper>
  );
};

export default WebScraper;
