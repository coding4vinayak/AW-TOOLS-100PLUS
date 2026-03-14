import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags, type SEOData } from '../utils/seoHelpers';

/**
 * Custom hook for managing SEO meta tags in React components
 */
export const useSEO = (seoData: SEOData): void => {
  const location = useLocation();

  useEffect(() => {
    updateMetaTags(seoData);
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup
    };
  }, [seoData, location.pathname]);
};

/**
 * Default SEO data for the homepage
 */
export const defaultSEO: SEOData = {
  title: 'Abetworks Tools - 100+ Free Online Tools | Developer, Text, Web, SEO Tools',
  description: 'Access 100+ free online tools for developers, designers, and businesses. Text tools, developer tools, web tools, calculators, image tools, SEO tools, and more. No registration required.',
  canonical: 'https://tools.abetworks.in',
  keywords: [
    'online tools',
    'free tools',
    'text tools',
    'developer tools',
    'web tools',
    'calculators',
    'image tools',
    'security tools',
    'SEO tools',
    'marketing tools',
    'business tools',
    'freelancer tools',
    'abetworks',
    'abetworks.in'
  ],
  ogImage: 'https://tools.abetworks.in/og-image.png'
};

/**
 * Get SEO data for a tool page
 */
export const getToolSEOData = (toolName: string, toolDescription: string, category: string): SEOData => {
  const slug = toolName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return {
    title: `${toolName} - Free Online Tool | Abetworks`,
    description: toolDescription,
    canonical: `https://tools.abetworks.in/tool/${slug}`,
    keywords: [
      toolName,
      toolName.toLowerCase(),
      `free ${toolName.toLowerCase()}`,
      `online ${toolName.toLowerCase()}`,
      category,
      'free online tools',
      'abetworks'
    ],
    ogImage: 'https://tools.abetworks.in/og-image.png'
  };
};

/**
 * Get SEO data for a category page
 */
export const getCategorySEOData = (categoryName: string, categoryDescription: string, toolCount: number): SEOData => {
  const slug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return {
    title: `${categoryName} Tools - ${toolCount} Free Online Tools | Abetworks`,
    description: categoryDescription,
    canonical: `https://tools.abetworks.in/category/${slug}`,
    keywords: [
      categoryName,
      `${categoryName.toLowerCase()} tools`,
      `free ${categoryName.toLowerCase()} tools`,
      'online tools',
      'abetworks'
    ],
    ogImage: 'https://tools.abetworks.in/og-image.png'
  };
};
