
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(window.innerWidth < MOBILE_BREAKPOINT)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    window.addEventListener("resize", handleResize)
    mql.addEventListener("change", handleResize)
    
    // Initialize on mount
    handleResize()
    
    return () => {
      window.removeEventListener("resize", handleResize)
      mql.removeEventListener("change", handleResize)
    }
  }, [])

  return isMobile
}
