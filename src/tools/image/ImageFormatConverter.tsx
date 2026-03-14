import React, { useState, useRef } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import { downloadImage } from '../../utils/helpers';

const ImageFormatConverter: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [format, setFormat] = useState<'png' | 'jpeg' | 'webp'>('png');
  const [convertedImage, setConvertedImage] = useState<string | null>(null);
  const [originalFilename, setOriginalFilename] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOriginalFilename(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setConvertedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const convert = () => {
    if (!image || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Fill white background for JPEG
      if (format === 'jpeg') {
        ctx!.fillStyle = '#FFFFFF';
        ctx!.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      ctx?.drawImage(img, 0, 0);
      const converted = canvas.toDataURL(`image/${format}`, 0.9);
      setConvertedImage(converted);
    };
    img.src = image;
  };

  const download = () => {
    if (convertedImage) {
      downloadImage(convertedImage, originalFilename, format);
    }
  };

  return (
    <ToolWrapper
      title="Image Format Converter"
      description="Convert between image formats (PNG, JPEG, WebP)"
      icon="🔄"
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
            <label htmlFor="format" className="form-label">Output Format:</label>
            <select
              id="format"
              className="form-select"
              value={format}
              onChange={(e) => setFormat(e.target.value as typeof format)}
            >
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="webp">WebP</option>
            </select>
          </div>
          
          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-primary" onClick={convert}>Convert</button>
            {convertedImage && (
              <button className="btn btn-success" onClick={download}>Download</button>
            )}
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <h6>Original:</h6>
              <img src={image} alt="Original" className="img-fluid rounded border" />
            </div>
            {convertedImage && (
              <div className="col-md-6">
                <h6>Converted ({format.toUpperCase()}):</h6>
                <img src={convertedImage} alt="Converted" className="img-fluid rounded border" />
              </div>
            )}
          </div>
          
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </>
      )}
    </ToolWrapper>
  );
};

export default ImageFormatConverter;
