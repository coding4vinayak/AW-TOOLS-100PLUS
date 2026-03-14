import React, { useState, useEffect, useRef } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';
import { useRateLimit } from '../../hooks/useRateLimit';
import RateLimitAlert from '../../components/RateLimitAlert';

const QuoteGenerator: React.FC = () => {
  const { isLimited, limit, incrementUsage, checkLimit } = useRateLimit('quote-generator', 200);

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const quoteRef = useRef<HTMLDivElement>(null);

  const fetchQuote = async () => {
    checkLimit();
    if (!incrementUsage()) {
       return;
    }

    setLoading(true);
    setError('');
    
    try {
      // Using ZenQuotes general random endpoint. CORS proxy might be needed in production, 
      // but they allow some direct front-end calls for testing/small usage.
      // Alternatively using dummyjson quotes which is very reliable for frontend.
      const res = await fetch('https://dummyjson.com/quotes/random');
      if (!res.ok) throw new Error('Failed to fetch quote');
      const data = await res.json();
      
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (err: any) {
      setError('Could not fetch a quote right now. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial quote on mount
  useEffect(() => {
    fetchQuote();
  }, []);

  const outputText = quote ? `"${quote}"\n— ${author}` : '';

  // Minimal implementation for downloading the quote as an image
  // without bringing in heavier libraries just for this tool if not strictly needed.
  // We'll use a simple CSS trick to make it look like a card.
  const handleDownloadImage = () => {
      // Since html2canvas is already installed in the project (for Invoice), we can use it here!
      // Dynamically import to keep initial bundle size down if it's large, or just use it if it's imported globally.
      import('html2canvas').then(html2canvasModule => {
          const html2canvas = html2canvasModule.default;
          if (quoteRef.current) {
               html2canvas(quoteRef.current, { scale: 2, backgroundColor: null }).then(canvas => {
                   const image = canvas.toDataURL("image/png");
                   const authorSlug = author.replace(/[^a-z0-9]/gi, '-').toLowerCase() || 'quote';
                   // Use downloadImage helper for consistent branding
                   const link = document.createElement('a');
                   link.href = image;
                   link.download = `abetworks-quote-${authorSlug}.png`;
                   document.body.appendChild(link);
                   link.click();
                   document.body.removeChild(link);
               });
          }
      });
  };

  return (
    <ToolWrapper
      title="Random Quote Generator"
      description="Discover inspiring, thoughtful, and famous quotes instantly."
      icon="💭"
      inputValue={outputText}
      outputValue={outputText}
      outputLabel="Quote"
      showCopy={true}
      showDownload={true}
      downloadFilename={`abetworks-quote-${author.replace(/[^a-z0-9]/gi, '-').toLowerCase() || 'random'}.txt`}
    >
      <div className="card shadow-sm p-4 mb-4 text-center">
        
        <RateLimitAlert isLimited={isLimited} limit={limit} toolName="Random Quote Generator" />
        {error && !isLimited && <div className="alert alert-danger">{error}</div>}

        <div className="py-5 px-3 mb-4" style={{ minHeight: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {loading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div 
                    ref={quoteRef} 
                    className="quote-card p-5 rounded-4 shadow-lg w-100 position-relative"
                    style={{ 
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    <div style={{ fontSize: '4rem', opacity: 0.2, position: 'absolute', top: '10px', left: '20px', lineHeight: 1 }}>"</div>
                    <blockquote className="blockquote mb-0 position-relative z-1">
                      <p className="fs-3 fw-medium fst-italic mb-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
                          {quote || "Click the button below to generate a quote."}
                      </p>
                      <footer className="blockquote-footer text-white-50 mt-3 fs-5">
                          {author || "Unknown"}
                      </footer>
                    </blockquote>
                    <div style={{ fontSize: '4rem', opacity: 0.2, position: 'absolute', bottom: '-10px', right: '20px', lineHeight: 1 }}>"</div>
                    
                    {/* Small branding watermark on the image export */}
                     <div className="position-absolute bottom-0 end-0 p-3 opacity-50 small" style={{fontSize:'0.75rem'}}>
                      abetworks.in
                     </div>
                </div>
            )}
        </div>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button 
              className="btn btn-primary btn-lg px-4" 
              onClick={fetchQuote}
              disabled={loading || isLimited}
            >
              ✨ Generate Another Quote
            </button>
            <button 
              className="btn btn-outline-primary btn-lg px-4" 
              onClick={handleDownloadImage}
              disabled={loading || !quote}
            >
              🖼️ Download as Image
            </button>
        </div>
      </div>
      
      <div className="mt-4"><LeadCaptureForm toolName="Quote Generator" compact /></div>
    </ToolWrapper>
  );
};

export default QuoteGenerator;
