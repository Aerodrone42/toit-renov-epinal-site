
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Ce composant s'assure que la page commence toujours en haut lors d'une navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
