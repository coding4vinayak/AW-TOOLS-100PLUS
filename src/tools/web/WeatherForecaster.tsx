import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const WeatherForecaster: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      // 1. Get Coordinates using Open-Meteo Geocoding API
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
      if (!geoRes.ok) throw new Error('Failed to fetch location data');
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found. Please try another search.');
      }

      const location = geoData.results[0];
      const { latitude, longitude, name, country } = location;

      // 2. Get Weather using Open-Meteo API
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`);
      if (!weatherRes.ok) throw new Error('Failed to fetch weather data');
      const weatherJson = await weatherRes.json();

      setWeatherData({
        location: `${name}, ${country}`,
        current: weatherJson.current,
        daily: weatherJson.daily,
      });
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  // Helper to get simple weather description from WMO code
  const getWeatherDescription = (code: number) => {
    if (code === 0) return 'Clear sky ☀️';
    if (code >= 1 && code <= 3) return 'Partly cloudy 🌤️';
    if (code >= 45 && code <= 48) return 'Foggy 🌫️';
    if (code >= 51 && code <= 67) return 'Rain / Drizzle 🌧️';
    if (code >= 71 && code <= 77) return 'Snow ❄️';
    if (code >= 80 && code <= 82) return 'Rain showers 🌦️';
    if (code >= 85 && code <= 86) return 'Snow showers 🌨️';
    if (code >= 95) return 'Thunderstorm ⛈️';
    return 'Unknown 🌍';
  };

  // A formatted string representation for the output box (if needed for download/copy)
  const outputText = weatherData 
    ? `Weather Report: ${weatherData.location}\n` +
      `Temperature: ${weatherData.current.temperature_2m}°C\n` +
      `Humidity: ${weatherData.current.relative_humidity_2m}%\n` +
      `Wind Speed: ${weatherData.current.wind_speed_10m} km/h\n` +
      `Condition: ${getWeatherDescription(weatherData.current.weather_code)}`
    : '';

  return (
    <ToolWrapper
      title="Global Weather Forecaster"
      description="Get real-time weather and 7-day forecasts for any city worldwide."
      icon="🌤️"
      inputValue={city}
      outputValue={outputText}
      outputLabel="Weather Data (Text)"
      showCopy={true}
      showDownload={true}
      downloadFilename={`abetworks-weather-${city || 'report'}.txt`}
    >
      <div className="card shadow-sm p-4 mb-4">
        <h4 className="card-title mb-3">Check Local Weather</h4>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control form-control-lg" 
            placeholder="Enter city name (e.g., London, Tokyo, New York)" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
          />
          <button 
            className="btn btn-primary" 
            onClick={fetchWeather}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Get Weather 🔍'}
          </button>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        {weatherData && (
          <div className="mt-4 animate__animated animate__fadeIn">
            <div className="p-4 bg-primary text-white rounded-3 mb-4 text-center">
              <h2 className="mb-1">{weatherData.location}</h2>
              <div className="display-4 fw-bold mb-2">
                {weatherData.current.temperature_2m}°C
              </div>
              <h5 className="mb-3">{getWeatherDescription(weatherData.current.weather_code)}</h5>
              <div className="d-flex justify-content-center gap-4">
                <div>
                  <small className="opacity-75 d-block">Humidity</small>
                  <strong>{weatherData.current.relative_humidity_2m}%</strong>
                </div>
                <div>
                  <small className="opacity-75 d-block">Wind</small>
                  <strong>{weatherData.current.wind_speed_10m} km/h</strong>
                </div>
              </div>
            </div>

            <h4 className="mb-3">7-Day Forecast</h4>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Date</th>
                    <th>Condition</th>
                    <th>High</th>
                    <th>Low</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherData.daily.time.map((date: string, index: number) => (
                    <tr key={date}>
                      <td><strong>{new Date(date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</strong></td>
                      <td>{getWeatherDescription(weatherData.daily.weather_code[index])}</td>
                      <td className="text-danger">{weatherData.daily.temperature_2m_max[index]}°C</td>
                      <td className="text-primary">{weatherData.daily.temperature_2m_min[index]}°C</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4"><LeadCaptureForm toolName="Weather Forecaster" compact /></div>
    </ToolWrapper>
  );
};

export default WeatherForecaster;
