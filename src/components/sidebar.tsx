"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ChevronLeft, Menu, Home, Code, Mail, FolderOpen } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ModeToggle } from "@/components/mode-toggle"
import { VisitCounter } from "@/components/visit-counter"

const menuItems = [
  { icon: Home, label: "Inicio", href: "#home" },
  { icon: Code, label: "Habilidades", href: "#skills" },
  { icon: FolderOpen, label: "Proyectos", href: "#projects" },
  { icon: Mail, label: "Contacto", href: "#contact" },
]

const menuItemVariants = {
  expanded: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  collapsed: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export function AppSidebar() {
  const { isCollapsed, setIsCollapsed } = useSidebar()
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeItem, setActiveItem] = React.useState("")

  React.useEffect(() => {
    const handleScroll = () => {
      // Detectar sección activa
      const sections = menuItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveItem(`#${currentSection}`)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const SidebarContent = ({ isMobile = false }) => (
    <>
      <div className="flex h-[60px] items-center justify-between px-4 border-b">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <div className={cn(
            "flex items-center",
            (!isCollapsed || isMobile) && "gap-2"
          )}>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-semibold">MR</span>
            </div>
            {(!isCollapsed || isMobile) && (
              <motion.span
                variants={menuItemVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                className="text-sm font-medium"
              >
                Marco Rangel
              </motion.span>
            )}
          </div>
        </motion.div>
        {!isMobile && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <motion.div
                animate={{ rotate: isCollapsed ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronLeft className="h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </div>

      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 p-2">
          {menuItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={item.href}
                onClick={() => isMobile && setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  activeItem === item.href && "bg-accent text-accent-foreground",
                  !isCollapsed && "justify-start",
                  isCollapsed && !isMobile && "justify-center"
                )}
              >
                <item.icon className="h-4 w-4" />
                {(!isCollapsed || isMobile) && (
                  <motion.span
                    variants={menuItemVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                  >
                    {item.label}
                  </motion.span>
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <VisitCounter isCollapsed={isCollapsed} isMobile={isMobile} />
          </motion.div>
        </nav>
      </ScrollArea>

      <div className="mt-auto border-t p-4">
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex items-center",
            isCollapsed && !isMobile ? "justify-center" : "justify-start gap-2"
          )}
        >
          <ModeToggle />
          {(!isCollapsed || isMobile) && (
            <motion.span
              variants={menuItemVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className="text-sm font-medium"
            >
              Tema
            </motion.span>
          )}
        </motion.div>
      </div>
    </>
  )

  if (!isDesktop) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 left-4 z-40 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-80 flex flex-col">
          <SheetHeader className="sr-only">
            <SheetTitle>Menú de navegación</SheetTitle>
          </SheetHeader>
          <SidebarContent isMobile />
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <motion.aside
      data-collapsed={isCollapsed}
      className={cn(
        "sticky top-0 group/sidebar flex h-screen w-60 flex-col border-r transition-all",
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isCollapsed && "w-16"
      )}
    >
      <SidebarContent />
    </motion.aside>
  )
}

