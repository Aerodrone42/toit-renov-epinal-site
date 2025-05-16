
import { PhoneCall } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      // Afficher le bouton après un défilement de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    // Nettoyage de l'écouteur d'événements
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a 
      href="tel:0602327557" 
      className={cn(
        "fixed bottom-20 md:bottom-6 right-6 z-50 flex items-center gap-2 bg-roofing-red text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-roofing-red/90 group",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Appelez-nous au 06 02 32 75 57"
    >
      <div className="w-10 h-10 rounded-full bg-white text-roofing-red flex items-center justify-center animate-pulse">
        <PhoneCall size={24} className="transition-transform group-hover:scale-110" />
      </div>
      <span className="font-bold hidden md:block">06 02 32 75 57</span>
    </a>
  );
};

export default CallButton;
