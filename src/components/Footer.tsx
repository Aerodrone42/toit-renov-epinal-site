
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Building, Check } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-roofing-anthracite text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 - À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">RÉNOVATION TECHNI TOIT</h3>
            <p className="mb-4 text-gray-300">
              Votre artisan couvreur de confiance dans les Vosges. Nous intervenons pour tous vos travaux de toiture et rénovation extérieure dans un rayon de 50km autour d'Épinal.
            </p>
            <div className="flex items-center text-roofing-red mb-2">
              <Check size={20} className="mr-2" />
              <span className="text-white">Assurance décennale</span>
            </div>
            <div className="flex items-center">
              <Building size={16} className="mr-2 text-roofing-red" />
              <span className="text-gray-300">SIRET : 850 700 771 00019</span>
            </div>
          </div>
          
          {/* Colonne 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/demoussage-nettoyage-toiture" className="text-gray-300 hover:text-roofing-red transition-colors">
                  Démoussage & Nettoyage toiture
                </Link>
              </li>
              <li>
                <Link to="/services/peinture-boiserie" className="text-gray-300 hover:text-roofing-red transition-colors">
                  Peinture / Boiserie
                </Link>
              </li>
              <li>
                <Link to="/services/ravalement-facade" className="text-gray-300 hover:text-roofing-red transition-colors">
                  Ravalement de façade
                </Link>
              </li>
              <li>
                <Link to="/services/renovation-toiture" className="text-gray-300 hover:text-roofing-red transition-colors">
                  Rénovation de toiture
                </Link>
              </li>
              <li>
                <Link to="/services/changement-toiture" className="text-gray-300 hover:text-roofing-red transition-colors">
                  Changement de toiture
                </Link>
              </li>
              <li>
                <Link to="/services/nettoyage-cheneau" className="text-gray-300 hover:text-roofing-red transition-colors">
                  Nettoyage de chéneau
                </Link>
              </li>
              <li>
                <Link to="/services/dessous-de-toit" className="text-gray-300 hover:text-roofing-red transition-colors">
                  Dessous de Toit en PVC
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-roofing-red" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <a href="tel:0602327557" className="text-gray-300 hover:text-roofing-red transition-colors">
                    06 02 32 75 57
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-roofing-red" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:chatellepierre6@gmail.com" className="text-gray-300 hover:text-roofing-red transition-colors">
                    chatellepierre6@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-roofing-red" />
                <div>
                  <p className="font-medium">Adresse</p>
                  <address className="not-italic text-gray-300">
                    36 rue de Lorraine<br />
                    88150 IGNEY
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Zone d'intervention */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <h4 className="text-lg font-medium mb-3 text-white">Zone d'intervention</h4>
          <p className="text-gray-300 mb-3">
            Épinal (88000) et dans un rayon de 50 km : Golbey, Chantraine, Thaon-les-Vosges, 
            Dogneville, Chavelot, Deyvillers, Saint-Laurent et toutes les communes environnantes des Vosges.
          </p>
          <Link to="/zones-intervention" className="text-roofing-red hover:text-roofing-red/80 transition-colors font-medium">
            Voir toutes nos zones d'intervention →
          </Link>
        </div>
        
        {/* Liens légaux */}
        <div className="border-t border-gray-700 pt-6 mb-6 flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/mentions-legales" className="text-gray-300 hover:text-roofing-red transition-colors">
            Mentions légales
          </Link>
          <Link to="/politique-confidentialite" className="text-gray-300 hover:text-roofing-red transition-colors">
            Politique de confidentialité
          </Link>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} RÉNOVATION TECHNI TOIT - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
