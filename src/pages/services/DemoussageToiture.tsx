
import ServicePage from "@/pages/ServicePage";

const DemoussageToiture = () => {
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
