"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:your@email.com",
  },
  {
    name: "Website",
    icon: Globe,
    url: "https://yourwebsite.com",
  },
]

export function FooterSection() {
  return (
    <footer className="mt-20 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="py-12">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logo y descripción */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold">MR</span>
                  </div>
                  <span className="text-lg font-semibold">Marco Rangel</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Desarrollador Full Stack especializado en crear experiencias web modernas y atractivas.
                </p>
              </div>

              {/* Enlaces rápidos */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">Enlaces Rápidos</h3>
                <nav className="flex flex-col space-y-2">
                  <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Inicio</a>
                  <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Habilidades</a>
                  <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Proyectos</a>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
                </nav>
              </div>

              {/* Redes sociales */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold">Conecta Conmigo</h3>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="h-8 w-8"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.name}
                        >
                          <link.icon className="h-4 w-4" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <Separator />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Marco Rangel. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 