
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fonction de gestion avancée des redirections pour SPA
(function() {
  // Débogage initial
  console.log("URL actuelle:", window.location.href);
  console.log("Pathname:", window.location.pathname);
  console.log("Search:", window.location.search);
  console.log("Hash:", window.location.hash);
  
  // Gestion des redirections en provenance de 404.html (paramètre route)
  const urlParams = new URLSearchParams(window.location.search);
  const routeParam = urlParams.get('route');
  
  if (routeParam) {
    console.log("Paramètre route détecté:", routeParam);
    
    // Construire la nouvelle URL sans le paramètre route
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete('route');
    
    // Définir le nouveau chemin
    newUrl.pathname = routeParam;
    
    console.log("Redirection vers:", newUrl.toString());
    window.history.replaceState(null, '', newUrl.toString());
  }
  
  // Cas 1: Si nous sommes sur GitHub Pages et avons un hash qui contient un chemin
  if (window.location.hash && window.location.hash.length > 1) {
    const path = window.location.hash.substring(1);
    console.log("Hash détecté. Chemin:", path);
    
    // Ne pas appliquer de redirection si nous sommes déjà sur une page avec ancre légitime
    if (!path.startsWith('/') && !path.startsWith('#')) {
      console.log("Ancre légitime, pas de redirection");
    } else {
      console.log("Redirection depuis le hash détectée. Chemin:", path);
      window.history.replaceState(null, '', path);
      console.log("URL après redirection:", window.location.href);
    }
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
