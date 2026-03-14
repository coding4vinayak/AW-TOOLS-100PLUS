import React, { useState, useRef } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import { downloadImage } from '../../utils/helpers';

const BrightnessContrast: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [adjustedImage, setAdjustedImage] = useState<string | null>(null);
  const [originalFilename, setOriginalFilename] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOriginalFilename(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setAdjustedImage(null);
        setBrightness(100);
        setContrast(100);
      };
      reader.readAsDataURL(file);
    }
  };

  const adjust = () => {
    if (!image || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      
      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
      if (imageData) {
        const data = imageData.data;
        const brightnessFactor = brightness / 100;
        const contrastFactor = (259 * (contrast + 255)) / (255 * (259 - contrast));
        
        for (let i = 0; i < data.length; i += 4) {
          // Apply brightness
          data[i] = data[i] * brightnessFactor;
          data[i + 1] = data[i + 1] * brightnessFactor;
          data[i + 2] = data[i + 2] * brightnessFactor;
          
          // Apply contrast
          data[i] = contrastFactor * (data[i] - 128) + 128;
          data[i + 1] = contrastFactor * (data[i + 1] - 128) + 128;
          data[i + 2] = contrastFactor * (data[i + 2] - 128) + 128;
        }
        ctx?.putImageData(imageData, 0, 0);
      }
      
      setAdjustedImage(canvas.toDataURL('image/png'));
    };
    img.src = image;
  };

  const download = () => {
    if (adjustedImage) {
      downloadImage(adjustedImage, originalFilename, 'png');
    }
  };

  return (
    <ToolWrapper
      title="Brightness & Contrast"
      description="Adjust image brightness and contrast"
      icon="☀️"
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
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label">Brightness: {brightness}%</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="200"
                value={brightness}
                onChange={(e) => setBrightness(parseInt(e.target.value))}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Contrast: {contrast}%</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="200"
                value={contrast}
                onChange={(e) => setContrast(parseInt(e.target.value))}
              />
            </div>
          </div>
          
          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-primary" onClick={adjust}>Apply</button>
            {adjustedImage && (
              <button className="btn btn-success" onClick={download}>Download</button>
            )}
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <h6>Original:</h6>
              <img src={image} alt="Original" className="img-fluid rounded border" />
            </div>
            {adjustedImage && (
              <div className="col-md-6">
                <h6>Adjusted:</h6>
                <img src={adjustedImage} alt="Adjusted" className="img-fluid rounded border" />
              </div>
            )}
          </div>
          
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </>
      )}
    </ToolWrapper>
  );
};

export default BrightnessContrast;
