import React, { useState, useRef } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import { downloadImage } from '../../utils/helpers';

const ImageRotator: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [rotatedImage, setRotatedImage] = useState<string | null>(null);
  const [originalFilename, setOriginalFilename] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOriginalFilename(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setRotatedImage(null);
        setRotation(0);
      };
      reader.readAsDataURL(file);
    }
  };

  const rotate = () => {
    if (!image || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const radians = (rotation * Math.PI) / 180;
      const sin = Math.abs(Math.sin(radians));
      const cos = Math.abs(Math.cos(radians));
      
      canvas.width = img.width * cos + img.height * sin;
      canvas.height = img.width * sin + img.height * cos;
      
      ctx?.translate(canvas.width / 2, canvas.height / 2);
      ctx?.rotate(radians);
      ctx?.drawImage(img, -img.width / 2, -img.height / 2);
      
      setRotatedImage(canvas.toDataURL('image/png'));
    };
    img.src = image;
  };

  const download = () => {
    if (rotatedImage) {
      downloadImage(rotatedImage, originalFilename, 'png');
    }
  };

  return (
    <ToolWrapper
      title="Image Rotator"
      description="Rotate images to any angle"
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
            <label className="form-label">Rotation: {rotation}°</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="360"
              value={rotation}
              onChange={(e) => setRotation(parseInt(e.target.value))}
            />
            <div className="d-flex justify-content-between">
              <button className="btn btn-sm btn-outline-primary" onClick={() => setRotation(0)}>0°</button>
              <button className="btn btn-sm btn-outline-primary" onClick={() => setRotation(90)}>90°</button>
              <button className="btn btn-sm btn-outline-primary" onClick={() => setRotation(180)}>180°</button>
              <button className="btn btn-sm btn-outline-primary" onClick={() => setRotation(270)}>270°</button>
            </div>
          </div>
          
          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-primary" onClick={rotate}>Rotate</button>
            {rotatedImage && (
              <button className="btn btn-success" onClick={download}>Download</button>
            )}
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <h6>Original:</h6>
              <img src={image} alt="Original" className="img-fluid rounded border" />
            </div>
            {rotatedImage && (
              <div className="col-md-6">
                <h6>Rotated ({rotation}°):</h6>
                <img src={rotatedImage} alt="Rotated" className="img-fluid rounded border" />
              </div>
            )}
          </div>
          
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </>
      )}
    </ToolWrapper>
  );
};

export default ImageRotator;
