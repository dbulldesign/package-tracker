# TRACK — GitHub Pages Setup Guide

Follow these steps to host your package tracker on GitHub Pages so you can
access it on your iPhone, computer, or any device.

---

## Step 1 — Create a free GitHub account
If you don't have one, go to https://github.com and sign up.
It's free. Use any email address.

---

## Step 2 — Create a new repository

1. Click the **+** icon in the top-right corner of GitHub
2. Click **New repository**
3. Name it: `package-tracker` (or anything you like)
4. Set visibility to **Public** ← required for free GitHub Pages
5. Check **"Add a README file"**
6. Click **Create repository**

---

## Step 3 — Upload your files

You need to upload these 5 files into the repository:

| File                  | What it is                          |
|-----------------------|-------------------------------------|
| `package-tracker.html`| Rename this to **`index.html`**     |
| `manifest.json`       | PWA manifest                        |
| `sw.js`               | Service worker (offline support)    |
| `icon.svg`            | App icon                            |

**How to upload:**
1. In your repository, click **"Add file"** → **"Upload files"**
2. Drag all 4 files into the upload area
   - ⚠️ Rename `package-tracker.html` → `index.html` before uploading
3. Click **"Commit changes"**

---

## Step 4 — Enable GitHub Pages

1. In your repository, click **Settings** (top tab)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Branch"**, select **main** and **/ (root)**
4. Click **Save**

GitHub will show a message: *"Your site is being published..."*
Wait about 60 seconds, then your URL will appear:

```
https://YOUR-USERNAME.github.io/package-tracker/
```

---

## Step 5 — Open on iPhone & add to Home Screen

1. Open **Safari** on your iPhone (must be Safari, not Chrome)
2. Go to your GitHub Pages URL
3. Tap the **Share** button (the box with an arrow pointing up)
4. Scroll down and tap **"Add to Home Screen"**
5. Name it **TRACK** and tap **Add**

The app icon will appear on your Home Screen just like a real app.
Tap it — it opens full screen with no browser bar. ✓

---

## Step 6 — Keep Google Sheets sync working

Your Google Sheets sync URL is saved in your browser's localStorage.
When you open the app on a **new device** (like your iPhone) for the
first time, you'll need to re-enter it:

1. Open the app on your iPhone
2. Tap **⚙ Setup Sync**
3. Paste your Google Apps Script Web App URL
4. Tap **Save URL**
5. Tap **↓ Load from Sheet** to pull all your packages

After that, any changes you make on your iPhone or computer will
automatically sync to your Google Sheet within 2 seconds.

---

## Updating the app in the future

If you download an updated version of the tracker:
1. Rename it to `index.html`
2. Go to your GitHub repository
3. Click on `index.html` → click the **pencil** edit icon → scroll down → or use "Upload files" to replace it
4. Commit the change
5. Wait ~60 seconds for GitHub Pages to rebuild

---

## Your URLs at a glance

| What                  | Where                                                      |
|-----------------------|------------------------------------------------------------|
| Live app              | `https://YOUR-USERNAME.github.io/package-tracker/`         |
| GitHub repository     | `https://github.com/YOUR-USERNAME/package-tracker`         |
| Google Sheet          | Your Google Drive                                          |
| Apps Script           | Extensions → Apps Script inside your Google Sheet          |

---

## Troubleshooting

**"404 Not Found" on GitHub Pages**
→ Make sure the file is named exactly `index.html` (not `package-tracker.html`)

**App doesn't update after I upload a new version**
→ Hard refresh: on iPhone, hold the reload button → "Reload Without Content Blockers",
  or clear website data in Safari Settings

**Sync not working on iPhone**
→ Re-enter the Google Apps Script URL in ⚙ Setup Sync — localStorage doesn't transfer between devices

**App doesn't go full screen**
→ Must be added via Safari's "Add to Home Screen", not Chrome's

---

*Questions? The app stores all data locally in localStorage per device,
with Google Sheets as the shared cloud backup between devices.*
