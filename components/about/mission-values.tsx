"use client"

import { motion } from "framer-motion"
import { Target, Heart, Lightbulb, Users, Award, Zap } from "lucide-react"

const values = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Mission",
    description:
      "To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion",
    description: "We're passionate about technology and its potential to transform businesses and improve lives.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration",
    description:
      "We believe in working closely with our clients to understand their needs and exceed their expectations.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client communication.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Agility",
    description: "We adapt quickly to changing requirements and technologies to deliver timely solutions.",
  },
]

export default function MissionValues() {
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
            Our Mission & <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            These core principles guide everything we do and define who we are as a company.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-8"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 w-16 h-16 flex items-center justify-center mb-6 text-purple-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
