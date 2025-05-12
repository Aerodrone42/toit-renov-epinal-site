
import CityPage from "@/pages/CityPage";

const Dompaire = () => {
  return (
    <CityPage
      mainCity="Dompaire"
      surroundingCities={["Madonne-et-Lamerey", "Ville-sur-Illon", "Racécourt", "Harol", "Les Ableuvenettes"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default Dompaire;
