# GitHub Actions Deployment Setup

This repository includes GitHub Actions workflows to automatically build and deploy your Astro blog to an FTP server.

## Available Workflows

### 1. `deploy.yml` - Simple Deployment
- Builds the site on every push to `main`
- Deploys directly to FTP server
- Lightweight and straightforward

### 2. `deploy-advanced.yml` - Advanced Deployment
- Separates build and deploy jobs
- Includes optional linting and testing
- Only deploys on pushes to `main` branch
- Provides better logging and error handling
- Supports manual workflow trigger

## Setup Instructions

### 1. Configure Repository Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, then add these secrets:

- `FTP_SERVER`: Your FTP server hostname (e.g., `ftp.yourhost.com`)
- `FTP_USERNAME`: Your FTP username
- `FTP_PASSWORD`: Your FTP password

### 2. Verify Build Script

Make sure your `package.json` has a build script:

```json
{
  "scripts": {
    "build": "astro build"
  }
}
```

### 3. FTP Directory Structure

The workflow assumes your FTP server has a `public_html` directory where your website files should be deployed. If your hosting provider uses a different directory (like `www`, `htdocs`, or `public`), update the `server-dir` setting in the workflow file:

```yaml
server-dir: ./www/  # Change this to match your hosting provider
```

## How It Works

1. **Trigger**: The workflow runs when you push to the `main` branch
2. **Build**: 
   - Checks out your code
   - Sets up Node.js
   - Installs dependencies with `npm ci`
   - Builds the site with `npm run build`
3. **Deploy**: 
   - Uploads the `dist/` folder contents to your FTP server's `public_html` directory
   - Excludes unnecessary files (git files, node_modules, etc.)

## Manual Deployment

For the advanced workflow, you can also trigger deployment manually:

1. Go to Actions tab in your GitHub repository
2. Select "Build and Deploy to FTP (Advanced)"
3. Click "Run workflow"
4. Choose the branch and click "Run workflow"

## Troubleshooting

### Common Issues

1. **FTP Connection Failed**: Double-check your FTP credentials and server hostname
2. **Build Failed**: Check if all dependencies are listed in `package.json`
3. **Permission Denied**: Ensure your FTP user has write permissions to the target directory

### Debugging

- Check the Actions tab in your repository for detailed logs
- The advanced workflow includes verbose logging for the FTP deployment step
- Test your FTP credentials manually before setting up the workflow

## Security Notes

- Never commit FTP credentials to your repository
- Use GitHub Secrets to store sensitive information
- Consider using SFTP instead of FTP if your hosting provider supports it
- Regularly rotate your FTP passwords

## Customization

You can modify the workflows to:
- Change the trigger conditions (e.g., deploy from different branches)
- Add additional build steps (testing, linting)
- Deploy to multiple servers
- Add Slack/Discord notifications
- Cache dependencies for faster builds
