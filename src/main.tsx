
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fonction de gestion avancée des redirections pour SPA
(function() {
  // Débogage initial
  console.log("URL actuelle:", window.location.href);
  console.log("Pathname:", window.location.pathname);
  console.log("Hash:", window.location.hash);
  
  // Cas 1: Si nous sommes sur GitHub Pages et avons un hash qui contient un chemin
  if (window.location.hash && window.location.hash.length > 1) {
    const path = window.location.hash.substring(1);
    console.log("Hash détecté. Chemin:", path);
    
    // Ne pas appliquer de redirection si nous sommes déjà sur une page avec ancre légitime
    if (!path.startsWith('/') && !path.startsWith('#')) {
      console.log("Ancre légitime, pas de redirection");
    } else {
      console.log("Redirection depuis 404.html détectée. Chemin:", path);
      window.history.replaceState(null, '', path);
      console.log("URL après redirection:", window.location.href);
    }
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
})();

createRoot(document.getElementById("root")!).render(<App />);
