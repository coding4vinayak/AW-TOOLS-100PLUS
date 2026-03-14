export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  path: string;
  keywords: string[];
  component: React.ComponentType;
}

export type ToolCategory =
  | 'text'
  | 'developer'
  | 'web'
  | 'calculators'
  | 'image'
  | 'security'
  | 'business'
  | 'marketing'
  | 'seo'
  | 'freelancer';

export interface CategoryInfo {
  id: ToolCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  { id: 'text', name: 'Text Tools', description: 'Manipulate and transform text', icon: '📝', color: '#2563eb' },
  { id: 'developer', name: 'Developer Tools', description: 'Code formatting and conversion', icon: '💻', color: '#7c3aed' },
  { id: 'web', name: 'Web Tools', description: 'SEO and web development utilities', icon: '🌐', color: '#059669' },
  { id: 'calculators', name: 'Calculators', description: 'Various calculation tools', icon: '🧮', color: '#dc2626' },
  { id: 'image', name: 'Image Tools', description: 'Image editing and conversion', icon: '🖼️', color: '#d97706' },
  { id: 'security', name: 'Security Tools', description: 'Password and validation tools', icon: '🔒', color: '#0891b2' },
  { id: 'business', name: 'Business Tools', description: 'Startup and business utilities', icon: '💼', color: '#059669' },
  { id: 'marketing', name: 'Marketing Tools', description: 'Social media and content marketing', icon: '📈', color: '#dc2626' },
  { id: 'seo', name: 'SEO Tools', description: 'Search engine optimization', icon: '🔍', color: '#7c3aed' },
  { id: 'freelancer', name: 'Freelancer Tools', description: 'Tools for freelancers and creators', icon: '👨‍💼', color: '#ea580c' },
];
