"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Play, MoreVertical, Github, CirclePlus } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

// TODO: Añadir campos de detalles del proyecto, donde al abrir el modal del proyecto pueda ver una explicación más detallada, con carrousel de imagenes y tal
const projects = [
  {
    id: 1,
    title: "Sistema de automatización de procesos",
    description:
      "(En desarrollo) Diseño y desarrollo de un sistema de automatización de envíos y recepción de correos/documentos para Diesel Segoviano.",
    videoUrl: "/videos/diesel-segoviano.mp4",
    category: "web",
    technologies: ["React", "NextJs", "Typescript", "Tailwind", "Prisma"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    demoUrl: "https://marc7-diesel.vercel.app/",
  },
  {
    id: 2,
    title: "Migración de Sistema Legacy a Salesforce usando ETL (Extract, Transform, Load) ",
    description: "Migración de datos de un sistema legacy a Salesforce usando ETL (Extract, Transform, Load) transformando archivos CSV a Salesforce.",
    videoUrl: "/videos/eba-salesforce.mp4",
    category: "web",
    technologies: ["NodeJs", "Express", "Salesforce", "BULK API 2.0", "CSV-Parser"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://task-management-demo.vercel.app",
  },
  {
    id: 3,
    title: "Ferremateriales Medina",
    description: "Landing Page con enfoque responsivo, integración de formulario de contacto funcional, Analytics, optimización SEO básica para mejorar la visibilidad.",
    videoUrl: "/videos/ferre-medina.mp4",
    category: "mobile",
    technologies: ["Wordpress", "Elementor", "Js", "Google Analytics"],
    githubUrl: "https://github.com/yourusername/weather-forecast-app",
    demoUrl: "https://weather-forecast-demo.vercel.app",
  },
  {
    id: 4,
    title: "CRUD Server Actions con NextJs",
    description: "Pequeño CRUD gestor de tareas utilizando NextJs, Server Actions y Prisma con PostgreSQL.",
    videoUrl: "/videos/portfolio.mp4",
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio-website",
    demoUrl: "https://marc7-nextjs-crud.up.railway.app/",
  },
  {
    id: 5,
    title: "Portafolio personal 2024",
    description: "Portafolio personal creado con React y Framer Motion.",
    videoUrl: "/videos/portfolio-2024.mp4",
    category: "mobile",
    technologies: ["React", "Framermotion", "Sass"],
    githubUrl: "https://github.com/yourusername/fitness-tracking-app",
    demoUrl: "https://fitness-tracking-demo.vercel.app",
  },
]

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Proyectos
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="web">WebApps</TabsTrigger>
              <TabsTrigger value="mobile">WebPages</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <Dialog key={project.id}>
                    <AnimatedSection delay={index * 0.1 + 0.3}>
                      <DialogTrigger asChild>
                        <motion.div
                          whileHover={{ y: -5 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="cursor-pointer"
                        >
                          <Card className="overflow-hidden">
                            <CardHeader className="p-0">
                              <video
                                src={project.videoUrl}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                              />
                            </CardHeader>
                            <CardContent className="p-4">
                              <CardTitle>{project.title}</CardTitle>
                              <CardDescription className="mt-2">{project.description}</CardDescription>
                              <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies.map((tech) => (
                                  <motion.div
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Badge variant="secondary">
                                      {tech}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </CardContent>
                            <CardFooter className="p-4 flex justify-end">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <motion.div 
                                    whileHover={{ scale: 1.05 }} 
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Button variant="ghost" size="sm">
                                      <MoreVertical className="h-4 w-4" />
                                    </Button>
                                  </motion.div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent onClick={(e) => e.stopPropagation()}>
                                  <DialogTrigger asChild>
                                    <DropdownMenuItem>
                                      <CirclePlus className="mr-2 h-4 w-4" /> Ver detalles
                                    </DropdownMenuItem>
                                  </DialogTrigger>
                                  <DropdownMenuItem asChild>
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                      <Play className="mr-2 h-4 w-4" /> Ver Proyecto
                                    </a>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                      <Github className="mr-2 h-4 w-4" /> Ver en GitHub
                                    </a>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      </DialogTrigger>
                    </AnimatedSection>

                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                      </DialogHeader>
                      <video src={project.videoUrl} className="w-full h-64 object-cover rounded-lg" controls />
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Tecnologías utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between mt-6">
                        <Button asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            Ver demostración
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Ver código fuente
                          </a>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  )
}

