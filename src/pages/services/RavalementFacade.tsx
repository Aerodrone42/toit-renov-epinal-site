
import ServicePage from "@/pages/ServicePage";

const RavalementFacade = () => {
  return (
    <ServicePage
      title="Ravalement de Façade"
      description="Transformez l'apparence de votre maison avec nos services professionnels de ravalement de façade à Épinal et dans les Vosges."
      keywords="ravalement façade Épinal, rénovation façade Vosges, peinture façade 88, nettoyage façade maison"
      heroImage="/service-facade.jpg"
      content={
        <>
          <p>
            Le ravalement de façade est bien plus qu'une simple question d'esthétique. C'est un entretien essentiel 
            qui protège votre habitation contre les agressions extérieures et valorise votre patrimoine immobilier.
            RÉNOVATION TECHNI TOIT vous propose des solutions complètes pour rénover et embellir les façades 
            de votre maison dans les Vosges.
          </p>
          
          <h2>Pourquoi rénover votre façade ?</h2>
          
          <p>
            Une façade en bon état n'est pas seulement belle à regarder, elle joue également un rôle crucial dans :
          </p>
          
          <ul>
            <li>La protection contre l'humidité et les intempéries</li>
            <li>L'isolation thermique de votre habitation</li>
            <li>La prévention des fissures et infiltrations</li>
            <li>La valorisation de votre bien immobilier</li>
            <li>L'amélioration de votre cadre de vie</li>
          </ul>
          
          <h2>Nos services de ravalement de façade</h2>
          
          <p>
            Nous proposons une gamme complète de prestations adaptées à tous les types de façades :
          </p>
          
          <h3>Nettoyage de façade</h3>
          <p>
            Élimination des salissures, mousses, lichens et pollutions diverses par nettoyage haute pression 
            ou par procédés chimiques adaptés au support.
          </p>
          
          <h3>Traitement des fissures</h3>
          <p>
            Repérage et réparation des fissures, rebouchage des trous et imperfections pour retrouver 
            un support sain et stable.
          </p>
          
          <h3>Peinture de façade</h3>
          <p>
            Application de peintures de qualité professionnelle, résistantes aux UV et aux intempéries, 
            disponibles dans un large choix de teintes.
          </p>
          
          <h3>Enduit décoratif</h3>
          <p>
            Pose d'enduits traditionnels ou modernes selon vos préférences et le style architectural 
            de votre habitation.
          </p>
          
          <h3>Imperméabilisation</h3>
          <p>
            Traitement hydrofuge pour protéger votre façade contre l'humidité tout en lui permettant de "respirer".
          </p>
          
          <h2>Notre approche personnalisée</h2>
          
          <p>
            Chaque façade est unique et nécessite un traitement adapté. C'est pourquoi nous commençons toujours 
            par un diagnostic approfondi qui nous permet de vous proposer les solutions les plus adaptées à votre 
            situation. Nos artisans qualifiés sélectionnent soigneusement les techniques et matériaux en fonction 
            du type de support (pierre, brique, béton, crépi...) et de l'environnement de votre habitation.
          </p>
          
          <h2>Quand envisager un ravalement de façade ?</h2>
          
          <p>
            Généralement, un ravalement est recommandé tous les 10 à 15 ans, mais plusieurs signes 
            peuvent indiquer qu'il est temps d'intervenir :
          </p>
          
          <ul>
            <li>Apparition de fissures ou de décollements d'enduit</li>
            <li>Développement de mousses ou moisissures</li>
            <li>Décoloration importante ou traces d'humidité</li>
            <li>Enduit qui s'effrite au toucher</li>
            <li>Sensation de parois froides à l'intérieur (signe d'une isolation dégradée)</li>
          </ul>
        </>
      }
      benefits={[
        "Amélioration de l'aspect esthétique de votre maison",
        "Protection durable contre les intempéries",
        "Amélioration de l'isolation thermique",
        "Prévention des infiltrations d'eau",
        "Valorisation de votre patrimoine immobilier",
        "Économies d'énergie potentielles"
      ]}
      process={[
        {
          title: "Inspection et diagnostic",
          description: "Analyse détaillée de l'état de votre façade et identification des travaux nécessaires."
        },
        {
          title: "Proposition et devis",
          description: "Élaboration d'une solution sur mesure avec un devis transparent et détaillé."
        },
        {
          title: "Préparation du support",
          description: "Nettoyage, traitement des fissures et préparation de la surface pour garantir une adhérence optimale."
        },
        {
          title: "Application des revêtements",
          description: "Mise en œuvre des enduits, peintures ou autres traitements selon les spécificités du projet."
        },
        {
          title: "Contrôle qualité",
          description: "Vérification finale pour s'assurer que le résultat répond parfaitement à vos attentes."
        }
      ]}
      relatedServices={[
        {
          title: "Peinture / Boiserie",
          url: "/services/peinture-boiserie"
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

export default RavalementFacade;
