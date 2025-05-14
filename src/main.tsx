
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// This script handles redirects for GitHub Pages when using React Router
// It's needed because GitHub Pages doesn't support client-side routing natively
(function() {
  // Single Page Apps for GitHub Pages - redirect script
  const redirectRegex = /\?\/([^&]*)/;
  const match = window.location.search.match(redirectRegex);
  
  if (match && match.length > 1) {
    const pathname = match[1];
    const searchAndHash = window.location.search.replace(redirectRegex, '') + window.location.hash;
    
    // Replace current URL with the decoded path
    window.history.replaceState(null, '', 
      '/' + pathname + searchAndHash
    );
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
