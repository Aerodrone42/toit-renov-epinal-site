
import CityPage from "@/pages/CityPage";

const Bruyeres = () => {
  return (
    <CityPage
      mainCity="Bruyères"
      surroundingCities={["Champ-le-Duc", "Laval-sur-Vologne", "Cheniménil", "Docelles", "Fays"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default Bruyeres;
