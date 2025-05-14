
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import ZonesIntervention from "./pages/ZonesIntervention";
import NotFound from "./pages/NotFound";
import CallButton from "./components/CallButton";
import Realisations from "./pages/Realisations";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CookieConsent from "./components/CookieConsent";

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

// Pages des villes
import Epinal from "./pages/cities/Epinal";
import ThaonLesVosges from "./pages/cities/ThaonLesVosges";
import Remiremont from "./pages/cities/Remiremont";
import Mirecourt from "./pages/cities/Mirecourt";
import SaintDieDesVosges from "./pages/cities/SaintDieDesVosges";
import Charmes from "./pages/cities/Charmes";
import Golbey from "./pages/cities/Golbey";
import Gerardmer from "./pages/cities/Gerardmer";
import SaintEtienneLesRemiremont from "./pages/cities/SaintEtienneLesRemiremont";
import LeValDAjol from "./pages/cities/LeValDAjol";
import Neufchateau from "./pages/cities/Neufchateau";
import Vittel from "./pages/cities/Vittel";
import Dompaire from "./pages/cities/Dompaire";
import Rambervillers from "./pages/cities/Rambervillers";
import RaonLEtape from "./pages/cities/RaonLEtape";
import Bruyeres from "./pages/cities/Bruyeres";
import LaBresse from "./pages/cities/LaBresse";
import Xertigny from "./pages/cities/Xertigny";
import Chantraine from "./pages/cities/Chantraine";
import Uxegney from "./pages/cities/Uxegney";
import Vagney from "./pages/cities/Vagney";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CallButton /> {/* Ajout du bouton d'appel flottant */}
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/zones-intervention" element={<ZonesIntervention />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          
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
          
          {/* Routes des villes */}
          <Route path="/zones/epinal" element={<Epinal />} />
          <Route path="/zones/thaon-les-vosges" element={<ThaonLesVosges />} />
          <Route path="/zones/remiremont" element={<Remiremont />} />
          <Route path="/zones/mirecourt" element={<Mirecourt />} />
          <Route path="/zones/saint-die-des-vosges" element={<SaintDieDesVosges />} />
          <Route path="/zones/charmes" element={<Charmes />} />
          <Route path="/zones/golbey" element={<Golbey />} />
          <Route path="/zones/gerardmer" element={<Gerardmer />} />
          <Route path="/zones/saint-etienne-les-remiremont" element={<SaintEtienneLesRemiremont />} />
          <Route path="/zones/le-val-dajol" element={<LeValDAjol />} />
          <Route path="/zones/neufchateau" element={<Neufchateau />} />
          <Route path="/zones/vittel" element={<Vittel />} />
          <Route path="/zones/dompaire" element={<Dompaire />} />
          <Route path="/zones/rambervillers" element={<Rambervillers />} />
          <Route path="/zones/raon-letape" element={<RaonLEtape />} />
          <Route path="/zones/bruyeres" element={<Bruyeres />} />
          <Route path="/zones/la-bresse" element={<LaBresse />} />
          <Route path="/zones/xertigny" element={<Xertigny />} />
          <Route path="/zones/chantraine" element={<Chantraine />} />
          <Route path="/zones/uxegney" element={<Uxegney />} />
          <Route path="/zones/vagney" element={<Vagney />} />
          
          {/* Catch-all route pour les pages non trouvées */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
