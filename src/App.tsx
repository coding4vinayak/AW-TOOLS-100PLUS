import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ToolPage from './pages/ToolPage';
import About from './pages/About';
import SearchResults from './pages/SearchResults';
import Services from './pages/Services';
import AllTools from './pages/AllTools';
import './index.css';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/all" element={<AllTools />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/tool/:toolPath" element={<ToolPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
