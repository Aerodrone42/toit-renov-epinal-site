
import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { MapPin } from "lucide-react";

// Types pour les zones
interface LocalArea {
  mainCity: string;
  url: string;
  surroundingCities: string[];
}

// Données des zones d'intervention structurées par secteur
const interventionAreas: { [key: string]: LocalArea[] } = {
  "Centre Vosges": [
    {
      mainCity: "Épinal",
      url: "/zones/epinal",
      surroundingCities: ["Golbey", "Chantraine", "Dogneville", "Dinozé", "Les Forges"]
    },
    {
      mainCity: "Thaon-les-Vosges",
      url: "/zones/thaon-les-vosges",
      surroundingCities: ["Chavelot", "Nomexy", "Oncourt", "Girmont", "Igney"]
    },
    {
      mainCity: "Charmes",
      url: "/zones/charmes",
      surroundingCities: ["Vincey", "Essegney", "Portieux", "Chamagne", "Socourt"]
    },
    {
      mainCity: "Golbey",
      url: "/zones/golbey",
      surroundingCities: ["Dogneville", "Chavelot", "Uxegney", "Darnieulles", "Deyvillers"]
    }
  ],
  "Sud Vosges": [
    {
      mainCity: "Remiremont",
      url: "/zones/remiremont",
      surroundingCities: ["Saint-Nabord", "Éloyes", "Dommartin-lès-Remiremont", "Jarménil", "Saint-Amé"]
    },
    {
      mainCity: "Gérardmer",
      url: "/zones/gerardmer",
      surroundingCities: ["Xonrupt-Longemer", "Le Tholy", "Granges-Aumontzey", "Liézey", "Rehaupal"]
    },
    {
      mainCity: "Saint-Étienne-lès-Remiremont",
      url: "/zones/saint-etienne-les-remiremont",
      surroundingCities: ["Saint-Amé", "Le Syndicat", "Vagney", "Dommartin-lès-Remiremont", "Vecoux"]
    },
    {
      mainCity: "Le Val-d'Ajol",
      url: "/zones/le-val-dajol",
      surroundingCities: ["Plombières-les-Bains", "Girmont-Val-d'Ajol", "Fougerolles-Saint-Valbert", "Le Clerjus", "Aillevillers-et-Lyaumont"]
    }
  ],
  "Ouest Vosges": [
    {
      mainCity: "Mirecourt",
      url: "/zones/mirecourt",
      surroundingCities: ["Poussay", "Ramecourt", "Vroville", "Domvallier", "Thiraucourt"]
    },
    {
      mainCity: "Neufchâteau",
      url: "/zones/neufchateau",
      surroundingCities: ["Coussey", "Circourt-sur-Mouzon", "Rebeuville", "Frebécourt", "Moncel-sur-Vair"]
    },
    {
      mainCity: "Vittel",
      url: "/zones/vittel",
      surroundingCities: ["Contrexéville", "Norroy", "Mandres-sur-Vair", "They-sous-Montfort", "La Neuveville-sous-Montfort"]
    },
    {
      mainCity: "Dompaire",
      url: "/zones/dompaire",
      surroundingCities: ["Madonne-et-Lamerey", "Ville-sur-Illon", "Racécourt", "Harol", "Les Ableuvenettes"]
    }
  ],
  "Nord-Est Vosges": [
    {
      mainCity: "Saint-Dié-des-Vosges",
      url: "/zones/saint-die-des-vosges",
      surroundingCities: ["Sainte-Marguerite", "Nayemont-les-Fosses", "Taintrux", "La Voivre", "Anould"]
    },
    {
      mainCity: "Rambervillers",
      url: "/zones/rambervillers",
      surroundingCities: ["Brû", "Jeanménil", "Roville-aux-Chênes", "Saint-Benoît-la-Chipotte", "Autrey"]
    },
    {
      mainCity: "Raon-l'Étape",
      url: "/zones/raon-letape",
      surroundingCities: ["Bertrichamps", "Thiaville-sur-Meurthe", "Étival-Clairefontaine", "Moyenmoutier", "Senones"]
    },
    {
      mainCity: "Bruyères",
      url: "/zones/bruyeres",
      surroundingCities: ["Champ-le-Duc", "Laval-sur-Vologne", "Cheniménil", "Docelles", "Fays"]
    }
  ],
  "Autres secteurs": [
    {
      mainCity: "La Bresse",
      url: "/zones/la-bresse",
      surroundingCities: ["Cornimont", "Saulxures-sur-Moselotte", "Ventron", "Thiéfosse", "Vagney"]
    },
    {
      mainCity: "Xertigny",
      url: "/zones/xertigny",
      surroundingCities: ["Le Clerjus", "La Chapelle-aux-Bois", "Urimenil", "Uzemain", "Hadol"]
    }
  ]
};

const ZonesIntervention = () => {
  const [activeTab, setActiveTab] = useState<string>("Centre Vosges");

  return (
    <>
      <SEOHead
        title="Zones d'intervention - RÉNOVATION TECHNI TOIT dans les Vosges"
        description="Découvrez les zones d'intervention de RÉNOVATION TECHNI TOIT pour vos travaux de toiture, démoussage, façade dans les Vosges (88). Trouvez un artisan couvreur près de chez vous."
        keywords="couvreur Vosges, rénovation toiture 88, démoussage Épinal, artisan toiture Remiremont, nettoyage toiture Mirecourt, couvreur Saint-Dié"
      />

      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-roofing-anthracite py-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Zones d'intervention</h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              RÉNOVATION TECHNI TOIT intervient dans tout le département des Vosges (88) pour vos travaux de toiture,
              démoussage, ravalement de façade, peinture de boiserie et réparations diverses.
            </p>
          </div>
        </div>

        {/* Carte du département */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Notre zone d'intervention dans les Vosges</h2>
              <p className="text-lg text-gray-700">
                Basés à Igney, nous intervenons dans un rayon de 50km autour d'Épinal. Découvrez ci-dessous 
                si votre commune est couverte par nos services de rénovation et entretien de toiture.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Tabs pour sélectionner la région */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {Object.keys(interventionAreas).map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveTab(region)}
                    className={`px-4 py-2 rounded-md ${
                      activeTab === region 
                      ? "bg-roofing-red text-white" 
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    } transition-colors`}
                  >
                    {region}
                  </button>
                ))}
              </div>

              {/* Affichage des villes par région */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interventionAreas[activeTab].map((area) => (
                  <div key={area.mainCity} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <Link to={area.url} className="block">
                      <h3 className="flex items-center text-xl font-semibold mb-3 text-roofing-red">
                        <MapPin className="h-5 w-5 mr-2" />
                        {area.mainCity}
                      </h3>
                      <p className="text-gray-600 mb-3">et ses alentours :</p>
                      <p className="text-gray-700">
                        {area.surroundingCities.join(", ")}
                      </p>
                      <div className="mt-4 text-roofing-anthracite font-medium hover:text-roofing-red transition-colors">
                        En savoir plus →
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Pourquoi nous choisir */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Un artisan couvreur près de chez vous</h2>
              <p className="text-lg text-gray-700">
                RÉNOVATION TECHNI TOIT est votre partenaire de confiance pour tous vos travaux de toiture 
                et rénovation extérieure dans les Vosges. Voici pourquoi nos clients nous font confiance :
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Proximité</h3>
                <p className="text-gray-600">
                  Intervention rapide au plus près de chez vous, dans tout le département des Vosges.
                </p>
              </div>
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Expertise locale</h3>
                <p className="text-gray-600">
                  Connaissance parfaite des spécificités architecturales et climatiques du territoire vosgien.
                </p>
              </div>
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Réactivité</h3>
                <p className="text-gray-600">
                  Devis rapides, interventions dans les meilleurs délais, y compris pour les urgences.
                </p>
              </div>
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Qualité artisanale</h3>
                <p className="text-gray-600">
                  Savoir-faire traditionnel et matériaux de qualité adaptés aux toitures vosgiennes.
                </p>
              </div>
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Garantie décennale</h3>
                <p className="text-gray-600">
                  Tous nos travaux sont couverts par notre assurance décennale pour votre sérénité.
                </p>
              </div>
              <div className="service-card">
                <h3 className="text-xl font-bold mb-3">Tarifs justes</h3>
                <p className="text-gray-600">
                  Prix adaptés au marché local avec un excellent rapport qualité-prix.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default ZonesIntervention;
