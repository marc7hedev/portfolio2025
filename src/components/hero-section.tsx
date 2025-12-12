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
    <section id="home" className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Spline Scene */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {!isIframeLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full bg-muted/20 animate-pulse" />
        )}
        <iframe
          src='https://my.spline.design/untitled-CEncmlMc4C4S4YWYxvjKEAwS/'
          width="100%"
          height="100%"
          frameBorder="0"
          loading="lazy"
          title="Spline 3D Scene"
          allow="autoplay; fullscreen"
          onLoad={() => setIsIframeLoaded(true)}
          className={cn(
            "w-[50%] h-[50%] object-cover transition-opacity duration-100 origin-top-left scale-[200%]",
            isIframeLoaded ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Overlay gradient to ensure text readability if needed */}
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[1.5px]" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none flex flex-col justify-center h-full pb-20 md:pb-0">
        <AnimatedSection>
          <div className="space-y-4 md:space-y-6 text-center md:text-left pointer-events-auto max-w-2xl mx-auto md:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl font-medium text-muted-foreground"
            >
              Hola, soy
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-primary block sm:inline"
              >
                Marco Rangel
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0"
            >
              Ingeniero en Sistemas Computacionales especializado en el ecosistema Microsoft Power Platform y Desarrollo Web Full Stack.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 items-center pt-4"
            >
              <Magnetic>
                <ButtonWithGlow
                  className="w-full sm:w-auto"
                  onClick={() => {
                    window.open("/pdf/cv2025.pdf", "_blank")
                  }}
                >
                  <Download className="mr-2 h-4 w-4" /> Descargar CV
                </ButtonWithGlow>
              </Magnetic>
              <div className="flex gap-4 items-center w-full sm:w-auto justify-center">
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
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}



