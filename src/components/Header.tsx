import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Type pour les éléments du menu services
type ServiceItem = {
  title: string;
  href: string;
  description: string;
};

// Données des services pour le menu déroulant
const servicesItems: ServiceItem[] = [
  {
    title: "Démoussage / Nettoyage toiture",
    href: "/services/demoussage-nettoyage-toiture",
    description: "Nettoyage haute pression, traitement anti-mousse et imperméabilisant.",
  },
  {
    title: "Peinture / Boiserie",
    href: "/services/peinture-boiserie",
    description: "Traitement et peinture des boiseries extérieures pour une protection durable.",
  },
  {
    title: "Ravalement de façade",
    href: "/services/ravalement-facade",
    description: "Nettoyage, réparation et mise en peinture des façades d'habitation.",
  },
  {
    title: "Rénovation de toiture",
    href: "/services/renovation-toiture",
    description: "Rénovation partielle ou complète de tous types de toitures.",
  },
  {
    title: "Changement de toiture",
    href: "/services/changement-toiture",
    description: "Remplacement complet de votre toiture avec tous types de couvertures.",
  },
  {
    title: "Nettoyage de chéneau",
    href: "/services/nettoyage-cheneau",
    description: "Entretien, débouchage et réparation de vos gouttières et descentes.",
  },
  {
    title: "Réparations diverses",
    href: "/services/reparations-diverses",
    description: "Interventions ponctuelles pour tous problèmes de toiture et façade.",
  },
  {
    title: "Charpente",
    href: "/services/charpente",
    description: "Réparation et consolidation de charpentes traditionnelles.",
  },
  {
    title: "Dessous de toit en PVC",
    href: "/services/dessous-de-toit",
    description: "Installation de lambris PVC en sous-face pour une finition durable.",
  },
];

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Gestion du scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fermer le menu mobile lors des changements de route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Classe CSS conditionnelle pour le header
  const headerClasses = cn(
    "fixed w-full z-30 transition-all duration-300",
    isScrolled
      ? "bg-white shadow-md py-2"
      : "bg-transparent py-4"
  );

  return (
    <header className={headerClasses}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-roofing-red' : 'text-white'}`}>
            RÉNOVATION TECHNI TOIT
          </span>
        </Link>

        {/* Navigation - Desktop */}
        {!isMobile && (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    isScrolled ? 'text-gray-700 hover:text-roofing-red' : 'text-white hover:text-white/80',
                    location.pathname === "/" && "font-semibold text-roofing-red"
                  )}>
                    Accueil
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  isScrolled ? 'text-gray-700 data-[state=open]:text-roofing-red' : 'text-white data-[state=open]:text-white/80',
                  location.pathname.includes("/services/") && "font-semibold text-roofing-red"
                )}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {servicesItems.map((service) => (
                      <li key={service.title}>
                        <Link
                          to={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/zones-intervention">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    isScrolled ? 'text-gray-700 hover:text-roofing-red' : 'text-white hover:text-white/80',
                    location.pathname === "/zones-intervention" && "font-semibold text-roofing-red"
                  )}>
                    Zones d'intervention
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    isScrolled ? 'text-gray-700 hover:text-roofing-red' : 'text-white hover:text-white/80',
                    location.pathname === "/contact" && "font-semibold text-roofing-red"
                  )}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Menu mobile - Bouton */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-roofing-anthracite' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu principal"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu mobile - Contenu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <nav className="container-custom flex flex-col space-y-4">
            <Link to="/" className="nav-link py-2 border-b border-gray-100">
              Accueil
            </Link>
            
            <div className="py-2 border-b border-gray-100">
              <p className="nav-link font-semibold mb-2">Nos Services</p>
              <div className="pl-4 flex flex-col space-y-2">
                {servicesItems.map((service) => (
                  <Link 
                    key={service.title}
                    to={service.href} 
                    className="nav-link text-sm py-1"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/zones-intervention" className="nav-link py-2 border-b border-gray-100">
              Zones d'intervention
            </Link>
            
            <Link to="/contact" className="nav-link py-2 border-b border-gray-100">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
