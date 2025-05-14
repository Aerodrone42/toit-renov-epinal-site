
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Wrench, Home, Paintbrush, Building2, Workflow } from "lucide-react";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Entreprise de couverture et rénovation extérieure à Épinal"
        description="RÉNOVATION TECHNI TOIT, votre artisan couvreur près d'Épinal. Démoussage, nettoyage, rénovation de toiture, ravalement de façade dans les Vosges."
        keywords="rénovation toiture Épinal, nettoyage toiture Épinal, artisan couvreur Vosges, démoussage toiture 88, réparation de toiture Épinal"
      />

      <Header />

      <main>
        <HeroBanner />

        {/* Section À propos */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="section-title">Artisan couvreur dans les Vosges</h2>
                <p className="mb-4">
                  RÉNOVATION TECHNI TOIT est une entreprise de couverture et rénovation extérieure basée à Igney et intervenant principalement à Épinal et dans un rayon de 50 km.
                </p>
                <p className="mb-6">
                  Notre métier, c'est la passion de l'artisanat et le souci du travail bien fait. 
                  Que vous ayez besoin d'un simple démoussage de toiture ou d'une rénovation complète, 
                  notre équipe d'artisans qualifiés met son expertise à votre service.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <Check size={20} className="text-roofing-red mr-2 mt-1 flex-shrink-0" />
                    <span>Devis gratuit et personnalisé</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={20} className="text-roofing-red mr-2 mt-1 flex-shrink-0" />
                    <span>Intervention rapide</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={20} className="text-roofing-red mr-2 mt-1 flex-shrink-0" />
                    <span>Artisans qualifiés</span>
                  </div>
                  <div className="flex items-start">
                    <Check size={20} className="text-roofing-red mr-2 mt-1 flex-shrink-0" />
                    <span>Assurance décennale</span>
                  </div>
                </div>

                <Link to="/contact" className="block mb-6">
                  <Button className="btn-primary">Nous contacter</Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/about-image.jpg" 
                    alt="Rénovation de toiture" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-roofing-red text-white p-4 rounded-lg shadow-lg hidden md:flex items-center">
                  <div className="mr-3">
                    <span className="block font-bold text-xl">15+</span>
                  </div>
                  <span>Années d'expérience<br />dans le métier</span>
                </div>
              </div>
            </div>

            {/* Section Rénovation de toiture - Mise en page améliorée */}
            <div className="mt-12 py-6 border-t border-b border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Rénovation de toiture</h3>
                  <p className="text-gray-600 mb-4">
                    Experts en rénovation de toiture dans les Vosges, nous intervenons pour tous types de réparations
                    et remises à neuf de votre couverture. Notre équipe qualifiée garantit un travail soigné et durable.
                  </p>
                  <Link to="/services/renovation-toiture">
                    <Button className="btn-primary">En savoir plus</Button>
                  </Link>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/eaa6d0be-0959-43a5-a5cc-1b11af1f94b6.png"
                    alt="Rénovation de toiture" 
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                    style={{maxHeight: "350px"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services */}
        <section className="py-16 bg-gray-100">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Nos Services</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                RÉNOVATION TECHNI TOIT vous propose une large gamme de services pour l'entretien
                et la rénovation de votre toiture et façade
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Démoussage & Nettoyage"
                description="Élimination des mousses, lichens et autres végétaux qui dégradent votre toiture et réduisent sa durée de vie."
                icon={Home}
                to="/services/demoussage-nettoyage-toiture"
                imageUrl="/lovable-uploads/ae4a9b9f-0004-4898-a39d-3b18ef027063.png"
              />
              
              <ServiceCard
                title="Peinture / Boiserie"
                description="Protection et embellissement de vos boiseries extérieures avec des traitements de qualité adaptés aux conditions climatiques."
                icon={Paintbrush}
                to="/services/peinture-boiserie"
                imageUrl="/lovable-uploads/b59f52be-dc5d-4494-94ab-0255681217ac.png"
              />
              
              <ServiceCard
                title="Ravalement de façade"
                description="Nettoyage et rénovation de vos façades pour redonner éclat et protection à votre habitation."
                icon={Building2}
                to="/services/ravalement-facade"
                imageUrl="/lovable-uploads/894ad7f0-315f-4c5f-af4f-d61e895d0d41.png"
              />
              
              <ServiceCard
                title="Rénovation de toiture"
                description="Remplacement des tuiles cassées, traitement de la charpente et réparation de l'étanchéité pour une toiture comme neuve."
                icon={Wrench}
                to="/services/renovation-toiture"
                imageUrl="/lovable-uploads/eaa6d0be-0959-43a5-a5cc-1b11af1f94b6.png"
              />
              
              <ServiceCard
                title="Changement de toiture"
                description="Installation complète d'une nouvelle toiture avec des matériaux de qualité pour une protection optimale de votre habitation."
                icon={Home}
                to="/services/changement-toiture"
                imageUrl="/lovable-uploads/9cace31b-af24-4a82-ba1e-2a4e4319a027.png"
              />
              
              <ServiceCard
                title="Réparations diverses"
                description="Interventions ponctuelles pour réparer les dégâts sur votre toiture ou façade suite à des intempéries ou à l'usure."
                icon={Workflow}
                to="/services/reparations-diverses"
                imageUrl="/lovable-uploads/3c534ef2-f5fc-4793-b0a9-0be15a22f2a0.png"
              />
            </div>

            <div className="text-center mt-12">
              <Link to="/services/demoussage-nettoyage-toiture">
                <Button className="btn-secondary">Voir tous nos services</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section Pourquoi nous choisir */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                Pourquoi choisir RÉNOVATION TECHNI TOIT ?
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Faire appel à notre entreprise, c'est l'assurance d'un travail soigné et durable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-roofing-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-roofing-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Assurance décennale</h3>
                <p className="text-gray-600">
                  Garantie de qualité et tranquillité d'esprit pour tous vos projets
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-roofing-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-roofing-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Réactivité</h3>
                <p className="text-gray-600">
                  Intervention rapide pour tous vos besoins urgents ou planifiés
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-roofing-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-roofing-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Artisans qualifiés</h3>
                <p className="text-gray-600">
                  Équipe expérimentée et formée aux techniques modernes
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-roofing-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-roofing-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 112.76 3.77c.08-.65.14-1.3.14-1.77V6a4 4 0 00-8 0v7H4.5m19-12h-12a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Devis gratuit</h3>
                <p className="text-gray-600">
                  Estimation précise et sans engagement pour tous vos projets
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Témoignages */}
        <section className="py-16 bg-gray-100">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Ce que disent nos clients</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                La satisfaction de nos clients est notre meilleure récompense
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                name="Michel D."
                location="Épinal"
                text="Travail impeccable pour le démoussage de ma toiture et le nettoyage des chéneaux. Équipe ponctuelle et professionnelle. Je recommande vivement."
                rating={5}
              />
              
              <TestimonialCard
                name="Sophie L."
                location="Golbey"
                text="Suite à une fuite, RÉNOVATION TECHNI TOIT est intervenu rapidement pour réparer notre toiture. Service rapide et efficace, merci !"
                rating={5}
              />
              
              <TestimonialCard
                name="Jean-Pierre M."
                location="Thaon-les-Vosges"
                text="Très satisfait du ravalement de façade réalisé par cette entreprise. Travail soigné, respect des délais et équipe à l'écoute."
                rating={4}
              />
            </div>
          </div>
        </section>

        {/* Section Contact Rapide */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Contactez-nous</h2>
                <p className="mb-6">
                  Vous avez des questions ou vous souhaitez un devis gratuit ? N'hésitez pas à nous contacter. 
                  Notre équipe vous répondra dans les plus brefs délais.
                </p>
                
                <div className="bg-roofing-anthracite/5 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-lg mb-4">Zone d'intervention</h3>
                  <p className="mb-2">
                    Nous intervenons à Épinal (88000) et dans un rayon de 50 km :
                  </p>
                  <p className="text-gray-600">
                    Golbey, Chantraine, Thaon-les-Vosges, Dogneville, Chavelot, Deyvillers, 
                    Saint-Laurent et toutes les communes environnantes des Vosges.
                  </p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border">
                    <p className="font-medium mb-1">Téléphone</p>
                    <a href="tel:0602327557" className="text-roofing-red text-lg font-bold hover:underline">
                      06 02 32 75 57
                    </a>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-sm border">
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:chatellepierre6@gmail.com" className="text-roofing-red hover:underline break-words">
                      chatellepierre6@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-6">Formulaire de contact rapide</h3>
                <ContactForm compact />
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default Index;
