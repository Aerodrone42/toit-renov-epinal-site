
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setTimeout(() => {
        setShowConsent(true);
      }, 1000); // Show banner after 1 second
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    setShowConsent(false);
  };

  const declineAll = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white z-50 shadow-lg border-t border-gray-200">
      <div className="container-custom py-4 md:py-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold">Nous respectons votre vie privée</h3>
          <button 
            onClick={() => setShowConsent(false)} 
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">
          Ce site utilise des cookies pour vous offrir la meilleure expérience possible. 
          Nous utilisons des cookies techniques essentiels au fonctionnement du site 
          et, avec votre consentement, des cookies d'analyse pour comprendre comment vous interagissez avec notre site.
        </p>
        
        <p className="text-gray-600 mb-6">
          Pour en savoir plus sur les cookies que nous utilisons, veuillez consulter notre{" "}
          <Link to="/politique-confidentialite" className="text-roofing-red hover:underline">
            politique de confidentialité
          </Link>.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button 
            variant="outline" 
            className="border-gray-300"
            onClick={declineAll}
          >
            Tout refuser
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-300"
            onClick={acceptEssential}
          >
            Accepter l'essentiel
          </Button>
          <Button 
            className="bg-roofing-red hover:bg-roofing-red/90"
            onClick={acceptAll}
          >
            Tout accepter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
