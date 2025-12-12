import './globals.css'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marco Rangel | Power Platform & Web Developer",
  description: "Portafolio profesional de Marco Rangel. Especialista en Microsoft Power Platform, SharePoint y Desarrollo Web Full Stack (Next.js, React).",
  keywords: ["Marco Rangel", "Power Platform", "SharePoint", "Next.js", "React", "Web Developer", "PowerShell", "Automatización"],
  authors: [{ name: "Marco Rangel" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://marcorangel.dev",
    title: "Marco Rangel | Power Platform & Web Developer",
    description: "Ingeniero en Sistemas Computacionales especializado en automatización y desarrollo web.",
    siteName: "Marco Rangel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Rangel | Power Platform & Web Developer",
    description: "Ingeniero en Sistemas Computacionales especializado en automatización y desarrollo web.",
  },
}

import { JsonLd } from "@/components/json-ld"

import { ScrollProgress } from "@/components/ui/scroll-progress"

import AIChat from "@/components/AIChat"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        <Providers>
            <ScrollProgress />
            {children}
            <AIChat />
        </Providers>
      </body>
    </html>
  )
}

