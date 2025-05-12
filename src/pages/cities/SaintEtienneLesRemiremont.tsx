
import CityPage from "@/pages/CityPage";

const SaintEtienneLesRemiremont = () => {
  return (
    <CityPage
      mainCity="Saint-Étienne-lès-Remiremont"
      surroundingCities={["Saint-Amé", "Le Syndicat", "Vagney", "Dommartin-lès-Remiremont", "Vecoux"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default SaintEtienneLesRemiremont;
