import React, { useState } from 'react';

interface LeadCaptureFormProps {
  toolName?: string;
  onLeadSubmit?: (data: LeadData) => void;
  compact?: boolean;
}

interface LeadData {
  email: string;
  name: string;
  businessName?: string;
  serviceInterest: string;
  toolUsed: string;
  timestamp: string;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  toolName = '',
  onLeadSubmit,
  compact = false
}) => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    businessName: '',
    serviceInterest: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Apps Script Web App URL (replace with your deployed URL)
  // Leads will be sent to: baoxing100+tools@gmail.com
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1D8CGIlCPu332HrHvZ9OdeLN_2RplnDKzPctFbEwjEZpPusFuxsYxyVLi5TimuCcM/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData: LeadData = {
      ...formData,
      toolUsed: toolName,
      timestamp: new Date().toISOString()
    };

    console.log('🎯 Submitting lead:', leadData);
    console.log('📡 Google Script URL:', GOOGLE_SCRIPT_URL);

    try {
      // Send to Google Sheets via Google Apps Script
      console.log('⏳ Sending to Google Sheets...');
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      });

      console.log('✅ Lead submitted successfully!');

      // Also store locally as backup
      const existingLeads = JSON.parse(localStorage.getItem('abetworks_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('abetworks_leads', JSON.stringify(existingLeads));

      // Store user info for personalization
      localStorage.setItem('abetworks_user', JSON.stringify({
        email: formData.email,
        name: formData.name,
        businessName: formData.businessName
      }));

      if (onLeadSubmit) {
        onLeadSubmit(leadData);
      }

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error('❌ Error submitting lead:', error);
      // Fallback to localStorage only
      const existingLeads = JSON.parse(localStorage.getItem('abetworks_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('abetworks_leads', JSON.stringify(existingLeads));
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="alert alert-success mb-0" role="alert">
        <div className="d-flex align-items-center">
          <span className="fs-4 me-2">✓</span>
          <div>
            <strong>Thank you!</strong> Your results have been saved. We'll be in touch soon with helpful resources and offers from Abetworks.
          </div>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-3">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <span className="badge bg-success">💼 Get Pro Help</span>
            </div>
            <div className="col">
              <p className="mb-0 small text-muted">
                Need expert assistance with this? Our team can help!
              </p>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => setShowForm(true)}
              >
                Contact Us
              </button>
            </div>
          </div>
          {showForm && (
            <div className="mt-3 p-3 bg-light rounded">
              <form onSubmit={handleSubmit}>
                <div className="row g-2">
                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-2">
                    <select
                      className="form-select form-select-sm"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    >
                      <option value="general">General</option>
                      <option value="consulting">Business Consulting</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="seo">SEO Services</option>
                      <option value="development">Web Development</option>
                      <option value="content">Content Creation</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="submit"
                      className="btn btn-sm btn-primary w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-header bg-gradient-primary text-white">
        <h5 className="mb-0">
          <span className="me-2">🎯</span>
          Get Professional Help from Abetworks
        </h5>
      </div>
      <div className="card-body">
        {!showForm ? (
          <div className="text-center py-3">
            <p className="lead mb-3">
              Need expert assistance? Our team can help you with:
            </p>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="p-3 bg-light rounded h-100">
                  <span className="fs-3">💼</span>
                  <h6 className="mt-2 mb-1">Business Consulting</h6>
                  <p className="small text-muted mb-0">Strategy, planning & growth</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-light rounded h-100">
                  <span className="fs-3">📈</span>
                  <h6 className="mt-2 mb-1">Digital Marketing</h6>
                  <p className="small text-muted mb-0">Campaigns that convert</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-light rounded h-100">
                  <span className="fs-3">🔍</span>
                  <h6 className="mt-2 mb-1">SEO Services</h6>
                  <p className="small text-muted mb-0">Rank higher on Google</p>
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => setShowForm(true)}
            >
              Get Free Consultation →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="leadName" className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="leadName"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="leadEmail" className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  id="leadEmail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="leadBusiness" className="form-label">Business Name (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  id="leadBusiness"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="leadService" className="form-label">Service Interest *</label>
                <select
                  className="form-select"
                  id="leadService"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                >
                  <option value="general">General Inquiry</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="seo">SEO Services</option>
                  <option value="development">Web Development</option>
                  <option value="content">Content Creation</option>
                  <option value="branding">Branding & Design</option>
                </select>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="leadConsent"
                    required
                  />
                  <label className="form-check-label small text-muted" htmlFor="leadConsent">
                    I agree to receive communications from Abetworks. We respect your privacy.
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Free Consultation'}
                </button>
                <button
                  type="button"
                  className="btn btn-link mt-2"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadCaptureForm;
