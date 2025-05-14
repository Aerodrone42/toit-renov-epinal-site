
// Simple deployment script for GitHub Pages
const { execSync } = require('child_process');

try {
  // Run build
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Deploy using gh-pages
  console.log('Deploying to GitHub Pages...');
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });
  
  console.log('Successfully deployed to GitHub Pages!');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}
