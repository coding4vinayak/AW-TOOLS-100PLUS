import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ToolCard from '../components/ToolCard';
import { categories } from '../data/types';
import { tools } from '../data/toolsData';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const category = categories.find(c => c.id === categoryId);
  const categoryTools = tools.filter(t => t.category === categoryId);

  if (!category) {
    return (
      <Layout>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1 className="display-1 text-muted mb-3">404</h1>
              <h2 className="mb-3">Category Not Found</h2>
              <p className="text-muted mb-4">
                The category you're looking for doesn't exist or has been moved.
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

  return (
    <Layout>
      <div className="container py-4">
        {/* Back Button */}
        <button 
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>

        {/* Category Header */}
        <div className="tool-container text-center mb-5">
          <span className="display-3 d-block mb-3">{category.icon}</span>
          <h1 className="fw-bold mb-2" style={{ color: category.color }}>
            {category.name}
          </h1>
          <p className="text-muted lead mb-0">{category.description}</p>
          <p className="text-muted small mt-2">
            {categoryTools.length} tools available
          </p>
        </div>

        {/* Tools Grid */}
        {categoryTools.length > 0 ? (
          <div className="row g-4">
            {categoryTools.map(tool => (
              <div key={tool.id} className="col-md-6 col-lg-4">
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <span className="display-1 text-muted">🔧</span>
            <h3 className="mt-3 mb-2">No Tools Available</h3>
            <p className="text-muted mb-4">
              We're working on adding more tools to this category. Check back soon!
            </p>
            <Link to="/" className="btn btn-primary">
              Browse Other Categories
            </Link>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-5 pt-4 border-top">
          <Link to="/" className="btn btn-outline-primary">
            ← Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
