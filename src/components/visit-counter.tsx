"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface VisitCounterProps {
  isCollapsed: boolean
  isMobile?: boolean
}

const menuItemVariants = {
  expanded: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  collapsed: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export function VisitCounter({ isCollapsed, isMobile = false }: VisitCounterProps) {
  const [visits, setVisits] = useState(0)

  useEffect(() => {
    // Obtener las visitas actuales
    const storedVisits = localStorage.getItem("pageVisits") || "0"
    const currentVisits = parseInt(storedVisits)
    
    // Obtener la última visita
    const lastVisit = localStorage.getItem("lastVisit")
    const now = new Date()
    const today = now.toDateString()
    
    // Verificar si es una nueva visita (primer acceso del día)
    if (!lastVisit || lastVisit !== today) {
      // Incrementar el contador solo si es un nuevo día
      const newVisits = currentVisits + 1
      localStorage.setItem("pageVisits", newVisits.toString())
      localStorage.setItem("lastVisit", today)
      setVisits(newVisits)
    } else {
      // Si no es una nueva visita, solo mostrar el contador actual
      setVisits(currentVisits)
    }
  }, [])

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        !isCollapsed && "justify-start",
        isCollapsed && !isMobile && "justify-center"
      )}
    >
      {isCollapsed && !isMobile ? (
        <span className="font-medium">{visits}</span>
      ) : (
        <>
          <Users className="h-4 w-4" />
          <motion.span
            variants={menuItemVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            {visits} visitas
          </motion.span>
        </>
      )}
    </div>
  )
}