
import ServicePage from "@/pages/ServicePage";
import { Gallery } from "@/components/Gallery";

const DemoussageToiture = () => {
  const beforeAfterImages = [
    {
      id: 1,
      src: "/lovable-uploads/cab8e75d-f56b-4872-a981-ea06cd3c5e5c.png",
      alt: "Démonstration de démoussage avant/après - moitié de toiture nettoyée",
      description: "Avant/après : Impact visible du traitement de démoussage sur les tuiles"
    },
    {
      id: 2,
      src: "/lovable-uploads/789b04e7-5d6c-4f00-ab64-cec795e87560.png",
      alt: "Contraste entre tuiles nettoyées et toiture avec mousse",
      description: "Résultat saisissant du nettoyage professionnel de toiture"
    }
  ];
  
  const equipmentImages = [
    {
      id: 3,
      src: "/lovable-uploads/4464ece2-75b1-4b8f-ac36-41f1bd807eb3.png",
      alt: "Équipement de nettoyage de toiture",
      description: "Notre équipement professionnel pour le traitement des toitures"
    },
    {
      id: 4,
      src: "/lovable-uploads/338cf9e1-9eae-49ca-928e-6a0a4e13fd56.png",
      alt: "Matériel technique pour le démoussage",
      description: "Matériel spécialisé pour un traitement efficace"
    }
  ];
  
  return (
    <ServicePage
      title="Démoussage & Nettoyage Toiture"
      description="Service professionnel de démoussage et nettoyage de toiture à Épinal et dans les Vosges. Prolongez la durée de vie de votre toiture."
      keywords="démoussage toiture Épinal, nettoyage toiture Vosges, traitement anti-mousse toiture, démoussage 88"
      heroImage="/service-demoussage.jpg"
      content={
        <>
          <p>
            Le démoussage et le nettoyage de toiture sont des opérations essentielles pour maintenir l'intégrité et prolonger 
            la durée de vie de votre couverture. À RÉNOVATION TECHNI TOIT, nous proposons un service complet d'entretien 
            de toiture pour les habitations dans la région d'Épinal et ses environs.
          </p>
          
          {/* Ajout de la galerie Avant/Après */}
          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Avant/Après : L'efficacité de notre démoussage</h3>
            <Gallery images={beforeAfterImages} />
          </div>
          
          <h2>Pourquoi entretenir votre toiture ?</h2>
          
          <p>
            Avec le temps et les intempéries, votre toiture se couvre de mousses, lichens, algues et autres végétaux. 
            Ces organismes retiennent l'humidité, s'infiltrent entre les tuiles ou ardoises, et peuvent causer des 
            dommages importants :
          </p>
          
          <ul>
            <li>Dégradation prématurée des matériaux de couverture</li>
            <li>Fragilisation de l'étanchéité</li>
            <li>Risques d'infiltration d'eau</li>
            <li>Détérioration de l'isolation</li>
            <li>Aspect inesthétique de votre habitation</li>
          </ul>
          
          <h2>Notre solution de démoussage</h2>
          
          <p>
            Nous proposons un traitement complet en plusieurs étapes pour nettoyer efficacement votre toiture 
            et la protéger durablement :
          </p>
          
          <ol>
            <li>
              <strong>Inspection détaillée</strong> : Nous commençons par une évaluation complète de l'état de votre toiture 
              pour identifier les zones à traiter prioritairement.
            </li>
            <li>
              <strong>Nettoyage mécanique</strong> : Élimination des mousses, lichens et débris accumulés par grattage manuel 
              ou à l'aide d'équipements spécifiques adaptés à chaque type de couverture.
            </li>
            <li>
              <strong>Nettoyage haute pression</strong> : Si nécessaire, nous utilisons un nettoyeur haute pression 
              avec une pression adaptée pour ne pas endommager les matériaux.
            </li>
            <li>
              <strong>Application d'un traitement anti-mousse</strong> : Nous appliquons un produit professionnel 
              non nocif pour l'environnement qui élimine les micro-organismes restants.
            </li>
            <li>
              <strong>Traitement préventif</strong> : Application d'un produit hydrofuge qui protège votre toiture 
              et ralentit considérablement la formation future de mousses et lichens.
            </li>
          </ol>
          
          {/* Ajout de la galerie d'équipements */}
          <div className="my-8">
            <h3 className="text-xl font-semibold mb-4">Notre équipement professionnel</h3>
            <Gallery images={equipmentImages} />
          </div>
          
          <h2>Quand faire démoussser votre toiture ?</h2>
          
          <p>
            Un démoussage de toiture est recommandé :
          </p>
          
          <ul>
            <li>Tous les 3 à 5 ans en entretien préventif</li>
            <li>Dès que vous constatez une présence importante de mousse ou lichens</li>
            <li>Avant des travaux de peinture ou de rénovation</li>
            <li>De préférence au printemps ou en automne pour des conditions météorologiques optimales</li>
          </ul>
          
          <h2>Notre engagement</h2>
          
          <p>
            Chez RÉNOVATION TECHNI TOIT, nous nous engageons à utiliser des techniques adaptées à tous les types 
            de couverture (tuiles, ardoises, fibrociment...) et à respecter l'environnement en utilisant des 
            produits conformes aux réglementations en vigueur. Nos équipes interviennent avec professionnalisme 
            dans le respect des normes de sécurité.
          </p>
        </>
      }
      benefits={[
        "Prolongation de la durée de vie de votre toiture",
        "Prévention des infiltrations et dégâts des eaux",
        "Amélioration de l'aspect esthétique de votre maison",
        "Maintien des performances d'isolation",
        "Économies sur les réparations futures",
        "Protection contre le développement de micro-organismes"
      ]}
      process={[
        {
          title: "Diagnostic gratuit",
          description: "Nous évaluons l'état de votre toiture et identifions les traitements nécessaires."
        },
        {
          title: "Devis détaillé",
          description: "Nous vous fournissons un devis transparent avec toutes les interventions à réaliser."
        },
        {
          title: "Nettoyage et démoussage",
          description: "Nous procédons au nettoyage complet et à l'élimination des mousses et lichens."
        },
        {
          title: "Traitement préventif",
          description: "Application d'un traitement hydrofuge pour protéger durablement votre toiture."
        }
      ]}
      relatedServices={[
        {
          title: "Nettoyage de chéneau",
          url: "/services/nettoyage-cheneau"
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

export default DemoussageToiture;
