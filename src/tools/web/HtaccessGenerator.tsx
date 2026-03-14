import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const HtaccessGenerator: React.FC = () => {
  const [forceHttps, setForceHttps] = useState(false);
  const [forceWww, setForceWww] = useState(false);
  const [removeWww, setRemoveWww] = useState(false);
  const [enableGzip, setEnableGzip] = useState(false);
  const [enableCaching, setEnableCaching] = useState(false);
  const [customRules, setCustomRules] = useState('');
  const [output, setOutput] = useState('');

  const generate = () => {
    let htaccess = '# Apache .htaccess\n\n';
    
    if (forceHttps) {
      htaccess += '# Force HTTPS\n';
      htaccess += 'RewriteEngine On\n';
      htaccess += 'RewriteCond %{HTTPS} off\n';
      htaccess += 'RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]\n\n';
    }
    
    if (forceWww) {
      htaccess += '# Force WWW\n';
      htaccess += 'RewriteEngine On\n';
      htaccess += 'RewriteCond %{HTTP_HOST} !^www\\. [NC]\n';
      htaccess += 'RewriteRule ^(.*)$ http://www.%{HTTP_HOST}/$1 [R=301,L]\n\n';
    }
    
    if (removeWww) {
      htaccess += '# Remove WWW\n';
      htaccess += 'RewriteEngine On\n';
      htaccess += 'RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]\n';
      htaccess += 'RewriteRule ^(.*)$ http://%1/$1 [R=301,L]\n\n';
    }
    
    if (enableGzip) {
      htaccess += '# Enable GZIP compression\n';
      htaccess += '<IfModule mod_deflate.c>\n';
      htaccess += '  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json\n';
      htaccess += '</IfModule>\n\n';
    }
    
    if (enableCaching) {
      htaccess += '# Enable browser caching\n';
      htaccess += '<IfModule mod_expires.c>\n';
      htaccess += '  ExpiresActive On\n';
      htaccess += '  ExpiresByType image/jpg "access plus 1 year"\n';
      htaccess += '  ExpiresByType image/jpeg "access plus 1 year"\n';
      htaccess += '  ExpiresByType image/png "access plus 1 year"\n';
      htaccess += '  ExpiresByType text/css "access plus 1 month"\n';
      htaccess += '  ExpiresByType application/javascript "access plus 1 month"\n';
      htaccess += '</IfModule>\n\n';
    }
    
    if (customRules) {
      htaccess += '# Custom rules\n' + customRules + '\n';
    }
    
    setOutput(htaccess.trim());
  };

  return (
    <ToolWrapper
      title=".htaccess Generator"
      description="Generate .htaccess rules for Apache"
      icon="⚙️"
      outputValue={output}
    >
      <div className="mb-3">
        <h6>Common Rules:</h6>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="forceHttps"
            checked={forceHttps}
            onChange={(e) => setForceHttps(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="forceHttps">Force HTTPS</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="forceWww"
            checked={forceWww}
            onChange={(e) => setForceWww(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="forceWww">Force WWW</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="removeWww"
            checked={removeWww}
            onChange={(e) => setRemoveWww(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="removeWww">Remove WWW</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="enableGzip"
            checked={enableGzip}
            onChange={(e) => setEnableGzip(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="enableGzip">Enable GZIP Compression</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="enableCaching"
            checked={enableCaching}
            onChange={(e) => setEnableCaching(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="enableCaching">Enable Browser Caching</label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="customRules" className="form-label">Custom Rules:</label>
        <textarea
          id="customRules"
          className="form-control font-monospace"
          rows={4}
          value={customRules}
          onChange={(e) => setCustomRules(e.target.value)}
          placeholder="Enter custom .htaccess rules..."
        />
      </div>
      <button className="btn btn-primary" onClick={generate}>Generate .htaccess</button>
    </ToolWrapper>
  );
};

export default HtaccessGenerator;
