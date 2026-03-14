import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/toolsData';
import { addToHistory } from '../utils/helpers';
import { categories } from '../data/types';

const ToolPage: React.FC = () => {
  const { toolPath } = useParams<{ toolPath: string }>();
  const navigate = useNavigate();

  const tool = tools.find(t => t.path === toolPath);

  useEffect(() => {
    if (tool) {
      addToHistory(tool.id);
    }
  }, [tool]);

  if (!tool) {
    return (
      <Layout>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1 className="display-1 text-muted mb-3">404</h1>
              <h2 className="mb-3">Tool Not Found</h2>
              <p className="text-muted mb-4">
                The tool you're looking for doesn't exist or has been moved.
              </p>
              <div className="d-flex gap-2 justify-content-center">
                <Link to="/" className="btn btn-primary">
                  Go to Homepage
                </Link>
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => navigate(-1)}
                >
                  ← Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const category = categories.find(c => c.id === tool.category);
  const relatedTools = tools
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4);

  const ToolComponent = tool.component;

  return (
    <Layout>
      <div className="container py-4">
        {/* Back Button & Breadcrumb */}
        <div className="mb-4">
          <button 
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back
          </button>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/category/${category?.id}`}>{category?.name}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {tool.name}
              </li>
            </ol>
          </nav>
        </div>

        {/* Tool Content */}
        <div className="tool-container">
          <div className="tool-header">
            <h1 className="tool-title">
              <span>{tool.icon}</span>
              {tool.name}
            </h1>
            <p className="tool-description">{tool.description}</p>
          </div>
          <ToolComponent />
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="py-5">
            <div className="section-header">
              <h3 className="section-title mb-0">Related Tools</h3>
              <p className="section-subtitle mb-0">More tools from {category?.name}</p>
            </div>
            <div className="row g-4">
              {relatedTools.map(relatedTool => (
                <div key={relatedTool.id} className="col-md-6 col-lg-3">
                  <ToolCard tool={relatedTool} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ToolPage;
