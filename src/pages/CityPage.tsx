import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Gallery } from "@/components/Gallery";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { useEffect } from "react";

interface CityPageProps {
  mainCity: string;
  surroundingCities: string[];
  imageUrl?: string;
  portfolioImages?: {
    id: number;
    src: string;
    alt: string;
    description: string;
  }[];
}

// Images du portfolio par défaut pour toutes les sous-pages secteurs
const defaultPortfolioImages = [
  {
    id: 1,
    src: "/lovable-uploads/124b6f79-06cd-4ad1-a2e2-0ebce63c4ade.png",
    alt: "Rénovation de toiture en tuiles",
    description: "Rénovation complète d'une toiture en tuiles mécaniques"
  },
  {
    id: 2,
    src: "/lovable-uploads/5f58adb2-b562-4aa7-8dbe-582e1a8dcc85.png",
    alt: "Toiture rénovée avec fenêtres de toit",
    description: "Installation de fenêtres de toit Velux sur une toiture rénovée"
  },
  {
    id: 3,
    src: "/lovable-uploads/e71d4c44-b7f8-4bae-9ba6-480023d73528.png",
    alt: "Toiture neuve en tuiles",
    description: "Toiture entièrement rénovée avec tuiles en terre cuite"
  },
  {
    id: 4,
    src: "/lovable-uploads/90b385dd-f5d7-44b5-9741-dbd851212d22.png",
    alt: "Rénovation de toiture en cours",
    description: "Installation d'écran sous toiture et lattage pour nouvelle couverture"
  }
];

const CityPage = ({ mainCity, surroundingCities, imageUrl = "/service-peinture.jpg", portfolioImages = defaultPortfolioImages }: CityPageProps) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Formatage pour les URLs
  const formatCityForUrl = (city: string): string => {
    return city
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");
  };

  const surroundingCitiesString = surroundingCities.join(", ");
  
  return (
    <>
      <SEOHead
        title={`Rénovation toiture ${mainCity} – Artisan couvreur ${mainCity} et alentours`}
        description={`RÉNOVATION TECHNI TOIT : expert en rénovation et démoussage de toiture à ${mainCity} et alentours (${surroundingCitiesString}). Devis gratuit au 06 02 32 75 57.`}
        keywords={`rénovation toiture ${mainCity}, couvreur ${mainCity}, nettoyage toiture ${mainCity}, artisan toiture ${mainCity}, démoussage ${mainCity}, ${surroundingCities.map(city => `couvreur ${city}`).join(", ")}`}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <div 
          className="bg-roofing-anthracite py-16 pt-24 md:pt-32 bg-cover bg-center" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${imageUrl}')` }}
        >
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Rénovation de toiture à {mainCity}
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
              Votre artisan couvreur local pour toutes vos rénovations et réparations de toiture 
              à {mainCity} et alentours
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-8 md:py-12">
          <div className="container-custom max-w-4xl">
            <div className="mb-6 md:mb-8">
              <Link to="/zones-intervention" className="flex items-center text-roofing-red hover:text-roofing-anthracite mb-6 md:mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à toutes nos zones d'intervention
              </Link>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Artisan couvreur à {mainCity} et ses environs</h2>
              
              <p className="text-base md:text-lg mb-4">
                RÉNOVATION TECHNI TOIT intervient à {mainCity} ainsi que dans les communes voisines comme {surroundingCitiesString} pour 
                tous vos travaux de rénovation de toiture, démoussage, ravalement de façade, peinture de boiserie et 
                diverses réparations extérieures.
              </p>
              
              <p className="text-base md:text-lg mb-4">
                Entreprise artisanale et locale basée dans les Vosges, nous mettons notre expertise au service 
                des habitants de {mainCity} pour entretenir et rénover leurs habitations avec le plus grand soin et 
                un savoir-faire reconnu.
              </p>
            </div>

            <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Nous intervenons à {mainCity} et dans un rayon de 10km :</h3>
              <ul className="list-disc pl-6 mb-3 md:mb-4 space-y-1 md:space-y-2">
                {surroundingCities.map((city, index) => (
                  <li key={index} className="text-gray-700">{city}</li>
                ))}
              </ul>
              <p className="italic text-gray-600 text-sm md:text-base">
                Et dans toutes les communes environnantes dans un rayon de 50km autour d'Épinal.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio des réalisations */}
        <section className="py-8 md:py-12 bg-gray-100">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Nos réalisations à {mainCity} et alentours</h2>
            
            <p className="text-base md:text-lg text-center mb-6 md:mb-8">
              Découvrez quelques exemples de nos travaux de rénovation de toiture, démoussage, 
              et autres services réalisés à {mainCity} et dans les communes voisines.
            </p>
            
            <Gallery images={portfolioImages} className="grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" />
            
            <div className="mt-6 md:mt-8 text-center">
              <Link 
                to="/realisations" 
                className="inline-flex items-center text-roofing-red hover:text-roofing-anthracite font-medium"
              >
                Voir toutes nos réalisations
                <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Nos prestations à [ville] */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Nos prestations à {mainCity} et ses alentours</h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-roofing-red">Rénovation de toiture à {mainCity}</h3>
                <p className="mb-1 md:mb-2 text-sm md:text-base">
                  Nous réalisons la rénovation complète ou partielle de votre toiture à {mainCity} comme à {surroundingCities[0]} ou {surroundingCities[1]}. 
                  Notre expertise nous permet d'intervenir sur tout type de couverture : tuiles, ardoises, zinc ou autres matériaux.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-roofing-red">Démoussage et nettoyage de toiture à {mainCity}</h3>
                <p className="mb-1 md:mb-2 text-sm md:text-base">
                  Le nettoyage et démoussage de toiture à {mainCity} et {surroundingCities[2]} permet de prolonger 
                  la durée de vie de votre couverture. Nous utilisons des techniques adaptées et respectueuses 
                  de l'environnement pour éliminer mousses, lichens et autres végétaux qui dégradent vos tuiles.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-roofing-red">Ravalement de façade à {mainCity}</h3>
                <p className="mb-1 md:mb-2 text-sm md:text-base">
                  Notre service de ravalement de façade pour les habitants de {mainCity} et {surroundingCities[3]} redonne 
                  un coup de jeune à votre maison. Nettoyage, réparation des fissures, application d'enduit 
                  et peinture : nous prenons en charge l'intégralité des travaux.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-roofing-red">Peinture et traitement des boiseries à {mainCity}</h3>
                <p className="mb-1 md:mb-2 text-sm md:text-base">
                  Nous réalisons les travaux de peinture et traitement des boiseries extérieures à {mainCity} et {surroundingCities[4]}. 
                  Protection et embellissement garantis pour vos bardages, avant-toits et autres éléments en bois.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-roofing-red">Nettoyage de chéneaux à {mainCity}</h3>
                <p className="mb-1 md:mb-2 text-sm md:text-base">
                  Le nettoyage régulier des chéneaux et gouttières à {mainCity} comme à {surroundingCities[0]} prévient 
                  les infiltrations et débordements. Nous assurons un service complet : débouchage, réparation 
                  et remplacement si nécessaire.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-roofing-red">Réparations diverses à {mainCity}</h3>
                <p className="mb-1 md:mb-2 text-sm md:text-base">
                  Fuites, tuiles cassées, problèmes d'étanchéité ? Notre service de réparations diverses à {mainCity} 
                  et dans les communes avoisinantes comme {surroundingCities[1]} et {surroundingCities[2]} intervient rapidement 
                  pour tous types de travaux ponctuels.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-roofing-red">Pose de dessous de toit en PVC à {mainCity}</h3>
                <p className="mb-1 md:mb-2 text-sm md:text-base">
                  Notre service d'installation de dessous de toit en PVC à {mainCity} et {surroundingCities[3]} assure 
                  une finition esthétique et durable pour votre habitation, sans entretien pendant de nombreuses années.
                </p>
              </div>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-roofing-red">Travaux de charpente à {mainCity}</h3>
                <p className="mb-1 md:mb-2 text-sm md:text-base">
                  Nous réalisons les travaux de rénovation et réparation de charpente à {mainCity} et {surroundingCities[4]} 
                  avec expertise et savoir-faire pour garantir la solidité de votre structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Appel à action */}
        <section className="py-10 md:py-16 bg-roofing-anthracite text-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Besoin d'un artisan couvreur à {mainCity} ?</h2>
            
            <p className="text-base md:text-lg mb-6 md:mb-8">
              RÉNOVATION TECHNI TOIT intervient rapidement à {mainCity} et dans les communes voisines 
              pour tous vos travaux de toiture, façade et boiseries. Contactez-nous dès aujourd'hui pour 
              un devis gratuit et sans engagement !
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <a href="tel:0602327557" className="inline-flex items-center justify-center bg-roofing-red hover:bg-roofing-red/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-md transition-all font-medium">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                06 02 32 75 57
              </a>
              
              <a href="mailto:chatellepierre6@gmail.com" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-roofing-anthracite px-6 md:px-8 py-3 md:py-4 rounded-md transition-all font-medium mt-3 md:mt-0">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                chatellepierre6@gmail.com
              </a>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default CityPage;
