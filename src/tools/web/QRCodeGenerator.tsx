import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import { downloadImage } from '../../utils/helpers';

import QRCode from 'qrcode';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');
  const [size, setSize] = useState(200);
  const [error, setError] = useState('');

  const generate = async () => {
    if (!text.trim()) {
      setError('Please enter text to generate QR code');
      return;
    }
    try {
      const dataUrl = await QRCode.toDataURL(text, { width: size });
      setQrCodeDataUrl(dataUrl);
      setError('');
    } catch (e) {
      setError('Failed to generate QR code');
      setQrCodeDataUrl('');
    }
  };

  const download = () => {
    if (qrCodeDataUrl) {
      // Create a descriptive filename from the text
      const safeText = text.trim().substring(0, 30).replace(/[^a-z0-9]+/gi, '-').toLowerCase() || 'qrcode';
      downloadImage(qrCodeDataUrl, `abetworks-${safeText}`, 'png');
    }
  };

  return (
    <ToolWrapper
      title="QR Code Generator"
      description="Generate QR codes from text or URLs"
      icon="📱"
      inputValue={text}
    >
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Text or URL:</label>
        <textarea
          id="text"
          className="form-control"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL..."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Size: {size}px</label>
        <input
          type="range"
          className="form-range"
          min="100"
          max="500"
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
        />
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={generate}>Generate QR Code</button>
        {qrCodeDataUrl && (
          <button className="btn btn-success" onClick={download}>Download PNG</button>
        )}
      </div>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {qrCodeDataUrl && (
        <div className="mt-4 text-center">
          <img src={qrCodeDataUrl} alt="QR Code" className="border rounded p-2" />
        </div>
      )}
    </ToolWrapper>
  );
};

export default QRCodeGenerator;
