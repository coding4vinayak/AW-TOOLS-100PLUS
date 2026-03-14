import React, { useState, useRef } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import { downloadImage } from '../../utils/helpers';

const ImageFlipper: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const [flipVertical, setFlipVertical] = useState(false);
  const [flippedImage, setFlippedImage] = useState<string | null>(null);
  const [originalFilename, setOriginalFilename] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOriginalFilename(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setFlippedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const flip = () => {
    if (!image || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx?.save();
      ctx?.translate(canvas.width, canvas.height);
      ctx?.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);
      ctx?.drawImage(img, flipHorizontal ? -canvas.width : 0, flipVertical ? -canvas.height : 0);
      ctx?.restore();
      
      setFlippedImage(canvas.toDataURL('image/png'));
    };
    img.src = image;
  };

  const download = () => {
    if (flippedImage) {
      downloadImage(flippedImage, originalFilename, 'png');
    }
  };

  return (
    <ToolWrapper
      title="Image Flipper"
      description="Flip images horizontally or vertically"
      icon="🪞"
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
            <div className="form-check me-3 d-inline-block">
              <input
                type="checkbox"
                className="form-check-input"
                id="flipHorizontal"
                checked={flipHorizontal}
                onChange={(e) => setFlipHorizontal(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="flipHorizontal">
                Flip Horizontal
              </label>
            </div>
            <div className="form-check d-inline-block">
              <input
                type="checkbox"
                className="form-check-input"
                id="flipVertical"
                checked={flipVertical}
                onChange={(e) => setFlipVertical(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="flipVertical">
                Flip Vertical
              </label>
            </div>
          </div>
          
          <div className="d-flex gap-2 mb-3">
            <button className="btn btn-primary" onClick={flip}>Flip</button>
            {flippedImage && (
              <button className="btn btn-success" onClick={download}>Download</button>
            )}
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <h6>Original:</h6>
              <img src={image} alt="Original" className="img-fluid rounded border" />
            </div>
            {flippedImage && (
              <div className="col-md-6">
                <h6>Flipped:</h6>
                <img src={flippedImage} alt="Flipped" className="img-fluid rounded border" />
              </div>
            )}
          </div>
          
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </>
      )}
    </ToolWrapper>
  );
};

export default ImageFlipper;
