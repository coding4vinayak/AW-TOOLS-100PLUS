import React, { useState, useEffect } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const IPLookup: React.FC = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIp(data.ip);
        setError('');
      } catch (e) {
        setError('Failed to fetch IP address');
      } finally {
        setLoading(false);
      }
    };
    fetchIp();
  }, []);

  return (
    <ToolWrapper
      title="IP Lookup"
      description="Display your public IP address"
      icon="🌐"
      inputValue=""
    >
      {loading && <div className="text-center">Loading...</div>}
      
      {error && <div className="alert alert-danger">{error}</div>}
      
      {ip && (
        <div className="text-center">
          <div className="display-4 fw-bold text-primary mb-3">{ip}</div>
          <p className="text-muted">This is your public IP address</p>
          <button
            className="btn btn-outline-primary"
            onClick={() => navigator.clipboard.writeText(ip)}
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </ToolWrapper>
  );
};

export default IPLookup;
