"use client";

import { BorderTrail } from "@/components/ui/border-trail";
import { cn } from "@/lib/utils";

interface CardWithTrailProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function CardWithTrail({ children, className, title }: CardWithTrailProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-md border",
      "bg-white text-zinc-700 border-zinc-950/10",
      "dark:bg-zinc-950 dark:text-zinc-300 dark:border-zinc-50/20",
      className
    )}>
      <BorderTrail
        className="bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
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