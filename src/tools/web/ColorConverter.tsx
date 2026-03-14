import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';

const ColorConverter: React.FC = () => {
  const [hex, setHex] = useState('#2563eb');
  const [rgb, setRgb] = useState({ r: 37, g: 99, b: 235 });
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 53 });

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  };

  const hslToRgb = (h: number, s: number, l: number) => {
    h /= 360; s /= 100; l /= 100;
    let r: number, g: number, b: number;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
  };

  const handleHexChange = (value: string) => {
    setHex(value);
    const rgbVal = hexToRgb(value);
    setRgb(rgbVal);
    setHsl(rgbToHsl(rgbVal.r, rgbVal.g, rgbVal.b));
  };

  const handleRgbChange = (channel: 'r' | 'g' | 'b', value: number) => {
    const newRgb = { ...rgb, [channel]: value };
    setRgb(newRgb);
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b));
  };

  const handleHslChange = (channel: 'h' | 's' | 'l', value: number) => {
    const newHsl = { ...hsl, [channel]: value };
    setHsl(newHsl);
    const rgbVal = hslToRgb(newHsl.h, newHsl.s, newHsl.l);
    setRgb(rgbVal);
    setHex(rgbToHex(rgbVal.r, rgbVal.g, rgbVal.b));
  };

  const colorStyle = { backgroundColor: hex };

  return (
    <ToolWrapper
      title="Color Converter"
      description="Convert between HEX, RGB, and HSL color formats"
      icon="🎨"
      inputValue={hex}
    >
      <div className="mb-4 p-4 rounded" style={{ ...colorStyle, minHeight: '100px' }}>
        <p className="text-white fw-bold mb-0" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          Color Preview
        </p>
      </div>

      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label">HEX:</label>
          <div className="input-group">
            <input
              type="color"
              className="form-control form-control-color"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label">RGB:</label>
          <div className="d-flex gap-2">
            <input
              type="number"
              className="form-control"
              min="0"
              max="255"
              value={rgb.r}
              onChange={(e) => handleRgbChange('r', parseInt(e.target.value) || 0)}
              placeholder="R"
            />
            <input
              type="number"
              className="form-control"
              min="0"
              max="255"
              value={rgb.g}
              onChange={(e) => handleRgbChange('g', parseInt(e.target.value) || 0)}
              placeholder="G"
            />
            <input
              type="number"
              className="form-control"
              min="0"
              max="255"
              value={rgb.b}
              onChange={(e) => handleRgbChange('b', parseInt(e.target.value) || 0)}
              placeholder="B"
            />
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label">HSL:</label>
          <div className="d-flex gap-2">
            <input
              type="number"
              className="form-control"
              min="0"
              max="360"
              value={hsl.h}
              onChange={(e) => handleHslChange('h', parseInt(e.target.value) || 0)}
              placeholder="H"
            />
            <input
              type="number"
              className="form-control"
              min="0"
              max="100"
              value={hsl.s}
              onChange={(e) => handleHslChange('s', parseInt(e.target.value) || 0)}
              placeholder="S"
            />
            <input
              type="number"
              className="form-control"
              min="0"
              max="100"
              value={hsl.l}
              onChange={(e) => handleHslChange('l', parseInt(e.target.value) || 0)}
              placeholder="L"
            />
          </div>
        </div>
      </div>
    </ToolWrapper>
  );
};

export default ColorConverter;
