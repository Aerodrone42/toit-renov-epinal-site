
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

// Types pour les projets
type ProjectCategory = 
  | "all" 
  | "demoussage" 
  | "renovation" 
  | "facade" 
  | "peinture"
  | "reparation";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  location: string;
  imageUrl: string;
  description: string;
}

// Données des projets
const projects: Project[] = [
  {
    id: 1,
    title: "Rénovation complète de toiture",
    category: "renovation",
    location: "Épinal",
    imageUrl: "/realisation-1.jpg",
    description: "Remplacement complet de la couverture et rénovation de la charpente pour cette maison à Épinal."
  },
  {
    id: 2,
    title: "Démoussage de toiture",
    category: "demoussage",
    location: "Golbey",
    imageUrl: "/realisation-2.jpg",
    description: "Démoussage et traitement hydrofuge d'une toiture en tuiles."
  },
  {
    id: 3,
    title: "Ravalement de façade",
    category: "facade",
    location: "Thaon-les-Vosges",
    imageUrl: "/realisation-3.jpg",
    description: "Nettoyage et mise en peinture de la façade d'une maison individuelle."
  },
  {
    id: 4,
    title: "Peinture des boiseries",
    category: "peinture",
    location: "Chantraine",
    imageUrl: "/realisation-4.jpg",
    description: "Traitement et peinture des boiseries extérieures."
  },
  {
    id: 5,
    title: "Réparation de chéneau",
    category: "reparation",
    location: "Dogneville",
    imageUrl: "/realisation-5.jpg",
    description: "Remplacement et réparation des chéneaux endommagés."
  },
  {
    id: 6,
    title: "Nettoyage de toiture",
    category: "demoussage",
    location: "Saint-Laurent",
    imageUrl: "/realisation-6.jpg",
    description: "Nettoyage haute pression et traitement anti-mousse d'une toiture."
  }
];

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Nos Réalisations - Travaux de toiture et façade"
        description="Découvrez nos réalisations en matière de rénovation de toiture, démoussage, ravalement de façade et autres travaux dans les Vosges."
        keywords="réalisation toiture Épinal, travaux couvreur Vosges, photos démoussage toiture, rénovation façade avant après"
      />

      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-roofing-anthracite py-12">
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
            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button 
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-md ${activeCategory === "all" ? "bg-roofing-red text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Tous les projets
              </button>
              <button 
                onClick={() => setActiveCategory("demoussage")}
                className={`px-4 py-2 rounded-md ${activeCategory === "demoussage" ? "bg-roofing-red text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Démoussage
              </button>
              <button 
                onClick={() => setActiveCategory("renovation")}
                className={`px-4 py-2 rounded-md ${activeCategory === "renovation" ? "bg-roofing-red text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Rénovation
              </button>
              <button 
                onClick={() => setActiveCategory("facade")}
                className={`px-4 py-2 rounded-md ${activeCategory === "facade" ? "bg-roofing-red text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Façade
              </button>
              <button 
                onClick={() => setActiveCategory("peinture")}
                className={`px-4 py-2 rounded-md ${activeCategory === "peinture" ? "bg-roofing-red text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Peinture
              </button>
              <button 
                onClick={() => setActiveCategory("reparation")}
                className={`px-4 py-2 rounded-md ${activeCategory === "reparation" ? "bg-roofing-red text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Réparations
              </button>
            </div>

            {/* Projets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{project.location}</p>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Aucune réalisation trouvée dans cette catégorie.</p>
              </div>
            )}
          </div>
        </section>

        {/* Modal pour afficher le projet */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-auto">
                <div className="h-[40vh] md:h-[50vh]">
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-500 mb-4">Localisation: {selectedProject.location}</p>
                  <p className="text-gray-700">{selectedProject.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default Realisations;
