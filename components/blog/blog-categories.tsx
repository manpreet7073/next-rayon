"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const categories = ["All", "Web Development", "Mobile Apps", "DevOps", "UI/UX Design", "Technology", "Business"]

export default function BlogCategories({ onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    // When activeCategory changes, call the parent component's callback
    onCategoryChange(activeCategory)
  }, [activeCategory, onCategoryChange])

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
