import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const ContrastChecker: React.FC = () => {
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [ratio, setRatio] = useState(21);
  const [wcagAA, setWcagAA] = useState(true);
  const [wcagAAA, setWcagAAA] = useState(true);

  const getLuminance = (hex: string) => {
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!rgb) return 0;
    
    const [, r, g, b] = rgb;
    const [rs, gs, bs] = [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)].map(c => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const getContrastRatio = (fg: string, bg: string) => {
    const l1 = getLuminance(fg);
    const l2 = getLuminance(bg);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  };

  React.useEffect(() => {
    const ratio = getContrastRatio(fgColor, bgColor);
    setRatio(ratio);
    setWcagAA(ratio >= 4.5);
    setWcagAAA(ratio >= 7);
  }, [fgColor, bgColor]);

  const getRating = () => {
    if (ratio >= 7) return { text: 'AAA (Excellent)', class: 'text-success' };
    if (ratio >= 4.5) return { text: 'AA (Good)', class: 'text-warning' };
    if (ratio >= 3) return { text: 'AA Large (Fair)', class: 'text-orange' };
    return { text: 'Fail (Poor)', class: 'text-danger' };
  };

  const rating = getRating();

  return (
    <ToolWrapper
      title="Contrast Checker"
      description="Check WCAG color contrast ratios for accessibility"
      icon="⚖️"
      inputValue=""
    >
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label className="form-label">Foreground Color:</label>
          <div className="input-group">
            <input
              type="color"
              className="form-control form-control-color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Background Color:</label>
          <div className="input-group">
            <input
              type="color"
              className="form-control form-control-color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mb-3 p-4 rounded text-center" style={{ backgroundColor: bgColor, color: fgColor }}>
        <h4 className="mb-2">Preview Text</h4>
        <p className="mb-0">The quick brown fox jumps over the lazy dog.</p>
      </div>

      <div className="card bg-light mb-3">
        <div className="card-body text-center">
          <h2 className="display-4 mb-2">{ratio.toFixed(2)}:1</h2>
          <p className={`fw-bold ${rating.class}`}>{rating.text}</p>
          <div className="row mt-3">
            <div className="col-6">
              <p className="mb-0">WCAG AA</p>
              <span className={`badge ${wcagAA ? 'bg-success' : 'bg-danger'}`}>
                {wcagAA ? 'Pass' : 'Fail'}
              </span>
            </div>
            <div className="col-6">
              <p className="mb-0">WCAG AAA</p>
              <span className={`badge ${wcagAAA ? 'bg-success' : 'bg-danger'}`}>
                {wcagAAA ? 'Pass' : 'Fail'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ToolWrapper>
  );
};

export default ContrastChecker;
