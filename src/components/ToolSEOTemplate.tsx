import React from 'react';
import { Link } from 'react-router-dom';

interface ToolSEOTemplateProps {
  toolName: string;
  description: string;
  keywords: string[];
  category: string;
}

const ToolSEOTemplate: React.FC<ToolSEOTemplateProps> = ({
  toolName,
  description,
  keywords,
  category
}) => {
  // Get related tools based on category
  const getRelatedTools = () => {
    const relatedToolsMap: Record<string, string[]> = {
      'business': ['Business Plan Outline', 'SWOT Analysis', 'Elevator Pitch Generator', 'Target Audience Finder'],
      'marketing': ['Hashtag Generator', 'Social Media Post Generator', 'Content Calendar Generator', 'Ad Copy Generator'],
      'seo': ['Meta Tag Analyzer', 'SERP Simulator', 'Rich Snippet Generator', 'Keyword Density Checker'],
      'developer': ['JSON Formatter', 'JSON Minifier', 'XML Formatter', 'SQL Formatter'],
      'text': ['Word Counter', 'Character Counter', 'Case Converter', 'Text Reverser'],
      'web': ['Meta Tag Generator', 'QR Code Generator', 'Sitemap Generator', 'Robots.txt Generator'],
      'calculators': ['Percentage Calculator', 'Discount Calculator', 'BMI Calculator', 'Age Calculator'],
      'image': ['Image Resizer', 'Image Compressor', 'Image Format Converter', 'Image Cropper'],
      'security': ['Password Generator', 'Password Strength Checker', 'MD5 Hash Generator', 'Email Validator'],
      'freelancer': ['Invoice Generator', 'Contract Template Generator', 'Proposal Template Generator', 'Rate Calculator']
    };
    return relatedToolsMap[category] || ['Word Counter', 'JSON Formatter', 'Password Generator'];
  };

  const relatedTools = getRelatedTools();

  return (
    <div className="tool-seo-section mt-5 mb-5">
      {/* Related Tools Section */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-white border-0 py-3">
          <h3 className="h5 fw-bold mb-0">🔗 Related Tools</h3>
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap gap-2">
            {relatedTools.map((tool, idx) => (
              <Link
                key={idx}
                to={`/category/${category}`}
                className="btn btn-outline-primary btn-sm"
              >
                → {tool}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Description Section */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white border-0 py-3">
          <h2 className="h5 fw-bold mb-0">About {toolName}</h2>
        </div>
        <div className="card-body">
          <p className="text-muted mb-3">
            {description} This is a <strong>100% free online tool</strong> that requires no registration. 
            All processing happens directly in your browser, ensuring complete privacy and security. 
            Perfect for professionals, students, and businesses looking for quick, reliable solutions.
          </p>
          
          <div className="mb-3">
            <strong className="d-block mb-2">Popular Searches:</strong>
            <div className="d-flex flex-wrap gap-2">
              {keywords.map((keyword, idx) => (
                <span key={idx} className="badge bg-secondary">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          
          <p className="small text-muted mb-0">
            <strong>Need professional help?</strong> Our experts can assist with business consulting, digital marketing, 
            SEO, web development, and more! <Link to="/services">Get free consultation →</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolSEOTemplate;
