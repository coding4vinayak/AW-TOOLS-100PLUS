import React, { useState, useRef } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import { downloadImage } from '../../utils/helpers';

const ImageCropper: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [cropArea, setCropArea] = useState({ x: 10, y: 10, width: 80, height: 80 });
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [originalFilename, setOriginalFilename] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOriginalFilename(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setCroppedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const crop = () => {
    if (!image || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const x = (cropArea.x / 100) * img.width;
      const y = (cropArea.y / 100) * img.height;
      const w = (cropArea.width / 100) * img.width;
      const h = (cropArea.height / 100) * img.height;
      
      canvas.width = w;
      canvas.height = h;
      ctx?.drawImage(img, x, y, w, h, 0, 0, w, h);
      setCroppedImage(canvas.toDataURL('image/png'));
    };
    img.src = image;
  };

  const download = () => {
    if (croppedImage) {
      downloadImage(croppedImage, originalFilename, 'png');
    }
  };

  return (
    <ToolWrapper
      title="Image Cropper"
      description="Crop images online"
      icon="✂️"
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
            <h6>Adjust Crop Area:</h6>
            <div className="row g-2">
              <div className="col-6">
                <label className="form-label small">X Position: {cropArea.x}%</label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="100"
                  value={cropArea.x}
                  onChange={(e) => setCropArea({ ...cropArea, x: parseInt(e.target.value) })}
                />
              </div>
              <div className="col-6">
                <label className="form-label small">Y Position: {cropArea.y}%</label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="100"
                  value={cropArea.y}
                  onChange={(e) => setCropArea({ ...cropArea, y: parseInt(e.target.value) })}
                />
              </div>
              <div className="col-6">
                <label className="form-label small">Width: {cropArea.width}%</label>
                <input
                  type="range"
                  className="form-range"
                  min="10"
                  max="100"
                  value={cropArea.width}
                  onChange={(e) => setCropArea({ ...cropArea, width: parseInt(e.target.value) })}
                />
              </div>
              <div className="col-6">
                <label className="form-label small">Height: {cropArea.height}%</label>
                <input
                  type="range"
                  className="form-range"
                  min="10"
                  max="100"
                  value={cropArea.height}
                  onChange={(e) => setCropArea({ ...cropArea, height: parseInt(e.target.value) })}
                />
              </div>
            </div>
          </div>
          
          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-primary" onClick={crop}>Crop</button>
            {croppedImage && (
              <button className="btn btn-success" onClick={download}>Download</button>
            )}
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <h6>Original:</h6>
              <img src={image} alt="Original" className="img-fluid rounded border" />
            </div>
            {croppedImage && (
              <div className="col-md-6">
                <h6>Cropped:</h6>
                <img src={croppedImage} alt="Cropped" className="img-fluid rounded border" />
              </div>
            )}
          </div>
          
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </>
      )}
    </ToolWrapper>
  );
};

export default ImageCropper;
