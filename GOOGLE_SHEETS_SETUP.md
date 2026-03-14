# Google Sheets Lead Capture Setup Guide

Complete step-by-step guide to capture leads from Abetworks Tools to Google Sheets with email alerts.

---

## 📋 What You'll Get

✅ All form submissions automatically saved to Google Sheets  
✅ Email alerts for every new lead  
✅ Free & unlimited submissions  
✅ No backend required  

---

## Step 1: Create Google Sheet (2 minutes)

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ Create new spreadsheet** (or the + button)
3. Name it: `Abetworks Leads`
4. In **Row 1**, create these column headers:

| Cell | Header |
|------|--------|
| A1 | `Timestamp` |
| B1 | `Name` |
| C1 | `Email` |
| D1 | `Business Name` |
| E1 | `Service Interest` |
| F1 | `Tool Used` |

Your sheet should look like this:
```
| Timestamp | Name | Email | Business Name | Service Interest | Tool Used |
|-----------|------|-------|---------------|------------------|-----------|
|           |      |       |               |                  |           |
```

---

## Step 2: Add Google Apps Script (3 minutes)

1. In your Google Sheet, click **Extensions** → **Apps Script**

2. You'll see a code editor. **Delete all existing code**

3. **Copy and paste this entire code:**

```javascript
// Google Apps Script for Abetworks Lead Capture
// This script saves leads to Google Sheet and sends email alerts

var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var ALERT_EMAIL = 'baoxing100+tools@gmail.com'; // ← Lead alerts will go here

function doPost(e) {
  try {
    // Parse the incoming lead data
    var data = JSON.parse(e.postData.contents);
    
    // Add row to spreadsheet
    sheet.appendRow([
      new Date(data.timestamp),
      data.name,
      data.email,
      data.businessName || 'N/A',
      data.serviceInterest,
      data.toolUsed
    ]);
    
    // Send email alert
    sendEmailAlert(data);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Lead captured successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error
    Logger.log('Error capturing lead: ' + error.toString());
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      result: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailAlert(data) {
  try {
    var subject = '🎯 New Lead from Abetworks Tools - ' + data.name;
    
    var emailBody = `
╔═══════════════════════════════════════════════════════════╗
║  🎯 NEW LEAD FROM ABETWORKS TOOLS                        ║
╚═══════════════════════════════════════════════════════════╝

📋 LEAD DETAILS
───────────────────────────────────────────────────────────

👤 Name: ${data.name}
📧 Email: ${data.email}
🏢 Business: ${data.businessName || 'Not provided'}
🎯 Service Interest: ${data.serviceInterest}
🛠️  Tool Used: ${data.toolUsed}
📅 Timestamp: ${new Date(data.timestamp).toLocaleString()}

───────────────────────────────────────────────────────────

📊 VIEW IN SHEET:
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}

───────────────────────────────────────────────────────────

This is an automated alert from Abetworks Tools Lead Capture System.
    `;
    
    // Send email
    GmailApp.sendEmail(ALERT_EMAIL, subject, emailBody);
    
    Logger.log('Email alert sent to: ' + ALERT_EMAIL);
    
  } catch (error) {
    Logger.log('Error sending email alert: ' + error.toString());
    // Don't throw error - we still want to save the lead even if email fails
  }
}

// Test function - run this manually to test email alerts
function testEmailAlert() {
  var testData = {
    name: 'Test User',
    email: 'test@example.com',
    businessName: 'Test Business',
    serviceInterest: 'consulting',
    toolUsed: 'Test Tool',
    timestamp: new Date().toISOString()
  };
  
  sendEmailAlert(testData);
  Logger.log('Test email sent!');
}
```

4. **IMPORTANT**: Change this line to your email:
```javascript
var ALERT_EMAIL = 'baoxing100+tools@gmail.com';
```

**Pro Tip:** Using `baoxing100+tools@gmail.com` means:
- ✅ Emails arrive at `baoxing100@gmail.com`
- ✅ You can create Gmail filters for `+tools` to label/archive automatically
- ✅ Easy to track which service is sending emails
- ✅ If you get spam, you know which address was leaked

---

## Gmail Filter Setup (Optional - 2 minutes)

To automatically organize lead alerts:

1. Go to [Gmail](https://mail.google.com)
2. Click the **search box** → Click the **filter icon** (sliders)
3. In **To** field, type: `baoxing100+tools@gmail.com`
4. Click **Create filter**
5. Choose actions:
   - ✅ **Apply the label**: Create new label "🎯 Leads"
   - ✅ **Also apply filter to matching conversations**
   - ✅ **Never send to Spam**
6. Click **Create filter**

Now all lead alerts will:
- Get labeled automatically
- Skip inbox (if you choose "Skip Inbox")
- Never go to spam
- Be easily searchable

5. Click **Save** (💾 icon) or press `Ctrl+S`
6. Name the project: `Abetworks Lead Capture`

---

## Step 3: Deploy as Web App (3 minutes)

1. Click the blue **Deploy** button (top right)

2. Select **New deployment**

3. Click the **gear icon** ⚙️ next to "Select type"

4. Choose **Web app**

5. Fill in the form:
   - **Description**: `Abetworks Lead Capture v1`
   - **Execute as**: `Me` (your Google account)
   - **Who has access**: `Anyone` ⚠️ **(Very Important!)**

6. Click **Deploy**

7. Google will ask for permissions:
   - Click **Review permissions**
   - Select your Google account
   - Click **Advanced** → **Go to (project name) (unsafe)**
   - Click **Allow**

8. **Copy the Web app URL** - it looks like:
```
https://script.google.com/macros/s/AKfycbx.../exec
```

---

## Step 4: Add URL to Your Code (1 minute)

1. Open this file in your code editor:
```
C:\Users\vinayak\Desktop\99tools\abetworks-tools\src\components\LeadCaptureForm.tsx
```

2. Find this line (around line 34):
```typescript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

3. Replace with your Web app URL:
```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
```

4. Save the file

---

## Step 5: Test It! (2 minutes)

### Test the Google Script:
1. Go back to your Google Apps Script editor
2. Select the `testEmailAlert` function from the dropdown (top toolbar)
3. Click **Run** (▶️)
4. Check your email - you should receive a test alert!

### Test the Form:
1. Run your app: `npm run dev`
2. Go to any tool page (e.g., Business Name Generator)
3. Fill out the lead capture form
4. Submit
5. Check:
   - ✅ Your Google Sheet - new row added
   - ✅ Your email - alert received

---

## 🎉 You're Done!

Every time someone submits the lead form:
- ✅ Lead saved to Google Sheet instantly
- ✅ Email alert sent to you immediately
- ✅ Free & unlimited

---

## 📧 Customize Email Template

Want to change the email alert format? Edit the `sendEmailAlert` function in the Apps Script:

```javascript
function sendEmailAlert(data) {
  var subject = 'New Lead - ' + data.name;
  
  var emailBody = `
Name: ${data.name}
Email: ${data.email}
Business: ${data.businessName}
Service: ${data.serviceInterest}
Tool: ${data.toolUsed}
  `;
  
  GmailApp.sendEmail(ALERT_EMAIL, subject, emailBody);
}
```

---

## 🔧 Troubleshooting

### "Permission denied" error
- Make sure **Who has access** is set to **Anyone**
- Re-deploy the web app if you changed settings

### Not receiving emails
- Check your spam folder
- Verify `ALERT_EMAIL` is correct in the script
- Run `testEmailAlert` function manually to test

### Leads not appearing in sheet
- Check the Apps Script execution logs:
  - Click **Executions** (left sidebar in Apps Script)
  - Look for errors
- Make sure the Web app URL is correct in your code

### CORS error in browser console
- This is normal with `no-cors` mode
- The request still goes through
- Check your Google Sheet - lead should be there

---

## 📊 View Your Leads

### Access Google Sheet:
1. Go to [sheets.google.com](https://sheets.google.com)
2. Find `Abetworks Leads` spreadsheet
3. All leads appear in real-time

### Access Apps Script:
1. In Google Sheet: **Extensions** → **Apps Script**
2. View logs: **Executions** (left sidebar)
3. Edit code or email template as needed

---

## 📈 Advanced: Add More Data Fields

Want to capture more info? Add columns to your sheet and update the script:

### 1. Add columns to Google Sheet (Row 1):
```
G1: Phone
H1: Message
I1: Budget
```

### 2. Update the script:
```javascript
sheet.appendRow([
  new Date(data.timestamp),
  data.name,
  data.email,
  data.businessName || 'N/A',
  data.serviceInterest,
  data.toolUsed,
  data.phone || '',        // New field
  data.message || '',      // New field
  data.budget || ''        // New field
]);
```

### 3. Add fields to form (LeadCaptureForm.tsx):
```typescript
const [formData, setFormData] = useState({
  email: '',
  name: '',
  businessName: '',
  serviceInterest: 'general',
  phone: '',      // New field
  message: '',    // New field
  budget: ''      // New field
});
```

---

## 🔒 Privacy & Security

- ✅ All data transmitted over HTTPS
- ✅ Google Sheets encrypted at rest
- ✅ No third-party services
- ✅ You own all the data
- ✅ GDPR compliant (you control the data)

### Add Privacy Notice to Form:
Update the consent checkbox text:
```tsx
<label className="form-check-label small text-muted" htmlFor="leadConsent">
  I agree to receive communications from Abetworks. 
  Your data is stored securely in Google Sheets and never shared.
  See our <a href="/privacy">Privacy Policy</a>.
</label>
```

---

## 📝 Summary

| What | Where |
|------|-------|
| **Leads stored** | Google Sheet (`Abetworks Leads`) |
| **Email alerts** | Sent via GmailApp to your email |
| **Cost** | 100% Free, Unlimited |
| **Setup time** | ~10 minutes |
| **Maintenance** | None - fully automated |

---

**Questions?** Check the [Google Apps Script Documentation](https://developers.google.com/apps-script)

**Need help?** Review the Executions log in Apps Script for debugging.

---

Created: March 2026  
For: Abetworks Tools Lead Capture System
