
import CityPage from "@/pages/CityPage";

const SaintDieDesVosges = () => {
  return (
    <CityPage
      mainCity="Saint-Dié-des-Vosges"
      surroundingCities={["Sainte-Marguerite", "Nayemont-les-Fosses", "Taintrux", "La Voivre", "Anould"]}
      imageUrl="/service-peinture.jpg"
    />
  );
};

export default SaintDieDesVosges;
