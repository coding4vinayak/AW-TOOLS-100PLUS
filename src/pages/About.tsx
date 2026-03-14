import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold mb-3">
                About Abetworks Tools
              </h1>
              <p className="lead text-muted">
                Your all-in-one destination for free online tools
              </p>
            </div>

            {/* Main Content */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h2 className="h4 fw-bold mb-3">Welcome to Abetworks Tools</h2>
                <p className="text-muted mb-3">
                  Abetworks Tools is your comprehensive online toolkit, offering 100+ 
                  free tools designed to make your daily tasks easier and more efficient. 
                  Whether you're a developer, designer, writer, or just someone who needs 
                  quick calculations, we've got you covered.
                </p>
                
                <h3 className="h5 fw-bold mt-4 mb-3">What We Offer</h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-2">📝</span>
                      <div>
                        <strong>Text Tools</strong>
                        <p className="small text-muted mb-0">
                          Word counters, case converters, text comparators, and more
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-2">💻</span>
                      <div>
                        <strong>Developer Tools</strong>
                        <p className="small text-muted mb-0">
                          JSON formatters, code minifiers, Base64 encoders, and more
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-2">🌐</span>
                      <div>
                        <strong>Web Tools</strong>
                        <p className="small text-muted mb-0">
                          SEO generators, CSS tools, color converters, and more
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-2">🧮</span>
                      <div>
                        <strong>Calculators</strong>
                        <p className="small text-muted mb-0">
                          Percentage, BMI, age, unit converters, and more
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-2">🖼️</span>
                      <div>
                        <strong>Image Tools</strong>
                        <p className="small text-muted mb-0">
                          Resize, compress, convert, crop, and edit images
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <span className="fs-4 me-2">🔒</span>
                      <div>
                        <strong>Security Tools</strong>
                        <p className="small text-muted mb-0">
                          Password generators, validators, hash generators, and more
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="h5 fw-bold mt-4 mb-3">Why Choose Abetworks Tools?</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ <strong>100% Free:</strong> All tools are completely free to use</li>
                  <li className="mb-2">✓ <strong>No Registration:</strong> Start using tools immediately</li>
                  <li className="mb-2">✓ <strong>Privacy First:</strong> All processing happens in your browser</li>
                  <li className="mb-2">✓ <strong>Fast & Reliable:</strong> Quick loading and responsive tools</li>
                  <li className="mb-2">✓ <strong>Mobile Friendly:</strong> Works on all devices</li>
                  <li className="mb-2">✓ <strong>Regular Updates:</strong> New tools added frequently</li>
                </ul>

                <h3 className="h5 fw-bold mt-4 mb-3">Privacy & Security</h3>
                <p className="text-muted">
                  Your privacy is our priority. All tools run entirely in your browser, 
                  meaning your data never leaves your device. We don't store, track, or 
                  transmit any of your input data to servers.
                </p>

                <div className="text-center mt-5">
                  <Link to="/" className="btn btn-primary btn-lg">
                    Explore All Tools →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
