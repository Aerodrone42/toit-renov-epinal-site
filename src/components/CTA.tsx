
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const CTA = () => {
  return (
    <section className="bg-roofing-red py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Vous avez un projet de rénovation ?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
          Faites confiance à RÉNOVATION TECHNI TOIT pour tous vos travaux de toiture et rénovation extérieure. Obtenez un devis personnalisé gratuitement.
        </p>
        <Link to="/contact">
          <Button className="bg-white hover:bg-gray-100 text-roofing-red font-medium text-lg px-8 py-6">
            Demander un devis gratuit
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
