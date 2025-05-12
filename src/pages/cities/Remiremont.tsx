
import CityPage from "@/pages/CityPage";

const Remiremont = () => {
  return (
    <CityPage
      mainCity="Remiremont"
      surroundingCities={["Saint-Nabord", "Éloyes", "Dommartin-lès-Remiremont", "Jarménil", "Saint-Amé"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default Remiremont;
