
import ServicePage from "@/pages/ServicePage";
import { Gallery } from "@/components/Gallery";

const PeintureBoiserie = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/62add123-cfcb-48ec-bdff-d3e37feaa2b4.png",
      alt: "Pinceau et peinture verte",
      description: "Préparation de peinture écologique pour boiserie extérieure"
    },
    {
      id: 2,
      src: "/lovable-uploads/a0f17cc6-7235-4096-8847-0b1ec900dc57.png",
      alt: "Application de vernis sur boiserie",
      description: "Application de vernis protecteur sur bardage bois"
    },
    {
      id: 3,
      src: "/lovable-uploads/581c064c-f47b-43c3-aef2-961b1c7d206f.png",
      alt: "Bardage bois extérieur",
      description: "Bardage bois après traitement et protection"
    },
    {
      id: 4,
      src: "/lovable-uploads/6ea5183e-5767-4638-8781-f8c0c85b062f.png",
      alt: "Application de vernis sur terrasse",
      description: "Entretien et protection d'une terrasse en bois"
    }
  ];

  return (
    <ServicePage
      title="Peinture & Boiserie"
      description="Services de peinture extérieure et traitement de boiseries à Épinal et dans les Vosges. Protection et embellissement de vos extérieurs."
      keywords="peinture boiserie Épinal, traitement bois extérieur Vosges, peinture extérieure maison, rénovation boiseries, boiserie PVC, rénovation dessous de toits"
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
          
          <h2>Galerie de nos réalisations</h2>
          
          <div className="my-8">
            <Gallery images={galleryImages} className="grid-cols-1 md:grid-cols-2" />
          </div>
          
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
        },
        {
          title: "Dessous de Toit en PVC",
          url: "/services/dessous-de-toit"
        }
      ]}
    />
  );
};

export default PeintureBoiserie;
