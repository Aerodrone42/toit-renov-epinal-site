
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact - Demande de devis gratuit"
        description="Contactez RÉNOVATION TECHNI TOIT pour tous vos travaux de toiture et rénovation extérieure. Devis gratuit à Épinal et dans les Vosges."
        keywords="contact couvreur Épinal, devis toiture Vosges, artisan couvreur contact, devis rénovation toiture"
      />

      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-roofing-anthracite py-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Vous souhaitez obtenir un devis ou des informations sur nos services ? 
              N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Informations de contact */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-roofing-red/10 p-3 rounded-full mr-4">
                        <Phone size={20} className="text-roofing-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Téléphone</h3>
                        <a href="tel:0602327557" className="text-roofing-red hover:underline text-lg">
                          06 02 32 75 57
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-roofing-red/10 p-3 rounded-full mr-4">
                        <Mail size={20} className="text-roofing-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Email</h3>
                        <a href="mailto:chatellepierre6@gmail.com" className="text-gray-600 hover:underline break-words">
                          chatellepierre6@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-roofing-red/10 p-3 rounded-full mr-4">
                        <MapPin size={20} className="text-roofing-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Adresse</h3>
                        <address className="not-italic text-gray-600">
                          36 rue de Lorraine<br />
                          88150 IGNEY
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-roofing-red/10 p-3 rounded-full mr-4">
                        <Clock size={20} className="text-roofing-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Horaires</h3>
                        <p className="text-gray-600">
                          Lundi - Vendredi: 8h00 - 19h00<br />
                          Samedi: 8h00 - 17h00<br />
                          Dimanche: Fermé
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-lg mb-3">Zone d'intervention</h3>
                    <p className="text-gray-600">
                      Nous intervenons à Épinal (88000) et dans un rayon de 50 km :
                      Golbey, Chantraine, Thaon-les-Vosges, Dogneville, Chavelot, 
                      Deyvillers, Saint-Laurent et toutes les communes environnantes des Vosges.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Formulaire de contact */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">Formulaire de contact</h2>
                  <p className="mb-6 text-gray-600">
                    Remplissez ce formulaire pour nous contacter. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8">
          <div className="container-custom">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10574.067733522797!2d6.419470225975336!3d48.248806347913195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4793a16eadb2c6a1%3A0x406f69c2f410da0!2s36%20Rue%20de%20Lorraine%2C%2088150%20Igney!5e0!3m2!1sfr!2sfr!4v1715557936800!5m2!1sfr!2sfr"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation RÉNOVATION TECHNI TOIT"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
