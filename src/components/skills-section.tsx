"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "border-white text-foreground hover:bg-white/10",
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "border-[#339933] text-[#339933] hover:bg-[#339933]/10",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "border-[#38B2AC] text-[#38B2AC] hover:bg-[#38B2AC]/10",
    },
    {
        name: "Prisma",
        icon: SiPrisma,
        color: "border-[#5A67D8] text-[#5A67D8] hover:bg-[#5A67D8]/10",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10",
    },
    {
        name: "PHP",
        icon: SiPhp,
        color: "border-[#777BB4] text-[#777BB4] hover:bg-[#777BB4]/10",
    },
];

const services = [
    {
        title: "Desarrollo de Aplicaciones Web",
        description: "Creación de sitios web modernos y responsivos",
    },
    {
        title: "Automatizaciones",
        description:
            "Implemento soluciones que ayuden a automatizar procesos repetitivos de manera eficiente",
    },
    {
        title: "Implementación de procesos ETL (Extract, Transform, Load)",
        description: "Migraciones de datos de sistemas legados a nuevas plataformas",
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
                    <CardWithTrail title="Habilidades">
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
                    </CardWithTrail>
                    
                    <CardWithTrail title="Servicios">
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
                    </CardWithTrail>
                </div>
            </div>
        </section>
    );
}
