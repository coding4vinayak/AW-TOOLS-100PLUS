import React from 'react';
import { Link } from 'react-router-dom';
import type { Tool } from '../data/types';
import { isFavorite, toggleFavorite } from '../utils/helpers';

interface ToolCardProps {
  tool: Tool;
  showCategory?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, showCategory = false }) => {
  const favorite = isFavorite(tool.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(tool.id);
  };

  return (
    <div className="card tool-card shadow-sm">
      <Link to={`/tool/${tool.path}`} className="stretched-link" aria-label={`Open ${tool.name}`} />
      <div className="card-body">
        <div className="card-content">
          <span className="card-icon" role="img" aria-label={tool.name}>
            {tool.icon}
          </span>
          <h5 className="card-title">{tool.name}</h5>
          <p className="card-text">{tool.description}</p>
          {showCategory && (
            <span className="badge bg-primary bg-opacity-10 text-primary mb-2">
              {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}
            </span>
          )}
        </div>
        <div className="card-actions">
          <span className="btn btn-primary btn-open">
            Open Tool
          </span>
          <button
            className={`btn favorite-btn ${favorite ? 'btn-warning' : 'btn-outline-secondary'}`}
            onClick={handleFavoriteClick}
            title={favorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
            tabIndex={0}
          >
            {favorite ? '★' : '☆'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
