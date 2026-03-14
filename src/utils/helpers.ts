// Copy text to clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  }
};
// Download image from dataURL with proper filename handling
export const downloadImage = (
  dataUrl: string,
  originalFilename?: string,
  outputFormat?: string
) => {
  // Extract original filename or use default
  let basename = 'image';
  let extension = 'png';
  
  if (originalFilename) {
    const lastDotIndex = originalFilename.lastIndexOf('.');
    if (lastDotIndex > 0 && lastDotIndex < originalFilename.length - 1) {
      basename = originalFilename.substring(0, lastDotIndex);
      extension = originalFilename.substring(lastDotIndex + 1);
    } else {
      basename = originalFilename;
    }
  }
  
  // Clean basename - remove any trailing/leading spaces and special chars
  basename = basename.trim().replace(/[<>:"/\\|?*]/g, '-');
  
  // Use output format if provided, otherwise keep original extension
  if (outputFormat) {
    extension = outputFormat;
  }
  
  // Ensure extension doesn't have a dot
  extension = extension.replace(/^\./, '');
  
  // Create branded filename
  const finalFilename = `abetworks-${basename}.${extension}`;
  
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = finalFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Download text as file with proper filename and extension handling
export const downloadAsFile = (content: string, filename: string, type = 'text/plain') => {
  let finalFilename = filename;
  
  // Extract base name and extension
  const lastDotIndex = finalFilename.lastIndexOf('.');
  let basename: string;
  let extension: string;
  
  if (lastDotIndex > 0 && lastDotIndex < finalFilename.length - 1) {
    // Has valid extension
    basename = finalFilename.substring(0, lastDotIndex);
    extension = finalFilename.substring(lastDotIndex);
  } else {
    // No extension
    basename = finalFilename;
    extension = '';
  }
  
  // Clean basename - remove any trailing/leading spaces and special chars
  basename = basename.trim().replace(/[<>:"/\\|?*]/g, '-');
  
  // Ensure we have an extension based on content type
  if (!extension) {
    if (type.includes('json')) {
      extension = '.json';
    } else if (type.includes('xml')) {
      extension = '.xml';
    } else if (type.includes('html')) {
      extension = '.html';
    } else if (type.includes('css')) {
      extension = '.css';
    } else if (type.includes('csv')) {
      extension = '.csv';
    } else if (type.includes('markdown') || type.includes('md')) {
      extension = '.md';
    } else {
      extension = '.txt';
    }
  }
  
  // Ensure extension starts with dot
  if (!extension.startsWith('.')) {
    extension = '.' + extension;
  }
  
  finalFilename = `${basename}${extension}`;

  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = finalFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// LocalStorage helpers for favorites
export const getFavorites = (): string[] => {
  try {
    const stored = localStorage.getItem('abetworks_favorites');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const toggleFavorite = (toolId: string): void => {
  const favorites = getFavorites();
  const index = favorites.indexOf(toolId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(toolId);
  }
  localStorage.setItem('abetworks_favorites', JSON.stringify(favorites));
};

export const isFavorite = (toolId: string): boolean => {
  return getFavorites().includes(toolId);
};

// LocalStorage helpers for history
export const getHistory = (): string[] => {
  try {
    const stored = localStorage.getItem('abetworks_history');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const addToHistory = (toolId: string): void => {
  const history = getHistory();
  const index = history.indexOf(toolId);
  if (index > -1) {
    history.splice(index, 1);
  }
  history.unshift(toolId);
  if (history.length > 10) {
    history.pop();
  }
  localStorage.setItem('abetworks_history', JSON.stringify(history));
};

// Theme helpers
export const getTheme = (): 'light' | 'dark' => {
  try {
    const stored = localStorage.getItem('abetworks_theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

export const setTheme = (theme: 'light' | 'dark'): void => {
  localStorage.setItem('abetworks_theme', theme);
  document.documentElement.setAttribute('data-bs-theme', theme);
};

// Debounce function
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Format numbers with commas
export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

// Generate unique ID
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

// Add Abetworks branding to generated content
export const addBranding = (content: string, toolName?: string): string => {
  const branding = `\n\n---\nGenerated with Abetworks Tools - Your all-in-one destination for free online tools\nVisit: https://abetworks.in\nTool: ${toolName || 'Online Tool'}\nGenerated: ${new Date().toLocaleString()}\n`;
  return content + branding;
};

// Remove branding from content (for editing/copying without branding)
export const removeBranding = (content: string): string => {
  const brandingPattern = /\n\n---\nGenerated with Abetworks Tools[\s\S]*$/;
  return content.replace(brandingPattern, '');
};

// Check if content already has branding
export const hasBranding = (content: string): boolean => {
  return content.includes('Generated with Abetworks Tools');
};
