
import CityPage from "@/pages/CityPage";

const Epinal = () => {
  return (
    <CityPage
      mainCity="Épinal"
      surroundingCities={["Golbey", "Chantraine", "Dogneville", "Dinozé", "Les Forges"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default Epinal;
