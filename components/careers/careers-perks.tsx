"use client"

import { motion } from "framer-motion"
import { Heart, Globe, Clock, BookOpen, Coffee, Zap } from "lucide-react"

const perks = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision insurance for you and your dependents.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Remote Work",
    description: "Flexible remote work options with occasional in-person team gatherings.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Flexible Hours",
    description: "Work when you're most productive with our flexible scheduling policy.",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Learning Budget",
    description: "Annual budget for courses, books, and conferences to support your professional growth.",
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: "Team Retreats",
    description: "Regular team retreats to exciting locations for bonding and collaboration.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Modern Equipment",
    description: "Top-of-the-line hardware and software to help you do your best work.",
  },
]

export default function CareersPerks() {
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
            Perks & <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We believe in taking care of our team with competitive benefits and a supportive work environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-8"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 w-16 h-16 flex items-center justify-center mb-6 text-purple-500">
                {perk.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{perk.title}</h3>
              <p className="text-gray-400">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
