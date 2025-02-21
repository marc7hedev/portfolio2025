"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappNumber = "+524731221262" // Reemplazar con tu número de WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          variant="default"
          className="rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all"
          asChild
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                repeatDelay: 4
              }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.div>
          </a>
        </Button>
      </motion.div>
    </motion.div>
  )
}