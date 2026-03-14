import React, { type ReactNode, useState } from 'react';
import { copyToClipboard, downloadAsFile, addBranding } from '../utils/helpers';

interface ToolWrapperProps {
  title: string;
  description: string;
  icon: string;
  children: ReactNode;
  inputValue?: string;
  outputValue?: string;
  outputLabel?: string;
  showCopy?: boolean;
  showDownload?: boolean;
  downloadFilename?: string;
  fileType?: string;
  addBrandToOutput?: boolean;
}

const ToolWrapper: React.FC<ToolWrapperProps> = ({
  title,
  description,
  icon,
  children,
  outputValue,
  outputLabel = 'Output',
  showCopy = true,
  showDownload = false,
  downloadFilename = 'output.txt',
  fileType,
  addBrandToOutput = true
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    if (outputValue) {
      const content = addBrandToOutput ? addBranding(outputValue, title) : outputValue;
      const success = await copyToClipboard(content);
      if (success) {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      }
    }
  };

  const handleDownload = () => {
    if (outputValue) {
      const content = addBrandToOutput ? addBranding(outputValue, title) : outputValue;
      // Ensure abetworks- prefix for all downloads
      const brandedFilename = downloadFilename.startsWith('abetworks-')
        ? downloadFilename
        : `abetworks-${downloadFilename}`;
      
      // Determine file type based on extension or provided fileType prop
      let mimeType = 'text/plain';
      const ext = brandedFilename.split('.').pop()?.toLowerCase();
      if (fileType) {
        mimeType = fileType;
      } else if (ext === 'json') {
        mimeType = 'application/json';
      } else if (ext === 'xml') {
        mimeType = 'application/xml';
      } else if (ext === 'html' || ext === 'htm') {
        mimeType = 'text/html';
      } else if (ext === 'css') {
        mimeType = 'text/css';
      } else if (ext === 'csv') {
        mimeType = 'text/csv';
      } else if (ext === 'md' || ext === 'markdown') {
        mimeType = 'text/markdown';
      }
      
      downloadAsFile(content, brandedFilename, mimeType);
    }
  };

  return (
    <div className="tool-content">
      {/* Main Content */}
      <div className="row g-4">
        {/* Input Section */}
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <div className="card-body">
              {children}
            </div>
          </div>
        </div>

        {/* Output Section */}
        {outputValue !== undefined && (
          <div className="col-lg-12">
            <div className="card shadow-sm">
              <div className="card-header d-flex justify-content-between align-items-center py-3">
                <h5 className="mb-0 fw-semibold">{outputLabel}</h5>
                <div className="d-flex gap-2">
                  {showCopy && (
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={handleCopy}
                      disabled={!outputValue}
                      title="Copy to clipboard"
                    >
                      {copySuccess ? (
                        <>✓ Copied!</>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                          Copy
                        </>
                      )}
                    </button>
                  )}
                  {showDownload && (
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={handleDownload}
                      disabled={!outputValue}
                      title="Download as file"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-1">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Download
                    </button>
                  )}
                </div>
              </div>
              <div className="card-body">
                <div className="output-area">
                  {outputValue || <span className="text-muted">Output will appear here...</span>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolWrapper;
