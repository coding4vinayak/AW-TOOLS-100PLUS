import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const IPLookup: React.FC = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [ipData, setIpData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const lookupIP = async (ipToSearch: string = ipAddress) => {
    setLoading(true);
    setError('');
    setIpData(null);

    // If ipToSearch is empty, the API defaults to the caller's IP
    const url = `http://ip-api.com/json/${ipToSearch || ''}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch IP data');
      const data = await res.json();

      if (data.status === 'fail') {
        throw new Error(data.message || 'Invalid IP address or lookup failed.');
      }

      setIpData(data);
      // Update the input field if we searched for the user's own IP
      if (!ipToSearch && data.query) {
        setIpAddress(data.query);
      }
    } catch (err: any) {
      // Handle mixed content errors gracefully (ip-api free tier is HTTP only)
      if (err.message.includes('Failed to fetch') && window.location.protocol === 'https:') {
         setError('The free IP API requires HTTP, but this site is loaded over HTTPS. This feature may not work in this environment.');
      } else {
         setError(err.message || 'An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const outputText = ipData
    ? `IP Address: ${ipData.query}\n` +
      `Location: ${ipData.city}, ${ipData.regionName}, ${ipData.country}\n` +
      `ISP: ${ipData.isp}\n` +
      `Organization: ${ipData.org}\n` +
      `Timezone: ${ipData.timezone}\n` +
      `Lat/Lon: ${ipData.lat}, ${ipData.lon}`
    : '';

  return (
    <ToolWrapper
      title="IP Geolocation Lookup"
      description="Find the geographic location, ISP, and timezone of any IP address."
      icon="🌍"
      inputValue={ipAddress}
      outputValue={outputText}
      outputLabel="IP Details"
      showCopy={true}
      showDownload={true}
      downloadFilename={`abetworks-ip-${ipData?.query || 'lookup'}.txt`}
    >
      <div className="card shadow-sm p-4 mb-4">
        <h4 className="card-title mb-3">Lookup IP Address</h4>
        
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control form-control-lg" 
            placeholder="Enter IPv4 or IPv6 address (e.g., 8.8.8.8)" 
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && lookupIP(ipAddress)}
          />
          <button 
            className="btn btn-primary" 
            onClick={() => lookupIP(ipAddress)}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search 🔍'}
          </button>
        </div>
        
        <div className="mb-4">
           <button 
            className="btn btn-outline-secondary btn-sm" 
            onClick={() => { setIpAddress(''); lookupIP(''); }}
            disabled={loading}
          >
            📍 Find My Own IP Address
          </button>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        {ipData && (
          <div className="mt-2 animate__animated animate__fadeIn">
             <div className="row g-3">
                <div className="col-md-6">
                   <div className="p-3 bg-light rounded h-100 border">
                      <h6 className="text-muted text-uppercase small fw-bold mb-1">IP Address</h6>
                      <h4 className="mb-0 font-monospace text-primary">{ipData.query}</h4>
                   </div>
                </div>
                <div className="col-md-6">
                   <div className="p-3 bg-light rounded h-100 border">
                      <h6 className="text-muted text-uppercase small fw-bold mb-1">Location</h6>
                      <h5 className="mb-0">{ipData.city}, {ipData.regionName}</h5>
                      <p className="mb-0 text-muted">{ipData.country}</p>
                   </div>
                </div>
                <div className="col-md-6">
                   <div className="p-3 bg-light rounded h-100 border">
                      <h6 className="text-muted text-uppercase small fw-bold mb-1">Internet Service Provider</h6>
                      <h5 className="mb-0">{ipData.isp}</h5>
                      {ipData.org && ipData.org !== ipData.isp && <p className="mb-0 text-muted">{ipData.org}</p>}
                   </div>
                </div>
                <div className="col-md-6">
                   <div className="p-3 bg-light rounded h-100 border">
                      <h6 className="text-muted text-uppercase small fw-bold mb-1">Details</h6>
                      <p className="mb-1"><strong>Timezone:</strong> {ipData.timezone}</p>
                      <p className="mb-0"><strong>Coordinates:</strong> {ipData.lat}, {ipData.lon}</p>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
      
      <div className="mt-4"><LeadCaptureForm toolName="IP Geolocation Lookup" compact /></div>
    </ToolWrapper>
  );
};

export default IPLookup;
