
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Page non trouvée:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Page non trouvée</p>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button 
          onClick={() => window.location.href = "/#/"}
          className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
