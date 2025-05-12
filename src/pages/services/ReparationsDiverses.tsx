
import ServicePage from "@/pages/ServicePage";

const ReparationsDiverses = () => {
  return (
    <ServicePage
      title="Réparations Diverses"
      description="Service de réparations de toiture et façade à Épinal et dans les Vosges. Interventions rapides pour tous problèmes liés à votre couverture."
      keywords="réparation toiture Épinal, fuite toiture Vosges, réparation urgente toit, artisan couvreur dépannage"
      heroImage="/service-reparations.jpg"
      content={
        <>
          <p>
            Les petits problèmes de toiture ou de façade peuvent rapidement s'aggraver s'ils ne sont pas traités à temps. 
            RÉNOVATION TECHNI TOIT vous propose un service réactif de réparations diverses pour tous les éléments 
            de votre toiture et de votre façade.
          </p>
          
          <h2>Nos services de réparation</h2>
          
          <p>
            Nous intervenons pour tous types de problèmes :
          </p>
          
          <h3>Réparations de toiture</h3>
          
          <ul>
            <li>Remplacement de tuiles ou ardoises cassées, déplacées ou manquantes</li>
            <li>Réparation de fuites ponctuelles</li>
            <li>Réfection des points singuliers (faîtage, arêtiers, noues, solins)</li>
            <li>Reprise d'étanchéité autour des cheminées et fenêtres de toit</li>
            <li>Remplacement ou réparation de zinguerie (gouttières, descentes)</li>
            <li>Réparations suite à des dommages causés par des intempéries</li>
          </ul>
          
          <h3>Réparations de façade</h3>
          
          <ul>
            <li>Reprise de fissures et microfissures</li>
            <li>Réparation d'enduits écaillés ou dégradés</li>
            <li>Traitement des remontées d'humidité</li>
            <li>Remplacement de briques ou pierres abîmées</li>
            <li>Réfection de joints défectueux</li>
            <li>Reprise de peinture écaillée</li>
          </ul>
          
          <h2>Pourquoi agir rapidement ?</h2>
          
          <p>
            Une intervention rapide présente plusieurs avantages :
          </p>
          
          <ul>
            <li>Évite l'aggravation des dégâts et les réparations plus coûteuses</li>
            <li>Prévient les infiltrations d'eau et les dommages intérieurs</li>
            <li>Maintient la performance énergétique de votre habitation</li>
            <li>Préserve l'esthétique et la valeur de votre bien</li>
            <li>Garantit votre tranquillité d'esprit</li>
          </ul>
          
          <h2>Notre approche</h2>
          
          <p>
            Pour toute demande de réparation, nous suivons une démarche structurée :
          </p>
          
          <ol>
            <li><strong>Diagnostic précis</strong> : Identification de l'origine du problème et non pas seulement de ses symptômes.</li>
            <li><strong>Solution adaptée</strong> : Proposition d'une méthode de réparation efficace et durable.</li>
            <li><strong>Intervention soignée</strong> : Réalisation des travaux dans les règles de l'art par nos artisans qualifiés.</li>
            <li><strong>Contrôle qualité</strong> : Vérification de l'efficacité de la réparation (tests d'étanchéité si nécessaire).</li>
            <li><strong>Conseils préventifs</strong> : Recommandations pour éviter que le problème ne se reproduise.</li>
          </ol>
          
          <h2>Interventions d'urgence</h2>
          
          <p>
            En cas de problème urgent (fuite importante, dégâts suite à une tempête...), 
            nous nous efforçons d'intervenir dans les plus brefs délais pour limiter les dommages. 
            N'hésitez pas à nous contacter directement par téléphone pour une réponse rapide.
          </p>
          
          <h2>Garantie des réparations</h2>
          
          <p>
            Toutes nos réparations sont garanties et réalisées avec des matériaux de qualité 
            professionnelle. Notre objectif est toujours d'apporter une solution durable et non 
            un simple "pansement" temporaire.
          </p>
        </>
      }
      benefits={[
        "Intervention rapide",
        "Diagnostic précis de l'origine du problème",
        "Solutions durables et non temporaires",
        "Prévention des dégâts plus importants",
        "Artisans qualifiés et expérimentés",
        "Garantie sur les réparations effectuées"
      ]}
      process={[
        {
          title: "Prise de contact et diagnostic",
          description: "Évaluation rapide de la nature et de l'urgence du problème, par téléphone ou sur place."
        },
        {
          title: "Proposition de solution",
          description: "Explication claire du problème identifié et des réparations à effectuer."
        },
        {
          title: "Préparation et intervention",
          description: "Mobilisation rapide avec les matériaux et équipements nécessaires."
        },
        {
          title: "Réalisation des réparations",
          description: "Travaux effectués avec soin par nos artisans qualifiés."
        },
        {
          title: "Contrôle et validation",
          description: "Vérification de la qualité et de l'efficacité des réparations réalisées."
        }
      ]}
      relatedServices={[
        {
          title: "Démoussage & Nettoyage toiture",
          url: "/services/demoussage-nettoyage-toiture"
        },
        {
          title: "Nettoyage de chéneau",
          url: "/services/nettoyage-cheneau"
        },
        {
          title: "Ravalement de façade",
          url: "/services/ravalement-facade"
        }
      ]}
    />
  );
};

export default ReparationsDiverses;
