import React, { useState, useEffect } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const UserAgentParser: React.FC = () => {
  const [userAgent, setUserAgent] = useState('');
  const [info, setInfo] = useState({
    browser: '',
    os: '',
    device: ''
  });

  useEffect(() => {
    const ua = navigator.userAgent;
    setUserAgent(ua);

    // Parse browser
    let browser = 'Unknown';
    if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('SamsungBrowser')) browser = 'Samsung Internet';
    else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';
    else if (ua.includes('Trident')) browser = 'Internet Explorer';
    else if (ua.includes('Edge')) browser = 'Edge';
    else if (ua.includes('Chrome')) browser = 'Chrome';
    else if (ua.includes('Safari')) browser = 'Safari';

    // Parse OS
    let os = 'Unknown';
    if (ua.includes('Windows')) os = 'Windows';
    else if (ua.includes('Mac')) os = 'macOS';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iOS')) os = 'iOS';

    // Parse device
    let device = 'Desktop';
    if (/Mobile|Android|iPhone|iPad|iPod/.test(ua)) {
      device = ua.includes('Tablet') || ua.includes('iPad') ? 'Tablet' : 'Mobile';
    }

    setInfo({ browser, os, device });
  }, []);

  return (
    <ToolWrapper
      title="User Agent Parser"
      description="Parse and analyze your browser's user agent string"
      icon="📱"
      inputValue={userAgent}
    >
      <div className="mb-3">
        <label className="form-label">Your User Agent:</label>
        <textarea
          className="form-control font-monospace"
          rows={4}
          value={userAgent}
          readOnly
        />
      </div>

      <div className="row g-3">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h5 className="card-title">Browser</h5>
              <p className="card-text fs-4">{info.browser}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h5 className="card-title">Operating System</h5>
              <p className="card-text fs-4">{info.os}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h5 className="card-title">Device Type</h5>
              <p className="card-text fs-4">{info.device}</p>
            </div>
          </div>
        </div>
      </div>
    </ToolWrapper>
  );
};

export default UserAgentParser;
