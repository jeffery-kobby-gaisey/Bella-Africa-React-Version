# Hostinger Deployment Guide for Bella Africa

## Prerequisites
- Hostinger hosting account
- FTP/SFTP access credentials
- Domain name configured

## Deployment Steps

### 1. Build the Static Site
The site has already been built. The static files are in the `out` folder.

```bash
npm run build
```

### 2. Upload Files to Hostinger

#### Option A: Using File Manager (Recommended for beginners)
1. Log in to your Hostinger control panel (hPanel)
2. Go to **Files** → **File Manager**
3. Navigate to `public_html` folder
4. Delete all existing files in `public_html` (if any)
5. Upload ALL files from the `out` folder to `public_html`
6. Upload the `.htaccess` file to `public_html`

#### Option B: Using FTP/SFTP
1. Connect to your Hostinger account using an FTP client (FileZilla, Cyberduck, etc.)
   - Host: Your domain or FTP hostname
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

2. Navigate to the `public_html` directory
3. Upload ALL contents from the `out` folder
4. Upload the `.htaccess` file

### 3. File Structure on Hostinger
After upload, your `public_html` should look like this:
```
public_html/
├── .htaccess
├── index.html
├── about.html
├── contact.html
├── donate.html
├── gallery.html
├── projects.html
├── services.html
├── _next/
├── favicon.ico
└── ... (other files)
```

### 4. Configure Domain (if needed)
1. In hPanel, go to **Domains**
2. Point your domain to the `public_html` folder
3. Wait for DNS propagation (can take up to 24-48 hours)

### 5. Enable SSL Certificate
1. In hPanel, go to **SSL**
2. Enable free SSL certificate for your domain
3. Wait a few minutes for activation

### 6. Test Your Site
Visit your domain in a browser:
- `https://yourdomain.com`
- Check all pages work correctly
- Test navigation between pages
- Verify images load properly

## Important Notes

### Cache Control
The `.htaccess` file includes cache control headers to prevent browser caching. This ensures visitors always see the latest version.

### HTTPS Redirect
The `.htaccess` file automatically redirects HTTP to HTTPS for security.

### Client-Side Routing
The `.htaccess` handles client-side routing so direct URL access works properly.

## Updating Your Site

When you make changes:
1. Run `npm run build` locally
2. Upload the new contents of the `out` folder to `public_html`
3. Clear your browser cache to see changes

## Troubleshooting

### Images not loading
- Ensure all files from `public` folder are uploaded
- Check file permissions (should be 644 for files, 755 for folders)

### Pages show 404 error
- Verify `.htaccess` file is uploaded
- Check that all HTML files are in `public_html`

### Site not updating
- Clear browser cache (Ctrl+Shift+Delete)
- Clear Hostinger cache in hPanel
- Wait a few minutes for changes to propagate

### SSL not working
- Wait up to 24 hours for SSL activation
- Ensure domain DNS is properly configured
- Contact Hostinger support if issues persist

## Support
- Hostinger Support: https://www.hostinger.com/contact
- Hostinger Knowledge Base: https://support.hostinger.com

## Site Information
- **Site Name**: Bella Africa
- **Framework**: Next.js (Static Export)
- **Build Output**: `out` folder
- **Total Size**: ~10MB (optimized images)
