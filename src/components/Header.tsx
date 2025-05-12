
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, Wrench, Mail, Image, Phone, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        {/* Top Bar avec coordonnées */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-gray-200">
          <div className="font-medium text-sm">SIRET : 850 700 771 00019</div>
          <div className="flex items-center space-x-6">
            <a href="tel:0602327557" className="flex items-center text-sm text-roofing-anthracite hover:text-roofing-red transition-colors">
              <Phone size={16} className="mr-2" />
              06 02 32 75 57
            </a>
            <a href="mailto:chatellepierre6@gmail.com" className="flex items-center text-sm text-roofing-anthracite hover:text-roofing-red transition-colors">
              <Mail size={16} className="mr-2" />
              chatellepierre6@gmail.com
            </a>
            <div className="flex items-center text-sm text-roofing-anthracite">
              <MapPin size={16} className="mr-2" />
              36 rue de Lorraine, 88150 IGNEY
            </div>
          </div>
        </div>

        {/* Logo et Navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="text-roofing-red font-bold text-xl md:text-2xl tracking-tight">
              RÉNOVATION<span className="text-roofing-anthracite"> TECHNI TOIT</span>
            </div>
          </Link>

          {/* Menu mobile toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-roofing-anthracite hover:text-roofing-red"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link flex items-center">
              <House size={18} className="mr-1" />
              Accueil
            </Link>
            
            <div className="relative group">
              <button 
                className="nav-link flex items-center" 
                onClick={toggleServices}
              >
                <Wrench size={18} className="mr-1" />
                Nos Services
                <ChevronDown size={16} className="ml-1" />
              </button>

              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block">
                <Link to="/services/demoussage-nettoyage-toiture" className="block px-4 py-2 hover:bg-gray-100">
                  Démoussage & Nettoyage toiture
                </Link>
                <Link to="/services/peinture-boiserie" className="block px-4 py-2 hover:bg-gray-100">
                  Peinture / Boiserie
                </Link>
                <Link to="/services/ravalement-facade" className="block px-4 py-2 hover:bg-gray-100">
                  Ravalement de façade
                </Link>
                <Link to="/services/renovation-toiture" className="block px-4 py-2 hover:bg-gray-100">
                  Rénovation de toiture
                </Link>
                <Link to="/services/changement-toiture" className="block px-4 py-2 hover:bg-gray-100">
                  Changement de toiture
                </Link>
                <Link to="/services/nettoyage-cheneau" className="block px-4 py-2 hover:bg-gray-100">
                  Nettoyage de chéneau
                </Link>
                <Link to="/services/reparations-diverses" className="block px-4 py-2 hover:bg-gray-100">
                  Réparations diverses
                </Link>
                <Link to="/services/charpente" className="block px-4 py-2 hover:bg-gray-100">
                  Charpente
                </Link>
              </div>
            </div>
            
            <Link to="/realisations" className="nav-link flex items-center">
              <Image size={18} className="mr-1" />
              Réalisations
            </Link>
            
            <Link to="/contact" className="nav-link flex items-center">
              <Mail size={18} className="mr-1" />
              Contact
            </Link>
            
            <Link to="/contact">
              <Button className="btn-primary">Devis gratuit</Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 flex flex-col pt-20 pb-6 px-6 transition-transform duration-300 ease-in-out md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6">
          <Link to="/" className="text-lg font-medium py-2 border-b border-gray-200" onClick={closeMenu}>
            <House size={20} className="inline-block mr-2" />
            Accueil
          </Link>
          
          <div>
            <button 
              onClick={toggleServices}
              className="flex items-center justify-between w-full text-lg font-medium py-2 border-b border-gray-200"
            >
              <span className="flex items-center">
                <Wrench size={20} className="inline-block mr-2" />
                Nos Services
              </span>
              <ChevronDown size={20} className={cn("transition-transform", isServicesOpen ? "rotate-180" : "")} />
            </button>
            
            {isServicesOpen && (
              <div className="pl-8 flex flex-col space-y-4 mt-4">
                <Link to="/services/demoussage-nettoyage-toiture" className="py-1" onClick={closeMenu}>
                  Démoussage & Nettoyage toiture
                </Link>
                <Link to="/services/peinture-boiserie" className="py-1" onClick={closeMenu}>
                  Peinture / Boiserie
                </Link>
                <Link to="/services/ravalement-facade" className="py-1" onClick={closeMenu}>
                  Ravalement de façade
                </Link>
                <Link to="/services/renovation-toiture" className="py-1" onClick={closeMenu}>
                  Rénovation de toiture
                </Link>
                <Link to="/services/changement-toiture" className="py-1" onClick={closeMenu}>
                  Changement de toiture
                </Link>
                <Link to="/services/nettoyage-cheneau" className="py-1" onClick={closeMenu}>
                  Nettoyage de chéneau
                </Link>
                <Link to="/services/reparations-diverses" className="py-1" onClick={closeMenu}>
                  Réparations diverses
                </Link>
                <Link to="/services/charpente" className="py-1" onClick={closeMenu}>
                  Charpente
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/realisations" className="text-lg font-medium py-2 border-b border-gray-200" onClick={closeMenu}>
            <Image size={20} className="inline-block mr-2" />
            Réalisations
          </Link>
          
          <Link to="/contact" className="text-lg font-medium py-2 border-b border-gray-200" onClick={closeMenu}>
            <Mail size={20} className="inline-block mr-2" />
            Contact
          </Link>
          
          <div className="mt-4">
            <Link to="/contact" onClick={closeMenu}>
              <Button className="btn-primary w-full">Devis gratuit</Button>
            </Link>
          </div>

          <div className="mt-6 space-y-4 text-sm">
            <a href="tel:0602327557" className="flex items-center">
              <Phone size={16} className="mr-2 text-roofing-red" />
              06 02 32 75 57
            </a>
            <a href="mailto:chatellepierre6@gmail.com" className="flex items-center">
              <Mail size={16} className="mr-2 text-roofing-red" />
              chatellepierre6@gmail.com
            </a>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-roofing-red" />
              36 rue de Lorraine, 88150 IGNEY
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
