
import CityPage from "@/pages/CityPage";

const Rambervillers = () => {
  return (
    <CityPage
      mainCity="Rambervillers"
      surroundingCities={["Brû", "Jeanménil", "Roville-aux-Chênes", "Saint-Benoît-la-Chipotte", "Autrey"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default Rambervillers;
