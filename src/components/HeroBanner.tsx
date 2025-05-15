
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroBanner = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative bg-gray-900 h-[60vh] md:h-[70vh] flex items-center">
      {/* Image background with simplified loading */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/lovable-uploads/b89fcd9b-217c-47a7-8722-43a58454d8e1.png" 
          alt="Camion RÉNOVATION TECHNI TOIT" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>
      
      {/* Contenu */}
      <div className="container-custom relative z-20 text-white pt-40 md:pt-32">
        {/* Logo/Titre en haut pour mobile */}
        {isMobile && (
          <div className="mb-6">
            <span className="text-xl font-bold text-roofing-red bg-black/50 py-1 px-2 rounded">
              RÉNOVATION TECHNI TOIT
            </span>
          </div>
        )}
        
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Expert en rénovation de toiture dans les Vosges
          </h1>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-200">
            Rénovation, démoussage, nettoyage... RÉNOVATION TECHNI TOIT intervient dans un rayon de 50km autour d'Épinal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link to="/contact">
              <Button className="btn-primary text-base md:text-lg px-4 md:px-8 py-3 md:py-6 w-full sm:w-auto">Demander un devis gratuit</Button>
            </Link>
            <Link to="/services/renovation-toiture">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-base md:text-lg px-4 md:px-8 py-3 md:py-6 w-full sm:w-auto mt-2 sm:mt-0">
                Découvrir nos services
              </Button>
            </Link>
          </div>
          
          {/* Points clés */}
          <div className="mt-6">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <span className="text-roofing-red mr-2">✓</span>
                <span>Intervention rapide</span>
              </div>
              <div className="flex items-center">
                <span className="text-roofing-red mr-2">✓</span>
                <span>Artisans qualifiés</span>
              </div>
              <div className="flex items-center">
                <span className="text-roofing-red mr-2">✓</span>
                <span>Assurance décennale</span>
              </div>
            </div>
            
            <div className="mt-4">
              <Link to="/contact">
                <Button className="btn-primary">Nous contacter</Button>
              </Link>
            </div>
          </div>
          
          {/* Badge assurance */}
          <div className="mt-6 md:mt-8 inline-block bg-black/50 backdrop-blur-sm px-3 py-2 rounded-md">
            <p className="flex items-center text-white text-sm md:text-base font-medium">
              <span className="bg-roofing-red p-1 rounded-full mr-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              Entreprise assurée - Garantie décennale
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroBanner);
