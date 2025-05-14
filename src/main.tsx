
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fonction de gestion spéciale pour GitHub Pages
(function() {
  // Débogage initial
  console.log("URL actuelle:", window.location.href);
  
  // Gestion des redirections en provenance de 404.html (paramètre route)
  const urlParams = new URLSearchParams(window.location.search);
  const routeParam = urlParams.get('route');
  
  if (routeParam) {
    console.log("Paramètre route détecté:", routeParam);
    
    // Construire la nouvelle URL sans le paramètre route et rediriger
    window.history.replaceState(null, '', routeParam);
    
    console.log("Redirection vers:", routeParam);
  }

  // Gestion des URL canoniques pour SEO
  if (window.location.pathname.endsWith('/') && window.location.pathname.length > 1) {
    // Supprime le slash final pour normaliser les URL
    const normalizedPath = window.location.pathname.slice(0, -1);
    window.history.replaceState(null, '', normalizedPath + window.location.search + window.location.hash);
    console.log("URL normalisée:", window.location.href);
  }
  
  // Correction pour www vs non-www (important pour le SEO)
  const hostname = window.location.hostname;
  if (hostname.startsWith('www.renovationtechnitoit.fr')) {
    const newUrl = window.location.href.replace('www.renovationtechnitoit.fr', 'renovationtechnitoit.fr');
    window.location.replace(newUrl);
    console.log("Redirection www vers non-www:", newUrl);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
