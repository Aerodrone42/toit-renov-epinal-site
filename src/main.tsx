
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fonction de gestion simplifiée et optimisée
const optimizeUrl = () => {
  // Supprime le slash final pour normaliser les URL
  if (window.location.pathname.endsWith('/') && window.location.pathname.length > 1) {
    const normalizedPath = window.location.pathname.slice(0, -1);
    window.history.replaceState(null, '', normalizedPath + window.location.search + window.location.hash);
  }
  
  // Correction pour www vs non-www (important pour le SEO)
  const hostname = window.location.hostname;
  if (hostname.startsWith('www.renovationtechnitoit.fr')) {
    window.location.replace(
      window.location.href.replace('www.renovationtechnitoit.fr', 'renovationtechnitoit.fr')
    );
    return false;
  }
  
  return true;
};

// Exécuter les optimisations d'URL uniquement si nécessaire
if (optimizeUrl()) {
  // Rendu immédiat de l'application si aucune redirection n'est nécessaire
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
}
