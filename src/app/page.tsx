import { AppSidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <div className="relative flex min-h-screen bg-background text-foreground">
      <AppSidebar />
      <div className="flex-1">
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </div>
  )
}

