
import ServicePage from "@/pages/ServicePage";

const NettoyageCheneau = () => {
  return (
    <ServicePage
      title="Nettoyage de Chéneau"
      description="Service professionnel de nettoyage de chéneaux et gouttières à Épinal et dans les Vosges. Assurez l'évacuation des eaux de pluie."
      keywords="nettoyage chéneau Épinal, débouchage gouttière Vosges, entretien gouttières, nettoyage descente eau"
      heroImage="/service-cheneau.jpg"
      content={
        <>
          <p>
            Les chéneaux et gouttières sont des éléments essentiels de votre toiture, assurant l'évacuation 
            des eaux de pluie. Leur entretien régulier est indispensable pour prévenir les infiltrations 
            et les dommages à votre habitation. RÉNOVATION TECHNI TOIT vous propose un service professionnel 
            de nettoyage et entretien de vos chéneaux.
          </p>
          
          <h2>Pourquoi nettoyer régulièrement vos chéneaux ?</h2>
          
          <p>
            Des chéneaux obstrués peuvent causer de nombreux problèmes :
          </p>
          
          <ul>
            <li>Débordements et ruissellements le long des façades</li>
            <li>Infiltrations d'eau dans les murs et la toiture</li>
            <li>Détérioration des supports de fixation due au poids excessif</li>
            <li>Corrosion prématurée</li>
            <li>Formation de moisissures et développement de végétaux parasites</li>
            <li>Risques de détérioration des fondations par infiltration</li>
          </ul>
          
          <h2>Notre service de nettoyage de chéneaux</h2>
          
          <p>
            Notre intervention comprend :
          </p>
          
          <h3>Nettoyage complet</h3>
          <p>
            Élimination des feuilles, brindilles, mousses et autres débris accumulés 
            dans les chéneaux et les descentes.
          </p>
          
          <h3>Débouchage des descentes</h3>
          <p>
            Utilisation d'équipements spécifiques pour déboucher les conduites obstruées 
            et rétablir un écoulement optimal.
          </p>
          
          <h3>Vérification des fixations</h3>
          <p>
            Contrôle et, si nécessaire, renforcement des supports et crochets de fixation 
            pour assurer la stabilité du système.
          </p>
          
          <h3>Test d'écoulement</h3>
          <p>
            Vérification du bon écoulement de l'eau dans l'ensemble du système d'évacuation.
          </p>
          
          <h3>Petites réparations</h3>
          <p>
            Colmatage des fuites mineures, remplacement de joints défectueux 
            ou de petites sections endommagées.
          </p>
          
          <h2>Fréquence recommandée</h2>
          
          <p>
            Pour un fonctionnement optimal, nous recommandons un nettoyage des chéneaux :
          </p>
          
          <ul>
            <li>Au minimum une fois par an pour les habitations en milieu urbain</li>
            <li>Deux fois par an pour les maisons entourées d'arbres (idéalement à l'automne après la chute des feuilles et au printemps)</li>
            <li>Après des événements climatiques importants (tempêtes, orages violents)</li>
          </ul>
          
          <h2>Notre engagement</h2>
          
          <p>
            RÉNOVATION TECHNI TOIT s'engage à intervenir avec professionnalisme et efficacité :
          </p>
          
          <ul>
            <li>Respect des normes de sécurité durant nos interventions</li>
            <li>Utilisation d'équipements adaptés (échelles sécurisées, équipements de protection)</li>
            <li>Nettoyage soigneux des abords après intervention</li>
            <li>Conseils personnalisés pour l'entretien futur de vos installations</li>
          </ul>
          
          <h2>Remplacement et installation</h2>
          
          <p>
            Si vos chéneaux sont trop endommagés pour être simplement nettoyés, nous pouvons également 
            vous proposer leur remplacement. Nous installons des systèmes de gouttières en zinc, 
            aluminium, cuivre ou PVC, selon vos préférences et les caractéristiques de votre habitation.
          </p>
        </>
      }
      benefits={[
        "Prévention des dégâts des eaux sur la façade et la toiture",
        "Prolongation de la durée de vie de vos chéneaux",
        "Protection des fondations contre les infiltrations",
        "Évitement des débordements et ruissellements",
        "Maintien de l'esthétique de votre habitation",
        "Intervention rapide et efficace"
      ]}
      process={[
        {
          title: "Inspection visuelle",
          description: "Évaluation de l'état de vos chéneaux et identification des zones obstruées."
        },
        {
          title: "Nettoyage manuel",
          description: "Élimination des feuilles, brindilles et débris accumulés dans les gouttières."
        },
        {
          title: "Débouchage des descentes",
          description: "Utilisation d'outils spécifiques pour libérer les descentes d'eau pluviale."
        },
        {
          title: "Vérification et réparations",
          description: "Contrôle des fixations et réparation des petites fuites si nécessaire."
        },
        {
          title: "Test d'écoulement",
          description: "Vérification du bon fonctionnement du système d'évacuation des eaux."
        }
      ]}
      relatedServices={[
        {
          title: "Démoussage & Nettoyage toiture",
          url: "/services/demoussage-nettoyage-toiture"
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

export default NettoyageCheneau;
