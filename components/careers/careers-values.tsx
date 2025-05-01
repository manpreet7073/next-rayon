"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const values = [
  "Innovation and creativity",
  "Collaboration and teamwork",
  "Continuous learning and growth",
  "Work-life balance",
  "Diversity and inclusion",
  "Customer-centric approach",
]

export default function CareersValues() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Culture</span> and Values
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We foster a culture that values innovation, collaboration, and personal growth.
            </p>

            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1" />
                  <p className="text-gray-400">{value}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-400">
              Our team members are our greatest asset, and we're committed to creating an environment where everyone can
              thrive professionally and personally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Team Collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden glass-card p-2 mt-8">
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Office Space" fill className="object-cover" />
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Team Event" fill className="object-cover" />
                </div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden glass-card p-2 mt-8">
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Work Environment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
