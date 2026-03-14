import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import { downloadImage } from '../../utils/helpers';

const Base64ToImage: React.FC = () => {
  const [base64, setBase64] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState('');

  const convert = () => {
    try {
      // Validate base64
      const validBase64 = base64.trim();
      if (!validBase64.startsWith('data:image')) {
        // Try to add prefix if missing
        if (/^[A-Za-z0-9+/=]+$/.test(validBase64)) {
          setImage(`data:image/png;base64,${validBase64}`);
        } else {
          setImage(validBase64);
        }
      } else {
        setImage(validBase64);
      }
      setError('');
    } catch (e) {
      setError('Invalid Base64 string');
      setImage(null);
    }
  };

  const download = () => {
    if (image) {
      downloadImage(image, 'converted-image', 'png');
    }
  };

  return (
    <ToolWrapper
      title="Base64 to Image"
      description="Convert Base64 string to image"
      icon="🖼️"
      inputValue={base64}
    >
      <div className="mb-3">
        <label htmlFor="base64" className="form-label">Enter Base64 string:</label>
        <textarea
          id="base64"
          className="form-control font-monospace"
          rows={6}
          value={base64}
          onChange={(e) => setBase64(e.target.value)}
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        />
      </div>
      
      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={convert}>Convert</button>
        {image && (
          <button className="btn btn-success" onClick={download}>Download</button>
        )}
      </div>
      
      {error && <div className="alert alert-danger">{error}</div>}
      
      {image && (
        <div className="mb-3">
          <h6>Preview:</h6>
          <img src={image} alt="Converted" className="img-fluid rounded border" style={{ maxHeight: '300px' }} />
        </div>
      )}
    </ToolWrapper>
  );
};

export default Base64ToImage;
