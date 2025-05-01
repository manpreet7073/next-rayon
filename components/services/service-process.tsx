"use client"

import { motion } from "framer-motion"

interface ServiceProcessProps {
  steps: string[]
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We follow a structured approach to deliver high-quality solutions that meet your business needs.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Process line */}
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gray-800"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center mb-12 last:mb-0"
            >
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                  {index + 1}
                </div>
              </div>
              <div className="ml-8">
                <h3 className="text-2xl font-bold">{step}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
