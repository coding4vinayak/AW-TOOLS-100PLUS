import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const RichSnippetGenerator: React.FC = () => {
  const [type, setType] = useState('article');
  const [data, setData] = useState<Record<string, string>>({});
  const [schema, setSchema] = useState('');

  const generateSchema = () => {
    let schemaObj: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': type.charAt(0).toUpperCase() + type.slice(1)
    };

    if (type === 'article') {
      schemaObj = {
        ...schemaObj,
        headline: data.headline || 'Article Title',
        description: data.description || 'Article description',
        image: data.image ? [data.image] : [],
        author: {
          '@type': 'Person',
          name: data.author || 'Author Name',
          url: data.authorUrl || 'https://example.com'
        },
        publisher: {
          '@type': 'Organization',
          name: data.publisher || 'Publisher Name',
          logo: {
            '@type': 'ImageObject',
            url: data.logo || 'https://example.com/logo.png'
          }
        },
        datePublished: data.datePublished || new Date().toISOString().split('T')[0],
        dateModified: data.dateModified || new Date().toISOString().split('T')[0]
      };
    } else if (type === 'product') {
      schemaObj = {
        ...schemaObj,
        name: data.name || 'Product Name',
        description: data.description || 'Product description',
        image: data.image ? [data.image] : [],
        brand: {
          '@type': 'Brand',
          name: data.brand || 'Brand Name'
        },
        offers: {
          '@type': 'Offer',
          url: data.url || 'https://example.com/product',
          priceCurrency: data.currency || 'USD',
          price: data.price || '99.99',
          availability: data.availability || 'https://schema.org/InStock'
        }
      };
    } else if (type === 'recipe') {
      schemaObj = {
        ...schemaObj,
        name: data.name || 'Recipe Name',
        description: data.description || 'Recipe description',
        image: data.image ? [data.image] : [],
        author: {
          '@type': 'Person',
          name: data.author || 'Chef Name'
        },
        prepTime: data.prepTime || 'PT15M',
        cookTime: data.cookTime || 'PT30M',
        totalTime: data.totalTime || 'PT45M',
        recipeYield: data.yield || '4 servings',
        recipeCategory: data.category || 'Dinner',
        nutrition: {
          '@type': 'NutritionInformation',
          calories: data.calories || '500 calories'
        }
      };
    } else if (type === 'faq') {
      schemaObj = {
        ...schemaObj,
        mainEntity: [
          {
            '@type': 'Question',
            name: data.question1 || 'What is your return policy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: data.answer1 || 'We offer a 30-day return policy.'
            }
          },
          {
            '@type': 'Question',
            name: data.question2 || 'How long does shipping take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: data.answer2 || 'Shipping typically takes 3-5 business days.'
            }
          }
        ]
      };
    } else if (type === 'localbusiness') {
      schemaObj = {
        ...schemaObj,
        name: data.name || 'Business Name',
        description: data.description || 'Business description',
        image: data.image ? [data.image] : [],
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.street || '123 Main St',
          addressLocality: data.city || 'City',
          addressRegion: data.state || 'State',
          postalCode: data.zip || '12345',
          addressCountry: data.country || 'US'
        },
        telephone: data.phone || '+1-555-555-5555',
        openingHours: data.hours || 'Mo-Fr 09:00-17:00',
        priceRange: data.priceRange || '$$'
      };
    }

    const jsonLd = JSON.stringify(schemaObj, null, 2);
    
    const output = `
# RICH SNIPPET / SCHEMA MARKUP
## Type: ${type.toUpperCase()}

---

## JSON-LD CODE

\`\`\`json
${jsonLd}
\`\`\`

---

## HTML IMPLEMENTATION

\`\`\`html
<script type="application/ld+json">
${jsonLd}
</script>
\`\`\`

---

## WHERE TO ADD

1. **In the <head> section** of your HTML page
2. **Via Google Tag Manager** as a Custom HTML tag
3. **Through your CMS** (WordPress plugins, etc.)

---

## TESTING & VALIDATION

✅ **Test Your Schema:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

✅ **Expected Rich Results:**
${type === 'article' ? '- Article card in Google Discover\n- Top Stories carousel (if news)' : type === 'product' ? '- Product rich result with price\n- Review stars in search results' : type === 'recipe' ? '- Recipe card with image\n- Cooking time and calories' : type === 'faq' ? '- FAQ accordion in search results' : type === 'localbusiness' ? '- Local Business knowledge panel\n- Business info in local pack' : '- Enhanced search result'}

---

## TIPS FOR BEST RESULTS

1. **Be Accurate** - Only mark up visible content
2. **Be Complete** - Fill in all relevant properties
3. **Test Regularly** - Use Google's testing tools
4. **Monitor Performance** - Check Search Console
5. **Stay Updated** - Schema.org evolves regularly

---

*Generated by Abetworks Rich Snippet Generator*
`.trim();

    setSchema(output);
  };

  const Field = ({ label, field, placeholder, type = 'text' }: { label: string, field: string, placeholder: string, type?: string }) => (
    <div className="col-md-6">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        value={data[field] || ''}
        onChange={(e) => setData({ ...data, [field]: e.target.value })}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <ToolWrapper
      title="Rich Snippet / Schema Markup Generator"
      description="Generate JSON-LD schema markup for enhanced search results"
      icon="📊"
      inputValue={type}
      outputValue={schema}
      outputLabel="Schema Markup"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-schema-markup.json"
    >
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label">Schema Type *</label>
          <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="article">Article/Blog Post</option>
            <option value="product">Product</option>
            <option value="recipe">Recipe</option>
            <option value="faq">FAQ Page</option>
            <option value="localbusiness">Local Business</option>
            <option value="event">Event</option>
            <option value="review">Review</option>
          </select>
        </div>
      </div>

      <h6 className="mb-3">Schema Properties</h6>
      <div className="row g-3">
        {(type === 'article' || type === 'product') && (
          <>
            <Field label="Name/Title" field={type === 'article' ? 'headline' : 'name'} placeholder="Enter title" />
            <Field label="Description" field="description" placeholder="Enter description" />
            <Field label="Image URL" field="image" placeholder="https://..." />
            {type === 'article' ? (
              <>
                <Field label="Author" field="author" placeholder="Author name" />
                <Field label="Publisher" field="publisher" placeholder="Publisher name" />
                <Field label="Date Published" field="datePublished" type="date" placeholder="" />
              </>
            ) : (
              <>
                <Field label="Brand" field="brand" placeholder="Brand name" />
                <Field label="Price" field="price" placeholder="99.99" type="number" />
                <Field label="Currency" field="currency" placeholder="USD" />
              </>
            )}
          </>
        )}
        {type === 'faq' && (
          <>
            <Field label="Question 1" field="question1" placeholder="Enter question" />
            <Field label="Answer 1" field="answer1" placeholder="Enter answer" />
            <Field label="Question 2" field="question2" placeholder="Enter question" />
            <Field label="Answer 2" field="answer2" placeholder="Enter answer" />
          </>
        )}
        {type === 'localbusiness' && (
          <>
            <Field label="Business Name" field="name" placeholder="Business name" />
            <Field label="Phone" field="phone" placeholder="+1-555-555-5555" />
            <Field label="Street Address" field="street" placeholder="123 Main St" />
            <Field label="City" field="city" placeholder="City" />
            <Field label="State" field="state" placeholder="State" />
            <Field label="ZIP Code" field="zip" placeholder="12345" />
          </>
        )}
        {type === 'recipe' && (
          <>
            <Field label="Recipe Name" field="name" placeholder="Recipe name" />
            <Field label="Prep Time" field="prepTime" placeholder="PT15M" />
            <Field label="Cook Time" field="cookTime" placeholder="PT30M" />
            <Field label="Servings" field="yield" placeholder="4 servings" />
            <Field label="Calories" field="calories" placeholder="500" />
          </>
        )}
      </div>

      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary btn-lg" onClick={generateSchema}>📊 Generate Schema</button>
      </div>
      <div className="mt-4"><LeadCaptureForm toolName="Rich Snippet Generator" compact /></div>
    </ToolWrapper>
  );
};

export default RichSnippetGenerator;
