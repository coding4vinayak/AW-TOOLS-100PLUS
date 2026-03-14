import React, { useState } from 'react';
import Layout from '../components/Layout';
import LeadCaptureForm from '../components/LeadCaptureForm';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, color }) => (
  <div className="card border-0 shadow-sm h-100">
    <div className="card-body">
      <div className="mb-3" style={{ fontSize: '3rem' }}>{icon}</div>
      <h3 className="h4 fw-bold mb-2">{title}</h3>
      <p className="text-muted mb-3">{description}</p>
      <ul className="list-unstyled">
        {features.map((feature, idx) => (
          <li key={idx} className="mb-2">
            <span className="text-success me-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className="card-footer bg-white border-0 pb-3">
      <a href="#contact" className="btn btn-outline-primary w-100">
        Learn More →
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      icon: '💼',
      title: 'Business Consulting',
      description: 'Strategic guidance to help your business grow and succeed in competitive markets.',
      features: [
        'Business Strategy & Planning',
        'Market Analysis & Research',
        'Financial Planning & Forecasting',
        'Operations Optimization',
        'Growth Strategy Development'
      ],
      color: '#059669'
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns that drive engagement, leads, and conversions.',
      features: [
        'Social Media Marketing',
        'Paid Advertising (PPC)',
        'Email Marketing Campaigns',
        'Content Marketing Strategy',
        'Analytics & Performance Tracking'
      ],
      color: '#dc2626'
    },
    {
      icon: '🔍',
      title: 'SEO Services',
      description: 'Improve your search rankings and drive organic traffic to your website.',
      features: [
        'Technical SEO Audit',
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Link Building Campaigns',
        'Local SEO Optimization'
      ],
      color: '#7c3aed'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom web solutions that are fast, secure, and scalable for your business.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Web Application Development',
        'API Integration',
        'Performance Optimization'
      ],
      color: '#2563eb'
    },
    {
      icon: '✍️',
      title: 'Content Creation',
      description: 'Engaging content that tells your brand story and connects with your audience.',
      features: [
        'Blog & Article Writing',
        'Video Content Production',
        'Graphic Design',
        'Copywriting Services',
        'Content Strategy'
      ],
      color: '#ea580c'
    },
    {
      icon: '🎨',
      title: 'Branding & Design',
      description: 'Create a memorable brand identity that resonates with your target audience.',
      features: [
        'Logo Design',
        'Brand Identity Development',
        'Visual Style Guides',
        'Marketing Collateral Design',
        'Brand Strategy'
      ],
      color: '#d97706'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const leadData = {
      name: contactForm.name,
      email: contactForm.email,
      businessName: contactForm.company,
      serviceInterest: contactForm.service,
      toolUsed: 'Services Page Contact Form',
      timestamp: new Date().toISOString(),
      message: contactForm.message
    };

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1D8CGIlCPu332HrHvZ9OdeLN_2RplnDKzPctFbEwjEZpPusFuxsYxyVLi5TimuCcM/exec';

    console.log('🎯 Submitting services lead:', leadData);

    // Send to Google Sheets
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    }).then(() => {
      console.log('✅ Services lead submitted successfully!');
    }).catch(err => {
      console.error('❌ Error submitting services lead:', err);
    });

    // Store locally as backup
    const existing = JSON.parse(localStorage.getItem('abetworks_contacts') || '[]');
    existing.push({ ...leadData, timestamp: new Date().toISOString() });
    localStorage.setItem('abetworks_contacts', JSON.stringify(existing));
    
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="services-hero" style={{
        background: 'linear-gradient(135deg, #0071e3 0%, #00c7be 100%)',
        padding: 'var(--spacing-2xl) 0',
        marginBottom: 'var(--spacing-xl)'
      }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3" style={{ 
                color: 'white',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                lineHeight: '1.2'
              }}>
                Professional Services for Your Business
              </h1>
              <p className="lead mb-4" style={{ 
                color: 'rgba(255,255,255,0.95)',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.7',
                maxWidth: '650px',
                margin: '0 auto var(--spacing-lg)'
              }}>
                From strategy to execution, Abetworks provides comprehensive services
                to help entrepreneurs, startups, and digital creators succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Services</h2>
          <div className="row g-4">
            {services.map((service, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Abetworks?</h2>
          <div className="row g-4">
            <div className="col-md-3 text-center">
              <div className="display-4 fw-bold text-primary">50+</div>
              <p className="text-muted">Free Tools Available</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="display-4 fw-bold text-primary">100%</div>
              <p className="text-muted">Client Satisfaction</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="display-4 fw-bold text-primary">24/7</div>
              <p className="text-muted">Support Available</p>
            </div>
            <div className="col-md-3 text-center">
              <div className="display-4 fw-bold text-primary">10+</div>
              <p className="text-muted">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture / Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-header bg-primary text-white text-center py-4">
                  <h2 className="h3 mb-0">Get Your Free Consultation</h2>
                  <p className="mb-0 opacity-75">Let's discuss how we can help your business grow</p>
                </div>
                <div className="card-body p-4">
                  {submitted ? (
                    <div className="text-center py-5">
                      <span className="display-1 text-success">✓</span>
                      <h3 className="mt-3">Thank You!</h3>
                      <p className="text-muted">
                        We've received your inquiry and will get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="contactName" className="form-label">Full Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="contactName"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="contactEmail" className="form-label">Email Address *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="contactEmail"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="contactCompany" className="form-label">Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="contactCompany"
                            value={contactForm.company}
                            onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="contactService" className="form-label">Service Interested In *</label>
                          <select
                            className="form-select"
                            id="contactService"
                            value={contactForm.service}
                            onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                            required
                          >
                            <option value="">Select a service...</option>
                            <option value="Business Consulting">Business Consulting</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="SEO Services">SEO Services</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Content Creation">Content Creation</option>
                            <option value="Branding & Design">Branding & Design</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label htmlFor="contactMessage" className="form-label">Tell Us About Your Project *</label>
                          <textarea
                            className="form-control"
                            id="contactMessage"
                            rows={4}
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            placeholder="Describe your goals, challenges, or questions..."
                            required
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary btn-lg w-100">
                            Submit Inquiry →
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #0071e3 0%, #00c7be 100%)'
      }}>
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-3" style={{ color: 'white' }}>
            Ready to Grow Your Business?
          </h2>
          <p className="lead mb-4" style={{ 
            color: 'rgba(255,255,255,0.95)',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)'
          }}>
            Try our free tools below, then let us help you take your business to the next level.
          </p>
          <a href="/" className="btn btn-light btn-lg">
            Explore Free Tools →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
