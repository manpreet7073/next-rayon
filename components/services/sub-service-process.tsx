"use client"

import { motion } from "framer-motion"

interface ProcessStep {
  title: string
  description: string
}

interface SubServiceProcessProps {
  process: ProcessStep[]
}

export default function SubServiceProcess({ process }: SubServiceProcessProps) {
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

        <div className="max-w-4xl mx-auto">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start mb-12 last:mb-0"
            >
              <div className="mr-6 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
