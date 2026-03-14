import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTheme, setTheme } from '../utils/helpers';
import { tools } from '../data/toolsData';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setThemeState] = useState<'light' | 'dark'>(getTheme());
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
    setTheme(newTheme);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowSearchResults(false);
    }
  };

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
  ).slice(0, 8);

  return (
    <header className={`navbar navbar-expand-lg ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/LOGOAW.png" alt="Abetworks" style={{ height: '32px', width: 'auto' }} />
          <span className="ms-2">Abetworks</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/category/text">Text Tools</Link></li>
                <li><Link className="dropdown-item" to="/category/developer">Developer Tools</Link></li>
                <li><Link className="dropdown-item" to="/category/web">Web Tools</Link></li>
                <li><Link className="dropdown-item" to="/category/calculators">Calculators</Link></li>
                <li><Link className="dropdown-item" to="/category/image">Image Tools</Link></li>
                <li><Link className="dropdown-item" to="/category/security">Security Tools</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/category/business">💼 Business Tools</Link></li>
                <li><Link className="dropdown-item" to="/category/marketing">📈 Marketing Tools</Link></li>
                <li><Link className="dropdown-item" to="/category/seo">🔍 SEO Tools</Link></li>
                <li><Link className="dropdown-item" to="/category/freelancer">👨‍💼 Freelancer Tools</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                <span className="badge bg-primary ms-1">🎯 Contact</span>
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <div className="search-container">
              <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                className="form-control"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                aria-label="Search tools"
              />
              {showSearchResults && searchQuery && (
                <div className="search-dropdown">
                  {filteredTools.length > 0 ? (
                    filteredTools.map(tool => (
                      <Link
                        key={tool.id}
                        to={`/tool/${tool.path}`}
                        onClick={() => {
                          setShowSearchResults(false);
                          setSearchQuery('');
                        }}
                      >
                        <span>{tool.icon}</span>
                        <span>{tool.name}</span>
                      </Link>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-muted">No tools found</div>
                  )}
                </div>
              )}
            </div>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
