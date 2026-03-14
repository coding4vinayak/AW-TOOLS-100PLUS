import React, { useState, useEffect } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number | string>(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [currencies, setCurrencies] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch available currencies on mount
  useEffect(() => {
    fetch('https://api.frankfurter.app/currencies')
      .then((res) => res.json())
      .then((data) => setCurrencies(data))
      .catch(() => setError('Failed to load currency list'));
  }, []);

  const convertCurrency = async () => {
    if (!amount || isNaN(Number(amount))) {
      setError('Please enter a valid amount.');
      return;
    }
    if (fromCurrency === toCurrency) {
      setResult(Number(amount));
      setRate(1);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      if (!res.ok) throw new Error('Conversion failed');
      const data = await res.json();
      
      setResult(data.rates[toCurrency]);
      setRate(data.rates[toCurrency] / Number(amount));
    } catch (err: any) {
      setError(err.message || 'An error occurred during conversion.');
    } finally {
      setLoading(false);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Convert whenever dependencies change, unless loading
  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
       convertCurrency();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, fromCurrency, toCurrency, currencies]);

  const outputText = result !== null
    ? `${amount} ${fromCurrency} = ${result.toFixed(4)} ${toCurrency}\nExchange Rate: 1 ${fromCurrency} = ${rate?.toFixed(4)} ${toCurrency}`
    : '';

  return (
    <ToolWrapper
      title="Live Currency Converter"
      description="Convert exchange rates instantly in real-time."
      icon="💱"
      inputValue={`${amount} ${fromCurrency}`}
      outputValue={outputText}
      outputLabel="Conversion Data"
      showCopy={true}
      showDownload={true}
      downloadFilename={`abetworks-currency-${fromCurrency}-${toCurrency}.txt`}
    >
      <div className="card shadow-sm p-4 mb-4">
        <div className="row g-3 align-items-center mb-4">
          <div className="col-md-3">
            <label className="form-label">Amount</label>
            <input 
              type="number" 
              className="form-control form-control-lg format-number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
            />
          </div>
          
          <div className="col-md-4">
            <label className="form-label">From</label>
            <select 
              className="form-select form-select-lg" 
              value={fromCurrency} 
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {Object.entries(currencies).map(([code, name]) => (
                <option key={code} value={code}>{code} - {name}</option>
              ))}
            </select>
          </div>
          
          <div className="col-md-1 text-center mt-4 pt-2">
            <button 
              className="btn btn-outline-secondary rounded-circle" 
              onClick={swapCurrencies}
              title="Swap Currencies"
            >
              ⇄
            </button>
          </div>

          <div className="col-md-4">
            <label className="form-label">To</label>
            <select 
              className="form-select form-select-lg" 
              value={toCurrency} 
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {Object.entries(currencies).map(([code, name]) => (
                <option key={code} value={code}>{code} - {name}</option>
              ))}
            </select>
          </div>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="text-center p-4 bg-light rounded-3">
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : result !== null ? (
            <>
              <h2 className="display-5 fw-bold text-primary mb-2">
                {result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} {toCurrency}
              </h2>
              <p className="text-muted mb-0">
                1 {fromCurrency} = {rate?.toFixed(4)} {toCurrency}
              </p>
            </>
          ) : (
            <p className="text-muted mb-0">Enter an amount to see conversion</p>
          )}
        </div>
      </div>

      <div className="mt-4"><LeadCaptureForm toolName="Currency Converter" compact /></div>
    </ToolWrapper>
  );
};

export default CurrencyConverter;
