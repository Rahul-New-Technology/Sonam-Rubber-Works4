# Sonam Rubber Works Website

This is a static React website for Sonam Rubber Works, prepared for deployment on Cloudflare Pages.

## What is included

- `frontend/`: the full website source
- `frontend/build/`: production build output after running `yarn build`
- `scripts/google_sheets_apps_script.gs`: Google Apps Script for saving enquiry form submissions into your Google Sheet
- `DEPLOY_STATIC.md`: simple deployment guide for Google Sheets + Cloudflare Pages

## What was removed

- No backend server is required
- No database is required
- Enquiries are sent directly from the website to your Google Sheet

## Local development

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

The final static files are generated in `frontend/build/`.

## Google Sheets setup

1. Create a Google Sheet for enquiries.
2. Open `scripts/google_sheets_apps_script.gs`.
3. Paste that code into Google Apps Script.
4. Deploy it as a Web App.
5. Put the Web App URL into `frontend/.env`:

```env
REACT_APP_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

6. Rebuild and deploy the site.
