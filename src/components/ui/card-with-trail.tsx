"use client";

import { BorderTrail } from "@/components/ui/border-trail";
import { cn } from "@/lib/utils";

interface CardWithTrailProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  trailColor?: "blue" | "green" | string;
}

const trailColors = {
  blue: "bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700",
  green: "bg-gradient-to-l from-green-300 via-green-500 to-green-300 dark:from-green-700/30 dark:via-green-500 dark:to-green-700/30"
};

export function CardWithTrail({ 
  children, 
  className, 
  title,
  trailColor = "blue" // color por defecto
}: CardWithTrailProps) {
  // Obtiene la clase de color del trail, usando el preset si existe o la clase personalizada directamente
  const trailColorClass = trailColors[trailColor as keyof typeof trailColors] || trailColor;

  return (
    <div className={cn(
      "relative overflow-hidden rounded-md border",
      "bg-white text-zinc-700 border-zinc-950/10",
      "dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-50/20",
      className
    )}>
      <BorderTrail
        className={trailColorClass}
        size={120}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <div className="relative z-10 flex flex-col h-full p-6">
        {title && (
          <div className="mb-4">
            <h3 className="font-semibold tracking-tight text-xl">{title}</h3>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}