
import CityPage from "@/pages/CityPage";

const Vagney = () => {
  return (
    <CityPage
      mainCity="Vagney"
      surroundingCities={["Le Syndicat", "Sapois", "Thiéfosse", "Gerbamont", "Basse-sur-le-Rupt"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default Vagney;
