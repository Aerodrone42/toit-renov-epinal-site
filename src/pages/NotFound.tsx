
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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
    
    // Analyse de l'URL pour suggérer une page similaire
    const path = location.pathname;
    if (path.includes('service') && !path.includes('services')) {
      console.log("L'utilisateur cherche peut-être une page de services");
    } else if (path.includes('zone') && !path.includes('zones')) {
      console.log("L'utilisateur cherche peut-être une page de zones");
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Page non trouvée</p>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez ({location.pathname}) n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.location.href = "/"}
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Button>
          
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="flex items-center gap-2"
          >
            Retourner à la page précédente
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
