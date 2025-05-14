
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Amélioration du script de redirection pour gérer tous les cas possibles
(function() {
  // Single Page Apps for GitHub Pages - redirect script
  const redirectRegex = /\?\/([^&]*)/;
  const match = window.location.search.match(redirectRegex);
  
  if (match && match.length > 1) {
    const pathname = match[1];
    const searchAndHash = window.location.search.replace(redirectRegex, '') + window.location.hash;
    
    // Log pour débogage
    console.log("Redirection depuis le main.tsx - URL d'origine:", window.location.href);
    console.log("Redirection vers:", '/' + pathname + searchAndHash);
    
    // Replace current URL with the decoded path
    window.history.replaceState(null, '', 
      '/' + pathname + searchAndHash
    );
  }

  // Intercepte les erreurs 404 et les enregistre pour débogage
  window.addEventListener('error', function(e) {
    console.error('Erreur détectée:', e.message);
    if (e.message.includes('404') || e.message.includes('Not Found')) {
      console.error('Erreur 404 détectée pour:', window.location.pathname);
    }
  });
})();

createRoot(document.getElementById("root")!).render(<App />);
