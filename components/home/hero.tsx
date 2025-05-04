"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import { Suspense, useState, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"

// Dynamically import the 3D components to reduce initial bundle size
const Scene3D = dynamic(() => import("@/components/home/hero-3d"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse opacity-50"></div>
    </div>
  ),
})

export default function Hero() {
  const isMobile = useMobile()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Mark component as loaded after a short delay to ensure smooth animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* 3D Background - Only render on desktop or if mobile is explicitly allowed */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse opacity-50"></div>
            </div>
          }
        >
          {(!isMobile || (isMobile && isLoaded)) && <Scene3D />}
        </Suspense>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Your Vision, Our Code –<span className="gradient-text block mt-2">Turning Ideas into Reality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            We build cutting-edge web and mobile solutions that help businesses transform their digital presence and
            achieve their goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full">
              Book a Free Consultation
            </Button>
            <Button
              variant="outline"
              className="group px-8 py-6 text-lg rounded-full border-gray-700 hover:bg-gray-800"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.2, 1, 0.2], y: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-1 h-1 rounded-full bg-white"
          />
        </motion.div>
      </div>
    </div>
  )
}
