"use client"

import { motion } from "framer-motion"

interface LegalHeroProps {
  title: string
  lastUpdated: string
}

export default function LegalHero({ title, lastUpdated }: LegalHeroProps) {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-300">Last Updated: {lastUpdated}</p>
        </motion.div>
      </div>
    </section>
  )
}
