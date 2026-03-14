import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search tools...',
  size = 'md'
}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="position-relative w-100">
      <svg 
        className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ pointerEvents: 'none', zIndex: 1 }}
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ 
          paddingLeft: '3rem', 
          borderRadius: '50px',
          backgroundColor: 'var(--background)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-md)'
        }}
        aria-label="Search tools"
      />
    </form>
  );
};

export default SearchBar;
