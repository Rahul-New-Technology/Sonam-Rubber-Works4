/**
 * Sonam Rubber Works — Website Enquiry → Google Sheet
 *
 * Copy this entire file into a Google Apps Script project bound to your
 * Google Sheet (or create a standalone script and give it the sheet ID).
 *
 * Setup steps:
 * 1. Create a Google Sheet titled "Sonam Rubber Works — Enquiries".
 * 2. Add a first tab named exactly "Enquiries" with a header row:
 *    Date & Time | Full Name | Company | Phone | Email | Product | Quantity | Message | Source
 * 3. Extensions → Apps Script → paste this file and save.
 * 4. Deploy → New deployment → type = Web app.
 *    - Description: sonam-enquiry
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL and paste it into your frontend env:
 *       REACT_APP_SHEETS_URL=https://script.google.com/macros/s/XXXX/exec
 * 6. Rebuild the frontend (yarn build) and redeploy.
 *
 * The Web App accepts POST with a JSON body (content-type text/plain to
 * avoid a CORS preflight). Any GET returns a health-check message.
 */

function doPost(e) {
  try {
    var body = {};
    if (e && e.postData && e.postData.contents) {
      try { body = JSON.parse(e.postData.contents); }
      catch (_) { body = e.parameter || {}; }
    } else if (e && e.parameter) {
      body = e.parameter;
    }

    var ss = SpreadsheetApp.getActive();
    var sh = ss.getSheetByName('Enquiries') || ss.getSheets()[0];

    sh.appendRow([
      new Date(),
      String(body.name || '').slice(0, 200),
      String(body.company || '').slice(0, 200),
      String(body.phone || '').slice(0, 60),
      String(body.email || '').slice(0, 200),
      String(body.product || '').slice(0, 400),
      String(body.quantity || '').slice(0, 120),
      String(body.message || '').slice(0, 4000),
      String(body.source || 'website'),
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: 'Sonam Rubber Works enquiry endpoint' }))
    .setMimeType(ContentService.MimeType.JSON);
}
