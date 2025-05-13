
import CityPage from "@/pages/CityPage";

const Epinal = () => {
  return (
    <CityPage
      mainCity="Épinal"
      surroundingCities={["Golbey", "Chantraine", "Dogneville", "Dinozé", "Les Forges"]}
      imageUrl="/service-peinture.jpg"
      portfolioImages={[
        {
          id: 1,
          src: "/lovable-uploads/124b6f79-06cd-4ad1-a2e2-0ebce63c4ade.png",
          alt: "Rénovation de toiture en tuiles",
          description: "Nettoyage de toiture à Epinal"
        },
        {
          id: 2,
          src: "/lovable-uploads/5f58adb2-b562-4aa7-8dbe-582e1a8dcc85.png",
          alt: "Toiture rénovée avec fenêtres de toit",
          description: "Démoussage toiture à Epinal"
        },
        {
          id: 3,
          src: "/lovable-uploads/e71d4c44-b7f8-4bae-9ba6-480023d73528.png",
          alt: "Toiture neuve en tuiles",
          description: "Toiture entièrement rénovée avec tuiles en terre cuite"
        },
        {
          id: 4,
          src: "/lovable-uploads/90b385dd-f5d7-44b5-9741-dbd851212d22.png",
          alt: "Rénovation de toiture en cours",
          description: "Installation d'écran sous toiture et lattage pour nouvelle couverture"
        }
      ]}
    />
  );
};

export default Epinal;
