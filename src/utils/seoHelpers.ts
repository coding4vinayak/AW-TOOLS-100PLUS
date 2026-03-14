/**
 * SEO Helper Utilities for Abetworks Tools
 * Handles dynamic meta tags, structured data, and SEO optimizations
 */

export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://tools.abetworks.in';

/**
 * Update document meta tags dynamically
 */
export const updateMetaTags = (seoData: SEOData): void => {
  // Update title
  document.title = seoData.title;
  
  // Update or create meta description
  updateOrCreateMeta('description', seoData.description);
  
  // Update or create canonical URL
  const canonicalUrl = seoData.canonical || `${BASE_URL}${window.location.pathname}`;
  updateOrCreateLink('canonical', canonicalUrl);
  
  // Update keywords if provided
  if (seoData.keywords && seoData.keywords.length > 0) {
    updateOrCreateMeta('keywords', seoData.keywords.join(', '));
  }
  
  // Open Graph tags
  updateOrCreateMeta('og:title', seoData.title);
  updateOrCreateMeta('og:description', seoData.description);
  updateOrCreateMeta('og:url', canonicalUrl);
  updateOrCreateMeta('og:type', 'website');
  
  if (seoData.ogImage) {
    updateOrCreateMeta('og:image', seoData.ogImage);
  }
  
  // Twitter Card tags
  updateOrCreateMeta('twitter:card', 'summary_large_image');
  updateOrCreateMeta('twitter:title', seoData.title);
  updateOrCreateMeta('twitter:description', seoData.description);
  
  // Robots tag
  if (seoData.noIndex) {
    updateOrCreateMeta('robots', 'noindex, nofollow');
  } else {
    updateOrCreateMeta('robots', 'index, follow');
  }
};

/**
 * Update or create a meta tag
 */
const updateOrCreateMeta = (name: string, content: string): void => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
};

/**
 * Update or create Open Graph meta tag
 */
const updateOrCreateOGMeta = (property: string, content: string): void => {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
};

/**
 * Update or create link tag (for canonical)
 */
const updateOrCreateLink = (rel: string, href: string): void => {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  
  link.setAttribute('href', href);
};

/**
 * Generate tool-specific SEO data
 */
export const generateToolSEOData = (toolName: string, toolDescription: string, category: string): SEOData => {
  const slug = toolName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return {
    title: `${toolName} - Free Online Tool | Abetworks`,
    description: toolDescription,
    canonical: `${BASE_URL}/tool/${slug}`,
    keywords: [
      toolName,
      toolName.toLowerCase(),
      `free ${toolName.toLowerCase()}`,
      `online ${toolName.toLowerCase()}`,
      category,
      'free online tools',
      'abetworks'
    ],
    ogImage: `${BASE_URL}/og-image.png`
  };
};

/**
 * Generate category-specific SEO data
 */
export const generateCategorySEOData = (categoryName: string, categoryDescription: string, toolCount: number): SEOData => {
  const slug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return {
    title: `${categoryName} Tools - ${toolCount} Free Online Tools | Abetworks`,
    description: categoryDescription,
    canonical: `${BASE_URL}/category/${slug}`,
    keywords: [
      categoryName,
      `${categoryName.toLowerCase()} tools`,
      `free ${categoryName.toLowerCase()} tools`,
      'online tools',
      'abetworks'
    ],
    ogImage: `${BASE_URL}/og-image.png`
  };
};

/**
 * Add structured data for a tool
 */
export const addToolStructuredData = (toolName: string, description: string, category: string): void => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": toolName,
    "applicationCategory": category,
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Abetworks Tools",
      "url": BASE_URL
    }
  };

  injectStructuredData(structuredData, 'tool-structured-data');
};

/**
 * Add breadcrumb structured data
 */
export const addBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>): void => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  injectStructuredData(structuredData, 'breadcrumb-structured-data');
};

/**
 * Inject structured data into the document
 */
const injectStructuredData = (data: Record<string, unknown>, id: string): void => {
  let script = document.getElementById(id) as HTMLScriptElement;
  
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(data);
};

/**
 * Remove structured data from the document
 */
export const removeStructuredData = (id: string): void => {
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
};

/**
 * Preload important resources for better performance
 */
export const preloadResource = (url: string, as: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = url;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

/**
 * Add DNS prefetch for external domains
 */
export const addDNSPrefetch = (domain: string): void => {
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = domain;
  document.head.appendChild(link);
};

/**
 * Performance monitoring helper
 */
export const reportWebVitals = (onPerfEntry?: (metric: PerformanceEntry) => void): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch(() => {
      // web-vitals not installed, skip
    });
  }
};
