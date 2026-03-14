import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const TimeZoneConverter: React.FC = () => {
  const [dateTime, setDateTime] = useState('');
  const [fromZone, setFromZone] = useState('UTC');
  const [toZone, setToZone] = useState('America/New_York');
  const [output, setOutput] = useState('');

  const timeZones = [
    'UTC', 'America/New_York', 'America/Los_Angeles', 'America/Chicago',
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Moscow',
    'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Kolkata', 'Asia/Dubai',
    'Australia/Sydney', 'Pacific/Auckland'
  ];

  const convert = () => {
    if (!dateTime) return;
    
    try {
      const date = new Date(dateTime);
      const options: Intl.DateTimeFormatOptions = {
        timeZone: toZone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      
      const converted = date.toLocaleString('en-US', options);
      setOutput(`Converted Time:\n${converted}\n(${toZone})`);
    } catch (e) {
      setOutput('Invalid date/time');
    }
  };

  return (
    <ToolWrapper
      title="Time Zone Converter"
      description="Convert between time zones"
      icon="🌍"
      outputValue={output}
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label htmlFor="dateTime" className="form-label">Date & Time:</label>
          <input
            type="datetime-local"
            id="dateTime"
            className="form-control"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="fromZone" className="form-label">From Time Zone:</label>
          <select
            id="fromZone"
            className="form-select"
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
          >
            {timeZones.map(tz => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="toZone" className="form-label">To Time Zone:</label>
          <select
            id="toZone"
            className="form-select"
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
          >
            {timeZones.map(tz => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="btn btn-primary" onClick={convert}>Convert</button>
    </ToolWrapper>
  );
};

export default TimeZoneConverter;
