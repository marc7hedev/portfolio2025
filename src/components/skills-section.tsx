"use client";

import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiPrisma,
    SiPostgresql,
    SiPhp,
} from "react-icons/si";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { CardWithTrail } from "@/components/ui/card-with-trail";

const skills = [
    {
        name: "React",
        icon: FaReact,
        color: "border-[#61DAFB] text-[#61DAFB] hover:bg-[#61DAFB]/10",
        description: "Desarrollo de interfaces de usuario modernas y reactivas con React. Experiencia en hooks, context, y patrones de diseño avanzados.",
        details: [
            "Gestión de estado con Redux y Context API",
            "Custom Hooks",
            "Optimización de rendimiento",
            "Server Side Rendering con Next.js",
            "Testing con Jest y React Testing Library"
        ]
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "border-white text-foreground hover:bg-white/10",
        description: "Construcción de aplicaciones web fullstack con Next.js. Especializado en Server Actions y App Router.",
        details: [
            "Server Components y Client Components",
            "Optimización de rutas y carga",
            "API Routes y Edge Functions",
            "Integración con bases de datos",
            "Despliegue en Vercel"
        ]
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "border-[#339933] text-[#339933] hover:bg-[#339933]/10",
        description: "Desarrollo backend con Node.js. Experiencia en APIs RESTful y arquitecturas escalables.",
        details: [
            "Express.js y NestJS",
            "Autenticación y Autorización",
            "Manejo de WebSockets",
            "Integración con bases de datos",
            "Microservicios"
        ]
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "border-[#38B2AC] text-[#38B2AC] hover:bg-[#38B2AC]/10",
        description: "Diseño de interfaces modernas y responsivas con Tailwind CSS.",
        details: [
            "Componentes reutilizables",
            "Temas personalizados",
            "Animaciones y transiciones",
            "Diseño responsivo",
            "Integración con otros frameworks"
        ]
    },
    {
        name: "Prisma",
        icon: SiPrisma,
        color: "border-[#5A67D8] text-[#5A67D8] hover:bg-[#5A67D8]/10",
        description: "ORM moderno para TypeScript. Experiencia en modelado de datos y migraciones.",
        details: [
            "Modelado de bases de datos",
            "Migraciones y seeding",
            "Relaciones y consultas complejas",
            "Integración con PostgreSQL",
            "Prisma Studio"
        ]
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10",
        description: "Gestión de bases de datos relacionales con PostgreSQL.",
        details: [
            "Diseño de esquemas",
            "Optimización de consultas",
            "Stored procedures",
            "Backup y restauración",
            "Replicación"
        ]
    },
    {
        name: "PHP",
        icon: SiPhp,
        color: "border-[#777BB4] text-[#777BB4] hover:bg-[#777BB4]/10",
        description: "Desarrollo backend con PHP. Experiencia en Laravel y WordPress.",
        details: [
            "Laravel Framework",
            "WordPress Development",
            "APIs RESTful",
            "Integración con MySQL",
            "Plugins y temas personalizados"
        ]
    },
];

const services = [
    {
        title: "Desarrollo de Aplicaciones Web",
        description: "Creación de sitios web modernos y responsivos",
        details: [
            "Aplicaciones web progresivas (PWA)",
            "Optimización de rendimiento y SEO",
            "Integración con APIs externas",
            "Diseño responsivo y mobile-first",
            "Testing y mantenimiento continuo"
        ]
    },
    {
        title: "Automatizaciones",
        description: "Implemento soluciones que ayuden a automatizar procesos repetitivos de manera eficiente",
        details: [
            "Scripts de automatización personalizados",
            "Integración de sistemas",
            "Procesamiento de datos automatizado",
            "Reportes automatizados",
            "Monitoreo y alertas"
        ]
    },
    {
        title: "Implementación de procesos ETL (Extract, Transform, Load)",
        description: "Migraciones de datos de sistemas legados a nuevas plataformas",
        details: [
            "Análisis de datos fuente",
            "Limpieza y transformación de datos",
            "Validación y control de calidad",
            "Migración incremental",
            "Documentación del proceso"
        ]
    },
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold mb-8 text-center"
                    >
                        Habilidades y Servicios
                    </motion.h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.div
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="cursor-pointer"
                            >
                                <CardWithTrail>
                                    <CardHeader>
                                        <CardTitle>Habilidades</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map((skill, index) => (
                                                <AnimatedSection
                                                    key={skill.name}
                                                    delay={index * 0.1}
                                                >
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{
                                                            duration: 0.3,
                                                            delay: index * 0.1,
                                                        }}
                                                    >
                                                        <Badge
                                                            variant="outline"
                                                            className={cn(
                                                                "text-lg py-2 px-3 border-2 transition-colors duration-200",
                                                                skill.color
                                                            )}
                                                        >
                                                            <skill.icon className="inline-block mr-2" />
                                                            {skill.name}
                                                        </Badge>
                                                    </motion.div>
                                                </AnimatedSection>
                                            ))}
                                        </div>
                                    </CardContent>
                                </CardWithTrail>
                            </motion.div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>Detalles de Habilidades</DialogTitle>
                                <DialogDescription>
                                    Conoce más sobre mis habilidades técnicas
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-6 mt-4">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <skill.icon className={cn("h-6 w-6", skill.color)} />
                                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                                        </div>
                                        <p className="text-muted-foreground">{skill.description}</p>
                                        <ul className="list-disc list-inside space-y-1 pl-4">
                                            {skill.details.map((detail, index) => (
                                                <li key={index} className="text-sm text-muted-foreground">
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                        <Separator className="my-4" />
                                    </div>
                                ))}
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.div
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="cursor-pointer"
                            >
                                <CardWithTrail>
                                    <CardHeader>
                                        <CardTitle>Servicios</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-4">
                                            {services.map((service, index) => (
                                                <AnimatedSection
                                                    key={service.title}
                                                    delay={index * 0.1}
                                                >
                                                    <motion.li
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            duration: 0.3,
                                                            delay: index * 0.1,
                                                        }}
                                                    >
                                                        <h3 className="font-semibold">
                                                            {service.title}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            {service.description}
                                                        </p>
                                                        {index < services.length - 1 && (
                                                            <Separator className="mt-2" />
                                                        )}
                                                    </motion.li>
                                                </AnimatedSection>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </CardWithTrail>
                            </motion.div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>Detalles de Servicios</DialogTitle>
                                <DialogDescription>
                                    Conoce más sobre los servicios que ofrezco
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-6 mt-4">
                                {services.map((service) => (
                                    <div key={service.title} className="space-y-2">
                                        <h3 className="text-lg font-semibold">{service.title}</h3>
                                        <p className="text-muted-foreground">{service.description}</p>
                                        <ul className="list-disc list-inside space-y-1 pl-4">
                                            {service.details.map((detail, index) => (
                                                <li key={index} className="text-sm text-muted-foreground">
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                        <Separator className="my-4" />
                                    </div>
                                ))}
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    );
}
