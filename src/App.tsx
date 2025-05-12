
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import NotFound from "./pages/NotFound";
import CallButton from "./components/CallButton";

// Pages de service
import DemoussageToiture from "./pages/services/DemoussageToiture";
import PeintureBoiserie from "./pages/services/PeintureBoiserie";
import RavalementFacade from "./pages/services/RavalementFacade";
import RenovationToiture from "./pages/services/RenovationToiture";
import ChangementToiture from "./pages/services/ChangementToiture";
import NettoyageCheneau from "./pages/services/NettoyageCheneau";
import ReparationsDiverses from "./pages/services/ReparationsDiverses";
import Charpente from "./pages/services/Charpente";
import DessousDeToit from "./pages/services/DessousDeToit";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CallButton /> {/* Ajout du bouton d'appel flottant */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisations" element={<Realisations />} />
          
          {/* Routes des services */}
          <Route path="/services/demoussage-nettoyage-toiture" element={<DemoussageToiture />} />
          <Route path="/services/peinture-boiserie" element={<PeintureBoiserie />} />
          <Route path="/services/ravalement-facade" element={<RavalementFacade />} />
          <Route path="/services/renovation-toiture" element={<RenovationToiture />} />
          <Route path="/services/changement-toiture" element={<ChangementToiture />} />
          <Route path="/services/nettoyage-cheneau" element={<NettoyageCheneau />} />
          <Route path="/services/reparations-diverses" element={<ReparationsDiverses />} />
          <Route path="/services/charpente" element={<Charpente />} />
          <Route path="/services/dessous-de-toit" element={<DessousDeToit />} />
          
          {/* Catch-all route pour les pages non trouvées */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
