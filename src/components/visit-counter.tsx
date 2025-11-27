"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getVisits, incrementVisits } from "@/lib/supabase"

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
    const fetchAndIncrementVisits = async () => {
      // 1. Obtener visitas actuales del servidor
      const serverVisits = await getVisits()
      
      // 2. Verificar si ya visitó hoy (Local Storage)
      const lastVisit = localStorage.getItem("lastVisit")
      const now = new Date()
      const today = now.toDateString()
      
      if (!lastVisit || lastVisit !== today) {
        // 3. Si es nuevo día, incrementar en servidor
        const success = await incrementVisits()
        if (success) {
          setVisits(serverVisits + 1)
          localStorage.setItem("lastVisit", today)
        } else {
          setVisits(serverVisits) // Fallback si falla el incremento
        }
      } else {
        // 4. Si ya visitó, solo mostrar el valor del servidor
        setVisits(serverVisits)
      }
    }

    fetchAndIncrementVisits()
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