"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with custom product configurator and payment integration.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/projects/ecommerce-platform",
  },
  {
    title: "Health & Fitness App",
    category: "App Development",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/projects/health-fitness-app",
  },
  {
    title: "Learning Management System",
    category: "LMS & Integration",
    description: "Custom LMS with course creation, student management, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    href: "/projects/learning-management-system",
  },
]

export default function RecentProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Recent <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl"
            >
              Explore our latest work and see how we've helped our clients achieve their digital goals.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 md:mt-0"
          >
            <Button variant="outline" className="group rounded-full border-gray-700 hover:bg-gray-800">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <Link href={project.href} className="block">
                <div className="rounded-xl overflow-hidden glass-card h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-purple-500 bg-opacity-90 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex items-center text-purple-500 font-medium group">
                      <span>View Project</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
