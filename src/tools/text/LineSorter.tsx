import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const LineSorter: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [caseSensitive, setCaseSensitive] = useState(false);

  const sort = () => {
    const lines = input.split('\n').filter(l => l.trim());
    const sorted = lines.sort((a, b) => {
      const aVal = caseSensitive ? a : a.toLowerCase();
      const bVal = caseSensitive ? b : b.toLowerCase();
      if (order === 'asc') {
        return aVal.localeCompare(bVal, undefined, { numeric: true });
      }
      return bVal.localeCompare(aVal, undefined, { numeric: true });
    });
    setOutput(sorted.join('\n'));
  };

  return (
    <ToolWrapper
      title="Line Sorter"
      description="Sort lines alphabetically or numerically"
      icon="📋"
      outputValue={output}
      showDownload={true}
      downloadFilename="abetworks-sorted-lines.txt"
    >
      <div className="mb-3">
        <label htmlFor="input" className="form-label">Enter your text:</label>
        <textarea
          id="input"
          className="form-control"
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter lines to sort..."
        />
      </div>
      <div className="mb-3">
        <div className="btn-group me-3" role="group">
          <button
            className={`btn ${order === 'asc' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setOrder('asc')}
          >
            Ascending
          </button>
          <button
            className={`btn ${order === 'desc' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setOrder('desc')}
          >
            Descending
          </button>
        </div>
        <div className="form-check d-inline-block">
          <input
            type="checkbox"
            className="form-check-input"
            id="caseSensitive"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="caseSensitive">
            Case sensitive
          </label>
        </div>
      </div>
      <button className="btn btn-primary" onClick={sort}>Sort Lines</button>
    </ToolWrapper>
  );
};

export default LineSorter;
