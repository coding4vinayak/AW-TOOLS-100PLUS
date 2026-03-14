// SEO Data for all 142 tools
// Each tool has: description, keywords (8), and category

export interface ToolSEOData {
  description: string;
  keywords: string[];
  category: string;
}

export const toolsSEOData: Record<string, ToolSEOData> = {
  // Business Tools
  'business-name-generator': {
    description: 'Generate catchy, memorable, and unique business names for your startup, brand, or company in seconds. Our AI-powered tool creates professional business names tailored to your industry with modern, classic, tech, and creative styles.',
    keywords: ['business name generator', 'company name ideas', 'startup name generator', 'brand name generator', 'free business naming tool', 'online business name creator', 'startup name ideas', 'company naming tool'],
    category: 'business'
  },
  'business-plan-outline': {
    description: 'Create a comprehensive business plan outline with all essential sections including executive summary, market analysis, financial projections, and operational strategy. Perfect for startups seeking funding or established businesses planning expansion.',
    keywords: ['business plan template', 'business plan outline', 'startup business plan', 'free business plan generator', 'business plan creator', 'business planning tool', 'business strategy template', 'business proposal template'],
    category: 'business'
  },
  'swot-analysis': {
    description: 'Conduct a professional SWOT analysis to identify your business strengths, weaknesses, opportunities, and threats. This strategic planning tool helps you make informed decisions and develop effective business strategies.',
    keywords: ['swot analysis', 'swot analysis template', 'free swot analysis tool', 'business swot analysis', 'strategic planning tool', 'swot matrix generator', 'business analysis tool', 'competitive analysis'],
    category: 'business'
  },
  'elevator-pitch-generator': {
    description: 'Create a compelling elevator pitch that captures attention and communicates your value proposition in 30 seconds or less. Perfect for entrepreneurs, sales professionals, and job seekers.',
    keywords: ['elevator pitch generator', 'elevator pitch creator', 'pitch deck generator', 'elevator speech template', 'startup pitch generator', 'business pitch creator', '30 second pitch', 'investor pitch template'],
    category: 'business'
  },
  'target-audience-finder': {
    description: 'Identify and define your ideal target audience with detailed demographic, psychographic, and behavioral insights. Create customer personas that drive effective marketing strategies.',
    keywords: ['target audience finder', 'customer persona generator', 'audience analysis tool', 'target market identifier', 'customer profiling tool', 'market segmentation tool', 'buyer persona creator', 'audience research tool'],
    category: 'business'
  },

  // Developer Tools
  'json-formatter': {
    description: 'Format, beautify, and validate JSON data online for free. Our JSON formatter makes your JSON code readable and well-structured with proper indentation and syntax highlighting. Perfect for developers working with APIs.',
    keywords: ['json formatter', 'json beautifier', 'json validator', 'format json online', 'json pretty print', 'free json formatter', 'online json formatter', 'json syntax checker'],
    category: 'developer'
  },
  'json-minifier': {
    description: 'Minify and compress JSON data to reduce file size for faster web performance. Remove whitespace and comments from JSON files while maintaining valid structure.',
    keywords: ['json minifier', 'json compressor', 'minify json online', 'compress json', 'json optimizer', 'reduce json size', 'json beautifier', 'json formatter'],
    category: 'developer'
  },
  'xml-formatter': {
    description: 'Format and beautify XML code with proper indentation and structure. Validate XML syntax and make your XML files readable and well-organized.',
    keywords: ['xml formatter', 'xml beautifier', 'xml validator', 'format xml online', 'xml pretty print', 'free xml formatter', 'online xml formatter', 'xml syntax checker'],
    category: 'developer'
  },
  'sql-formatter': {
    description: 'Format and beautify SQL queries with proper indentation and syntax highlighting. Support for multiple SQL dialects including MySQL, PostgreSQL, and SQL Server.',
    keywords: ['sql formatter', 'sql beautifier', 'sql validator', 'format sql online', 'sql pretty print', 'free sql formatter', 'online sql formatter', 'sql syntax checker'],
    category: 'developer'
  },
  'html-formatter': {
    description: 'Format and beautify HTML code with proper indentation and structure. Make your HTML readable and well-organized for easier debugging and maintenance.',
    keywords: ['html formatter', 'html beautifier', 'html validator', 'format html online', 'html pretty print', 'free html formatter', 'online html formatter', 'html syntax checker'],
    category: 'developer'
  },

  // Text Tools
  'word-counter': {
    description: 'Count words, characters, sentences, and paragraphs in your text instantly and for free. Perfect for writers, students, bloggers, and professionals who need accurate text statistics.',
    keywords: ['word counter', 'word count tool', 'character counter', 'count words online', 'free word counter', 'online word counter', 'text statistics', 'word counter with characters'],
    category: 'text'
  },
  'character-counter': {
    description: 'Count characters in real-time with detailed statistics including letters, digits, spaces, and special characters. Ideal for social media posts, SMS, and text limits.',
    keywords: ['character counter', 'character count tool', 'count characters online', 'free character counter', 'online character counter', 'text length counter', 'character limit checker', 'character counter with spaces'],
    category: 'text'
  },
  'case-converter': {
    description: 'Convert text between uppercase, lowercase, title case, sentence case, and more. Transform your text formatting instantly with a single click.',
    keywords: ['case converter', 'text case converter', 'uppercase converter', 'lowercase converter', 'title case converter', 'sentence case converter', 'free case converter', 'online case converter'],
    category: 'text'
  },
  'text-reverser': {
    description: 'Reverse text, words, or lines instantly. Flip your text backwards for creative purposes, debugging, or data manipulation.',
    keywords: ['text reverser', 'reverse text online', 'string reverser', 'word reverser', 'free text reverser', 'online text reverser', 'reverse string tool', 'text flipper'],
    category: 'text'
  },
  'remove-duplicates': {
    description: 'Remove duplicate lines or words from your text instantly. Clean and deduplicate your data with this simple online tool.',
    keywords: ['remove duplicates', 'duplicate remover', 'remove duplicate lines', 'deduplicate text', 'free duplicate remover', 'online duplicate remover', 'text cleaner', 'duplicate line remover'],
    category: 'text'
  },

  // Web Tools
  'meta-tag-generator': {
    description: 'Generate SEO-friendly meta tags for your website including title, description, keywords, and Open Graph tags. Improve your search engine rankings.',
    keywords: ['meta tag generator', 'meta tags creator', 'seo meta tag generator', 'meta description generator', 'open graph generator', 'free meta tag generator', 'online meta tag generator', 'meta tags creator'],
    category: 'web'
  },
  'qr-code-generator': {
    description: 'Generate custom QR codes for URLs, text, contact information, and more. Create scannable QR codes instantly with customizable colors and sizes.',
    keywords: ['qr code generator', 'qr code creator', 'free qr code generator', 'online qr code generator', 'custom qr code', 'qr code maker', 'qr generator', 'qr code for url'],
    category: 'web'
  },
  'sitemap-generator': {
    description: 'Create XML sitemaps for your website to improve SEO and help search engines index your pages. Generate standard sitemap.xml files instantly.',
    keywords: ['sitemap generator', 'xml sitemap creator', 'sitemap creator', 'free sitemap generator', 'online sitemap generator', 'seo sitemap tool', 'sitemap.xml generator', 'website sitemap creator'],
    category: 'web'
  },
  'robots-txt-generator': {
    description: 'Generate robots.txt files to control search engine crawlers access to your website. Create proper robots.txt syntax instantly.',
    keywords: ['robots.txt generator', 'robots.txt creator', 'robots.txt maker', 'free robots.txt generator', 'online robots.txt generator', 'seo robots.txt tool', 'crawler control tool', 'sitemap robots generator'],
    category: 'web'
  },

  // Calculators
  'percentage-calculator': {
    description: 'Calculate percentages, percentage increases, decreases, and differences instantly. Solve percentage problems with step-by-step solutions.',
    keywords: ['percentage calculator', 'percent calculator', 'calculate percentage', 'percentage increase calculator', 'percentage decrease calculator', 'free percentage calculator', 'online percentage calculator', 'percentage finder'],
    category: 'calculators'
  },
  'discount-calculator': {
    description: 'Calculate discounts, sale prices, and savings with this easy-to-use calculator. Perfect for shopping sales and promotional pricing.',
    keywords: ['discount calculator', 'sale price calculator', 'discount percentage calculator', 'savings calculator', 'free discount calculator', 'online discount calculator', 'percentage off calculator', 'sale calculator'],
    category: 'calculators'
  },
  'bmi-calculator': {
    description: 'Calculate your Body Mass Index (BMI) and determine your weight category. Track your health and fitness goals with this simple calculator.',
    keywords: ['bmi calculator', 'body mass index calculator', 'bmi calculator for adults', 'free bmi calculator', 'online bmi calculator', 'health bmi calculator', 'weight category calculator', 'fitness bmi tool'],
    category: 'calculators'
  },
  'age-calculator': {
    description: 'Calculate your exact age in years, months, weeks, days, and even hours. Find out how old you are with precision.',
    keywords: ['age calculator', 'calculate age', 'age finder', 'free age calculator', 'online age calculator', 'birthday age calculator', 'exact age calculator', 'age in days calculator'],
    category: 'calculators'
  },

  // Image Tools
  'image-resizer': {
    description: 'Resize images online to any dimension while maintaining quality. Perfect for social media, web optimization, and printing requirements.',
    keywords: ['image resizer', 'photo resizer', 'picture resizer', 'free image resizer', 'online image resizer', 'resize photo online', 'image size changer', 'batch image resizer'],
    category: 'image'
  },
  'image-compressor': {
    description: 'Compress images online to reduce file size without losing quality. Optimize images for web, email, and social media.',
    keywords: ['image compressor', 'photo compressor', 'picture compressor', 'free image compressor', 'online image compressor', 'compress jpeg online', 'image optimizer', 'reduce image size'],
    category: 'image'
  },
  'image-format-converter': {
    description: 'Convert images between PNG, JPEG, WebP, and other formats instantly. Free online image format converter with no quality loss.',
    keywords: ['image format converter', 'photo format converter', 'png to jpg converter', 'jpg to png converter', 'webp converter', 'free image converter', 'online image converter', 'picture format converter'],
    category: 'image'
  },
  'image-cropper': {
    description: 'Crop images online to any size or aspect ratio. Cut, trim, and resize your photos with precision.',
    keywords: ['image cropper', 'photo cropper', 'picture cropper', 'free image cropper', 'online image cropper', 'crop photo online', 'image cutter', 'photo trimmer'],
    category: 'image'
  },

  // Security Tools
  'password-generator': {
    description: 'Generate strong, secure passwords with customizable length and character types. Create unbreakable passwords instantly.',
    keywords: ['password generator', 'secure password generator', 'strong password creator', 'random password generator', 'free password generator', 'online password generator', 'password maker', 'secure password creator'],
    category: 'security'
  },
  'password-strength-checker': {
    description: 'Check password strength and security in real-time. Analyze password complexity and get recommendations for stronger passwords.',
    keywords: ['password strength checker', 'password security checker', 'password tester', 'password strength tester', 'free password checker', 'online password checker', 'password analyzer', 'secure password checker'],
    category: 'security'
  },
  'md5-hash-generator': {
    description: 'Generate MD5 hash from text or files. Create MD5 checksums for data verification and password hashing.',
    keywords: ['md5 hash generator', 'md5 generator', 'md5 converter', 'md5 checksum generator', 'free md5 generator', 'online md5 generator', 'md5 creator', 'md5 hash maker'],
    category: 'security'
  },
  'email-validator': {
    description: 'Validate email addresses instantly to check format and deliverability. Verify email syntax and domain validity.',
    keywords: ['email validator', 'email verifier', 'email checker', 'email validation tool', 'free email validator', 'online email validator', 'email syntax checker', 'email address validator'],
    category: 'security'
  },

  // Marketing Tools
  'hashtag-generator': {
    description: 'Generate relevant hashtags for Instagram, Twitter, LinkedIn, and other social media platforms. Boost your social media engagement.',
    keywords: ['hashtag generator', 'instagram hashtag generator', 'twitter hashtag generator', 'social media hashtag generator', 'free hashtag generator', 'online hashtag generator', 'hashtag creator', 'hashtag maker'],
    category: 'marketing'
  },
  'ad-copy-generator': {
    description: 'Generate compelling ad copy for Google Ads, Facebook Ads, and other platforms. Create high-converting advertisements instantly.',
    keywords: ['ad copy generator', 'ad copy creator', 'google ads copy generator', 'facebook ad copy generator', 'free ad copy generator', 'online ad copy creator', 'advertisement copy maker', 'ppc copy generator'],
    category: 'marketing'
  },
  'blog-title-generator': {
    description: 'Generate catchy, SEO-friendly blog post titles that drive clicks. Create engaging headlines for your content.',
    keywords: ['blog title generator', 'blog post title generator', 'headline generator', 'title creator', 'free blog title generator', 'online title generator', 'seo title generator', 'blog headline creator'],
    category: 'marketing'
  },
  'content-calendar-generator': {
    description: 'Create a content calendar to plan and organize your social media posts, blog articles, and marketing campaigns.',
    keywords: ['content calendar generator', 'content planner', 'social media calendar', 'content schedule creator', 'free content calendar', 'online content planner', 'marketing calendar creator', 'content planning tool'],
    category: 'marketing'
  },

  // SEO Tools
  'keyword-density-checker': {
    description: 'Analyze keyword density in your content to optimize for SEO. Find the perfect keyword frequency for better rankings.',
    keywords: ['keyword density checker', 'keyword density analyzer', 'keyword density tool', 'seo keyword checker', 'free keyword density checker', 'online keyword analyzer', 'keyword frequency checker', 'content keyword optimizer'],
    category: 'seo'
  },
  'meta-tag-analyzer': {
    description: 'Analyze meta tags on any webpage for SEO optimization. Check title tags, descriptions, and meta keywords.',
    keywords: ['meta tag analyzer', 'meta tag checker', 'seo meta analyzer', 'meta tag inspector', 'free meta tag analyzer', 'online meta tag checker', 'website meta analyzer', 'meta tag seo tool'],
    category: 'seo'
  },
  'serp-simulator': {
    description: 'Simulate how your website will appear in Google search results. Preview and optimize your SERP snippets.',
    keywords: ['serp simulator', 'google serp simulator', 'serp preview tool', 'search result simulator', 'free serp simulator', 'online serp preview', 'google preview tool', 'serp snippet generator'],
    category: 'seo'
  },
  'rich-snippet-generator': {
    description: 'Generate schema markup and rich snippets for better search engine visibility. Create structured data for Google.',
    keywords: ['rich snippet generator', 'schema markup generator', 'structured data generator', 'google schema generator', 'free rich snippet generator', 'online schema creator', 'seo schema tool', 'markup generator'],
    category: 'seo'
  },

  // Freelancer Tools
  'invoice-generator': {
    description: 'Create professional invoices for your freelance business. Generate customizable invoice templates instantly.',
    keywords: ['invoice generator', 'invoice creator', 'freelance invoice generator', 'invoice template creator', 'free invoice generator', 'online invoice creator', 'professional invoice maker', 'invoice builder'],
    category: 'freelancer'
  },
  'contract-template-generator': {
    description: 'Generate professional contract templates for freelance projects. Create legally-sound agreements quickly.',
    keywords: ['contract template generator', 'contract creator', 'freelance contract generator', 'contract template maker', 'free contract generator', 'online contract creator', 'legal contract template', 'agreement generator'],
    category: 'freelancer'
  },
  'proposal-template-generator': {
    description: 'Create winning project proposals with professional templates. Impress clients and win more freelance projects.',
    keywords: ['proposal template generator', 'proposal creator', 'project proposal generator', 'proposal template maker', 'free proposal generator', 'online proposal creator', 'business proposal template', 'freelance proposal generator'],
    category: 'freelancer'
  },
  'rate-calculator': {
    description: 'Calculate your ideal freelance hourly rate based on expenses, desired income, and billable hours.',
    keywords: ['freelance rate calculator', 'hourly rate calculator', 'rate calculator', 'freelance pricing calculator', 'free rate calculator', 'online rate calculator', 'income calculator', 'pricing calculator'],
    category: 'freelancer'
  }
};

export default toolsSEOData;
