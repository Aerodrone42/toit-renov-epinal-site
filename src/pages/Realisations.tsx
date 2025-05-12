
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Gallery } from "@/components/Gallery";

// Types pour les projets
type ProjectCategory = 
  | "all" 
  | "demoussage" 
  | "renovation" 
  | "facade" 
  | "peinture"
  | "dessous-toit"
  | "cheneau";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  location: string;
  imageUrl: string;
  description: string;
}

// Organisation des réalisations
const portfolioImages = [
  {
    id: 1,
    src: "/lovable-uploads/124b6f79-06cd-4ad1-a2e2-0ebce63c4ade.png",
    alt: "Rénovation de toiture en tuiles",
    description: "Rénovation complète d'une toiture en tuiles mécaniques à Épinal"
  },
  {
    id: 2,
    src: "/lovable-uploads/5f58adb2-b562-4aa7-8dbe-582e1a8dcc85.png",
    alt: "Toiture rénovée avec fenêtres de toit",
    description: "Installation de fenêtres de toit Velux sur une toiture rénovée à Remiremont"
  },
  {
    id: 3,
    src: "/lovable-uploads/e71d4c44-b7f8-4bae-9ba6-480023d73528.png",
    alt: "Toiture neuve en tuiles",
    description: "Toiture entièrement rénovée avec tuiles en terre cuite à Golbey"
  },
  {
    id: 4,
    src: "/lovable-uploads/90b385dd-f5d7-44b5-9741-dbd851212d22.png",
    alt: "Rénovation de toiture en cours",
    description: "Installation d'écran sous toiture et lattage pour nouvelle couverture à Charmes"
  },
  {
    id: 5,
    src: "/lovable-uploads/6db7eb81-4532-4ba1-9914-a5d6d5e88188.png",
    alt: "Travaux d'isolation de toiture",
    description: "Isolation thermique de toiture avec pose de tuiles neuves à Saint-Dié-des-Vosges"
  },
  {
    id: 6,
    src: "/lovable-uploads/aac92c15-7123-4ec0-bc57-5bf4e69fea09.png",
    alt: "Rénovation complète de toiture avec échafaudage",
    description: "Chantier de rénovation complète d'une toiture avec isolation à Mirecourt"
  },
  {
    id: 7,
    src: "/lovable-uploads/05a01fe4-d62e-42b1-8fa4-01394fa580f0.png",
    alt: "Installation de crochets de gouttières",
    description: "Installation de crochets de gouttière sur chevrons neufs à Thaon-les-Vosges"
  },
  {
    id: 8,
    src: "/lovable-uploads/eb8b4170-f585-4d06-a137-66f0b37fcd57.png", 
    alt: "Nettoyage de chéneau avec jet haute pression",
    description: "Nettoyage professionnel de gouttière à Rambervillers"
  },
  {
    id: 9,
    src: "/lovable-uploads/f2b8d3c7-7897-4a47-9a02-0e8fa7eb2082.png",
    alt: "Installation de dessous de toit en PVC",
    description: "Finition dessous de toit en PVC avec gouttière assortie à Bruyères"
  },
  {
    id: 10,
    src: "/lovable-uploads/8027faf2-4bcf-44e5-a370-168034dcb317.png",
    alt: "Véhicule d'intervention RÉNOVATION TECHNI TOIT",
    description: "Notre véhicule d'intervention équipé pour tous vos travaux de toiture"
  }
];

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  return (
    <>
      <SEOHead
        title="Nos Réalisations - RÉNOVATION TECHNI TOIT"
        description="Découvrez nos réalisations en matière de rénovation de toiture, démoussage, ravalement de façade et autres travaux dans les Vosges."
        keywords="réalisation toiture Épinal, travaux couvreur Vosges, photos démoussage toiture, rénovation façade avant après"
      />

      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-roofing-anthracite py-12 pt-32">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nos Réalisations</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Découvrez nos travaux de rénovation de toiture, démoussage, ravalement de façade et autres services réalisés dans les Vosges.
            </p>
          </div>
        </div>

        {/* Galerie Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Notre Portfolio</h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Voici quelques exemples de nos travaux récents réalisés dans le département des Vosges. Qualité, précision et satisfaction client sont nos priorités sur chaque chantier.
              </p>
              
              <Gallery images={portfolioImages} className="grid-cols-1 md:grid-cols-2 gap-6" />
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg font-semibold mb-4">
                Vous avez un projet similaire ?
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-roofing-red hover:bg-roofing-red/90 text-white py-3 px-6 rounded-md font-medium transition-colors"
              >
                Demandez un devis gratuit
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

export default Realisations;
