"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Download } from "lucide-react"
import { LikeCounter } from "@/components/ui/like-counter"
import { ButtonWithGlow } from "@/components/ui/button-with-glow"

export function HeroSection() {
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
                className="text-xl text-muted-foreground"
              >
                Web Developer & IT Specialist
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center md:justify-start gap-4 items-center"
              >
                <ButtonWithGlow
                  onClick={() => {
                    window.open("/pdf/cv2025.pdf", "_blank")
                  }}
                >
                  <Download className="mr-2 h-4 w-4" /> Descargar CV
                </ButtonWithGlow>
                <LikeCounter />
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              <iframe
                src="https://my.spline.design/chips-27f034f03cb7a5afc1a2d61948964f0d/"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Spline 3D Scene"
              />
            </div> 
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
