import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/toolsData';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredTools = query
    ? tools.filter(tool =>
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        tool.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="mb-4">
              <h1 className="fw-bold mb-2">Search Results</h1>
              {query && (
                <p className="text-muted">
                  Showing {filteredTools.length} result{filteredTools.length !== 1 ? 's' : ''} for "{query}"
                </p>
              )}
            </div>

            {filteredTools.length > 0 ? (
              <div className="row g-4">
                {filteredTools.map(tool => (
                  <div key={tool.id} className="col-md-6">
                    <ToolCard tool={tool} showCategory />
                  </div>
                ))}
              </div>
            ) : query ? (
              <div className="text-center py-5">
                <span className="display-1 text-muted">🔍</span>
                <h3 className="mt-3">No tools found</h3>
                <p className="text-muted">
                  Try searching with different keywords or browse our categories.
                </p>
                <Link to="/" className="btn btn-primary mt-3">
                  Browse All Tools
                </Link>
              </div>
            ) : (
              <div className="text-center py-5">
                <p className="text-muted">Enter a search term to find tools.</p>
              </div>
            )}

            <div className="mt-5 text-center">
              <Link to="/" className="btn btn-outline-primary">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
