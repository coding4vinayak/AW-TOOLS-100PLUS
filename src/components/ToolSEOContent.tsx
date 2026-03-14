import React from 'react';
import { Link } from 'react-router-dom';

interface ToolSEOContentProps {
  toolName: string;
  description: string;
  keywords: string[];
  howToUse: string[];
  features: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

const ToolSEOContent: React.FC<ToolSEOContentProps> = ({
  toolName,
  description,
  keywords,
  howToUse,
  features,
  faqs
}) => {
  return (
    <div className="tool-seo-content mt-5">
      {/* About Section */}
      <section className="mb-5">
        <h2 className="h4 fw-bold mb-3">About {toolName}</h2>
        <div className="alert alert-info border-0 bg-light">
          <p className="mb-0">
            <strong>100% Free Online Tool</strong> - {description} This tool is completely free to use with no registration required. All processing happens in your browser, ensuring your data never leaves your device.
          </p>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="mb-5">
        <h3 className="h5 fw-bold mb-3">Popular Use Cases</h3>
        <div className="d-flex flex-wrap gap-2">
          {keywords.map((keyword, idx) => (
            <span key={idx} className="badge bg-secondary">
              {keyword}
            </span>
          ))}
        </div>
      </section>

      {/* How to Use Section */}
      <section className="mb-5">
        <h3 className="h5 fw-bold mb-3">How to Use {toolName}</h3>
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <ol className="mb-0">
              {howToUse.map((step, idx) => (
                <li key={idx} className="mb-2">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-5">
        <h3 className="h5 fw-bold mb-3">Key Features</h3>
        <ul className="list-unstyled">
          {features.map((feature, idx) => (
            <li key={idx} className="mb-2">
              <span className="text-success me-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ Section (if provided) */}
      {faqs && faqs.length > 0 && (
        <section className="mb-5">
          <h3 className="h5 fw-bold mb-3">Frequently Asked Questions</h3>
          <div className="accordion" id={`faq-${toolName.replace(/\s/g, '-')}`}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="accordion-item">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq-${idx}`}
                  >
                    {faq.question}
                  </button>
                </h4>
                <div
                  id={`faq-${idx}`}
                  className="accordion-collapse collapse"
                  data-bs-parent={`#faq-${toolName.replace(/\s/g, '-')}`}
                >
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="mb-5">
        <div className="card border-0 shadow-lg bg-primary text-white">
          <div className="card-body text-center p-4">
            <h4 className="card-title mb-3">
              Need Professional Help?
            </h4>
            <p className="card-text mb-3 opacity-75">
              Our experts can help you with business consulting, digital marketing, SEO, web development, and more!
            </p>
            <Link to="/services" className="btn btn-light btn-lg">
              🎯 Get Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Additional SEO Text */}
      <section className="text-muted small">
        <p>
          <strong>{toolName}</strong> is part of Abetworks Tools - your all-in-one destination for 100+ free online tools. 
          Whether you're looking for text tools, developer utilities, web tools, calculators, image editors, or business resources, 
          we have everything you need to boost productivity and streamline your workflow. All tools are completely free, 
          require no registration, and work directly in your browser.
        </p>
        <p>
          <strong>Why choose Abetworks Tools?</strong>
          {' '}✓ 100% Free forever
          {' '}✓ No registration required
          {' '}✓ Privacy-first (all processing in browser)
          {' '}✓ Fast & reliable
          {' '}✓ Mobile-friendly
          {' '}✓ Regular updates with new tools
        </p>
      </section>
    </div>
  );
};

export default ToolSEOContent;
