"use client";

import { GlowEffect } from "@/components/ui/glow-effect";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type ButtonProps } from "@/components/ui/button";
import { useState } from "react";

interface ButtonWithGlowProps extends ButtonProps {
  glowColors?: string[];
  glowMode?: 'rotate' | 'pulse' | 'breathe' | 'colorShift' | 'flowHorizontal' | 'static';
  glowDuration?: number;
  glowScale?: number;
  glowBlur?: 'softest' | 'soft' | 'medium' | 'strong' | 'stronger' | 'strongest' | 'none';
}

export function ButtonWithGlow({
  className,
  glowColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
  glowMode = 'colorShift',
  glowDuration = 3,
  glowScale = 0.90,
  glowBlur = 'soft',
  children,
  ...props
}: ButtonWithGlowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlowEffect
        colors={glowColors}
        mode={glowMode}
        blur={glowBlur}
        duration={glowDuration}
        scale={isHovered ? glowScale * 1.1 : glowScale}
        style={{
          transition: 'all 0.3s ease'
        }}
      />
      <Button
        className={cn(
          "relative inline-flex items-center gap-1 bg-zinc-950 px-2.5 py-1.5 text-zinc-50",
          "hover:bg-zinc-950 hover:text-zinc-50 dark:hover:bg-zinc-950 dark:hover:text-zinc-50",
          "outline outline-1 outline-[#fff2f21f]",
          "transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
}