"use client";

import { GlowEffect } from "@/components/ui/glow-effect";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type ButtonProps } from "@/components/ui/button";

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
  glowScale = 0.9,
  glowBlur = 'soft',
  children,
  ...props
}: ButtonWithGlowProps) {
  return (
    <div className="relative">
      <GlowEffect
        colors={glowColors}
        mode={glowMode}
        blur={glowBlur}
        duration={glowDuration}
        scale={glowScale}
      />
      <Button
        className={cn(
          "relative inline-flex items-center gap-1 bg-zinc-950 px-2.5 py-1.5 text-zinc-50",
          "outline outline-1 outline-[#fff2f21f]",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
}