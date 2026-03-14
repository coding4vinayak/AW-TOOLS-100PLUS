import React, { useState } from 'react';

interface LeadCaptureModalProps {
  onClose: () => void;
}

interface LeadData {
  email: string;
  name: string;
  businessName?: string;
  serviceInterest: string;
  toolUsed: string;
  timestamp: string;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    businessName: '',
    serviceInterest: 'general'
  });

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1D8CGIlCPu332HrHvZ9OdeLN_2RplnDKzPctFbEwjEZpPusFuxsYxyVLi5TimuCcM/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const leadData: LeadData = {
      ...formData,
      toolUsed: 'Contact Form (Modal)',
      timestamp: new Date().toISOString()
    };

    console.log('🎯 Submitting lead from modal:', leadData);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      });

      console.log('✅ Lead submitted successfully!');

      // Store locally as backup
      const existingLeads = JSON.parse(localStorage.getItem('abetworks_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('abetworks_leads', JSON.stringify(existingLeads));

      setIsSubmitting(false);
      setSubmitted(true);

      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (error) {
      console.error('❌ Error submitting lead:', error);
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ zIndex: 1055 }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">🎯 Get Professional Help</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {submitted ? (
                <div className="alert alert-success mb-0">
                  <div className="d-flex align-items-center">
                    <span className="fs-4 me-2">✓</span>
                    <div>
                      <strong>Thank you!</strong> Your message has been sent. We'll be in touch soon!
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="modalName" className="form-label">Your Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="modalName"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="modalEmail" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="modalEmail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="modalBusiness" className="form-label">Business Name (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="modalBusiness"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="modalService" className="form-label">Service Interest *</label>
                    <select
                      className="form-select"
                      id="modalService"
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
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : '📩 Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadCaptureModal;
