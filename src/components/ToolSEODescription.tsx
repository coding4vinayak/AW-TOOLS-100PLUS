import React from 'react';
import { Link } from 'react-router-dom';

interface ToolSEODescriptionProps {
  toolName: string;
  description: string;
  keywords: string[];
}

const ToolSEODescription: React.FC<ToolSEODescriptionProps> = ({
  toolName,
  description,
  keywords
}) => {
  return (
    <div className="mt-5 mb-5">
      <div className="card border-0 bg-light">
        <div className="card-body p-4">
          <h2 className="h5 fw-bold mb-3">About {toolName}</h2>
          <p className="text-muted mb-3">
            {description} This is a <strong>100% free online tool</strong> that requires no registration. 
            All processing happens directly in your browser, ensuring complete privacy and security. 
            Perfect for professionals, students, and businesses looking for quick, reliable solutions.
          </p>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {keywords.slice(0, 8).map((keyword, idx) => (
              <span key={idx} className="badge bg-secondary">
                {keyword}
              </span>
            ))}
          </div>
          <p className="small text-muted mb-0">
            Looking for more tools? Browse our complete collection of <Link to="/">100+ free online tools</Link> or 
            <Link to="/services"> contact our experts</Link> for professional assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolSEODescription;
