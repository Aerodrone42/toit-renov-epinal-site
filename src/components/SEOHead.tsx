
import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title,
  description,
  keywords,
  canonicalUrl
}) => {
  useEffect(() => {
    // Mettre à jour le titre de la page
    document.title = `${title} | RÉNOVATION TECHNI TOIT`;
    
    // Mettre à jour les méta-descriptions
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.setAttribute('name', 'description');
      newMetaDescription.setAttribute('content', description);
      document.head.appendChild(newMetaDescription);
    }
    
    // Mettre à jour les méta-keywords si fournis
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const newMetaKeywords = document.createElement('meta');
        newMetaKeywords.setAttribute('name', 'keywords');
        newMetaKeywords.setAttribute('content', keywords);
        document.head.appendChild(newMetaKeywords);
      }
    }
    
    // Mettre à jour les balises OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | RÉNOVATION TECHNI TOIT`);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      const canonicalPath = canonicalUrl || window.location.pathname;
      const fullUrl = `https://renovationtechnitoit.fr${canonicalPath}`;
      ogUrl.setAttribute('content', fullUrl);
    }
    
    // Ajouter/mettre à jour le lien canonique
    const canonicalPath = canonicalUrl || window.location.pathname;
    const fullCanonicalUrl = `https://renovationtechnitoit.fr${canonicalPath}`;
    
    let link = document.querySelector('link[rel="canonical"]');
    
    if (link) {
      link.setAttribute('href', fullCanonicalUrl);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', fullCanonicalUrl);
      document.head.appendChild(link);
    }
    
    // Nettoyage
    return () => {
      // Rien à nettoyer ici car nous voulons que les métadonnées persistent
    };
  }, [title, description, keywords, canonicalUrl]);
  
  return null; // Ce composant ne rend rien visuellement
};

export default SEOHead;
