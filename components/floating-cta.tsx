"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="mb-4 p-6 rounded-xl glass-card w-80"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
                <h3 className="text-lg font-bold mb-2">Need help with your project?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Let's discuss how we can turn your vision into reality. Book a free consultation today!
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Book a Consultation
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-lg neon-glow flex items-center justify-center"
          >
            <MessageSquare size={24} />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
