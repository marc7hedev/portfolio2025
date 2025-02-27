"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { ButtonWithGlow } from "@/components/ui/button-with-glow"

export function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      transition={{ delay: 0 }}
    >
      <ButtonWithGlow
        onClick={() => window.open("https://wa.me/+524731221262?text=¡Hola!%20Quisiera%20obtener%20más%20información.")}
        size="icon"
        className="h-12 w-12 rounded bg-[#000000] hover:bg-[#25D366]/90"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </ButtonWithGlow>
    </motion.div>
  )
}