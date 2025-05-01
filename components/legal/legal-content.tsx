"use client"

import { motion } from "framer-motion"

interface ContentSection {
  heading: string
  text: string
}

interface LegalContentProps {
  content: ContentSection[]
}

export default function LegalContent({ content }: LegalContentProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto glass-card rounded-xl p-8"
        >
          <div className="prose prose-invert max-w-none">
            {content.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                <p className="text-gray-300">{section.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
