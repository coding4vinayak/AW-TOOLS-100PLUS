# Google Sheets Lead Capture - Troubleshooting Guide

## Quick Debug Steps

### Step 1: Test if Your Google Script URL Works

Open your browser console and run this test:

```javascript
fetch('YOUR_GOOGLE_SCRIPT_URL', {
  method: 'POST',
  mode: 'no-cors',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@test.com',
    businessName: 'Test',
    serviceInterest: 'test',
    toolUsed: 'Test',
    timestamp: new Date().toISOString()
  })
}).then(() => console.log('✅ Success! Check your Google Sheet')).catch(err => console.error('❌ Error:', err));
```

**Replace `YOUR_GOOGLE_SCRIPT_URL` with your actual URL.**

---

## Common Issues & Fixes

### Issue 1: "Permission Denied" or 403 Error

**Problem:** Script doesn't have proper permissions

**Fix:**
1. Go to Google Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the **edit** (pencil) icon
4. Make sure **Who has access** is set to: **Anyone**
5. Click **Deploy** again
6. Copy the NEW URL and update your code

---

### Issue 2: No Email Alert Received

**Problem:** Gmail permission not granted or wrong email

**Fix:**
1. In Apps Script, check the `ALERT_EMAIL` variable
2. Make sure it's: `baoxing100+tools@gmail.com`
3. Check your spam folder
4. Run the `testEmailAlert` function manually:
   - Open Apps Script editor
   - Select `testEmailAlert` from dropdown
   - Click **Run** (▶️)
   - Check email

---

### Issue 3: Lead Not Appearing in Sheet

**Problem:** Script error or wrong sheet

**Fix:**
1. In Apps Script, click **Executions** (left sidebar)
2. Look for errors (red text)
3. If you see errors, click on the error to see details
4. Common fixes:
   - Make sure column headers match exactly
   - Make sure sheet name is correct
   - Re-deploy the script

---

### Issue 4: Form Shows Success But Nothing Happens

**Problem:** `no-cors` mode doesn't return response

**The current code uses `mode: 'no-cors'` which means:**
- ✅ Request goes through
- ❌ But you can't see the response
- ✅ Lead should still be saved

**To verify it's working:**

1. **Check Browser Console:**
   - Press F12
   - Go to Console tab
   - Submit form
   - Look for errors

2. **Check Google Sheet:**
   - Open your "Abetworks Leads" sheet
   - See if new row was added

3. **Check Apps Script Logs:**
   - Open Apps Script editor
   - Click **Executions** (left sidebar)
   - Look for recent executions
   - Click on any to see details

---

## Updated Code (More Reliable)

If the current code isn't working, try this updated version:

### In `LeadCaptureForm.tsx`, replace the `handleSubmit` function with:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const leadData: LeadData = {
    ...formData,
    toolUsed: toolName,
    timestamp: new Date().toISOString()
  };

  console.log('Submitting lead:', leadData);

  try {
    // Send to Google Sheets via Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    });

    console.log('Fetch response:', response);
    console.log('✅ Lead submitted to Google Sheets');

    // Store locally as backup
    const existingLeads = JSON.parse(localStorage.getItem('abetworks_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('abetworks_leads', JSON.stringify(existingLeads));

    // Store user info for personalization
    localStorage.setItem('abetworks_user', JSON.stringify({
      email: formData.email,
      name: formData.name,
      businessName: formData.businessName
    }));

    if (onLeadSubmit) {
      onLeadSubmit(leadData);
    }

    setIsSubmitting(false);
    setSubmitted(true);
    
  } catch (error) {
    console.error('❌ Error submitting lead:', error);
    
    // Fallback to localStorage only
    const existingLeads = JSON.parse(localStorage.getItem('abetworks_leads') || '[]');
    existingLeads.push(leadData);
    localStorage.setItem('abetworks_leads', JSON.stringify(existingLeads));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Still show success since we saved locally
    alert('Lead saved locally. Google Sheets integration may need configuration.');
  }
};
```

---

## Manual Testing Checklist

### ✅ Google Apps Script Side:

1. **Script deployed?**
   - [ ] Click Deploy → Manage deployments
   - [ ] You see a deployment with status "Active"

2. **Access set to Anyone?**
   - [ ] Who has access: **Anyone**
   - [ ] NOT "Only myself" or "Only domain"

3. **Email address correct?**
   - [ ] `ALERT_EMAIL = 'baoxing100+tools@gmail.com'`
   - [ ] No typos

4. **Sheet headers correct?**
   - [ ] Row 1 has: Timestamp, Name, Email, Business Name, Service Interest, Tool Used
   - [ ] No extra spaces in headers

5. **Test function works?**
   - [ ] Run `testEmailAlert` manually
   - [ ] You receive test email

---

### ✅ Frontend Code Side:

1. **URL correct?**
   - [ ] `GOOGLE_SCRIPT_URL` matches your deployment URL
   - [ ] URL ends with `/exec` not `/dev`

2. **Form submits?**
   - [ ] Click "Contact Us" or "Send"
   - [ ] Form shows loading state
   - [ ] Form shows success message

3. **Console shows no errors?**
   - [ ] Press F12
   - [ ] Console tab
   - [ ] No red errors when submitting

---

## Alternative: Use Direct Form Submit (No Fetch)

If fetch isn't working, try this simpler approach:

### Update your Apps Script to also support GET:

```javascript
function doGet(e) {
  return doPost(e);
}
```

### Then update frontend to use GET instead:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const leadData: LeadData = {
    ...formData,
    toolUsed: toolName,
    timestamp: new Date().toISOString()
  };

  // Use GET request with query params
  const url = new URL(GOOGLE_SCRIPT_URL);
  url.searchParams.append('name', leadData.name);
  url.searchParams.append('email', leadData.email);
  url.searchParams.append('businessName', leadData.businessName || '');
  url.searchParams.append('serviceInterest', leadData.serviceInterest);
  url.searchParams.append('toolUsed', leadData.toolUsed);
  url.searchParams.append('timestamp', leadData.timestamp);

  try {
    await fetch(url.toString(), {
      method: 'GET',
      mode: 'no-cors',
    });

    // ... rest of code
  }
};
```

---

## Last Resort: Use Formspree (Easier)

If Google Sheets is too complicated, use Formspree:

1. Go to [formspree.io](https://formspree.io)
2. Create free account
3. Create new form → Get URL
4. Replace in code:
```typescript
const GOOGLE_SCRIPT_URL = 'https://formspree.io/f/your-form-id';
```
5. Remove `mode: 'no-cors'` from fetch
6. Done! Emails sent automatically

**Free tier:** 50 submissions/month

---

## Contact Info for Help

If still not working, check:

1. **Apps Script Execution Log:**
   - Open Apps Script
   - Click "Executions"
   - Find the failed execution
   - Click to see error details

2. **Browser Console:**
   - Press F12
   - Console tab
   - Look for red errors

3. **Network Tab:**
   - Press F12
   - Network tab
   - Submit form
   - Look for the request to `script.google.com`
   - Check status code (should be 200 or 302)

---

## Quick Video Test

Record a quick test:

1. Open your app
2. Open browser console (F12)
3. Submit a test lead
4. Check console for errors
5. Check Google Sheet for new row
6. Check email for alert

Share what you see and I can help debug!

---

**Most Common Fix:** Re-deploy with "Who has access: Anyone" and update the URL in your code.
