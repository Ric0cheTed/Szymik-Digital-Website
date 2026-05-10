# Post-Live Checklist

Use this checklist after the latest Szymik Digital static export has been uploaded to Hostinger and the live domain is showing the correct site.

## Current Live Setup

- Live production domain: `https://szymikdigital.co.uk`
- Production host: Hostinger static hosting
- Source code: GitHub `main`
- Static build output: `/out`
- Preview/testing: Vercel only
- Do not share Vercel URLs publicly.

## Live URL Smoke Test

- [ ] `/`
- [ ] `/services/`
- [ ] `/work/`
- [ ] `/about/`
- [ ] `/contact/`
- [ ] `/privacy-policy/`
- [ ] `/terms/`
- [ ] `/sitemap.xml`
- [ ] `/robots.txt`
- [ ] Mobile check
- [ ] Contact form mailto check
- [ ] Footer/header CTA check

## Vercel Separation Checklist

- [ ] Vercel remains preview/testing only.
- [ ] Production custom domain should not remain attached to Vercel if Hostinger is production.
- [ ] Do not publicly share `vercel.app` URLs.
- [ ] If using Vercel preview URLs, keep them for internal testing only.

## Canonical And Domain Checks

- [ ] Preferred live domain is `https://szymikdigital.co.uk`.
- [ ] Check page canonical URLs point to the preferred live domain.
- [ ] Check `www` behaviour.
- [ ] If possible, redirect `www` to the preferred non-www domain through Hostinger/hPanel.
- [ ] Avoid having multiple public versions competing.

## Google Search Console Checklist

- [x] Add/verify domain property for `szymikdigital.co.uk`.
- [x] Submit `https://szymikdigital.co.uk/sitemap.xml`.
- [ ] Use URL Inspection for `/`.
- [ ] Use URL Inspection for `/services/`.
- [ ] Use URL Inspection for `/work/`.
- [ ] Use URL Inspection for `/about/`.
- [ ] Use URL Inspection for `/contact/`.
- [ ] Monitor indexing and sitemap processing.

## Google Analytics Checklist

- [ ] Confirm GA4 Measurement ID is `G-VE1LWXJTKS`.
- [ ] Deploy analytics through the normal repo build/export/upload workflow.
- [ ] Open the live site in a clean browser or private window.
- [ ] Confirm analytics does not load before consent is accepted.
- [ ] Accept analytics and check GA Realtime.
- [ ] Decline analytics in another clean session and confirm GA does not load.
- [ ] Use the footer Cookie settings link to reopen the choice.

## Social And Profile Update Checklist

- [ ] Facebook page website link
- [ ] LinkedIn profile/company details
- [ ] Google Business Profile website link
- [ ] Email signatures
- [ ] Any launch posts
- [ ] Any client showcase posts

## Ongoing Update Workflow

1. Make changes locally.
2. Branch/PR if needed.
3. Merge to `main`.
4. Run `npm run build`.
5. Upload the contents of `/out` to Hostinger `public_html`.
6. Do not upload the `/out` folder itself.
7. Retest the live site after upload.
8. For analytics changes, accept analytics on the live site and verify GA Realtime.
