
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, Wrench, Mail, Image, Phone, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  // Liste des services pour éviter la répétition
  const serviceLinks = [
    { path: "/services/demoussage-nettoyage-toiture", label: "Démoussage & Nettoyage toiture" },
    { path: "/services/peinture-boiserie", label: "Peinture / Boiserie" },
    { path: "/services/ravalement-facade", label: "Ravalement de façade" },
    { path: "/services/renovation-toiture", label: "Rénovation de toiture" },
    { path: "/services/changement-toiture", label: "Changement de toiture" },
    { path: "/services/nettoyage-cheneau", label: "Nettoyage de chéneau" },
    { path: "/services/reparations-diverses", label: "Réparations diverses" },
    { path: "/services/charpente", label: "Charpente" },
    { path: "/services/dessous-de-toit", label: "Dessous de Toit en PVC" },
  ];

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
            <img 
              src="/lovable-uploads/6405d24d-4938-452a-b21b-43c782556b25.png" 
              alt="RÉNOVATION TECHNI TOIT" 
              className="h-14 mr-3" 
            />
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
            
            {/* Menu déroulant des services utilisant DropdownMenu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="focus:outline-none">
                <button className="nav-link flex items-center">
                  <Wrench size={18} className="mr-1" />
                  Nos Services
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white" align="start" sideOffset={15}>
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.path} asChild className="hover:bg-gray-100 cursor-pointer">
                    <Link to={service.path} className="w-full py-2">
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
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
          <div className="flex items-center mb-4">
            <img 
              src="/lovable-uploads/6405d24d-4938-452a-b21b-43c782556b25.png" 
              alt="RÉNOVATION TECHNI TOIT" 
              className="h-12 mr-2" 
            />
          </div>
          
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
                {serviceLinks.map((service) => (
                  <Link 
                    key={service.path}
                    to={service.path} 
                    className="py-1" 
                    onClick={closeMenu}
                  >
                    {service.label}
                  </Link>
                ))}
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
