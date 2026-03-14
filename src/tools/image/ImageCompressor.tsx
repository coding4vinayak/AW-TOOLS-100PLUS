import React, { useState, useRef } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import { downloadImage } from '../../utils/helpers';

const ImageCompressor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.7);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [originalFilename, setOriginalFilename] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOriginalFilename(file.name);
      setOriginalSize(file.size);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setCompressedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const compress = () => {
    if (!image || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      
      const compressed = canvas.toDataURL('image/jpeg', quality);
      setCompressedImage(compressed);
      
      // Estimate compressed size (base64 length * 0.75)
      const size = Math.round((compressed.length - 'data:image/jpeg;base64,'.length) * 0.75);
      setCompressedSize(size);
    };
    img.src = image;
  };

  const download = () => {
    if (compressedImage) {
      downloadImage(compressedImage, originalFilename, 'jpg');
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const savings = originalSize > 0 && compressedSize > 0 
    ? ((originalSize - compressedSize) / originalSize * 100).toFixed(1) 
    : '0';

  return (
    <ToolWrapper
      title="Image Compressor"
      description="Compress images to reduce file size"
      icon="🗜️"
      inputValue=""
    >
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Upload Image:</label>
        <input
          type="file"
          id="image"
          className="form-control"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
      
      {image && (
        <>
          <div className="mb-3">
            <label className="form-label">Quality: {Math.round(quality * 100)}%</label>
            <input
              type="range"
              className="form-range"
              min="0.1"
              max="1"
              step="0.1"
              value={quality}
              onChange={(e) => setQuality(parseFloat(e.target.value))}
            />
          </div>
          
          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-primary" onClick={compress}>Compress</button>
            {compressedImage && (
              <button className="btn btn-success" onClick={download}>Download</button>
            )}
          </div>
          
          {compressedImage && (
            <div className="alert alert-success">
              <strong>Compression Results:</strong><br />
              Original: {formatSize(originalSize)}<br />
              Compressed: {formatSize(compressedSize)}<br />
              Savings: {savings}%
            </div>
          )}
          
          <div className="row">
            <div className="col-md-6">
              <h6>Original:</h6>
              <img src={image} alt="Original" className="img-fluid rounded border" />
            </div>
            {compressedImage && (
              <div className="col-md-6">
                <h6>Compressed:</h6>
                <img src={compressedImage} alt="Compressed" className="img-fluid rounded border" />
              </div>
            )}
          </div>
          
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </>
      )}
    </ToolWrapper>
  );
};

export default ImageCompressor;
