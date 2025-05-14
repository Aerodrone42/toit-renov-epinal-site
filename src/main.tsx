
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// This script handles redirects for GitHub Pages when using React Router
// It's needed because GitHub Pages doesn't support client-side routing natively
(function() {
  // If returning to the site after a redirect for SPA routing,
  // remove the redirect parameters from the URL
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  
  if (redirect && redirect !== window.location.href) {
    window.history.replaceState(null, '', redirect);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
