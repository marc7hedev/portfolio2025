"use client"

import * as React from "react"
import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar"
import { useState, useCallback } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { SidebarContext, SIDEBAR_WIDTH } from "@/components/ui/sidebar"

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleSidebar = useCallback(() => {
    setIsCollapsed(prev => !prev)
  }, [])

  return (
    <SidebarContext.Provider value={{
      isCollapsed,
      setIsCollapsed,
      isMobile,
      state: {
        open: !isCollapsed,
        width: SIDEBAR_WIDTH
      },
      openMobile,
      setOpenMobile,
      toggleSidebar
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

