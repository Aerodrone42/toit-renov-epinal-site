
import CityPage from "@/pages/CityPage";

const Chantraine = () => {
  return (
    <CityPage
      mainCity="Chantraine"
      surroundingCities={["Épinal", "Jeuxey", "Dogneville", "Darnieulles", "Les Forges"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default Chantraine;
