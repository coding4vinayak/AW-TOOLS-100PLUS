import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { tools } from '../data/toolsData';

const AllTools: React.FC = () => {
  // Group tools by category
  const toolsByCategory = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, typeof tools>);

  const categoryNames: Record<string, string> = {
    text: 'Text Tools',
    developer: 'Developer Tools',
    web: 'Web Tools',
    calculators: 'Calculators',
    image: 'Image Tools',
    security: 'Security Tools',
    business: 'Business Tools',
    marketing: 'Marketing Tools',
    seo: 'SEO Tools',
    freelancer: 'Freelancer Tools'
  };

  const categoryIcons: Record<string, string> = {
    text: '📝',
    developer: '💻',
    web: '🌐',
    calculators: '🧮',
    image: '🖼️',
    security: '🔒',
    business: '💼',
    marketing: '📈',
    seo: '🔍',
    freelancer: '👨‍💼'
  };

  return (
    <Layout>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">All 100+ Free Online Tools</h1>
          <p className="lead text-muted">
            Browse our complete collection of free online tools. No registration required, 100% free forever!
          </p>
        </div>

        {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
          <div key={category} className="mb-5">
            <div className="d-flex align-items-center mb-3">
              <span className="fs-3 me-2">{categoryIcons[category] || '🔧'}</span>
              <h2 className="h3 fw-bold mb-0">{categoryNames[category] || category}</h2>
              <span className="badge bg-primary ms-2">{categoryTools.length} tools</span>
            </div>
            <div className="row g-4">
              {categoryTools.map(tool => (
                <div key={tool.id} className="col-md-6 col-lg-3">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-start mb-3">
                        <span className="fs-2 me-3">{tool.icon}</span>
                        <div>
                          <h3 className="h6 fw-bold mb-1">{tool.name}</h3>
                          <p className="text-muted small mb-0">{tool.description}</p>
                        </div>
                      </div>
                      <Link to={`/tool/${tool.path}`} className="btn btn-outline-primary btn-sm w-100">
                        Open Tool →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-5 pt-4 border-top">
          <h3 className="h4 fw-bold mb-3">Need Professional Help?</h3>
          <p className="text-muted mb-4">
            Our experts can assist with business consulting, digital marketing, SEO, web development, and more!
          </p>
          <Link to="/services" className="btn btn-primary btn-lg px-5">
            🎯 Get Free Consultation →
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AllTools;
