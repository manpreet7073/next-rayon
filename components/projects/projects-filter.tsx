"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const categories = [
  "All",
  "Web Development",
  "App Development",
  "DevOps & Cloud",
  "UI/UX Design",
  "LMS & Integration",
  "QA & Automation",
]

export default function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
