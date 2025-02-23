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
      "relative rounded-md bg-zinc-900 dark:bg-zinc-900",
      className
    )}>
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
        }}
        size={100}
      />
      <div className="relative z-10 flex flex-col h-full p-6">
        {title && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}