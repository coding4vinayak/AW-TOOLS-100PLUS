import React, { useState, useRef } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import { downloadImage } from '../../utils/helpers';

const ImageResizer: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [newWidth, setNewWidth] = useState('');
  const [newHeight, setNewHeight] = useState('');
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [format, setFormat] = useState('image/png');
  const [originalFilename, setOriginalFilename] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOriginalFilename(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setImage(event.target?.result as string);
          setWidth(img.width);
          setHeight(img.height);
          setNewWidth(img.width.toString());
          setNewHeight(img.height.toString());
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWidthChange = (value: string) => {
    setNewWidth(value);
    if (maintainAspectRatio && width > 0) {
      const ratio = parseInt(value) / width;
      setNewHeight(Math.round(height * ratio).toString());
    }
  };

  const handleHeightChange = (value: string) => {
    setNewHeight(value);
    if (maintainAspectRatio && height > 0) {
      const ratio = parseInt(value) / height;
      setNewWidth(Math.round(width * ratio).toString());
    }
  };

  const resize = () => {
    if (!image || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = parseInt(newWidth) || width;
      canvas.height = parseInt(newHeight) || height;
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      setResizedImage(canvas.toDataURL(format));
    };
    img.src = image;
  };

  const download = () => {
    if (resizedImage) {
      const ext = format.split('/')[1] === 'jpeg' ? 'jpg' : format.split('/')[1];
      downloadImage(resizedImage, originalFilename, ext);
    }
  };

  return (
    <ToolWrapper
      title="Image Resizer"
      description="Resize images online"
      icon="🖼️"
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
            <div className="col-md-5">
              <label className="form-label">Width (px):</label>
              <input
                type="number"
                className="form-control"
                value={newWidth}
                onChange={(e) => handleWidthChange(e.target.value)}
              />
            </div>
            <div className="col-md-5">
              <label className="form-label">Height (px):</label>
              <input
                type="number"
                className="form-control"
                value={newHeight}
                onChange={(e) => handleHeightChange(e.target.value)}
              />
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="maintainRatio"
                  checked={maintainAspectRatio}
                  onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="maintainRatio">
                  Lock Ratio
                </label>
              </div>
            </div>
          </div>
          
          <div className="d-flex flex-wrap gap-2 mb-3 align-items-end">
            <button className="btn btn-primary" onClick={resize}>Resize & Generate</button>
            {resizedImage && (
              <>
                <div className="text-muted small">
                  Original: {originalFilename}
                </div>
                <div>
                  <select
                    className="form-select"
                    value={format}
                    onChange={(e) => {
                      setFormat(e.target.value);
                      if (resizedImage) {
                         // Need to re-generate the image data with the new format if it exists
                         setTimeout(resize, 0);
                      }
                    }}
                  >
                    <option value="image/png">PNG</option>
                    <option value="image/jpeg">JPG</option>
                    <option value="image/webp">WEBP</option>
                  </select>
                </div>
                <button className="btn btn-success" onClick={download}>⬇ Download</button>
              </>
            )}
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <h6>Original:</h6>
              <img src={image} alt="Original" className="img-fluid rounded border" />
            </div>
            {resizedImage && (
              <div className="col-md-6">
                <h6>Resized:</h6>
                <img src={resizedImage} alt="Resized" className="img-fluid rounded border" />
              </div>
            )}
          </div>
          
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </>
      )}
    </ToolWrapper>
  );
};

export default ImageResizer;
