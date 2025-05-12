
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ServicePageProps {
  title: string;
  description: string;
  keywords: string;
  heroImage: string;
  content: ReactNode;
  benefits?: string[];
  process?: {
    title: string;
    description: string;
  }[];
  relatedServices?: {
    title: string;
    url: string;
  }[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  keywords,
  heroImage,
  content,
  benefits,
  process,
  relatedServices
}) => {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <div className="relative bg-roofing-anthracite h-[40vh] md:h-[50vh] flex items-center">
          <div className="absolute inset-0 bg-black/60 z-0">
            <img 
              src={heroImage} 
              alt={title} 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/80">
              {description}
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contenu principal */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  {content}
                </div>

                {/* Avantages */}
                {benefits && benefits.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Les avantages</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="text-roofing-red mr-2 mt-1 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Processus */}
                {process && process.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Notre méthode de travail</h2>
                    <div className="space-y-6">
                      {process.map((step, index) => (
                        <div key={index} className="flex">
                          <div className="mr-6">
                            <div className="w-12 h-12 rounded-full bg-roofing-red text-white flex items-center justify-center font-bold text-lg">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-12 bg-roofing-anthracite text-white p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Besoin de ce service ?</h2>
                  <p className="mb-6">
                    Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et personnalisé.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-roofing-red hover:bg-roofing-red/90 text-white">
                      Demander un devis
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Form de contact */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Demande d'information</h3>
                  <ContactForm compact />
                </div>

                {/* Services liés */}
                {relatedServices && relatedServices.length > 0 && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">Services associés</h3>
                    <ul className="space-y-2">
                      {relatedServices.map((service, index) => (
                        <li key={index}>
                          <Link 
                            to={service.url}
                            className="flex items-center text-roofing-anthracite hover:text-roofing-red transition-colors"
                          >
                            <span className="mr-2">→</span>
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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

export default ServicePage;
