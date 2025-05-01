"use client"

import { motion } from "framer-motion"

export default function ContactMap() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Find <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Visit our office or reach out to us online. We're always happy to connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-xl overflow-hidden"
        >
          <div className="h-96 w-full">
            {/* Placeholder for map - in a real implementation, you would use Google Maps or another map service */}
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <p className="text-gray-400">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
