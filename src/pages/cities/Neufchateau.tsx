
import CityPage from "@/pages/CityPage";

const Neufchateau = () => {
  return (
    <CityPage
      mainCity="Neufchâteau"
      surroundingCities={["Coussey", "Circourt-sur-Mouzon", "Rebeuville", "Frebécourt", "Moncel-sur-Vair"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default Neufchateau;
