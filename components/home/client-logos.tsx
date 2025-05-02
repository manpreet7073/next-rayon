"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "Client 1", logo: "/aws-cloud.svg?height=80&width=160" },
  { name: "Client 2", logo: "/download.png?height=80&width=160" },
  { name: "Client 3", logo: "/lenovo-service-centre.jpg?height=80&width=160" },
  { name: "Client 4", logo: "/rKXaODLl_400x400.jpg?height=80&width=160" },
  { name: "Client 5", logo: "/touchicon-180.png?height=80&width=160" },
  { name: "Client 6", logo: "/unnamed.png?height=80&width=160" },
]

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    const scrollWidth = scrollElement.scrollWidth
    const clientWidth = scrollElement.clientWidth

    if (scrollWidth <= clientWidth) return

    let scrollPos = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPos += scrollSpeed
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0
      }
      if (scrollElement) {
        scrollElement.scrollLeft = scrollPos
      }
      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animation)
    }
  }, [])

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Trusted by <span className="gradient-text">Leading Companies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've had the privilege of working with amazing clients across various industries.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-12 py-8 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-20 w-40 glass-card rounded-lg p-4"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}

            {/* Duplicate set for infinite scroll */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 w-40 glass-card rounded-lg p-4"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}
