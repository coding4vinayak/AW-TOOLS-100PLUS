import type { Tool, ToolCategory } from './types';

// Import all tool components
// Text Tools
import WordCounter from '../tools/text/WordCounter';
import CharacterCounter from '../tools/text/CharacterCounter';
import CaseConverter from '../tools/text/CaseConverter';
import TextReverser from '../tools/text/TextReverser';
import RemoveDuplicates from '../tools/text/RemoveDuplicates';
import FindAndReplace from '../tools/text/FindAndReplace';
import TextToSlug from '../tools/text/TextToSlug';
import LoremIpsumGenerator from '../tools/text/LoremIpsumGenerator';
import TextComparator from '../tools/text/TextComparator';
import LineSorter from '../tools/text/LineSorter';
import LineShuffler from '../tools/text/LineShuffler';
import AddPrefixSuffix from '../tools/text/AddPrefixSuffix';
import RemoveEmptyLines from '../tools/text/RemoveEmptyLines';
import TextTrimmer from '../tools/text/TextTrimmer';
import TextToBinary from '../tools/text/TextToBinary';
import BinaryToText from '../tools/text/BinaryToText';
import TextToMorse from '../tools/text/TextToMorse';
import MorseToText from '../tools/text/MorseToText';
import RemoveEmojis from '../tools/text/RemoveEmojis';
import TextSplitter from '../tools/text/TextSplitter';
import JoinLines from '../tools/text/JoinLines';
import ReverseLines from '../tools/text/ReverseLines';
import ToggleCase from '../tools/text/ToggleCase';
import RandomCase from '../tools/text/RandomCase';
import AlternatingCase from '../tools/text/AlternatingCase';
import QuoteGenerator from '../tools/text/QuoteGenerator';
// Business Tools
import BusinessNameGenerator from '../tools/business/BusinessNameGenerator';
import BusinessPlanOutline from '../tools/business/BusinessPlanOutline';
import ElevatorPitchGenerator from '../tools/business/ElevatorPitchGenerator';
import MissionVisionGenerator from '../tools/business/MissionVisionGenerator';
import SWOTAnalysis from '../tools/business/SWOTAnalysis';
import BusinessModelCanvas from '../tools/business/BusinessModelCanvas';
import LeanCanvas from '../tools/business/LeanCanvas';
import ValuePropositionGenerator from '../tools/business/ValuePropositionGenerator';
import TargetAudienceFinder from '../tools/business/TargetAudienceFinder';
import CompetitorAnalysis from '../tools/business/CompetitorAnalysis';
import RevenueModelCalculator from '../tools/business/RevenueModelCalculator';
import BreakEvenAnalysis from '../tools/business/BreakEvenAnalysis';
import CashFlowForecast from '../tools/business/CashFlowForecast';
import PricingStrategyCalculator from '../tools/business/PricingStrategyCalculator';
import ROICalculator from '../tools/business/ROICalculator';
import FinancialProjections from '../tools/business/FinancialProjections';
import FundingCalculator from '../tools/business/FundingCalculator';
import CurrencyConverter from '../tools/business/CurrencyConverter';
// Marketing Tools
import HashtagGenerator from '../tools/marketing/HashtagGenerator';
import SocialMediaPostGenerator from '../tools/marketing/SocialMediaPostGenerator';
import ContentCalendarGenerator from '../tools/marketing/ContentCalendarGenerator';
import EmailSubjectLineGenerator from '../tools/marketing/EmailSubjectLineGenerator';
import BlogTitleGenerator from '../tools/marketing/BlogTitleGenerator';
import YouTubeTitleGenerator from '../tools/marketing/YouTubeTitleGenerator';
import InstagramCaptionGenerator from '../tools/marketing/InstagramCaptionGenerator';
import LinkedInPostGenerator from '../tools/marketing/LinkedInPostGenerator';
import TweetGenerator from '../tools/marketing/TweetGenerator';
import AdCopyGenerator from '../tools/marketing/AdCopyGenerator';
import LandingPageCopyGenerator from '../tools/marketing/LandingPageCopyGenerator';
import CallToActionGenerator from '../tools/marketing/CallToActionGenerator';
import MarketingFunnelBuilder from '../tools/marketing/MarketingFunnelBuilder';
import CustomerPersonaGenerator from '../tools/marketing/CustomerPersonaGenerator';
import BrandVoiceGenerator from '../tools/marketing/BrandVoiceGenerator';

// SEO Tools
import KeywordDensityChecker from '../tools/seo/KeywordDensityChecker';
import MetaTagAnalyzer from '../tools/seo/MetaTagAnalyzer';
import SERPSimulator from '../tools/seo/SERPSimulator';
import RichSnippetGenerator from '../tools/seo/RichSnippetGenerator';
import CanonicalTagGenerator from '../tools/seo/CanonicalTagGenerator';
import HreflangTagGenerator from '../tools/seo/HreflangTagGenerator';
import OpenGraphPreview from '../tools/seo/OpenGraphPreview';
import TwitterCardPreview from '../tools/seo/TwitterCardPreview';
import SEOAuditChecklist from '../tools/seo/SEOAuditChecklist';
import BacklinkTracker from '../tools/seo/BacklinkTracker';

// Freelancer Tools
import InvoiceGenerator from '../tools/freelancer/InvoiceGenerator';
import ContractTemplateGenerator from '../tools/freelancer/ContractTemplateGenerator';
import ProposalTemplateGenerator from '../tools/freelancer/ProposalTemplateGenerator';
import RateCalculator from '../tools/freelancer/RateCalculator';
import TimeTrackingCalculator from '../tools/freelancer/FreelancerTools';
import ExpenseTracker from '../tools/freelancer/FreelancerTools';
import TaxEstimator from '../tools/freelancer/FreelancerTools';
import ClientOnboardingChecklist from '../tools/freelancer/ClientOnboardingChecklist';
import PortfolioBuilder from '../tools/freelancer/PortfolioBuilder';
import TestimonialRequestGenerator from '../tools/freelancer/TestimonialRequestGenerator';

// Developer Tools
import JSONFormatter from '../tools/developer/JSONFormatter';
import JSONMinifier from '../tools/developer/JSONMinifier';
import JSONToXML from '../tools/developer/JSONToXML';
import JSONToCSV from '../tools/developer/JSONToCSV';
import XMLFormatter from '../tools/developer/XMLFormatter';
import HTMLFormatter from '../tools/developer/HTMLFormatter';
import HTMLMinifier from '../tools/developer/HTMLMinifier';
import CSSFormatter from '../tools/developer/CSSFormatter';
import CSSMinifier from '../tools/developer/CSSMinifier';
import JSFormatter from '../tools/developer/JSFormatter';
import JSMinifier from '../tools/developer/JSMinifier';
import SQLFormatter from '../tools/developer/SQLFormatter';
import CodeDiffChecker from '../tools/developer/CodeDiffChecker';
import MarkdownPreviewer from '../tools/developer/MarkdownPreviewer';
import Base64Encoder from '../tools/developer/Base64Encoder';
import Base64Decoder from '../tools/developer/Base64Decoder';
import URLEncoder from '../tools/developer/URLEncoder';
import URLDecoder from '../tools/developer/URLDecoder';
import HTMLEntityEncoder from '../tools/developer/HTMLEntityEncoder';
import HTMLEntityDecoder from '../tools/developer/HTMLEntityDecoder';

// Web Tools
import MetaTagGenerator from '../tools/web/MetaTagGenerator';
import OpenGraphGenerator from '../tools/web/OpenGraphGenerator';
import SchemaMarkupGenerator from '../tools/web/SchemaMarkupGenerator';
import RobotsTxtGenerator from '../tools/web/RobotsTxtGenerator';
import SitemapGenerator from '../tools/web/SitemapGenerator';
import HtaccessGenerator from '../tools/web/HtaccessGenerator';
import CSSBoxShadow from '../tools/web/CSSBoxShadow';
import CSSBorderRadius from '../tools/web/CSSBorderRadius';
import CSSGradientGenerator from '../tools/web/CSSGradientGenerator';
import CSSGridGenerator from '../tools/web/CSSGridGenerator';
import FlexboxGenerator from '../tools/web/FlexboxGenerator';
import KeyframeGenerator from '../tools/web/KeyframeGenerator';
import TransitionGenerator from '../tools/web/TransitionGenerator';
import TransformGenerator from '../tools/web/TransformGenerator';
import CSSButtonGenerator from '../tools/web/CSSButtonGenerator';
import ClipPathGenerator from '../tools/web/ClipPathGenerator';
import QRCodeGenerator from '../tools/web/QRCodeGenerator';
import ColorConverter from '../tools/web/ColorConverter';
import ContrastChecker from '../tools/web/ContrastChecker';
import UUIDGenerator from '../tools/web/UUIDGenerator';
import WeatherForecaster from '../tools/web/WeatherForecaster';
import IPGeoLookup from '../tools/web/IPLookup';
import WebScraper from '../tools/web/WebScraper';

// Calculators
import PercentageCalculator from '../tools/calculators/PercentageCalculator';
import DiscountCalculator from '../tools/calculators/DiscountCalculator';
import TaxCalculator from '../tools/calculators/TaxCalculator';
import TipCalculator from '../tools/calculators/TipCalculator';
import BMICalculator from '../tools/calculators/BMICalculator';
import AgeCalculator from '../tools/calculators/AgeCalculator';
import DateCalculator from '../tools/calculators/DateCalculator';
import TimeZoneConverter from '../tools/calculators/TimeZoneConverter';
import LengthConverter from '../tools/calculators/LengthConverter';
import WeightConverter from '../tools/calculators/WeightConverter';
import TemperatureConverter from '../tools/calculators/TemperatureConverter';
import SpeedConverter from '../tools/calculators/SpeedConverter';
import DataStorageConverter from '../tools/calculators/DataStorageConverter';
import BinaryCalculator from '../tools/calculators/BinaryCalculator';
import HexCalculator from '../tools/calculators/HexCalculator';

// Image Tools
import ImageResizer from '../tools/image/ImageResizer';
import ImageCompressor from '../tools/image/ImageCompressor';
import ImageFormatConverter from '../tools/image/ImageFormatConverter';
import ImageCropper from '../tools/image/ImageCropper';
import ImageRotator from '../tools/image/ImageRotator';
import ImageFlipper from '../tools/image/ImageFlipper';
import GrayscaleConverter from '../tools/image/GrayscaleConverter';
import BrightnessContrast from '../tools/image/BrightnessContrast';
import ImageToBase64 from '../tools/image/ImageToBase64';
import Base64ToImage from '../tools/image/Base64ToImage';

// Security Tools
import PasswordGenerator from '../tools/security/PasswordGenerator';
import PasswordStrengthChecker from '../tools/security/PasswordStrengthChecker';
import IPLookup from '../tools/security/IPLookup';
import UserAgentParser from '../tools/security/UserAgentParser';
import EmailValidator from '../tools/security/EmailValidator';
import PhoneValidator from '../tools/security/PhoneValidator';
import CreditCardValidator from '../tools/security/CreditCardValidator';
import MD5Hash from '../tools/security/MD5Hash';
import SHA256Hash from '../tools/security/SHA256Hash';
import RandomStringGenerator from '../tools/security/RandomStringGenerator';

export const tools: Tool[] = [
  // Text Tools (25)
  { id: 'word-counter', name: 'Word Counter', description: 'Count words, characters, sentences, and paragraphs', category: 'text' as ToolCategory, icon: '📊', path: 'word-counter', keywords: ['word', 'count', 'characters', 'text'], component: WordCounter },
  { id: 'character-counter', name: 'Character Counter', description: 'Detailed character analysis with breakdown', category: 'text' as ToolCategory, icon: '🔤', path: 'character-counter', keywords: ['character', 'count', 'analysis'], component: CharacterCounter },
  { id: 'case-converter', name: 'Case Converter', description: 'Convert text to upper, lower, title, or sentence case', category: 'text' as ToolCategory, icon: '🔠', path: 'case-converter', keywords: ['case', 'uppercase', 'lowercase', 'convert'], component: CaseConverter },
  { id: 'text-reverser', name: 'Text Reverser', description: 'Reverse entire text or words', category: 'text' as ToolCategory, icon: '🔄', path: 'text-reverser', keywords: ['reverse', 'text', 'flip'], component: TextReverser },
  { id: 'remove-duplicates', name: 'Remove Duplicates', description: 'Remove duplicate lines from text', category: 'text' as ToolCategory, icon: '🗑️', path: 'remove-duplicates', keywords: ['duplicate', 'remove', 'lines'], component: RemoveDuplicates },
  { id: 'find-and-replace', name: 'Find and Replace', description: 'Find and replace text with options', category: 'text' as ToolCategory, icon: '🔍', path: 'find-and-replace', keywords: ['find', 'replace', 'search'], component: FindAndReplace },
  { id: 'text-to-slug', name: 'Text to Slug', description: 'Convert text to URL-friendly slug', category: 'text' as ToolCategory, icon: '🔗', path: 'text-to-slug', keywords: ['slug', 'url', 'seo'], component: TextToSlug },
  { id: 'lorem-ipsum-generator', name: 'Lorem Ipsum Generator', description: 'Generate placeholder text', category: 'text' as ToolCategory, icon: '📜', path: 'lorem-ipsum-generator', keywords: ['lorem', 'ipsum', 'placeholder'], component: LoremIpsumGenerator },
  { id: 'text-comparator', name: 'Text Comparator', description: 'Compare two texts and find differences', category: 'text' as ToolCategory, icon: '⚖️', path: 'text-comparator', keywords: ['compare', 'difference', 'text'], component: TextComparator },
  { id: 'line-sorter', name: 'Line Sorter', description: 'Sort lines alphabetically or numerically', category: 'text' as ToolCategory, icon: '📋', path: 'line-sorter', keywords: ['sort', 'lines', 'alphabetical'], component: LineSorter },
  { id: 'line-shuffler', name: 'Line Shuffler', description: 'Randomize line order', category: 'text' as ToolCategory, icon: '🔀', path: 'line-shuffler', keywords: ['shuffle', 'random', 'lines'], component: LineShuffler },
  { id: 'add-prefix-suffix', name: 'Add Prefix/Suffix', description: 'Add prefix or suffix to each line', category: 'text' as ToolCategory, icon: '➕', path: 'add-prefix-suffix', keywords: ['prefix', 'suffix', 'add'], component: AddPrefixSuffix },
  { id: 'remove-empty-lines', name: 'Remove Empty Lines', description: 'Remove blank lines from text', category: 'text' as ToolCategory, icon: '🧹', path: 'remove-empty-lines', keywords: ['empty', 'blank', 'lines'], component: RemoveEmptyLines },
  { id: 'text-trimmer', name: 'Text Trimmer', description: 'Trim whitespace from text', category: 'text' as ToolCategory, icon: '✂️', path: 'text-trimmer', keywords: ['trim', 'whitespace', 'spaces'], component: TextTrimmer },
  { id: 'text-to-binary', name: 'Text to Binary', description: 'Convert text to binary code', category: 'text' as ToolCategory, icon: '0️⃣1️⃣', path: 'text-to-binary', keywords: ['binary', 'convert', 'code'], component: TextToBinary },
  { id: 'binary-to-text', name: 'Binary to Text', description: 'Convert binary code to text', category: 'text' as ToolCategory, icon: '🔡', path: 'binary-to-text', keywords: ['binary', 'decode', 'text'], component: BinaryToText },
  { id: 'text-to-morse', name: 'Text to Morse', description: 'Convert text to Morse code', category: 'text' as ToolCategory, icon: '📡', path: 'text-to-morse', keywords: ['morse', 'code', 'convert'], component: TextToMorse },
  { id: 'morse-to-text', name: 'Morse to Text', description: 'Convert Morse code to text', category: 'text' as ToolCategory, icon: '📟', path: 'morse-to-text', keywords: ['morse', 'decode', 'text'], component: MorseToText },
  { id: 'remove-emojis', name: 'Remove Emojis', description: 'Strip emojis from text', category: 'text' as ToolCategory, icon: '😐', path: 'remove-emojis', keywords: ['emoji', 'remove', 'strip'], component: RemoveEmojis },
  { id: 'text-splitter', name: 'Text Splitter', description: 'Split text by delimiter', category: 'text' as ToolCategory, icon: '✂️', path: 'text-splitter', keywords: ['split', 'delimiter', 'separate'], component: TextSplitter },
  { id: 'join-lines', name: 'Join Lines', description: 'Join lines with delimiter', category: 'text' as ToolCategory, icon: '🔗', path: 'join-lines', keywords: ['join', 'merge', 'lines'], component: JoinLines },
  { id: 'reverse-lines', name: 'Reverse Lines', description: 'Reverse order of lines', category: 'text' as ToolCategory, icon: '⏪', path: 'reverse-lines', keywords: ['reverse', 'lines', 'order'], component: ReverseLines },
  { id: 'toggle-case', name: 'Toggle Case', description: 'Swap case of each letter', category: 'text' as ToolCategory, icon: '🔃', path: 'toggle-case', keywords: ['toggle', 'case', 'swap'], component: ToggleCase },
  { id: 'random-case', name: 'Random Case', description: 'Random uppercase/lowercase', category: 'text' as ToolCategory, icon: '🎲', path: 'random-case', keywords: ['random', 'case', 'mixed'], component: RandomCase },
  { id: 'alternating-case', name: 'Alternating Case', description: 'Alternating case pattern', category: 'text' as ToolCategory, icon: '〰️', path: 'alternating-case', keywords: ['alternating', 'case', 'pattern'], component: AlternatingCase },
  { id: 'quote-generator', name: 'Random Quote Generator', description: 'Discover inspiring quotes instantly', category: 'text' as ToolCategory, icon: '💭', path: 'quote-generator', keywords: ['quote', 'random', 'inspiration', 'text'], component: QuoteGenerator },

  // Business Tools (17)
  { id: 'business-name-generator', name: 'Business Name Generator', description: 'Generate catchy business names', category: 'business' as ToolCategory, icon: '💼', path: 'business-name-generator', keywords: ['business', 'name', 'startup', 'branding'], component: BusinessNameGenerator },
  { id: 'business-plan-outline', name: 'Business Plan Outline', description: 'Create business plan structure', category: 'business' as ToolCategory, icon: '📋', path: 'business-plan-outline', keywords: ['business', 'plan', 'startup', 'outline'], component: BusinessPlanOutline },
  { id: 'elevator-pitch-generator', name: 'Elevator Pitch Generator', description: 'Craft compelling pitch', category: 'business' as ToolCategory, icon: '🎯', path: 'elevator-pitch-generator', keywords: ['pitch', 'elevator', 'startup', 'presentation'], component: ElevatorPitchGenerator },
  { id: 'mission-vision-generator', name: 'Mission & Vision Generator', description: 'Generate mission/vision statements', category: 'business' as ToolCategory, icon: '🎯', path: 'mission-vision-generator', keywords: ['mission', 'vision', 'statement', 'values'], component: MissionVisionGenerator },
  { id: 'swot-analysis', name: 'SWOT Analysis', description: 'SWOT analysis template', category: 'business' as ToolCategory, icon: '📊', path: 'swot-analysis', keywords: ['swot', 'analysis', 'strategy', 'planning'], component: SWOTAnalysis },
  { id: 'business-model-canvas', name: 'Business Model Canvas', description: 'BMC generator', category: 'business' as ToolCategory, icon: '📐', path: 'business-model-canvas', keywords: ['bmc', 'canvas', 'business', 'model'], component: BusinessModelCanvas },
  { id: 'lean-canvas', name: 'Lean Canvas', description: 'Lean startup canvas', category: 'business' as ToolCategory, icon: '🚀', path: 'lean-canvas', keywords: ['lean', 'canvas', 'startup', 'validation'], component: LeanCanvas },
  { id: 'value-proposition-generator', name: 'Value Proposition Generator', description: 'Value prop builder', category: 'business' as ToolCategory, icon: '💎', path: 'value-proposition-generator', keywords: ['value', 'proposition', 'positioning', 'differentiation'], component: ValuePropositionGenerator },
  { id: 'target-audience-finder', name: 'Target Audience Finder', description: 'Define target audience', category: 'business' as ToolCategory, icon: '🎯', path: 'target-audience-finder', keywords: ['audience', 'target', 'customer', 'persona'], component: TargetAudienceFinder },
  { id: 'competitor-analysis', name: 'Competitor Analysis', description: 'Competitor research template', category: 'business' as ToolCategory, icon: '⚔️', path: 'competitor-analysis', keywords: ['competitor', 'analysis', 'research', 'market'], component: CompetitorAnalysis },
  { id: 'revenue-model-calculator', name: 'Revenue Model Calculator', description: 'Revenue projection calculator', category: 'business' as ToolCategory, icon: '💰', path: 'revenue-model-calculator', keywords: ['revenue', 'projection', 'forecast', 'financial'], component: RevenueModelCalculator },
  { id: 'break-even-analysis', name: 'Break-Even Analysis', description: 'Break-even point calculator', category: 'business' as ToolCategory, icon: '⚖️', path: 'break-even-analysis', keywords: ['break', 'even', 'analysis', 'profitability'], component: BreakEvenAnalysis },
  { id: 'cash-flow-forecast', name: 'Cash Flow Forecast', description: 'Cash flow projection', category: 'business' as ToolCategory, icon: '💵', path: 'cash-flow-forecast', keywords: ['cash', 'flow', 'forecast', 'projection'], component: CashFlowForecast },
  { id: 'pricing-strategy-calculator', name: 'Pricing Strategy Calculator', description: 'Pricing calculator', category: 'business' as ToolCategory, icon: '🏷️', path: 'pricing-strategy-calculator', keywords: ['pricing', 'strategy', 'calculator', 'profit'], component: PricingStrategyCalculator },
  { id: 'roi-calculator', name: 'ROI Calculator', description: 'Return on investment calculator', category: 'business' as ToolCategory, icon: '📈', path: 'roi-calculator', keywords: ['roi', 'return', 'investment', 'profit'], component: ROICalculator },
  { id: 'financial-projections', name: 'Financial Projections', description: 'Financial forecast tool', category: 'business' as ToolCategory, icon: '📊', path: 'financial-projections', keywords: ['financial', 'projections', 'forecast', 'revenue'], component: FinancialProjections },
  { id: 'funding-calculator', name: 'Funding Calculator', description: 'Equity dilution calculator', category: 'business' as ToolCategory, icon: '💰', path: 'funding-calculator', keywords: ['funding', 'equity', 'dilution', 'investment'], component: FundingCalculator },
  { id: 'currency-converter', name: 'Live Currency Converter', description: 'Convert exchange rates in real-time', category: 'business' as ToolCategory, icon: '💱', path: 'currency-converter', keywords: ['currency', 'exchange', 'money', 'convert'], component: CurrencyConverter },

  // Marketing Tools (15)
  { id: 'hashtag-generator', name: 'Hashtag Generator', description: 'Generate hashtags for social media', category: 'marketing' as ToolCategory, icon: '#️⃣', path: 'hashtag-generator', keywords: ['hashtag', 'social', 'media', 'instagram'], component: HashtagGenerator },
  { id: 'social-media-post-generator', name: 'Social Media Post Generator', description: 'Create post ideas', category: 'marketing' as ToolCategory, icon: '📱', path: 'social-media-post-generator', keywords: ['social', 'media', 'post', 'content'], component: SocialMediaPostGenerator },
  { id: 'content-calendar-generator', name: 'Content Calendar Generator', description: 'Content calendar template', category: 'marketing' as ToolCategory, icon: '📅', path: 'content-calendar-generator', keywords: ['content', 'calendar', 'planning', 'schedule'], component: ContentCalendarGenerator },
  { id: 'email-subject-line-generator', name: 'Email Subject Line Generator', description: 'Email subject ideas', category: 'marketing' as ToolCategory, icon: '📧', path: 'email-subject-line-generator', keywords: ['email', 'subject', 'headline', 'copywriting'], component: EmailSubjectLineGenerator },
  { id: 'blog-title-generator', name: 'Blog Title Generator', description: 'Blog post title ideas', category: 'marketing' as ToolCategory, icon: '✍️', path: 'blog-title-generator', keywords: ['blog', 'title', 'headline', 'seo'], component: BlogTitleGenerator },
  { id: 'youtube-title-generator', name: 'YouTube Title Generator', description: 'YouTube video titles', category: 'marketing' as ToolCategory, icon: '📺', path: 'youtube-title-generator', keywords: ['youtube', 'title', 'video', 'thumbnail'], component: YouTubeTitleGenerator },
  { id: 'instagram-caption-generator', name: 'Instagram Caption Generator', description: 'IG caption ideas', category: 'marketing' as ToolCategory, icon: '📸', path: 'instagram-caption-generator', keywords: ['instagram', 'caption', 'social', 'media'], component: InstagramCaptionGenerator },
  { id: 'linkedin-post-generator', name: 'LinkedIn Post Generator', description: 'LinkedIn post generator', category: 'marketing' as ToolCategory, icon: '💼', path: 'linkedin-post-generator', keywords: ['linkedin', 'post', 'professional', 'b2b'], component: LinkedInPostGenerator },
  { id: 'tweet-generator', name: 'Tweet Generator', description: 'Tweet/thread ideas', category: 'marketing' as ToolCategory, icon: '🐦', path: 'tweet-generator', keywords: ['tweet', 'twitter', 'social', 'thread'], component: TweetGenerator },
  { id: 'ad-copy-generator', name: 'Ad Copy Generator', description: 'Ad copy templates', category: 'marketing' as ToolCategory, icon: '📢', path: 'ad-copy-generator', keywords: ['ad', 'copy', 'advertising', 'ppc'], component: AdCopyGenerator },
  { id: 'landing-page-copy-generator', name: 'Landing Page Copy Generator', description: 'Landing page copy', category: 'marketing' as ToolCategory, icon: '📄', path: 'landing-page-copy-generator', keywords: ['landing', 'page', 'copy', 'conversion'], component: LandingPageCopyGenerator },
  { id: 'call-to-action-generator', name: 'Call-to-Action Generator', description: 'CTA ideas', category: 'marketing' as ToolCategory, icon: '🔘', path: 'call-to-action-generator', keywords: ['cta', 'call', 'action', 'conversion'], component: CallToActionGenerator },
  { id: 'marketing-funnel-builder', name: 'Marketing Funnel Builder', description: 'Funnel template', category: 'marketing' as ToolCategory, icon: '🌪️', path: 'marketing-funnel-builder', keywords: ['funnel', 'marketing', 'conversion', 'journey'], component: MarketingFunnelBuilder },
  { id: 'customer-persona-generator', name: 'Customer Persona Generator', description: 'Buyer persona builder', category: 'marketing' as ToolCategory, icon: '👤', path: 'customer-persona-generator', keywords: ['persona', 'customer', 'buyer', 'audience'], component: CustomerPersonaGenerator },
  { id: 'brand-voice-generator', name: 'Brand Voice Generator', description: 'Brand voice guide', category: 'marketing' as ToolCategory, icon: '🎙️', path: 'brand-voice-generator', keywords: ['brand', 'voice', 'tone', 'messaging'], component: BrandVoiceGenerator },

  // SEO Tools (10)
  { id: 'keyword-density-checker', name: 'Keyword Density Checker', description: 'Check keyword density', category: 'seo' as ToolCategory, icon: '📊', path: 'keyword-density-checker', keywords: ['keyword', 'density', 'seo', 'content'], component: KeywordDensityChecker },
  { id: 'meta-tag-analyzer', name: 'Meta Tag Analyzer', description: 'Analyze meta tags', category: 'seo' as ToolCategory, icon: '🏷️', path: 'meta-tag-analyzer', keywords: ['meta', 'tag', 'seo', 'analysis'], component: MetaTagAnalyzer },
  { id: 'serp-simulator', name: 'SERP Simulator', description: 'Google SERP preview', category: 'seo' as ToolCategory, icon: '🔍', path: 'serp-simulator', keywords: ['serp', 'google', 'preview', 'seo'], component: SERPSimulator },
  { id: 'rich-snippet-generator', name: 'Rich Snippet Generator', description: 'Schema markup generator', category: 'seo' as ToolCategory, icon: '📊', path: 'rich-snippet-generator', keywords: ['rich', 'snippet', 'schema', 'structured'], component: RichSnippetGenerator },
  { id: 'canonical-tag-generator', name: 'Canonical Tag Generator', description: 'Generate canonical tags', category: 'seo' as ToolCategory, icon: '🔗', path: 'canonical-tag-generator', keywords: ['canonical', 'tag', 'seo', 'duplicate'], component: CanonicalTagGenerator },
  { id: 'hreflang-tag-generator', name: 'Hreflang Tag Generator', description: 'Hreflang tags generator', category: 'seo' as ToolCategory, icon: '🌐', path: 'hreflang-tag-generator', keywords: ['hreflang', 'international', 'seo', 'multilingual'], component: HreflangTagGenerator },
  { id: 'open-graph-preview', name: 'Open Graph Preview', description: 'OG tag preview', category: 'seo' as ToolCategory, icon: '📱', path: 'open-graph-preview', keywords: ['open', 'graph', 'social', 'preview'], component: OpenGraphPreview },
  { id: 'twitter-card-preview', name: 'Twitter Card Preview', description: 'Twitter card preview', category: 'seo' as ToolCategory, icon: '🐦', path: 'twitter-card-preview', keywords: ['twitter', 'card', 'social', 'preview'], component: TwitterCardPreview },
  { id: 'seo-audit-checklist', name: 'SEO Audit Checklist', description: 'SEO checklist', category: 'seo' as ToolCategory, icon: '📋', path: 'seo-audit-checklist', keywords: ['seo', 'audit', 'checklist', 'optimization'], component: SEOAuditChecklist },
  { id: 'backlink-tracker', name: 'Backlink Tracker', description: 'Backlink tracker template', category: 'seo' as ToolCategory, icon: '🔗', path: 'backlink-tracker', keywords: ['backlink', 'link', 'tracker', 'seo'], component: BacklinkTracker },

  // Freelancer Tools (10)
  { id: 'invoice-generator', name: 'Invoice Generator', description: 'Create professional invoices', category: 'freelancer' as ToolCategory, icon: '📄', path: 'invoice-generator', keywords: ['invoice', 'billing', 'payment', 'freelance'], component: InvoiceGenerator },
  { id: 'contract-template-generator', name: 'Contract Template Generator', description: 'Freelance contract template', category: 'freelancer' as ToolCategory, icon: '📋', path: 'contract-template-generator', keywords: ['contract', 'template', 'legal', 'freelance'], component: ContractTemplateGenerator },
  { id: 'proposal-template-generator', name: 'Proposal Template Generator', description: 'Client proposal template', category: 'freelancer' as ToolCategory, icon: '📝', path: 'proposal-template-generator', keywords: ['proposal', 'template', 'client', 'pitch'], component: ProposalTemplateGenerator },
  { id: 'rate-calculator', name: 'Freelance Rate Calculator', description: 'Hourly rate calculator', category: 'freelancer' as ToolCategory, icon: '💵', path: 'rate-calculator', keywords: ['rate', 'hourly', 'pricing', 'freelance'], component: RateCalculator },
  { id: 'time-tracking-calculator', name: 'Time Tracking Calculator', description: 'Time tracking sheet', category: 'freelancer' as ToolCategory, icon: '⏱️', path: 'time-tracking-calculator', keywords: ['time', 'tracking', 'hours', 'freelance'], component: TimeTrackingCalculator },
  { id: 'expense-tracker', name: 'Expense Tracker', description: 'Expense tracking template', category: 'freelancer' as ToolCategory, icon: '💸', path: 'expense-tracker', keywords: ['expense', 'tracker', 'business', 'tax'], component: ExpenseTracker },
  { id: 'tax-estimator', name: 'Freelance Tax Estimator', description: 'Freelance tax estimator', category: 'freelancer' as ToolCategory, icon: '📊', path: 'tax-estimator', keywords: ['tax', 'estimator', 'freelance', 'self-employment'], component: TaxEstimator },
  { id: 'client-onboarding-checklist', name: 'Client Onboarding Checklist', description: 'Onboarding template', category: 'freelancer' as ToolCategory, icon: '✅', path: 'client-onboarding-checklist', keywords: ['onboarding', 'client', 'checklist', 'process'], component: ClientOnboardingChecklist },
  { id: 'portfolio-builder', name: 'Portfolio Builder', description: 'Portfolio template', category: 'freelancer' as ToolCategory, icon: '📁', path: 'portfolio-builder', keywords: ['portfolio', 'showcase', 'work', 'freelance'], component: PortfolioBuilder },
  { id: 'testimonial-request-generator', name: 'Testimonial Request Generator', description: 'Request testimonials', category: 'freelancer' as ToolCategory, icon: '⭐', path: 'testimonial-request-generator', keywords: ['testimonial', 'review', 'recommendation', 'social'], component: TestimonialRequestGenerator },

  // Developer Tools (20)
  { id: 'json-formatter', name: 'JSON Formatter', description: 'Format and validate JSON', category: 'developer' as ToolCategory, icon: '📋', path: 'json-formatter', keywords: ['json', 'format', 'validate'], component: JSONFormatter },
  { id: 'json-minifier', name: 'JSON Minifier', description: 'Minify JSON to save space', category: 'developer' as ToolCategory, icon: '🗜️', path: 'json-minifier', keywords: ['json', 'minify', 'compress'], component: JSONMinifier },
  { id: 'json-to-xml', name: 'JSON to XML', description: 'Convert JSON to XML format', category: 'developer' as ToolCategory, icon: '🔄', path: 'json-to-xml', keywords: ['json', 'xml', 'convert'], component: JSONToXML },
  { id: 'json-to-csv', name: 'JSON to CSV', description: 'Convert JSON to CSV format', category: 'developer' as ToolCategory, icon: '📊', path: 'json-to-csv', keywords: ['json', 'csv', 'convert'], component: JSONToCSV },
  { id: 'xml-formatter', name: 'XML Formatter', description: 'Format and beautify XML', category: 'developer' as ToolCategory, icon: '📄', path: 'xml-formatter', keywords: ['xml', 'format', 'beautify'], component: XMLFormatter },
  { id: 'html-formatter', name: 'HTML Formatter', description: 'Format and beautify HTML', category: 'developer' as ToolCategory, icon: '🌐', path: 'html-formatter', keywords: ['html', 'format', 'beautify'], component: HTMLFormatter },
  { id: 'html-minifier', name: 'HTML Minifier', description: 'Minify HTML code', category: 'developer' as ToolCategory, icon: '🗜️', path: 'html-minifier', keywords: ['html', 'minify', 'compress'], component: HTMLMinifier },
  { id: 'css-formatter', name: 'CSS Formatter', description: 'Format and beautify CSS', category: 'developer' as ToolCategory, icon: '🎨', path: 'css-formatter', keywords: ['css', 'format', 'beautify'], component: CSSFormatter },
  { id: 'css-minifier', name: 'CSS Minifier', description: 'Minify CSS code', category: 'developer' as ToolCategory, icon: '🗜️', path: 'css-minifier', keywords: ['css', 'minify', 'compress'], component: CSSMinifier },
  { id: 'js-formatter', name: 'JavaScript Formatter', description: 'Format and beautify JavaScript', category: 'developer' as ToolCategory, icon: '📜', path: 'js-formatter', keywords: ['javascript', 'js', 'format'], component: JSFormatter },
  { id: 'js-minifier', name: 'JavaScript Minifier', description: 'Minify JavaScript code', category: 'developer' as ToolCategory, icon: '🗜️', path: 'js-minifier', keywords: ['javascript', 'js', 'minify'], component: JSMinifier },
  { id: 'sql-formatter', name: 'SQL Formatter', description: 'Format SQL queries', category: 'developer' as ToolCategory, icon: '🗄️', path: 'sql-formatter', keywords: ['sql', 'format', 'query'], component: SQLFormatter },
  { id: 'code-diff-checker', name: 'Code Diff Checker', description: 'Compare two code snippets', category: 'developer' as ToolCategory, icon: '⚖️', path: 'code-diff-checker', keywords: ['diff', 'compare', 'code'], component: CodeDiffChecker },
  { id: 'markdown-previewer', name: 'Markdown Previewer', description: 'Live markdown preview', category: 'developer' as ToolCategory, icon: '📝', path: 'markdown-previewer', keywords: ['markdown', 'preview', 'md'], component: MarkdownPreviewer },
  { id: 'base64-encoder', name: 'Base64 Encoder', description: 'Encode text to Base64', category: 'developer' as ToolCategory, icon: '🔐', path: 'base64-encoder', keywords: ['base64', 'encode', 'text'], component: Base64Encoder },
  { id: 'base64-decoder', name: 'Base64 Decoder', description: 'Decode Base64 to text', category: 'developer' as ToolCategory, icon: '🔓', path: 'base64-decoder', keywords: ['base64', 'decode', 'text'], component: Base64Decoder },
  { id: 'url-encoder', name: 'URL Encoder', description: 'Encode URL components', category: 'developer' as ToolCategory, icon: '🔗', path: 'url-encoder', keywords: ['url', 'encode', 'percent'], component: URLEncoder },
  { id: 'url-decoder', name: 'URL Decoder', description: 'Decode URL components', category: 'developer' as ToolCategory, icon: '🔗', path: 'url-decoder', keywords: ['url', 'decode', 'percent'], component: URLDecoder },
  { id: 'html-entity-encoder', name: 'HTML Entity Encoder', description: 'Encode special characters to HTML entities', category: 'developer' as ToolCategory, icon: '🔣', path: 'html-entity-encoder', keywords: ['html', 'entity', 'encode'], component: HTMLEntityEncoder },
  { id: 'html-entity-decoder', name: 'HTML Entity Decoder', description: 'Decode HTML entities', category: 'developer' as ToolCategory, icon: '🔣', path: 'html-entity-decoder', keywords: ['html', 'entity', 'decode'], component: HTMLEntityDecoder },

  // Web Tools (20)
  { id: 'meta-tag-generator', name: 'Meta Tag Generator', description: 'Generate SEO meta tags', category: 'web' as ToolCategory, icon: '🏷️', path: 'meta-tag-generator', keywords: ['meta', 'seo', 'tags'], component: MetaTagGenerator },
  { id: 'open-graph-generator', name: 'Open Graph Generator', description: 'Generate Open Graph tags', category: 'web' as ToolCategory, icon: '📱', path: 'open-graph-generator', keywords: ['open', 'graph', 'social'], component: OpenGraphGenerator },
  { id: 'schema-markup-generator', name: 'Schema Markup Generator', description: 'Generate JSON-LD schema', category: 'web' as ToolCategory, icon: '📊', path: 'schema-markup-generator', keywords: ['schema', 'json-ld', 'seo'], component: SchemaMarkupGenerator },
  { id: 'robots-txt-generator', name: 'Robots.txt Generator', description: 'Generate robots.txt file', category: 'web' as ToolCategory, icon: '🤖', path: 'robots-txt-generator', keywords: ['robots', 'txt', 'seo'], component: RobotsTxtGenerator },
  { id: 'sitemap-generator', name: 'Sitemap Generator', description: 'Generate sitemap.xml', category: 'web' as ToolCategory, icon: '🗺️', path: 'sitemap-generator', keywords: ['sitemap', 'xml', 'seo'], component: SitemapGenerator },
  { id: 'htaccess-generator', name: '.htaccess Generator', description: 'Generate .htaccess rules', category: 'web' as ToolCategory, icon: '⚙️', path: 'htaccess-generator', keywords: ['htaccess', 'apache', 'rules'], component: HtaccessGenerator },
  { id: 'css-box-shadow', name: 'CSS Box Shadow', description: 'Generate box shadow CSS', category: 'web' as ToolCategory, icon: '📦', path: 'css-box-shadow', keywords: ['css', 'shadow', 'box'], component: CSSBoxShadow },
  { id: 'css-border-radius', name: 'CSS Border Radius', description: 'Generate border radius CSS', category: 'web' as ToolCategory, icon: '🔲', path: 'css-border-radius', keywords: ['css', 'border', 'radius'], component: CSSBorderRadius },
  { id: 'css-gradient-generator', name: 'CSS Gradient Generator', description: 'Create CSS gradients', category: 'web' as ToolCategory, icon: '🌈', path: 'css-gradient-generator', keywords: ['css', 'gradient', 'color'], component: CSSGradientGenerator },
  { id: 'css-grid-generator', name: 'CSS Grid Generator', description: 'Generate CSS grid layouts', category: 'web' as ToolCategory, icon: '📐', path: 'css-grid-generator', keywords: ['css', 'grid', 'layout'], component: CSSGridGenerator },
  { id: 'flexbox-generator', name: 'Flexbox Generator', description: 'Generate flexbox CSS', category: 'web' as ToolCategory, icon: '📱', path: 'flexbox-generator', keywords: ['flexbox', 'css', 'layout'], component: FlexboxGenerator },
  { id: 'keyframe-generator', name: 'Keyframe Generator', description: 'Generate CSS animation keyframes', category: 'web' as ToolCategory, icon: '🎬', path: 'keyframe-generator', keywords: ['keyframe', 'animation', 'css'], component: KeyframeGenerator },
  { id: 'transition-generator', name: 'Transition Generator', description: 'Generate CSS transitions', category: 'web' as ToolCategory, icon: '🔄', path: 'transition-generator', keywords: ['transition', 'css', 'animation'], component: TransitionGenerator },
  { id: 'transform-generator', name: 'Transform Generator', description: 'Generate CSS transforms', category: 'web' as ToolCategory, icon: '🔃', path: 'transform-generator', keywords: ['transform', 'css', 'rotate'], component: TransformGenerator },
  { id: 'css-button-generator', name: 'CSS Button Generator', description: 'Create button styles', category: 'web' as ToolCategory, icon: '🔘', path: 'css-button-generator', keywords: ['button', 'css', 'style'], component: CSSButtonGenerator },
  { id: 'clip-path-generator', name: 'Clip Path Generator', description: 'Generate CSS clip-path', category: 'web' as ToolCategory, icon: '✂️', path: 'clip-path-generator', keywords: ['clip', 'path', 'css'], component: ClipPathGenerator },
  { id: 'qr-code-generator', name: 'QR Code Generator', description: 'Generate QR codes', category: 'web' as ToolCategory, icon: '📱', path: 'qr-code-generator', keywords: ['qr', 'code', 'barcode'], component: QRCodeGenerator },
  { id: 'color-converter', name: 'Color Converter', description: 'Convert HEX/RGB/HSL colors', category: 'web' as ToolCategory, icon: '🎨', path: 'color-converter', keywords: ['color', 'hex', 'rgb', 'hsl'], component: ColorConverter },
  { id: 'contrast-checker', name: 'Contrast Checker', description: 'Check WCAG color contrast', category: 'web' as ToolCategory, icon: '⚖️', path: 'contrast-checker', keywords: ['contrast', 'wcag', 'accessibility'], component: ContrastChecker },
  { id: 'uuid-generator', name: 'UUID Generator', description: 'Generate unique UUIDs', category: 'web' as ToolCategory, icon: '🆔', path: 'uuid-generator', keywords: ['uuid', 'unique', 'id'], component: UUIDGenerator },
  { id: 'weather-forecaster', name: 'Global Weather Forecaster', description: 'Get real-time weather and 7-day forecasts', category: 'web' as ToolCategory, icon: '🌤️', path: 'weather-forecaster', keywords: ['weather', 'forecast', 'climate', 'temperature'], component: WeatherForecaster },
  { id: 'ip-geolocation-lookup', name: 'IP Geolocation Lookup', description: 'Find geographic location of any IP', category: 'web' as ToolCategory, icon: '🌍', path: 'ip-geolocation-lookup', keywords: ['ip', 'location', 'geolocation', 'address', 'isp'], component: IPGeoLookup },
  { id: 'web-scraper', name: 'Simple Web Scraper', description: 'Extract raw HTML or text from URLs', category: 'web' as ToolCategory, icon: '🕸️', path: 'web-scraper', keywords: ['scrape', 'html', 'extract', 'url', 'web'], component: WebScraper },

  // Calculators (15)
  { id: 'percentage-calculator', name: 'Percentage Calculator', description: 'Calculate percentages', category: 'calculators' as ToolCategory, icon: '📊', path: 'percentage-calculator', keywords: ['percentage', 'calculate', 'math'], component: PercentageCalculator },
  { id: 'discount-calculator', name: 'Discount Calculator', description: 'Calculate discounts and sale prices', category: 'calculators' as ToolCategory, icon: '🏷️', path: 'discount-calculator', keywords: ['discount', 'sale', 'price'], component: DiscountCalculator },
  { id: 'tax-calculator', name: 'Tax Calculator', description: 'Calculate tax amounts', category: 'calculators' as ToolCategory, icon: '💰', path: 'tax-calculator', keywords: ['tax', 'calculate', 'vat'], component: TaxCalculator },
  { id: 'tip-calculator', name: 'Tip Calculator', description: 'Calculate tips and split bills', category: 'calculators' as ToolCategory, icon: '💵', path: 'tip-calculator', keywords: ['tip', 'bill', 'split'], component: TipCalculator },
  { id: 'bmi-calculator', name: 'BMI Calculator', description: 'Calculate Body Mass Index', category: 'calculators' as ToolCategory, icon: '⚖️', path: 'bmi-calculator', keywords: ['bmi', 'health', 'weight'], component: BMICalculator },
  { id: 'age-calculator', name: 'Age Calculator', description: 'Calculate age from birth date', category: 'calculators' as ToolCategory, icon: '🎂', path: 'age-calculator', keywords: ['age', 'birthday', 'date'], component: AgeCalculator },
  { id: 'date-calculator', name: 'Date Calculator', description: 'Add/subtract days from date', category: 'calculators' as ToolCategory, icon: '📅', path: 'date-calculator', keywords: ['date', 'add', 'subtract'], component: DateCalculator },
  { id: 'time-zone-converter', name: 'Time Zone Converter', description: 'Convert between time zones', category: 'calculators' as ToolCategory, icon: '🌍', path: 'time-zone-converter', keywords: ['timezone', 'convert', 'time'], component: TimeZoneConverter },
  { id: 'length-converter', name: 'Length Converter', description: 'Convert length units', category: 'calculators' as ToolCategory, icon: '📏', path: 'length-converter', keywords: ['length', 'convert', 'units'], component: LengthConverter },
  { id: 'weight-converter', name: 'Weight Converter', description: 'Convert weight units', category: 'calculators' as ToolCategory, icon: '⚖️', path: 'weight-converter', keywords: ['weight', 'convert', 'kg', 'lbs'], component: WeightConverter },
  { id: 'temperature-converter', name: 'Temperature Converter', description: 'Convert temperature units', category: 'calculators' as ToolCategory, icon: '🌡️', path: 'temperature-converter', keywords: ['temperature', 'celsius', 'fahrenheit'], component: TemperatureConverter },
  { id: 'speed-converter', name: 'Speed Converter', description: 'Convert speed units', category: 'calculators' as ToolCategory, icon: '🚀', path: 'speed-converter', keywords: ['speed', 'convert', 'mph', 'kmh'], component: SpeedConverter },
  { id: 'data-storage-converter', name: 'Data Storage Converter', description: 'Convert data size units', category: 'calculators' as ToolCategory, icon: '💾', path: 'data-storage-converter', keywords: ['data', 'storage', 'bytes', 'gb'], component: DataStorageConverter },
  { id: 'binary-calculator', name: 'Binary Calculator', description: 'Perform binary operations', category: 'calculators' as ToolCategory, icon: '0️⃣1️⃣', path: 'binary-calculator', keywords: ['binary', 'calculate', 'math'], component: BinaryCalculator },
  { id: 'hex-calculator', name: 'Hex Calculator', description: 'Perform hexadecimal operations', category: 'calculators' as ToolCategory, icon: '🔢', path: 'hex-calculator', keywords: ['hex', 'hexadecimal', 'calculate'], component: HexCalculator },

  // Image Tools (10)
  { id: 'image-resizer', name: 'Image Resizer', description: 'Resize images online', category: 'image' as ToolCategory, icon: '🖼️', path: 'image-resizer', keywords: ['image', 'resize', 'dimensions'], component: ImageResizer },
  { id: 'image-compressor', name: 'Image Compressor', description: 'Compress images online', category: 'image' as ToolCategory, icon: '🗜️', path: 'image-compressor', keywords: ['image', 'compress', 'optimize'], component: ImageCompressor },
  { id: 'image-format-converter', name: 'Image Format Converter', description: 'Convert between image formats', category: 'image' as ToolCategory, icon: '🔄', path: 'image-format-converter', keywords: ['image', 'format', 'convert', 'png', 'jpg'], component: ImageFormatConverter },
  { id: 'image-cropper', name: 'Image Cropper', description: 'Crop images online', category: 'image' as ToolCategory, icon: '✂️', path: 'image-cropper', keywords: ['image', 'crop', 'cut'], component: ImageCropper },
  { id: 'image-rotator', name: 'Image Rotator', description: 'Rotate images', category: 'image' as ToolCategory, icon: '🔄', path: 'image-rotator', keywords: ['image', 'rotate', 'turn'], component: ImageRotator },
  { id: 'image-flipper', name: 'Image Flipper', description: 'Flip images horizontally/vertically', category: 'image' as ToolCategory, icon: '🪞', path: 'image-flipper', keywords: ['image', 'flip', 'mirror'], component: ImageFlipper },
  { id: 'grayscale-converter', name: 'Grayscale Converter', description: 'Convert images to grayscale', category: 'image' as ToolCategory, icon: '⚫', path: 'grayscale-converter', keywords: ['grayscale', 'black', 'white', 'image'], component: GrayscaleConverter },
  { id: 'brightness-contrast', name: 'Brightness & Contrast', description: 'Adjust image brightness and contrast', category: 'image' as ToolCategory, icon: '☀️', path: 'brightness-contrast', keywords: ['brightness', 'contrast', 'image'], component: BrightnessContrast },
  { id: 'image-to-base64', name: 'Image to Base64', description: 'Convert image to Base64 string', category: 'image' as ToolCategory, icon: '🔣', path: 'image-to-base64', keywords: ['image', 'base64', 'convert'], component: ImageToBase64 },
  { id: 'base64-to-image', name: 'Base64 to Image', description: 'Convert Base64 to image', category: 'image' as ToolCategory, icon: '🖼️', path: 'base64-to-image', keywords: ['base64', 'image', 'convert'], component: Base64ToImage },

  // Security Tools (10)
  { id: 'password-generator', name: 'Password Generator', description: 'Generate secure passwords', category: 'security' as ToolCategory, icon: '🔐', path: 'password-generator', keywords: ['password', 'generate', 'secure'], component: PasswordGenerator },
  { id: 'password-strength-checker', name: 'Password Strength Checker', description: 'Check password strength', category: 'security' as ToolCategory, icon: '💪', path: 'password-strength-checker', keywords: ['password', 'strength', 'security'], component: PasswordStrengthChecker },
  { id: 'ip-lookup', name: 'IP Lookup', description: 'Display your IP address', category: 'security' as ToolCategory, icon: '🌐', path: 'ip-lookup', keywords: ['ip', 'address', 'lookup'], component: IPLookup },
  { id: 'user-agent-parser', name: 'User Agent Parser', description: 'Parse user agent string', category: 'security' as ToolCategory, icon: '📱', path: 'user-agent-parser', keywords: ['user', 'agent', 'browser'], component: UserAgentParser },
  { id: 'email-validator', name: 'Email Validator', description: 'Validate email addresses', category: 'security' as ToolCategory, icon: '📧', path: 'email-validator', keywords: ['email', 'validate', 'check'], component: EmailValidator },
  { id: 'phone-validator', name: 'Phone Validator', description: 'Validate phone numbers', category: 'security' as ToolCategory, icon: '📱', path: 'phone-validator', keywords: ['phone', 'validate', 'number'], component: PhoneValidator },
  { id: 'credit-card-validator', name: 'Credit Card Validator', description: 'Validate credit card numbers (Luhn)', category: 'security' as ToolCategory, icon: '💳', path: 'credit-card-validator', keywords: ['credit', 'card', 'validate', 'luhn'], component: CreditCardValidator },
  { id: 'md5-hash', name: 'MD5 Hash Generator', description: 'Generate MD5 hash', category: 'security' as ToolCategory, icon: '🔏', path: 'md5-hash', keywords: ['md5', 'hash', 'encrypt'], component: MD5Hash },
  { id: 'sha256-hash', name: 'SHA-256 Hash Generator', description: 'Generate SHA-256 hash', category: 'security' as ToolCategory, icon: '🔏', path: 'sha256-hash', keywords: ['sha256', 'hash', 'encrypt'], component: SHA256Hash },
  { id: 'random-string-generator', name: 'Random String Generator', description: 'Generate random strings', category: 'security' as ToolCategory, icon: '🎲', path: 'random-string-generator', keywords: ['random', 'string', 'generate'], component: RandomStringGenerator },
];

export const getToolsByCategory = (category: ToolCategory): Tool[] => {
  return tools.filter(tool => tool.category === category);
};

export const getToolByPath = (path: string): Tool | undefined => {
  return tools.find(tool => tool.path === path);
};

export const searchTools = (query: string): Tool[] => {
  const lowerQuery = query.toLowerCase();
  return tools.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  );
};
