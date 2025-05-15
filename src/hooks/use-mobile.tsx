
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  )

  React.useEffect(() => {
    // Éviter les erreurs de référence window pendant SSR
    if (typeof window === "undefined") return
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Utiliser matchMedia pour une meilleure performance
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Ajouter les écouteurs d'événements
    window.addEventListener("resize", handleResize)
    mql.addEventListener("change", handleResize)
    
    // Initialiser avec la taille actuelle
    handleResize()
    
    // Nettoyage
    return () => {
      window.removeEventListener("resize", handleResize)
      mql.removeEventListener("change", handleResize)
    }
  }, [])

  return isMobile
}
