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
      "relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm",
      "dark:bg-zinc-900/90 dark:border-zinc-800",
      "light:bg-white/90 light:border-zinc-200",
      className
    )}>
      <BorderTrail
        style={{
          boxShadow: "0px 0px 60px 30px rgb(var(--border-trail) / 0.5), 0 0 100px 60px rgb(var(--border-trail) / 0.3), 0 0 140px 90px rgb(var(--border-trail) / 0.2)",
        }}
        className="[--border-trail:255_255_255] dark:[--border-trail:0_0_0]"
        size={100}
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