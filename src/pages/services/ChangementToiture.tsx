
import ServicePage from "@/pages/ServicePage";

const ChangementToiture = () => {
  return (
    <ServicePage
      title="Changement de Toiture"
      description="Remplacement complet de toiture à Épinal et dans les Vosges. Un nouveau toit pour votre maison, posé par des professionnels qualifiés."
      keywords="changement toiture Épinal, remplacement toiture Vosges, refaire toiture 88, couvreur remplacement tuiles"
      heroImage="/service-changement.jpg"
      content={
        <>
          <p>
            Le changement complet d'une toiture est un investissement important qui garantit la protection 
            de votre habitation pour de nombreuses années. RÉNOVATION TECHNI TOIT vous accompagne dans ce projet 
            d'envergure avec expertise et professionnalisme.
          </p>
          
          <h2>Quand envisager un changement complet de toiture ?</h2>
          
          <p>
            Plusieurs signes indiquent qu'un remplacement complet de votre couverture devient nécessaire :
          </p>
          
          <ul>
            <li>Âge avancé de la toiture (plus de 30-40 ans selon les matériaux)</li>
            <li>Problèmes récurrents d'infiltrations malgré les réparations</li>
            <li>Tuiles ou ardoises qui se brisent facilement ou se déforment</li>
            <li>Affaissement visible de certaines parties de la toiture</li>
            <li>Présence importante de mousse et de lichen malgré les traitements</li>
            <li>Volonté de changer de type de couverture pour des raisons esthétiques ou techniques</li>
          </ul>
          
          <h2>Notre offre de changement de toiture</h2>
          
          <p>
            Nous proposons un service complet qui comprend :
          </p>
          
          <h3>Dépose de l'ancienne couverture</h3>
          <p>
            Démontage méthodique de l'ensemble des éléments de couverture existants (tuiles, ardoises, 
            éléments de zinguerie, etc.).
          </p>
          
          <h3>Diagnostic et traitement de la charpente</h3>
          <p>
            Vérification minutieuse de l'état de la charpente, remplacement des pièces endommagées 
            et traitement préventif contre les insectes et champignons.
          </p>
          
          <h3>Pose d'un écran sous-toiture</h3>
          <p>
            Installation d'une membrane de haute qualité qui renforce l'étanchéité et la durabilité 
            de votre couverture.
          </p>
          
          <h3>Installation du lattage/voligeage</h3>
          <p>
            Mise en place du support adapté au type de couverture choisi.
          </p>
          
          <h3>Pose de la nouvelle couverture</h3>
          <p>
            Installation soignée des nouveaux éléments de couverture (tuiles, ardoises ou autres matériaux) 
            en respectant les règles de l'art.
          </p>
          
          <h3>Réalisation des finitions</h3>
          <p>
            Pose du faîtage, des arêtiers, des solins et autres éléments de finition 
            pour garantir une étanchéité parfaite.
          </p>
          
          <h3>Installation des éléments de zinguerie</h3>
          <p>
            Mise en place des gouttières, descentes d'eau pluviale et autres éléments 
            d'évacuation des eaux.
          </p>
          
          <h2>Le choix des matériaux</h2>
          
          <p>
            Nous vous conseillons dans le choix des matériaux les plus adaptés à votre projet, 
            en tenant compte de l'architecture de votre maison, des contraintes locales 
            (PLU, secteur protégé, etc.) et de vos préférences esthétiques. Nous travaillons 
            avec une large gamme de matériaux de qualité :
          </p>
          
          <ul>
            <li>Tuiles en terre cuite (plates, mécaniques, canal)</li>
            <li>Ardoises naturelles ou synthétiques</li>
            <li>Zinc et autres couvertures métalliques</li>
            <li>Bardeaux bitumés</li>
            <li>Solutions écologiques (bardeaux de bois, toitures végétalisées)</li>
          </ul>
        </>
      }
      benefits={[
        "Protection optimale de votre habitation",
        "Amélioration de l'isolation thermique",
        "Valorisation significative de votre bien immobilier",
        "Solution durable et pérenne",
        "Possibilité d'améliorer l'esthétique de votre maison",
        "Économies d'énergie potentielles"
      ]}
      process={[
        {
          title: "Étude technique préalable",
          description: "Analyse complète de votre toiture existante et étude de faisabilité du projet."
        },
        {
          title: "Conseil et proposition",
          description: "Présentation des différentes options et élaboration d'un devis détaillé."
        },
        {
          title: "Préparation du chantier",
          description: "Installation des protections, échafaudages et équipements de sécurité."
        },
        {
          title: "Dépose de l'ancienne toiture",
          description: "Démontage méthodique et évacuation des matériaux de l'ancienne couverture."
        },
        {
          title: "Traitement de la charpente",
          description: "Réparation ou renforcement de la charpente si nécessaire."
        },
        {
          title: "Pose de la nouvelle couverture",
          description: "Installation de l'écran sous-toiture et des nouveaux éléments de couverture."
        },
        {
          title: "Finitions et contrôle",
          description: "Réalisation des finitions, vérification de l'étanchéité et nettoyage du chantier."
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
          title: "Charpente",
          url: "/services/charpente"
        }
      ]}
    />
  );
};

export default ChangementToiture;
