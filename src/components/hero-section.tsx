"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Download } from "lucide-react"
import { LikeCounter } from "@/components/ui/like-counter"
import { ButtonWithGlow } from "@/components/ui/button-with-glow"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { Magnetic } from "@/components/ui/magnetic"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExperienceContent } from "@/components/experience-section"
import { User } from "lucide-react"

export function HeroSection() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6 text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-medium text-muted-foreground"
              >
                Hola, soy
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-primary"
                >
                  Marco Rangel
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-muted-foreground max-w-2xl"
              >
                Ingeniero en Sistemas Computacionales especializado en el ecosistema Microsoft Power Platform y Desarrollo Web Full Stack.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center md:justify-start gap-4 items-center"
              >
                <Magnetic>
                  <ButtonWithGlow
                    onClick={() => {
                      window.open("/pdf/cv2025.pdf", "_blank")
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" /> Descargar CV
                  </ButtonWithGlow>
                </Magnetic>
                <LikeCounter type="portfolio" />
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="inline-block">
                      <Magnetic>
                        <ButtonWithGlow variant="outline" glowColors={['#33FF57', '#3357FF']}>
                          <User className="mr-2 h-4 w-4" /> Más acerca de mí
                        </ButtonWithGlow>
                      </Magnetic>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Experiencia Profesional</DialogTitle>
                      <DialogDescription>
                        Mi trayectoria en el ecosistema Microsoft Power Platform y Desarrollo Web.
                      </DialogDescription>
                    </DialogHeader>
                    <ExperienceContent />
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              {!isIframeLoaded && (
                <Skeleton className="absolute inset-0 w-full h-full rounded-full bg-muted/20 animate-pulse" />
              )}
              <div className="relative w-full h-full">
                <iframe
                  src="https://my.spline.design/chips-27f034f03cb7a5afc1a2d61948964f0d/"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  loading="lazy"
                  title="Spline 3D Scene"
                  allow="autoplay; fullscreen"
                  onLoad={() => setIsIframeLoaded(true)}
                  className={cn(
                    "w-full h-full transition-opacity duration-700",
                    isIframeLoaded ? "opacity-100" : "opacity-0"
                  )}
                />
              </div>
            </div> 
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

