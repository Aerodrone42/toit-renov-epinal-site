
import ServicePage from "@/pages/ServicePage";
import { Gallery } from "@/components/Gallery";

const RenovationToiture = () => {
  // Images pour la galerie
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/ac2f26c3-20b8-4f96-bf24-ed45ec235d0c.png",
      alt: "Isolation et préparation d'une toiture en rénovation",
      description: "Isolation thermique avec écran sous-toiture et installation de liteaux"
    },
    {
      id: 2,
      src: "/lovable-uploads/5a98d3d5-fd11-4c5f-a203-6765f5b5b7e2.png",
      alt: "Rénovation d'une toiture en cours",
      description: "Vue panoramique d'un chantier de rénovation avec pose de tuiles neuves"
    },
    {
      id: 3,
      src: "/lovable-uploads/e0d54cb8-e23e-4ef7-bd8a-19b9c7005357.png",
      alt: "Toiture rénovée avec tuiles en terre cuite",
      description: "Finition qualitative d'une toiture avec fenêtre de toit intégrée"
    },
    {
      id: 4,
      src: "/lovable-uploads/19100e38-bce4-4f24-b2be-9565299a9ecf.png",
      alt: "Toiture rénovée en tuiles mécaniques",
      description: "Réalisation complète avec intégration de fenêtres de toit"
    }
  ];

  return (
    <ServicePage
      title="Rénovation de Toiture"
      description="Service professionnel de rénovation de toiture à Épinal et dans les Vosges. Réparation, étanchéité et embellissement de votre couverture."
      keywords="rénovation toiture Épinal, réparation toiture Vosges, étanchéité toiture, couvreur Vosges"
      heroImage="/service-renovation.jpg"
      content={
        <>
          <p>
            La rénovation de toiture est une étape importante dans l'entretien de votre habitation. Une toiture en bon état 
            est essentielle pour protéger votre maison des intempéries et assurer votre confort au quotidien. 
            RÉNOVATION TECHNI TOIT vous propose des solutions complètes pour rénover votre toiture et lui donner 
            une nouvelle jeunesse.
          </p>
          
          {/* Ajout de la galerie de photos */}
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-6">Nos réalisations</h2>
            <Gallery images={galleryImages} />
          </div>
          
          <h2>Pourquoi rénover votre toiture ?</h2>
          
          <p>
            Plusieurs raisons peuvent vous amener à envisager une rénovation de toiture :
          </p>
          
          <ul>
            <li>Présence de fuites ou infiltrations</li>
            <li>Tuiles ou ardoises cassées ou déplacées</li>
            <li>Toiture ancienne présentant des signes d'usure</li>
            <li>Apparition de mousse importante malgré les nettoyages</li>
            <li>Volonté d'améliorer l'isolation thermique de votre maison</li>
            <li>Souhait de revaloriser votre bien immobilier</li>
          </ul>
          
          <h2>Nos services de rénovation de toiture</h2>
          
          <p>
            En fonction de l'état de votre couverture, nous vous proposons différents niveaux d'intervention :
          </p>
          
          <h3>Rénovation partielle</h3>
          <p>
            Remplacement des éléments endommagés (tuiles, ardoises), réfection des points singuliers 
            (faîtage, arêtiers, solins), traitement de la charpente.
          </p>
          
          <h3>Rénovation complète</h3>
          <p>
            Dépose de l'ancienne couverture, vérification et traitement de la charpente, 
            pose d'un nouvel écran sous-toiture, remplacement complet de la couverture.
          </p>
          
          <h3>Amélioration de l'isolation</h3>
          <p>
            Intégration d'une isolation performante lors de la rénovation pour améliorer 
            le confort thermique et réduire vos dépenses énergétiques.
          </p>
          
          <h3>Intégration d'éléments techniques</h3>
          <p>
            Installation de fenêtres de toit, pose de gouttières et descentes, intégration de 
            systèmes d'aération ou de ventilation.
          </p>
          
          <h2>Notre approche personnalisée</h2>
          
          <p>
            Chaque projet de rénovation est unique. C'est pourquoi nous commençons toujours par 
            une visite technique approfondie pour évaluer l'état de votre toiture et de votre charpente. 
            Suite à ce diagnostic, nous vous proposons les solutions les plus adaptées à votre situation, 
            en tenant compte de vos contraintes techniques et budgétaires.
          </p>
          
          <h2>Les types de couverture</h2>
          
          <p>
            Nous intervenons sur tous types de couvertures :
          </p>
          
          <ul>
            <li>Tuiles en terre cuite (plates, mécaniques, canal)</li>
            <li>Ardoises naturelles ou synthétiques</li>
            <li>Zinc ou autres métaux</li>
            <li>Fibrociment</li>
            <li>Bardeaux bitumés (shingle)</li>
          </ul>
        </>
      }
      benefits={[
        "Élimination des infiltrations d'eau",
        "Amélioration de l'isolation thermique",
        "Protection durable contre les intempéries",
        "Valorisation de votre patrimoine immobilier",
        "Économies d'énergie",
        "Esthétique renouvelée"
      ]}
      process={[
        {
          title: "Diagnostic complet",
          description: "Inspection détaillée de votre toiture et charpente pour évaluer l'état et les travaux nécessaires."
        },
        {
          title: "Devis personnalisé",
          description: "Établissement d'une proposition sur mesure avec différentes options adaptées à vos besoins."
        },
        {
          title: "Préparation et protection",
          description: "Installation des échafaudages et protections nécessaires pour garantir la sécurité du chantier."
        },
        {
          title: "Réalisation des travaux",
          description: "Exécution des travaux de rénovation par notre équipe d'artisans qualifiés."
        },
        {
          title: "Contrôle et nettoyage",
          description: "Vérification finale de la qualité et nettoyage complet du chantier avant livraison."
        }
      ]}
      relatedServices={[
        {
          title: "Démoussage & Nettoyage toiture",
          url: "/services/demoussage-nettoyage-toiture"
        },
        {
          title: "Changement de toiture",
          url: "/services/changement-toiture"
        },
        {
          title: "Nettoyage de chéneau",
          url: "/services/nettoyage-cheneau"
        }
      ]}
    />
  );
};

export default RenovationToiture;
