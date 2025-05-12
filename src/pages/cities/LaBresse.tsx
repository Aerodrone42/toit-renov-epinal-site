
import CityPage from "@/pages/CityPage";

const LaBresse = () => {
  return (
    <CityPage
      mainCity="La Bresse"
      surroundingCities={["Cornimont", "Saulxures-sur-Moselotte", "Ventron", "Thiéfosse", "Vagney"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default LaBresse;
