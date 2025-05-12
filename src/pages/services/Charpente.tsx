
import ServicePage from "@/pages/ServicePage";
import { Gallery } from "@/components/Gallery";

const Charpente = () => {
  // Images pour la galerie
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/adfd3d61-ef8d-44ea-88e7-d775679cab8f.png",
      alt: "Rénovation de charpente traditionnelle",
      description: "Installation d'une nouvelle charpente en bois sur une maison ancienne"
    },
    {
      id: 2,
      src: "/lovable-uploads/89220e48-c552-4535-a162-de79831d070d.png",
      alt: "Ossature bois et charpente industrielle",
      description: "Structure de charpente industrielle sur une nouvelle construction en briques"
    },
    {
      id: 3,
      src: "/lovable-uploads/1be4618f-d4b4-4bf3-adbe-f29442ec36a5.png",
      alt: "Détail de charpente en bois",
      description: "Vue intérieure d'une charpente traditionnelle en bois avec isolation"
    },
    {
      id: 4,
      src: "/lovable-uploads/6c072215-81fa-4507-a838-e4b47673496e.png",
      alt: "Toiture et fenêtre de toit",
      description: "Toiture en tuiles avec fenêtres de toit après installation de la charpente"
    }
  ];

  return (
    <ServicePage
      title="Charpente"
      description="Services professionnels de réparation, traitement et rénovation de charpente à Épinal et dans les Vosges. Expertise et savoir-faire artisanal."
      keywords="charpente Épinal, réparation charpente Vosges, traitement charpente, artisan charpentier 88"
      heroImage="/service-charpente.jpg"
      content={
        <>
          <p>
            La charpente est l'ossature de votre toiture, un élément structurel essentiel à la solidité 
            et à la durabilité de votre habitation. RÉNOVATION TECHNI TOIT intervient pour toutes les 
            opérations de réparation, traitement et rénovation de charpente dans les Vosges.
          </p>
          
          {/* Ajout de la galerie de photos */}
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-6">Nos réalisations</h2>
            <Gallery images={galleryImages} />
          </div>
          
          <h2>Nos services de charpente</h2>
          
          <p>
            Nous proposons une gamme complète de prestations liées à la charpente :
          </p>
          
          <h3>Diagnostic et expertise</h3>
          <p>
            Évaluation précise de l'état de votre charpente, détection des problèmes structurels, 
            identification des attaques d'insectes ou champignons.
          </p>
          
          <h3>Réparation de charpente</h3>
          <p>
            Remplacement des pièces endommagées, renforcement des structures affaiblies, 
            consolidation des assemblages.
          </p>
          
          <h3>Traitement préventif et curatif</h3>
          <p>
            Élimination des insectes xylophages (capricornes, vrillettes), traitement contre les 
            champignons lignivores (mérule, coniophore), application de produits préventifs.
          </p>
          
          <h3>Rénovation complète</h3>
          <p>
            Reconstruction partielle ou totale de charpentes vétustes, adaptation de structures 
            existantes pour aménagement de combles.
          </p>
          
          <h3>Création de charpentes neuves</h3>
          <p>
            Conception et réalisation de charpentes traditionnelles ou industrialisées 
            pour extensions, garages, dépendances.
          </p>
          
          <h2>Les problèmes courants de charpente</h2>
          
          <p>
            Plusieurs signes peuvent indiquer des problèmes au niveau de votre charpente :
          </p>
          
          <ul>
            <li>Affaissement visible de la toiture</li>
            <li>Présence de sciure ou vermoulure (signe d'insectes xylophages)</li>
            <li>Traces d'humidité ou moisissures sur le bois</li>
            <li>Craquements inhabituels</li>
            <li>Déformation des murs ou plafonds</li>
            <li>Difficultés à ouvrir ou fermer portes et fenêtres</li>
          </ul>
          
          <h2>Notre approche</h2>
          
          <p>
            Pour toute intervention sur votre charpente, nous suivons une méthodologie rigoureuse :
          </p>
          
          <ol>
            <li><strong>Visite technique</strong> : Inspection minutieuse de votre charpente pour évaluer son état général.</li>
            <li><strong>Diagnostic précis</strong> : Identification des pathologies et de leurs causes.</li>
            <li><strong>Solution adaptée</strong> : Proposition d'une méthode d'intervention respectant la structure existante.</li>
            <li><strong>Devis détaillé</strong> : Estimation claire et transparente des travaux à réaliser.</li>
            <li><strong>Réalisation</strong> : Intervention par nos charpentiers qualifiés avec des matériaux de qualité.</li>
            <li><strong>Contrôle qualité</strong> : Vérification de la conformité des travaux réalisés.</li>
          </ol>
          
          <h2>Une affaire de spécialistes</h2>
          
          <p>
            La charpente est un élément complexe qui nécessite l'intervention de professionnels 
            expérimentés. Notre équipe dispose des compétences techniques et du savoir-faire 
            artisanal pour intervenir sur tous types de charpentes, des plus traditionnelles 
            aux plus modernes, dans le respect des règles de l'art.
          </p>
          
          <h2>Matériaux et techniques</h2>
          
          <p>
            Nous travaillons avec différentes essences de bois (chêne, sapin, douglas...) 
            sélectionnées pour leur qualité et leur adéquation avec votre projet. Nous maîtrisons 
            les techniques traditionnelles d'assemblage ainsi que les méthodes modernes 
            de renforcement (connecteurs métalliques, résines...).
          </p>
        </>
      }
      benefits={[
        "Expertise technique spécialisée",
        "Solutions durables et adaptées",
        "Amélioration de la solidité structurelle",
        "Protection contre les parasites du bois",
        "Respect du patrimoine et de l'architecture",
        "Tranquillité d'esprit à long terme"
      ]}
      process={[
        {
          title: "Diagnostic approfondi",
          description: "Inspection minutieuse de votre charpente et identification des problèmes."
        },
        {
          title: "Recommandations techniques",
          description: "Proposition de solutions adaptées à l'état de votre charpente et à vos besoins."
        },
        {
          title: "Devis détaillé",
          description: "Élaboration d'un devis transparent précisant les travaux et matériaux nécessaires."
        },
        {
          title: "Préparation du chantier",
          description: "Installation des protections et équipements de sécurité nécessaires."
        },
        {
          title: "Réalisation des travaux",
          description: "Intervention par nos charpentiers qualifiés selon les règles de l'art."
        },
        {
          title: "Contrôle final",
          description: "Vérification de la qualité des travaux et de la solidité de la structure."
        }
      ]}
      relatedServices={[
        {
          title: "Changement de toiture",
          url: "/services/changement-toiture"
        },
        {
          title: "Rénovation de toiture",
          url: "/services/renovation-toiture"
        },
        {
          title: "Réparations diverses",
          url: "/services/reparations-diverses"
        }
      ]}
    />
  );
};

export default Charpente;
