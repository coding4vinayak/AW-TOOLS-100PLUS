import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const RevenueModelCalculator: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [model, setModel] = useState('subscription');
  const [inputs, setInputs] = useState({
    // Subscription
    monthlyPrice: 99,
    customers: 100,
    churnRate: 5,
    growthRate: 10,
    // E-commerce
    avgOrderValue: 50,
    ordersPerMonth: 200,
    repeatRate: 30,
    // Advertising
    impressions: 100000,
    cpm: 5,
    fillRate: 80,
    // Marketplace
    gmv: 50000,
    takeRate: 10,
    // SaaS
    seats: 500,
    pricePerSeat: 20,
    // One-time
    unitsSold: 100,
    unitPrice: 299
  });
  const [projections, setProjections] = useState('');

  const calculate = () => {
    const name = businessName || 'Business';
    let results = '';
    const months = 12;

    if (model === 'subscription') {
      let customers = inputs.customers;
      const monthlyPrice = inputs.monthlyPrice;
      const churnRate = inputs.churnRate / 100;
      const growthRate = inputs.growthRate / 100;
      
      let totalRevenue = 0;
      let projectionDetails = [`# REVENUE PROJECTION - ${name.toUpperCase()}`, '', '## Subscription Model', '', `**Starting Customers:** ${inputs.customers}`, `**Monthly Price:** $${monthlyPrice}`, `**Churn Rate:** ${inputs.churnRate}%`, `**Growth Rate:** ${inputs.growthRate}%`, '', '### Monthly Projections (12 Months)', '', '| Month | Customers | Revenue | Cumulative |', '|-------|-----------|---------|------------|'];
      
      for (let i = 1; i <= months; i++) {
        const newCustomers = Math.floor(customers * growthRate);
        const churnedCustomers = Math.floor(customers * churnRate);
        customers = customers + newCustomers - churnedCustomers;
        const revenue = customers * monthlyPrice;
        totalRevenue += revenue;
        projectionDetails.push(`| ${i} | ${customers.toLocaleString()} | $${revenue.toLocaleString()} | $${totalRevenue.toLocaleString()} |`);
      }
      
      const arr = totalRevenue / 12;
      results = projectionDetails.join('\n') + `\n\n### Annual Summary\n\n**Total Annual Revenue:** $${totalRevenue.toLocaleString()}\n**Average Monthly Revenue:** $${arr.toLocaleString()}\n**Ending Customer Count:** ${customers.toLocaleString()}\n**Customer Lifetime Value (LTV):** $${(monthlyPrice / churnRate).toFixed(2)}\n**Monthly Recurring Revenue (MRR):** $${(customers * monthlyPrice).toLocaleString()}`;
    } else if (model === 'ecommerce') {
      const aov = inputs.avgOrderValue;
      let orders = inputs.ordersPerMonth;
      const repeatRate = inputs.repeatRate / 100;
      
      let totalRevenue = 0;
      let projectionDetails = [`# REVENUE PROJECTION - ${name.toUpperCase()}`, '', '## E-commerce Model', '', `**Average Order Value:** $${aov}`, `**Starting Orders/Month:** ${orders}`, `**Repeat Customer Rate:** ${inputs.repeatRate}%`, '', '### Monthly Projections (12 Months)', '', '| Month | Orders | Revenue | Cumulative |', '|-------|--------|---------|------------|'];
      
      for (let i = 1; i <= months; i++) {
        orders = Math.floor(orders * (1 + repeatRate * 0.1));
        const revenue = orders * aov;
        totalRevenue += revenue;
        projectionDetails.push(`| ${i} | ${orders.toLocaleString()} | $${revenue.toLocaleString()} | $${totalRevenue.toLocaleString()} |`);
      }
      
      results = projectionDetails.join('\n') + `\n\n### Annual Summary\n\n**Total Annual Revenue:** $${totalRevenue.toLocaleString()}\n**Average Monthly Revenue:** $${(totalRevenue / 12).toLocaleString()}\n**Final Monthly Orders:** ${orders.toLocaleString()}`;
    } else if (model === 'advertising') {
      const impressions = inputs.impressions;
      const cpm = inputs.cpm;
      const fillRate = inputs.fillRate / 100;
      
      const monthlyRevenue = (impressions * fillRate * cpm) / 1000;
      const annualRevenue = monthlyRevenue * 12;
      
      results = `# REVENUE PROJECTION - ${name.toUpperCase()}\n\n## Advertising Model\n\n**Monthly Impressions:** ${impressions.toLocaleString()}\n**CPM (Cost Per Mille):** $${cpm}\n**Fill Rate:** ${inputs.fillRate}%\n\n### Revenue Calculation\n\n**Billable Impressions:** ${(impressions * fillRate).toLocaleString()}\n**Monthly Revenue:** $${monthlyRevenue.toLocaleString()}\n**Annual Revenue:** $${annualRevenue.toLocaleString()}\n\n### Quarterly Breakdown\n\n| Quarter | Impressions | Revenue |\n|---------|-------------|---------|\n| Q1 | ${(impressions * 3 * fillRate).toLocaleString()} | $${(monthlyRevenue * 3).toLocaleString()} |\n| Q2 | ${(impressions * 3 * fillRate).toLocaleString()} | $${(monthlyRevenue * 3).toLocaleString()} |\n| Q3 | ${(impressions * 3 * fillRate).toLocaleString()} | $${(monthlyRevenue * 3).toLocaleString()} |\n| Q4 | ${(impressions * 3 * fillRate).toLocaleString()} | $${(monthlyRevenue * 3).toLocaleString()} |\n| **Year** | **${(impressions * 12 * fillRate).toLocaleString()}** | **$${annualRevenue.toLocaleString()}** |`;
    } else if (model === 'marketplace') {
      let gmv = inputs.gmv;
      const takeRate = inputs.takeRate / 100;
      const growthRate = 0.1;
      
      let totalRevenue = 0;
      let projectionDetails = [`# REVENUE PROJECTION - ${name.toUpperCase()}`, '', '## Marketplace Model', '', `**Starting GMV:** $${gmv.toLocaleString()}`, `**Take Rate:** ${inputs.takeRate}%`, `**Growth Rate:** 10% monthly`, '', '### Monthly Projections (12 Months)', '', '| Month | GMV | Revenue | Cumulative |', '|-------|-----|---------|------------|'];
      
      for (let i = 1; i <= months; i++) {
        gmv = Math.floor(gmv * (1 + growthRate));
        const revenue = gmv * takeRate;
        totalRevenue += revenue;
        projectionDetails.push(`| ${i} | $${gmv.toLocaleString()} | $${revenue.toLocaleString()} | $${totalRevenue.toLocaleString()} |`);
      }
      
      results = projectionDetails.join('\n') + `\n\n### Annual Summary\n\n**Total Annual GMV:** $${(inputs.gmv * 12 * 1.1).toLocaleString()}\n**Total Revenue:** $${totalRevenue.toLocaleString()}\n**Average Monthly Revenue:** $${(totalRevenue / 12).toLocaleString()}`;
    } else if (model === 'saas') {
      const seats = inputs.seats;
      const pricePerSeat = inputs.pricePerSeat;
      const growthRate = 0.08;
      
      let currentSeats = seats;
      let totalRevenue = 0;
      let projectionDetails = [`# REVENUE PROJECTION - ${name.toUpperCase()}`, '', '## SaaS Per-Seat Model', '', `**Starting Seats:** ${seats}`, `**Price Per Seat:** $${pricePerSeat}/month`, '', '### Monthly Projections (12 Months)', '', '| Month | Seats | MRR | Revenue | Cumulative |', '|-------|-------|-----|---------|------------|'];
      
      for (let i = 1; i <= months; i++) {
        currentSeats = Math.floor(currentSeats * (1 + growthRate));
        const mrr = currentSeats * pricePerSeat;
        totalRevenue += mrr;
        projectionDetails.push(`| ${i} | ${currentSeats.toLocaleString()} | $${mrr.toLocaleString()} | $${mrr.toLocaleString()} | $${totalRevenue.toLocaleString()} |`);
      }
      
      results = projectionDetails.join('\n') + `\n\n### Annual Summary\n\n**Total Annual Revenue:** $${totalRevenue.toLocaleString()}\n**Ending MRR:** $${(currentSeats * pricePerSeat).toLocaleString()}\n**Ending Seats:** ${currentSeats.toLocaleString()}`;
    } else {
      const units = inputs.unitsSold;
      const price = inputs.unitPrice;
      const growthRate = 0.05;
      
      let currentUnits = units;
      let totalRevenue = 0;
      let projectionDetails = [`# REVENUE PROJECTION - ${name.toUpperCase()}`, '', '## One-Time Sales Model', '', `**Starting Units/Month:** ${units}`, `**Unit Price:** $${price}`, '', '### Monthly Projections (12 Months)', '', '| Month | Units | Revenue | Cumulative |', '|-------|-------|---------|------------|'];
      
      for (let i = 1; i <= months; i++) {
        currentUnits = Math.floor(currentUnits * (1 + growthRate));
        const revenue = currentUnits * price;
        totalRevenue += revenue;
        projectionDetails.push(`| ${i} | ${currentUnits.toLocaleString()} | $${revenue.toLocaleString()} | $${totalRevenue.toLocaleString()} |`);
      }
      
      results = projectionDetails.join('\n') + `\n\n### Annual Summary\n\n**Total Annual Revenue:** $${totalRevenue.toLocaleString()}\n**Average Monthly Revenue:** $${(totalRevenue / 12).toLocaleString()}`;
    }

    setProjections(results);
  };

  return (
    <ToolWrapper
      title="Revenue Model Calculator"
      description="Project your revenue based on different business models with detailed financial forecasts"
      icon="💰"
      inputValue={businessName}
      outputValue={projections}
      outputLabel="Revenue Projections"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-revenue-projections.md"
    >
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="businessName" className="form-label">Business Name</label>
          <input
            type="text"
            className="form-control"
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Your business name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="model" className="form-label">Revenue Model *</label>
          <select
            className="form-select"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="subscription">Subscription (SaaS, Membership)</option>
            <option value="ecommerce">E-commerce</option>
            <option value="advertising">Advertising</option>
            <option value="marketplace">Marketplace/Commission</option>
            <option value="saas">SaaS (Per-Seat)</option>
            <option value="onetime">One-Time Sales</option>
          </select>
        </div>
      </div>

      <hr className="my-4" />

      {model === 'subscription' && (
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label">Monthly Price ($)</label>
            <input type="number" className="form-control" value={inputs.monthlyPrice} onChange={(e) => setInputs({ ...inputs, monthlyPrice: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-3">
            <label className="form-label">Starting Customers</label>
            <input type="number" className="form-control" value={inputs.customers} onChange={(e) => setInputs({ ...inputs, customers: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="col-md-3">
            <label className="form-label">Churn Rate (%)</label>
            <input type="number" className="form-control" value={inputs.churnRate} onChange={(e) => setInputs({ ...inputs, churnRate: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-3">
            <label className="form-label">Growth Rate (%)</label>
            <input type="number" className="form-control" value={inputs.growthRate} onChange={(e) => setInputs({ ...inputs, growthRate: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      {model === 'ecommerce' && (
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Avg Order Value ($)</label>
            <input type="number" className="form-control" value={inputs.avgOrderValue} onChange={(e) => setInputs({ ...inputs, avgOrderValue: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Orders/Month</label>
            <input type="number" className="form-control" value={inputs.ordersPerMonth} onChange={(e) => setInputs({ ...inputs, ordersPerMonth: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Repeat Rate (%)</label>
            <input type="number" className="form-control" value={inputs.repeatRate} onChange={(e) => setInputs({ ...inputs, repeatRate: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      {model === 'advertising' && (
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Monthly Impressions</label>
            <input type="number" className="form-control" value={inputs.impressions} onChange={(e) => setInputs({ ...inputs, impressions: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="col-md-4">
            <label className="form-label">CPM ($)</label>
            <input type="number" className="form-control" value={inputs.cpm} onChange={(e) => setInputs({ ...inputs, cpm: parseFloat(e.target.value) || 0 })} />
          </div>
          <div className="col-md-4">
            <label className="form-label">Fill Rate (%)</label>
            <input type="number" className="form-control" value={inputs.fillRate} onChange={(e) => setInputs({ ...inputs, fillRate: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      {model === 'marketplace' && (
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Starting GMV ($)</label>
            <input type="number" className="form-control" value={inputs.gmv} onChange={(e) => setInputs({ ...inputs, gmv: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Take Rate (%)</label>
            <input type="number" className="form-control" value={inputs.takeRate} onChange={(e) => setInputs({ ...inputs, takeRate: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      {model === 'saas' && (
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Starting Seats</label>
            <input type="number" className="form-control" value={inputs.seats} onChange={(e) => setInputs({ ...inputs, seats: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Price Per Seat ($)</label>
            <input type="number" className="form-control" value={inputs.pricePerSeat} onChange={(e) => setInputs({ ...inputs, pricePerSeat: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      {model === 'onetime' && (
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Units Sold/Month</label>
            <input type="number" className="form-control" value={inputs.unitsSold} onChange={(e) => setInputs({ ...inputs, unitsSold: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Unit Price ($)</label>
            <input type="number" className="form-control" value={inputs.unitPrice} onChange={(e) => setInputs({ ...inputs, unitPrice: parseFloat(e.target.value) || 0 })} />
          </div>
        </div>
      )}

      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary btn-lg" onClick={calculate}>
          📊 Calculate Revenue Projections
        </button>
      </div>

      <div className="mt-4">
        <LeadCaptureForm toolName="Revenue Model Calculator" compact />
      </div>
    </ToolWrapper>
  );
};

export default RevenueModelCalculator;
