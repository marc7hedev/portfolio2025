"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';
import { getVisits, incrementVisits } from "@/lib/supabase";

interface VisitCounterProps {
  isCollapsed?: boolean;
  isMobile?: boolean;
  className?: string;
}

export function VisitCounter({ isCollapsed, isMobile, className }: VisitCounterProps) {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVisits();
    // Incrementar visitas solo una vez al cargar la página
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      incrementVisits().then(() => {
        sessionStorage.setItem("hasVisited", "true");
        fetchVisits(); // Actualizar el contador después de incrementar
      });
    }
  }, []);

  const fetchVisits = async () => {
    setLoading(true);
    const count = await getVisits();
    setValue(count);
    setLoading(false);
  };

  // Si es usado en el sidebar
  if (isCollapsed !== undefined) {
    return (
      <Button
        variant="ghost"
        className={cn(
          "w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
          !isCollapsed && "justify-start",
          isCollapsed && !isMobile && "justify-center",
          className
        )}
      >
        <Eye className="h-4 w-4 text-blue-500" />
        {(!isCollapsed || isMobile) && (
          <motion.span
            variants={{
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
            }}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="font-mono"
          >
            {loading ? "..." : value}
          </motion.span>
        )}
      </Button>
    );
  }

  // Si es usado en el hero u otros lugares
  return (
    <Button
      variant="outline"
      className={cn("min-w-[100px]", className)}
    >
      <motion.div 
        className="flex items-center"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Eye 
          className="mr-2 h-4 w-4 text-blue-500"
        />
        <span className="font-mono text-base">{loading ? "..." : value}</span>
      </motion.div>
    </Button>
  );
}