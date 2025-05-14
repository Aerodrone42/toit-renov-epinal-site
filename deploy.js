
// Simple deployment script for GitHub Pages
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Run build
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Make sure the dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  
  // Copy necessary files
  console.log('Copying necessary files...');
  
  // Copy 404.html
  if (fs.existsSync('public/404.html')) {
    fs.copyFileSync('public/404.html', 'dist/404.html');
    console.log('Copied 404.html');
  }
  
  // Copy CNAME
  if (fs.existsSync('public/CNAME')) {
    fs.copyFileSync('public/CNAME', 'dist/CNAME');
    console.log('Copied CNAME');
  } else if (fs.existsSync('CNAME')) {
    fs.copyFileSync('CNAME', 'dist/CNAME');
    console.log('Copied root CNAME');
  }
  
  // Copy robots.txt
  if (fs.existsSync('public/robots.txt')) {
    fs.copyFileSync('public/robots.txt', 'dist/robots.txt');
    console.log('Copied robots.txt');
  }
  
  // Copy _redirects
  if (fs.existsSync('public/_redirects')) {
    fs.copyFileSync('public/_redirects', 'dist/_redirects');
    console.log('Copied _redirects');
  }
  
  // Copy lovable-uploads directory
  const uploadsSource = path.join('public', 'lovable-uploads');
  const uploadsTarget = path.join('dist', 'lovable-uploads');
  if (fs.existsSync(uploadsSource) && fs.lstatSync(uploadsSource).isDirectory()) {
    if (!fs.existsSync(uploadsTarget)) {
      fs.mkdirSync(uploadsTarget, { recursive: true });
    }
    
    // Copy each file in the uploads directory
    const files = fs.readdirSync(uploadsSource);
    files.forEach(file => {
      const srcPath = path.join(uploadsSource, file);
      const destPath = path.join(uploadsTarget, file);
      fs.copyFileSync(srcPath, destPath);
    });
    console.log('Copied lovable-uploads directory');
  }
  
  // Deploy using gh-pages
  console.log('Deploying to GitHub Pages...');
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });
  
  console.log('Successfully deployed to GitHub Pages!');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}
