# Hostinger Static Deployment

This project is configured for a static Next.js export so the generated `out` contents can be uploaded to Hostinger hosting.

## Build Locally

1. Install dependencies if needed:

   ```bash
   npm install
   ```

2. Build the static export:

   ```bash
   npm run build
   ```

3. Confirm the `out` folder exists after the build.

## Upload To Hostinger

1. Open Hostinger file manager or connect by FTP/SFTP.
2. Go to the site's `public_html` folder.
3. Upload the contents of `out` into `public_html`.

Important: upload the contents of `out`, not the `out` folder itself.

## After Upload

1. Test `https://szymikdigital.co.uk`.
2. Check the main pages:
   - `/`
   - `/services/`
   - `/work/`
   - `/about/`
   - `/contact/`
   - `/privacy-policy/`
   - `/terms/`
3. Check `https://szymikdigital.co.uk/sitemap.xml`.
4. Check `https://szymikdigital.co.uk/robots.txt`.
5. Submit the sitemap in Google Search Console after the live check passes.

## Source Of Truth

Keep GitHub as the source of truth. After future changes, rebuild with `npm run build` and re-upload the latest contents of `out`.
