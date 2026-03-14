import React from 'react';
import { Link } from 'react-router-dom';
import type { CategoryInfo } from '../data/types';

interface CategorySectionProps {
  category: CategoryInfo;
  toolCount: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, toolCount }) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="category-card card border-0 shadow-sm"
    >
      <div className="card-body text-center">
        <span className="card-icon d-block">{category.icon}</span>
        <h5 className="card-title fw-semibold mb-1">{category.name}</h5>
        <p className="card-text text-muted small mb-0">{category.description}</p>
        <span className="badge bg-primary bg-opacity-10 text-primary mt-2">
          {toolCount} Tools
        </span>
      </div>
    </Link>
  );
};

export default CategorySection;
