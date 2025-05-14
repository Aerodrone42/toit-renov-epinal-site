
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fonction de gestion avancée des redirections pour SPA
(function() {
  // Débogage initial
  console.log("URL actuelle:", window.location.href);
  console.log("Pathname:", window.location.pathname);
  console.log("Hash:", window.location.hash);
  
  // Cas 1: Redirection depuis 404.html (hash contient le chemin)
  if (window.location.hash && window.location.hash.startsWith("#/")) {
    const path = window.location.hash.substring(1);
    console.log("Redirection depuis 404.html détectée. Chemin:", path);
    window.history.replaceState(null, '', path);
    console.log("URL après redirection:", window.location.href);
  }
  
  // Cas 2: Redirection depuis ?/ (méthode GitHub Pages)
  const redirectRegex = /\?\/([^&]*)/;
  const match = window.location.search.match(redirectRegex);
  if (match && match.length > 1) {
    const pathname = match[1];
    const searchAndHash = window.location.search.replace(redirectRegex, '') + window.location.hash;
    
    console.log("Redirection SPA - URL d'origine:", window.location.href);
    console.log("Redirection vers:", '/' + pathname + searchAndHash);
    
    window.history.replaceState(null, '', 
      '/' + pathname + searchAndHash
    );
  }
  
  // Gestion des URL canoniques pour SEO
  if (window.location.pathname.endsWith('/') && window.location.pathname.length > 1) {
    // Supprime le slash final pour normaliser les URL (meilleur pour SEO)
    const normalizedPath = window.location.pathname.slice(0, -1);
    window.history.replaceState(null, '', normalizedPath + window.location.search + window.location.hash);
    console.log("URL normalisée (slash final supprimé):", window.location.href);
  }
  
  // Log pour monitoring des erreurs 404
  window.addEventListener('error', function(e) {
    console.error('Erreur détectée:', e.message);
    if (e.message.includes('404') || e.message.includes('Not Found')) {
      console.error('Erreur 404 détectée pour:', window.location.pathname);
    }
  });
})();

createRoot(document.getElementById("root")!).render(<App />);
