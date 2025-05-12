
import ServicePage from "@/pages/ServicePage";

const PeintureBoiserie = () => {
  return (
    <ServicePage
      title="Peinture & Boiserie"
      description="Services de peinture extérieure et traitement de boiseries à Épinal et dans les Vosges. Protection et embellissement de vos extérieurs."
      keywords="peinture boiserie Épinal, traitement bois extérieur Vosges, peinture extérieure maison, rénovation boiseries"
      heroImage="/service-peinture.jpg"
      content={
        <>
          <p>
            La peinture et le traitement des boiseries extérieures sont essentiels pour préserver l'esthétique 
            et la durabilité de votre habitation. RÉNOVATION TECHNI TOIT vous propose des solutions adaptées 
            pour protéger et embellir tous vos éléments en bois exposés aux intempéries.
          </p>
          
          <h2>Nos services de peinture et traitement de boiseries</h2>
          
          <p>
            Notre équipe d'artisans qualifiés intervient sur tous types d'éléments en bois extérieurs :
          </p>
          
          <ul>
            <li>Volets et persiennes</li>
            <li>Portes et fenêtres</li>
            <li>Bardages bois</li>
            <li>Avant-toits et débords de toiture</li>
            <li>Terrasses et balcons</li>
            <li>Pergolas et carports</li>
            <li>Clôtures et portails</li>
          </ul>
          
          <h2>Notre processus de travail</h2>
          
          <p>
            Pour garantir un résultat de qualité et une protection durable, nous suivons un processus rigoureux :
          </p>
          
          <ol>
            <li><strong>Diagnostic</strong> : Évaluation de l'état du bois et identification des traitements nécessaires.</li>
            <li><strong>Préparation</strong> : Nettoyage, ponçage, décapage des anciennes peintures si nécessaire.</li>
            <li><strong>Traitement curatif</strong> : Élimination des parasites (insectes xylophages, champignons) si présents.</li>
            <li><strong>Traitement préventif</strong> : Application d'un produit de protection contre les insectes et champignons.</li>
            <li><strong>Finition</strong> : Application de peinture, lasure ou vernis selon vos préférences et les besoins du support.</li>
          </ol>
          
          <h2>Les avantages d'un entretien régulier</h2>
          
          <p>
            Entretenir régulièrement vos boiseries extérieures présente de nombreux bénéfices :
          </p>
          
          <ul>
            <li>Protection contre les intempéries (pluie, UV, gel)</li>
            <li>Prévention contre les attaques d'insectes et champignons</li>
            <li>Préservation de l'aspect esthétique</li>
            <li>Prolongation de la durée de vie des éléments en bois</li>
            <li>Économies à long terme en évitant des remplacements coûteux</li>
          </ul>
          
          <h2>Notre engagement</h2>
          
          <p>
            RÉNOVATION TECHNI TOIT s'engage à utiliser des produits de qualité professionnelle, respectueux 
            de l'environnement et adaptés aux conditions climatiques de notre région. Nous vous conseillons 
            sur les meilleures solutions en fonction de vos besoins et de votre budget.
          </p>
        </>
      }
      benefits={[
        "Protection contre les intempéries et les UV",
        "Prévention des attaques d'insectes et champignons",
        "Embellissement de votre extérieur",
        "Prolongation de la durée de vie de vos boiseries",
        "Valorisation de votre patrimoine",
        "Travail soigné par des artisans qualifiés"
      ]}
      relatedServices={[
        {
          title: "Ravalement de façade",
          url: "/services/ravalement-facade"
        },
        {
          title: "Rénovation de toiture",
          url: "/services/renovation-toiture"
        }
      ]}
    />
  );
};

export default PeintureBoiserie;
