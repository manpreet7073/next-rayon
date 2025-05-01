"use client"

import { motion } from "framer-motion"

interface SubServiceTechnologiesProps {
  technologies: string[]
  color: string
}

export default function SubServiceTechnologies({ technologies, color }: SubServiceTechnologiesProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technologies We <span className="gradient-text">Use</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We leverage the latest technologies to deliver high-quality solutions for your business.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${color} bg-opacity-10 text-white`}>{tech}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
