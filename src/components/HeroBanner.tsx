
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative bg-gray-900 h-[60vh] md:h-[70vh] flex items-center">
      {/* Image de fond avec superposition plus visible */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/lovable-uploads/b89fcd9b-217c-47a7-8722-43a58454d8e1.png" 
          alt="Camion RÉNOVATION TECHNI TOIT" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Contenu */}
      <div className="container-custom relative z-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Expert en rénovation de toiture dans les Vosges
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Rénovation, démoussage, nettoyage... RÉNOVATION TECHNI TOIT intervient dans un rayon de 50km autour d'Épinal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button className="btn-primary text-lg px-8 py-6">Demander un devis gratuit</Button>
            </Link>
            <Link to="/services/renovation-toiture">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Découvrir nos services
              </Button>
            </Link>
          </div>
          
          {/* Badge assurance */}
          <div className="mt-8 inline-block bg-black/50 backdrop-blur-sm px-4 py-2 rounded-md">
            <p className="flex items-center text-white font-medium">
              <span className="bg-roofing-red p-1 rounded-full mr-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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

export default HeroBanner;
