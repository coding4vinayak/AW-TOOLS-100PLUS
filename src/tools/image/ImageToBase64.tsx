import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const ImageToBase64: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [base64, setBase64] = useState('');
  const [fileName, setFileName] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImage(result);
        setBase64(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const copy = async () => {
    if (base64) {
      await navigator.clipboard.writeText(base64);
      alert('Base64 copied to clipboard!');
    }
  };

  return (
    <ToolWrapper
      title="Image to Base64"
      description="Convert image to Base64 string"
      icon="🔣"
      outputValue={base64}
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
            <h6>Preview:</h6>
            <img src={image} alt="Preview" className="img-fluid rounded border" style={{ maxHeight: '200px' }} />
            <p className="text-muted small mt-2">File: {fileName}</p>
          </div>
          
          <button className="btn btn-primary" onClick={copy}>Copy Base64</button>
        </>
      )}
    </ToolWrapper>
  );
};

export default ImageToBase64;
