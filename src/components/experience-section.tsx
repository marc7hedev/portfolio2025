"use client"

import { AnimatedSection } from "@/components/ui/animated-section"
import { CardWithTrail } from "@/components/ui/card-with-trail"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building2, Briefcase } from "lucide-react"

interface ExperienceItem {
  company: string
  role: string
  date: string
  location?: string
  description: string
  achievements?: string[]
  stack?: string[]
  trailColor?: "blue" | "green"
}

const experiences: ExperienceItem[] = [
  {
    company: "Ford Motor Company – IEPC",
    role: "Power Platform Specialist & Web Developer",
    date: "Julio 2025 - Actualidad",
    location: "Irapuato, Guanajuato",
    description: "Desarrollador Full Stack dentro del ecosistema Microsoft para soluciones Enterprise, gestionando el ciclo de vida completo de aplicaciones usadas en 36 plantas a nivel global.",
    achievements: [
      "Lidero el mantenimiento y mejora de la plataforma Mobile Universal Request (MUR4), procesando 200-500 solicitudes diarias.",
      "Diseñé flujos complejos en Power Automate logrando una migración con cero tiempo de inactividad.",
      "Creé una solución de seguridad con PowerShell (Trid Monitor) para verificar integridad de archivos de calibración.",
      "Desarrollé Dashboard en Power BI para monitoreo de costos de impresión y reducción de gastos."
    ],
    stack: ["Power Platform", "Power BI", "SharePoint", "PowerShell", "React", "SQL"],
    trailColor: "blue"
  },
  {
    company: "Ford Motor Company – IEPC",
    role: "IT Support Help Desk Analyst",
    date: "Enero 2025 - Julio 2025",
    location: "Irapuato, Guanajuato",
    description: "Soporte técnico de Nivel 1 y 2 para usuarios locales y remotos, asegurando la continuidad operativa en líneas de producción.",
    achievements: [
      "Administración de tickets mediante ServiceNow cumpliendo SLAs.",
      "Gestión de identidades y accesos a través de Active Directory y Azure AD."
    ],
    trailColor: "green"
  },
  {
    company: "Logística Internacional Integrada",
    role: "Consultor TI & Desarrollador Web",
    date: "Mayo 2022 - Enero 2025",
    location: "Salamanca, Guanajuato",
    description: "Consultoría TI y desarrollo web freelance.",
    achievements: [
      "Ejecución completa de migración de servidores de correo a Zoho Mail (DNS, SPF, DKIM).",
      "Administración de infraestructura para 20 usuarios (Antivirus, Firewall, SSL/Hosting)."
    ],
    trailColor: "blue"
  },
  {
    company: "Mills Telecomunicaciones",
    role: "Técnico de Sistemas y Supervisor",
    date: "Mayo 2023 - Noviembre 2023",
    location: "Saltillo, Coahuila",
    description: "Supervisión de personal técnico y cumplimiento de estándares operativos en planta automotriz (Chrysler Stellantis).",
    achievements: [
      "Ejecución de auditorías mensuales en IDFs y Data Centers.",
      "Generación de reportes de KPIs diarios para la gerencia de TI."
    ],
    trailColor: "green"
  },
  {
    company: "Proyectos Independientes",
    role: "Desarrollador Web Full Stack",
    date: "Noviembre 2023 - Actualidad",
    description: "Desarrollo de soluciones web y scripts de automatización.",
    achievements: [
      "Script ETL en Node.js para migración de datos a Salesforce (Bulk 2.0).",
      "Diseño de Landing Pages optimizadas con WordPress y Elementor Pro.",
      "Plataforma de automatización de documentos (Next.js, Prisma, PostgreSQL)."
    ],
    stack: ["Node.js", "Next.js", "PostgreSQL", "Salesforce API"],
    trailColor: "blue"
  }
]

export function ExperienceContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {experiences.map((exp, index) => (
        <AnimatedSection key={index} delay={index * 0.1}>
          <CardWithTrail trailColor={exp.trailColor}>
            <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  {exp.company}
                </h3>
                <p className="text-lg font-medium text-muted-foreground flex items-center gap-2 mt-1">
                  <Briefcase className="w-4 h-4" />
                  {exp.role}
                </p>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex items-center gap-2 md:justify-end">
                  <Calendar className="w-4 h-4" />
                  {exp.date}
                </div>
                {exp.location && (
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                )}
              </div>
            </div>

            <p className="mb-4 text-muted-foreground">{exp.description}</p>

            {exp.achievements && (
              <ul className="list-disc list-inside space-y-2 mb-4 text-sm text-muted-foreground">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            )}

            {exp.stack && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                {exp.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </CardWithTrail>
        </AnimatedSection>
      ))}
    </div>
  )
}
