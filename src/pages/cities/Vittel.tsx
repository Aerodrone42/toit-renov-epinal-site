
import CityPage from "@/pages/CityPage";

const Vittel = () => {
  return (
    <CityPage
      mainCity="Vittel"
      surroundingCities={["Contrexéville", "Norroy", "Mandres-sur-Vair", "They-sous-Montfort", "La Neuveville-sous-Montfort"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default Vittel;
