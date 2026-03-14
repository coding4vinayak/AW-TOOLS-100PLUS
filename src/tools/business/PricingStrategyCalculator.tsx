import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const PricingStrategyCalculator: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [strategy, setStrategy] = useState('costplus');
  const [inputs, setInputs] = useState({
    // Cost-based
    costPerUnit: 50,
    desiredMargin: 30,
    // Value-based
    customerWillingToPay: 100,
    perceivedValue: 80,
    // Competition-based
    competitorPrice: 90,
    positioning: 'below',
    // Dynamic
    basePrice: 100,
    demandMultiplier: 1.2,
    // Psychological
    rawPrice: 97,
    // Freemium
    freeUsers: 1000,
    conversionRate: 5,
    premiumPrice: 29,
    // Tiered
    basicPrice: 29,
    proPrice: 79,
    enterprisePrice: 199
  });
  const [result, setResult] = useState('');

  const calculate = () => {
    const name = productName || 'Product';
    let output = `# PRICING STRATEGY ANALYSIS\n## ${name.toUpperCase()}\n\n`;

    if (strategy === 'costplus') {
      const { costPerUnit, desiredMargin } = inputs;
      const markupAmount = costPerUnit * (desiredMargin / 100);
      const sellingPrice = costPerUnit + markupAmount;
      const marginAmount = sellingPrice - costPerUnit;
      const marginPercent = (marginAmount / sellingPrice * 100).toFixed(1);

      output += `
## Cost-Plus Pricing Strategy

### Input Values
- **Cost Per Unit:** $${costPerUnit.toLocaleString()}
- **Desired Margin:** ${desiredMargin}%

### Calculated Price
- **Markup Amount:** $${markupAmount.toLocaleString()}
- **Selling Price:** **$${sellingPrice.toFixed(2)}**
- **Profit Per Unit:** $${marginAmount.toLocaleString()}
- **Actual Margin:** ${marginPercent}%

### Break-Even Analysis (at this price)
| Units Sold | Revenue | Cost | Profit |
|------------|---------|------|--------|
| 10 | $${(sellingPrice * 10).toLocaleString()} | $${(costPerUnit * 10).toLocaleString()} | $${(marginAmount * 10).toLocaleString()} |
| 50 | $${(sellingPrice * 50).toLocaleString()} | $${(costPerUnit * 50).toLocaleString()} | $${(marginAmount * 50).toLocaleString()} |
| 100 | $${(sellingPrice * 100).toLocaleString()} | $${(costPerUnit * 100).toLocaleString()} | $${(marginAmount * 100).toLocaleString()} |
| 500 | $${(sellingPrice * 500).toLocaleString()} | $${(costPerUnit * 500).toLocaleString()} | $${(marginAmount * 500).toLocaleString()} |

### Recommendations
- ✅ Simple to calculate and implement
- ✅ Ensures all costs are covered
- ⚠️ May not reflect market value
- ⚠️ Ignores competitor pricing
`;
    } else if (strategy === 'value') {
      const { customerWillingToPay, perceivedValue } = inputs;
      const optimalPrice = (customerWillingToPay + perceivedValue) / 2;
      const valueCapture = ((optimalPrice / customerWillingToPay) * 100).toFixed(1);

      output += `
## Value-Based Pricing Strategy

### Input Values
- **Customer Willingness to Pay:** $${customerWillingToPay.toLocaleString()}
- **Perceived Value:** $${perceivedValue.toLocaleString()}

### Calculated Price
- **Optimal Price Point:** **$${optimalPrice.toFixed(2)}**
- **Value Capture Rate:** ${valueCapture}%

### Pricing Tiers Based on Value
| Tier | Price | Target Segment |
|------|-------|----------------|
| Basic | $${(optimalPrice * 0.5).toFixed(2)} | Price-sensitive customers |
| Standard | $${optimalPrice.toFixed(2)} | Main market segment |
| Premium | $${(optimalPrice * 1.5).toFixed(2)} | High-value customers |
| Enterprise | $${(optimalPrice * 2).toFixed(2)} | Large organizations |

### Recommendations
- ✅ Captures maximum value from customers
- ✅ Aligns price with customer perception
- ⚠️ Requires deep customer understanding
- ⚠️ May need regular price adjustments
`;
    } else if (strategy === 'competition') {
      const { competitorPrice, positioning } = inputs;
      let recommendedPrice = competitorPrice;
      let positionText = '';

      if (positioning === 'below') {
        recommendedPrice = competitorPrice * 0.85;
        positionText = '15% below competitor';
      } else if (positioning === 'same') {
        recommendedPrice = competitorPrice;
        positionText = 'Matching competitor';
      } else if (positioning === 'above') {
        recommendedPrice = competitorPrice * 1.15;
        positionText = '15% above competitor (premium)';
      }

      output += `
## Competition-Based Pricing Strategy

### Input Values
- **Competitor Price:** $${competitorPrice.toLocaleString()}
- **Positioning:** ${positionText}

### Calculated Price
- **Recommended Price:** **$${recommendedPrice.toFixed(2)}**
- **Price Difference:** $${(recommendedPrice - competitorPrice).toLocaleString()} (${(((recommendedPrice - competitorPrice) / competitorPrice) * 100).toFixed(1)}%)

### Competitive Analysis
| Scenario | Your Price | Competitor Price | Advantage |
|----------|------------|------------------|-----------|
| Price War | $${(competitorPrice * 0.8).toFixed(2)} | $${(competitorPrice * 0.9).toFixed(2)} | You win on price |
| Current | $${recommendedPrice.toFixed(2)} | $${competitorPrice.toLocaleString()} | ${positioning === 'below' ? 'You win on price' : positioning === 'above' ? 'You win on value' : 'Equal'} |
| Premium | $${(competitorPrice * 1.2).toFixed(2)} | $${competitorPrice.toLocaleString()} | Competitor wins on price |

### Recommendations
- ✅ Easy to implement and understand
- ✅ Keeps you competitive in market
- ⚠️ Race to the bottom risk
- ⚠️ Ignores your unique value
`;
    } else if (strategy === 'dynamic') {
      const { basePrice, demandMultiplier } = inputs;
      const highDemandPrice = basePrice * demandMultiplier;
      const lowDemandPrice = basePrice / demandMultiplier;

      output += `
## Dynamic Pricing Strategy

### Input Values
- **Base Price:** $${basePrice.toLocaleString()}
- **Demand Multiplier:** ${demandMultiplier}x

### Price Points
- **Base Price:** $${basePrice.toLocaleString()}
- **High Demand Price:** **$${highDemandPrice.toFixed(2)}**
- **Low Demand Price:** **$${lowDemandPrice.toFixed(2)}**

### Pricing Scenarios
| Scenario | Demand Level | Price | Revenue Impact |
|----------|--------------|-------|----------------|
| Peak | High | $${highDemandPrice.toFixed(2)} | +${((demandMultiplier - 1) * 100).toFixed(0)}% |
| Normal | Medium | $${basePrice.toLocaleString()} | Baseline |
| Off-Peak | Low | $${lowDemandPrice.toFixed(2)} | -${((1 - 1/demandMultiplier) * 100).toFixed(0)}% |

### Recommendations
- ✅ Maximizes revenue during peak times
- ✅ Maintains sales during slow periods
- ⚠️ Requires demand tracking system
- ⚠️ May confuse customers if not transparent
`;
    } else if (strategy === 'psychological') {
      const { rawPrice } = inputs;
      const charmPrice = Math.floor(rawPrice) - 0.01;
      const prestigePrice = Math.ceil(rawPrice);
      const powerPrice = Math.floor(rawPrice / 10) * 10 + 9;

      output += `
## Psychological Pricing Strategy

### Input Values
- **Raw Calculated Price:** $${rawPrice.toLocaleString()}

### Psychological Price Points
| Type | Price | Psychology |
|------|-------|------------|
| Charm Price | **$${charmPrice.toFixed(2)}** | Left-digit effect ($X.99) |
| Prestige Price | **$${prestigePrice.toLocaleString()}** | Signals quality |
| Power Price | **$${powerPrice.toLocaleString()}** | Common retail ending |

### When to Use Each
- **Charm Pricing ($X.99):** Best for everyday products, price-sensitive markets
- **Prestige Pricing ($X00):** Best for luxury items, quality-focused segments
- **Power Pricing ($X9):** Best for retail, middle-ground approach

### Recommendations
- ✅ Leverages consumer psychology
- ✅ Can increase conversion rates
- ⚠️ May not work for all markets
- ⚠️ Consider brand positioning
`;
    } else if (strategy === 'freemium') {
      const { freeUsers, conversionRate, premiumPrice } = inputs;
      const payingCustomers = Math.floor(freeUsers * (conversionRate / 100));
      const monthlyRevenue = payingCustomers * premiumPrice;
      const annualRevenue = monthlyRevenue * 12;
      const arpu = (monthlyRevenue / freeUsers).toFixed(2);

      output += `
## Freemium Pricing Strategy

### Input Values
- **Free Users:** ${freeUsers.toLocaleString()}
- **Conversion Rate:** ${conversionRate}%
- **Premium Price:** $${premiumPrice.toLocaleString()}/month

### Revenue Projections
- **Paying Customers:** ${payingCustomers.toLocaleString()}
- **Monthly Recurring Revenue:** **$${monthlyRevenue.toLocaleString()}**
- **Annual Recurring Revenue:** **$${annualRevenue.toLocaleString()}**
- **ARPU (Average Revenue Per User):** $${arpu}

### Conversion Scenarios
| Conversion Rate | Paying Users | MRR | ARR |
|-----------------|--------------|-----|-----|
| ${(conversionRate * 0.5).toFixed(1)}% | ${Math.floor(freeUsers * conversionRate * 0.5 / 100)} | $${(Math.floor(freeUsers * conversionRate * 0.5 / 100) * premiumPrice).toLocaleString()} | $${(Math.floor(freeUsers * conversionRate * 0.5 / 100) * premiumPrice * 12).toLocaleString()} |
| ${conversionRate}% | ${payingCustomers} | $${monthlyRevenue.toLocaleString()} | $${annualRevenue.toLocaleString()} |
| ${(conversionRate * 2).toFixed(1)}% | ${Math.floor(freeUsers * conversionRate * 2 / 100)} | $${(Math.floor(freeUsers * conversionRate * 2 / 100) * premiumPrice).toLocaleString()} | $${(Math.floor(freeUsers * conversionRate * 2 / 100) * premiumPrice * 12).toLocaleString()} |

### Recommendations
- ✅ Low barrier to entry
- ✅ Viral growth potential
- ⚠️ Need critical mass of users
- ⚠️ Must deliver value in free tier
`;
    } else if (strategy === 'tiered') {
      const { basicPrice, proPrice, enterprisePrice } = inputs;
      const avgPrice = (basicPrice + proPrice + enterprisePrice) / 3;

      output += `
## Tiered Pricing Strategy

### Price Tiers
| Tier | Price | Target |
|------|-------|--------|
| Basic | $${basicPrice.toLocaleString()} | Individuals, small teams |
| Pro | $${proPrice.toLocaleString()} | Growing businesses |
| Enterprise | $${enterprisePrice.toLocaleString()} | Large organizations |

### Tier Comparison
| Metric | Basic | Pro | Enterprise |
|--------|-------|-----|------------|
| Price | $${basicPrice.toLocaleString()} | $${proPrice.toLocaleString()} | $${enterprisePrice.toLocaleString()} |
| Price Increase | - | +${(((proPrice - basicPrice) / basicPrice) * 100).toFixed(0)}% | +${(((enterprisePrice - proPrice) / proPrice) * 100).toFixed(0)}% |
| Avg Price | **$${avgPrice.toFixed(2)}** |

### Revenue Scenarios (100 customers)
| Distribution | Revenue |
|--------------|---------|
| 70% Basic, 25% Pro, 5% Ent | $${(basicPrice * 70 + proPrice * 25 + enterprisePrice * 5).toLocaleString()} |
| 50% Basic, 40% Pro, 10% Ent | $${(basicPrice * 50 + proPrice * 40 + enterprisePrice * 10).toLocaleString()} |
| 30% Basic, 50% Pro, 20% Ent | $${(basicPrice * 30 + proPrice * 50 + enterprisePrice * 20).toLocaleString()} |

### Recommendations
- ✅ Caters to different segments
- ✅ Clear upgrade path
- ✅ Maximizes revenue capture
- ⚠️ Can cause decision paralysis
`;
    }

    output += `
---

## NEXT STEPS

1. **Test Your Price** - Run A/B tests if possible
2. **Gather Feedback** - Ask customers about perceived value
3. **Monitor Metrics** - Track conversion, churn, LTV
4. **Adjust Regularly** - Review pricing quarterly
5. **Consider Bundling** - Package products for higher value

---

*Generated by Abetworks Pricing Strategy Calculator*
`;

    setResult(output);
  };

  return (
    <ToolWrapper
      title="Pricing Strategy Calculator"
      description="Determine optimal pricing using multiple pricing strategies and models"
      icon="🏷️"
      inputValue={productName}
      outputValue={result}
      outputLabel="Pricing Analysis"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-pricing-strategy.md"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="productName" className="form-label">Product/Service Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Your product name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="strategy" className="form-label">Pricing Strategy *</label>
          <select
            className="form-select"
            id="strategy"
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
          >
            <option value="costplus">Cost-Plus Pricing</option>
            <option value="value">Value-Based Pricing</option>
            <option value="competition">Competition-Based Pricing</option>
            <option value="dynamic">Dynamic Pricing</option>
            <option value="psychological">Psychological Pricing</option>
            <option value="freemium">Freemium Model</option>
            <option value="tiered">Tiered Pricing</option>
          </select>
        </div>
      </div>

      <hr className="my-4" />

      {strategy === 'costplus' && (
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Cost Per Unit ($)</label>
            <input type="number" className="form-control" value={inputs.costPerUnit} onChange={(e) => setInputs({ ...inputs, costPerUnit: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Desired Margin (%)</label>
            <input type="number" className="form-control" value={inputs.desiredMargin} onChange={(e) => setInputs({ ...inputs, desiredMargin: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      {strategy === 'value' && (
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Customer Willingness to Pay ($)</label>
            <input type="number" className="form-control" value={inputs.customerWillingToPay} onChange={(e) => setInputs({ ...inputs, customerWillingToPay: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Perceived Value ($)</label>
            <input type="number" className="form-control" value={inputs.perceivedValue} onChange={(e) => setInputs({ ...inputs, perceivedValue: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      {strategy === 'competition' && (
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Competitor Price ($)</label>
            <input type="number" className="form-control" value={inputs.competitorPrice} onChange={(e) => setInputs({ ...inputs, competitorPrice: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Positioning</label>
            <select className="form-select" value={inputs.positioning} onChange={(e) => setInputs({ ...inputs, positioning: e.target.value })}>
              <option value="below">15% Below Competitor</option>
              <option value="same">Match Competitor</option>
              <option value="above">15% Above (Premium)</option>
            </select>
          </div>
        </div>
      )}

      {strategy === 'dynamic' && (
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Base Price ($)</label>
            <input type="number" className="form-control" value={inputs.basePrice} onChange={(e) => setInputs({ ...inputs, basePrice: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Demand Multiplier</label>
            <input type="number" step="0.1" className="form-control" value={inputs.demandMultiplier} onChange={(e) => setInputs({ ...inputs, demandMultiplier: parseFloat(e.target.value) || 1 })} />
          </div>
        </div>
      )}

      {strategy === 'psychological' && (
        <div className="row g-3">
          <div className="col-md-12">
            <label className="form-label">Raw Calculated Price ($)</label>
            <input type="number" className="form-control" value={inputs.rawPrice} onChange={(e) => setInputs({ ...inputs, rawPrice: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      {strategy === 'freemium' && (
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Free Users</label>
            <input type="number" className="form-control" value={inputs.freeUsers} onChange={(e) => setInputs({ ...inputs, freeUsers: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Conversion Rate (%)</label>
            <input type="number" className="form-control" value={inputs.conversionRate} onChange={(e) => setInputs({ ...inputs, conversionRate: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Premium Price ($/month)</label>
            <input type="number" className="form-control" value={inputs.premiumPrice} onChange={(e) => setInputs({ ...inputs, premiumPrice: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      {strategy === 'tiered' && (
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Basic Tier Price ($)</label>
            <input type="number" className="form-control" value={inputs.basicPrice} onChange={(e) => setInputs({ ...inputs, basicPrice: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Pro Tier Price ($)</label>
            <input type="number" className="form-control" value={inputs.proPrice} onChange={(e) => setInputs({ ...inputs, proPrice: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Enterprise Price ($)</label>
            <input type="number" className="form-control" value={inputs.enterprisePrice} onChange={(e) => setInputs({ ...inputs, enterprisePrice: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary btn-lg" onClick={calculate}>
          🏷️ Calculate Pricing
        </button>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Pricing Strategy Calculator" compact />
      </div>
    </ToolWrapper>
  );
};

export default PricingStrategyCalculator;
