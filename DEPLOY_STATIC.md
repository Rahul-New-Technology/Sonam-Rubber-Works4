# Deploying on Cloudflare Pages

This project is a static React website. It does not need any backend server. The enquiry form submits directly to your Google Sheet through Google Apps Script.

## Google Sheet setup

1. Create a new Google Sheet named `Sonam Rubber Works - Enquiries`.
2. Rename the first sheet tab to `Enquiries`.
3. Add this header row:

```text
Date & Time | Full Name | Company | Phone | Email | Product | Quantity | Message | Source
```

4. Open `scripts/google_sheets_apps_script.gs`.
5. In Google Sheets, go to `Extensions -> Apps Script`.
6. Paste the script and save it.
7. Deploy it as a Web App:
   - Execute as: `Me`
   - Who has access: `Anyone`
8. Copy the deployed Web App URL.

## Frontend environment

Create `frontend/.env` with:

```env
REACT_APP_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

If this variable is missing, the form falls back to WhatsApp so you still do not lose leads.

## Local run

```bash
cd frontend
yarn install
yarn start
```

## Production build

```bash
cd frontend
yarn build
```

The deployable static output is generated in `frontend/build/`.

## Cloudflare Pages settings

Use these settings when creating the Cloudflare Pages project:

- Framework preset: `Create React App`
- Build command: `yarn build`
- Build output directory: `build`
- Root directory: `frontend`

If you prefer, you can also build locally and upload the contents of `frontend/build/`.

## Routing

This project already includes `frontend/public/_redirects` with:

```text
/*    /index.html   200
```

That keeps React Router pages working after deployment.

## Final check

1. Open the deployed website.
2. Submit the enquiry form.
3. Confirm the new row appears in your Google Sheet.
4. Test a direct page URL like `/products/rubber-gaskets` to confirm routing works.
