import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import CategorySection from '../components/CategorySection';
import ToolCard from '../components/ToolCard';
import { categories } from '../data/types';
import { tools } from '../data/toolsData';
import { getHistory, getFavorites } from '../utils/helpers';

const Home: React.FC = () => {
  const [historyTools, setHistoryTools] = useState<typeof tools>([]);
  const [favoriteTools, setFavoriteTools] = useState<typeof tools>([]);

  useEffect(() => {
    const historyIds = getHistory().slice(0, 4);
    const history = historyIds.map(id => tools.find(t => t.id === id)).filter((t): t is typeof tools[0] => t !== undefined);
    setHistoryTools(history);
    const favoriteIds = getFavorites();
    const favorites = favoriteIds.map(id => tools.find(t => t.id === id)).filter((t): t is typeof tools[0] => t !== undefined);
    setFavoriteTools(favorites);
  }, []);

  const businessTools = tools.filter(t => t.category === 'business').slice(0, 4);
  const marketingTools = tools.filter(t => t.category === 'marketing' || t.category === 'seo').slice(0, 4);
  const freelancerTools = tools.filter(t => t.category === 'freelancer').slice(0, 4);
  const featuredTools = tools.slice(0, 6);

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <h1 className="hero-title fade-in">Your All-in-One Destination for Free Online Tools</h1>
              <p className="hero-subtitle fade-in">Access 100+ powerful tools for developers, designers, writers, and businesses.</p>
              <div className="hero-search fade-in">
                <SearchBar placeholder="Search from 100+ tools..." size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Browse by Category</h2>
            <p className="section-subtitle">Find the perfect tool for your needs</p>
          </div>
          <div className="row g-4">
            {categories.map(category => (
              <div key={category.id} className="col-md-4 col-lg-2">
                <CategorySection category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Featured Tools</h2>
            <p className="section-subtitle">Most popular tools</p>
          </div>
          <div className="row g-4">
            {featuredTools.map(tool => (
              <div key={tool.id} className="col-md-6 col-lg-4">
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Business Tools</h2>
          </div>
          <div className="row g-4">
            {businessTools.map(tool => (
              <div key={tool.id} className="col-md-6 col-lg-3">
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing & SEO */}
      <section>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Marketing & SEO Tools</h2>
          </div>
          <div className="row g-4">
            {marketingTools.map(tool => (
              <div key={tool.id} className="col-md-6 col-lg-3">
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freelancer */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Freelancer Tools</h2>
          </div>
          <div className="row g-4">
            {freelancerTools.map(tool => (
              <div key={tool.id} className="col-md-6 col-lg-3">
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="container">
          <div className="stats-section">
            <div className="row g-4">
              <div className="col-md-3 col-6">
                <div className="stat-item">
                  <div className="stat-value">100+</div>
                  <div className="stat-label">Free Tools</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="stat-item">
                  <div className="stat-value">10+</div>
                  <div className="stat-label">Categories</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="stat-item">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Free to Use</div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="stat-item">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Registration Required</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View All Button */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="h3 fw-bold mb-3">Want to See All Tools?</h2>
          <p className="text-muted mb-4">Browse our complete collection of 100+ free online tools</p>
          <Link to="/category/all" className="btn btn-primary btn-lg px-5">
            🚀 View All 100+ Tools →
          </Link>
        </div>
      </section>

      {/* About & FAQ */}
      <section className="py-5" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="h3 fw-bold mb-4 text-center">About Abetworks Tools</h2>
              <div className="card border-0 shadow-sm mb-5">
                <div className="card-body p-4">
                  <p className="text-muted mb-3">
                    <strong>Abetworks Tools</strong> is your all-in-one destination for 100+ free online tools. Whether you're a developer, designer, writer, student, or business professional, we have the perfect tool for you.
                  </p>
                  <p className="text-muted mb-0">
                    Our mission is simple: provide powerful, easy-to-use tools that are completely free, require no registration, and respect your privacy.
                  </p>
                </div>
              </div>

              <h3 className="h4 fw-bold mb-4 text-center">Frequently Asked Questions</h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
                    <div className="card-body">
                      <h5 className="h6 fw-bold mb-2">💡 Is it really free?</h5>
                      <p className="text-muted mb-0 small">Yes! All 100+ tools are 100% free forever. No hidden charges.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
                    <div className="card-body">
                      <h5 className="h6 fw-bold mb-2">🔒 Is my data secure?</h5>
                      <p className="text-muted mb-0 small">Absolutely! All processing happens in your browser.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
                    <div className="card-body">
                      <h5 className="h6 fw-bold mb-2">📝 Need an account?</h5>
                      <p className="text-muted mb-0 small">No registration required! Start using any tool immediately.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
                    <div className="card-body">
                      <h5 className="h6 fw-bold mb-2">📱 Mobile friendly?</h5>
                      <p className="text-muted mb-0 small">Yes! All tools work perfectly on smartphones and tablets.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="text-muted mb-3">Need professional help?</p>
                <Link to="/services" className="btn btn-outline-primary btn-lg">
                  🎯 Get Free Consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
