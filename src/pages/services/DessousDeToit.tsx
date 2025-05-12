import ServicePage from "@/pages/ServicePage";
import { Gallery } from "@/components/Gallery";

const DessousDeToit = () => {
  const dessousToitImages = [
    {
      id: 1,
      src: "/lovable-uploads/069254d6-214a-4556-910f-779a369f9522.png",
      alt: "Installation de dessous de toit en PVC",
      description: "Vue en contre-plongée de dessous de toit en PVC avec gouttière"
    },
    {
      id: 2,
      src: "/lovable-uploads/dc603128-f420-4f23-a692-95446f5eedb3.png",
      alt: "Finition dessous de toit en PVC",
      description: "Dessous de toit en PVC beige avec bordure foncée"
    }
  ];
  
  const avantApresImages = [
    {
      id: 3,
      src: "/lovable-uploads/bc783c0c-bfe8-40e6-8157-91974edbc8f5.png",
      alt: "Détail de dessous de toit noir",
      description: "Dessous de toit en PVC noir installé sur une habitation"
    },
    {
      id: 4,
      src: "/lovable-uploads/0e0aa54a-97df-4027-89bd-fd4243c3046c.png",
      alt: "Vue d'ensemble dessous de toit",
      description: "Maison avec dessous de toit et gouttières nouvellement installés"
    }
  ];
  
  return (
    <ServicePage
      title="Dessous de Toit en PVC"
      description="Installation et rénovation de dessous de toit en PVC à Épinal et dans les Vosges. Solutions esthétiques et durables pour vos avant-toits."
      keywords="dessous de toit PVC Épinal, boiserie PVC Vosges, rénovation dessous de toit, habillage avant-toit 88, lambris PVC sous-face"
      heroImage="/service-peinture.jpg"
      content={
        <>
          <p>
            Les dessous de toit, également appelés avant-toits ou sous-faces, jouent un rôle essentiel 
            dans la finition et la protection de votre toiture. RÉNOVATION TECHNI TOIT vous propose 
            des solutions complètes d'installation et de rénovation de dessous de toit en PVC pour 
            embellir votre habitation tout en assurant une protection durable.
          </p>
          
          {/* Galerie d'images */}
          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Nos réalisations de dessous de toit en PVC</h3>
            <Gallery images={dessousToitImages} />
          </div>
          
          <h2>Pourquoi choisir des dessous de toit en PVC ?</h2>
          
          <p>
            Le PVC est devenu le matériau de référence pour les dessous de toit en raison de ses 
            nombreux avantages :
          </p>
          
          <ul>
            <li>Durabilité exceptionnelle (résistance aux intempéries et aux UV)</li>
            <li>Aucun entretien nécessaire (pas de peinture à refaire)</li>
            <li>Imperméabilité totale (protection contre l'humidité)</li>
            <li>Résistance aux insectes et champignons</li>
            <li>Large choix de coloris et finitions</li>
            <li>Excellent rapport qualité/prix</li>
            <li>Installation rapide et propre</li>
          </ul>
          
          <h2>Nos services pour dessous de toit en PVC</h2>
          
          <p>
            Nous proposons une gamme complète de prestations adaptées à tous vos besoins :
          </p>
          
          <h3>Installation complète</h3>
          <p>
            Pour les constructions neuves ou les rénovations totales, nous installons des systèmes 
            complets de dessous de toit en PVC, parfaitement adaptés à l'architecture de votre maison.
          </p>
          
          <h3>Rénovation des avant-toits existants</h3>
          <p>
            Transformation de vos dessous de toit en bois vieillissants en surfaces modernes et 
            sans entretien, avec pose de lambris PVC et tous les accessoires nécessaires.
          </p>
          
          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Avant/Après : Transformations réussies</h3>
            <Gallery images={avantApresImages} />
          </div>
          
          <h3>Habillage de corniches et bandeaux</h3>
          <p>
            Nous réalisons l'habillage complet des corniches et bandeaux pour une finition 
            parfaite et homogène de vos dessous de toit.
          </p>
          
          <h3>Intégration de systèmes d'aération</h3>
          <p>
            Installation de grilles d'aération pour assurer une ventilation optimale de votre 
            toiture et éviter les problèmes d'humidité.
          </p>
          
          <h2>Notre méthode de travail</h2>
          
          <p>
            Pour garantir un résultat de qualité, nous suivons un processus rigoureux :
          </p>
          
          <ol>
            <li><strong>Diagnostic</strong> : Évaluation de l'état de vos avant-toits existants.</li>
            <li><strong>Conseil</strong> : Proposition de solutions adaptées et choix des matériaux.</li>
            <li><strong>Préparation</strong> : Nettoyage, traitement ou dépose des éléments existants si nécessaire.</li>
            <li><strong>Installation</strong> : Pose soignée des lambris PVC et accessoires associés.</li>
            <li><strong>Finitions</strong> : Réalisation des détails de raccordement et finitions pour un résultat parfait.</li>
          </ol>
          
          <h2>Quand rénover vos dessous de toit ?</h2>
          
          <p>
            Plusieurs signes peuvent indiquer qu'il est temps de rénover vos dessous de toit :
          </p>
          
          <ul>
            <li>Peinture écaillée ou fissurée</li>
            <li>Bois noirci, pourri ou attaqué par des insectes</li>
            <li>Déformations ou affaissements visibles</li>
            <li>Infiltrations d'eau dans les combles</li>
            <li>Présence de nids d'oiseaux ou d'insectes</li>
          </ul>
          
          <h2>Notre engagement</h2>
          
          <p>
            Chez RÉNOVATION TECHNI TOIT, nous nous engageons à utiliser exclusivement des matériaux 
            de qualité professionnelle, garantissant une durabilité optimale de vos dessous de toit en PVC. 
            Notre équipe d'artisans qualifiés assure une pose dans les règles de l'art, respectueuse de 
            votre habitation et de l'environnement.
          </p>
        </>
      }
      benefits={[
        "Solution durable sans entretien pendant des décennies",
        "Protection efficace contre les infiltrations d'eau",
        "Amélioration de l'esthétique de votre habitation",
        "Ventilation optimale de votre toiture",
        "Plus-value pour votre bien immobilier",
        "Élimination des problèmes d'insectes et champignons"
      ]}
      process={[
        {
          title: "Visite technique",
          description: "Inspection détaillée de vos avant-toits et prise de mesures précises."
        },
        {
          title: "Devis personnalisé",
          description: "Proposition adaptée à votre habitation avec choix des matériaux et coloris."
        },
        {
          title: "Préparation",
          description: "Mise en place des protections et préparation des surfaces existantes."
        },
        {
          title: "Installation",
          description: "Pose soignée des lambris PVC et accessoires par nos artisans qualifiés."
        },
        {
          title: "Contrôle qualité",
          description: "Vérification minutieuse des finitions et nettoyage du chantier."
        }
      ]}
      relatedServices={[
        {
          title: "Rénovation de toiture",
          url: "/services/renovation-toiture"
        },
        {
          title: "Nettoyage de chéneau",
          url: "/services/nettoyage-cheneau"
        },
        {
          title: "Peinture / Boiserie",
          url: "/services/peinture-boiserie"
        }
      ]}
    />
  );
};

export default DessousDeToit;
