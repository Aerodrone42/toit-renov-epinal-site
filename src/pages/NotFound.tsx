
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, AlertTriangle } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log détaillé pour le débogage
    console.error(
      "404 Error: Page non trouvée:",
      location.pathname
    );
    
    // Notification pour l'utilisateur
    toast.error("Page non trouvée", {
      description: `La page "${location.pathname}" n'existe pas ou a été déplacée.`,
      duration: 5000,
    });
    
    // Analyse de l'URL pour suggestions intelligentes
    let suggestion = "";
    const path = location.pathname.toLowerCase();
    
    if (path.includes('service') && !path.includes('services')) {
      suggestion = "services";
      console.log("L'utilisateur cherche peut-être une page de services");
    } else if (path.includes('zone') && !path.includes('zones')) {
      suggestion = "zones-intervention";
      console.log("L'utilisateur cherche peut-être une page de zones");
    }
    
    // Enregistrement de l'erreur 404 pour analyse
    const logData = {
      timestamp: new Date().toISOString(),
      path: location.pathname,
      referrer: document.referrer || "direct",
      userAgent: navigator.userAgent
    };
    
    console.log("Détails de l'erreur 404:", JSON.stringify(logData));
    
    // On pourrait envoyer ces données à un service d'analyse
    
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-20">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle size={40} className="text-red-600" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">404</h1>
        <p className="text-xl text-center font-medium mb-6 text-gray-700">Page non trouvée</p>
        
        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-8">
          <p className="text-gray-700">
            La page <span className="font-mono bg-gray-200 px-2 py-1 rounded text-sm">{location.pathname}</span> n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 w-full flex items-center gap-2"
            >
              <Home size={18} />
              Page d'accueil
            </Button>
          </Link>
          
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="w-full flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Page précédente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
