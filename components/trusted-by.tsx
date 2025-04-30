"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrustedBy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeSet, setActiveSet] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Company logos - in a real implementation, these would be actual company logos
  const companies = [
    { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "InnovateTech", logo: "/placeholder.svg?height=60&width=120" },
    { name: "GlobalSolutions", logo: "/placeholder.svg?height=60&width=120" },
    { name: "FutureSystems", logo: "/placeholder.svg?height=60&width=120" },
    { name: "NextGen", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DigitalWave", logo: "/placeholder.svg?height=60&width=120" },
    { name: "SmartTech", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CloudNine", logo: "/placeholder.svg?height=60&width=120" },
    { name: "PeakPerformance", logo: "/placeholder.svg?height=60&width=120" },
    { name: "EliteEdge", logo: "/placeholder.svg?height=60&width=120" },
  ]

  // Number of logos to show per set
  const logosPerSet = isMobile ? 2 : 5

  // Calculate number of sets
  const totalSets = Math.ceil(companies.length / logosPerSet)

  // Get current visible logos
  const visibleLogos = () => {
    const startIndex = activeSet * logosPerSet
    return companies.slice(startIndex, startIndex + logosPerSet)
  }

  const nextSet = () => {
    setActiveSet((prevSet) => (prevSet + 1) % totalSets)
  }

  const prevSet = () => {
    setActiveSet((prevSet) => (prevSet - 1 + totalSets) % totalSets)
  }

  const goToSet = (index: number) => {
    setActiveSet(index)
  }

  return (
    <section className="py-16 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-4">
            Trusted By Industry Leaders
          </motion.h2>
          <motion.p variants={itemVariants} className="text-foreground/80">
            We're proud to work with some of the most innovative companies across various industries.
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex justify-center items-center gap-8 md:gap-12 flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {visibleLogos().map((company, index) => (
              <motion.div
                key={`company-${activeSet * logosPerSet + index}`}
                variants={itemVariants}
                className="flex items-center justify-center"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 h-24 w-40 flex items-center justify-center hover:border-primary/30 transition-all duration-300">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 items-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full mr-4 h-8 w-8"
              onClick={prevSet}
              aria-label="Previous set"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Small Cursor Indicators */}
            <div className="flex space-x-1.5">
              {Array.from({ length: totalSets }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSet(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === activeSet ? "bg-primary scale-125" : "bg-primary/30"
                  }`}
                  aria-label={`Go to logo set ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full ml-4 h-8 w-8"
              onClick={nextSet}
              aria-label="Next set"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
