"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/projects/p1.png?height=600&width=800",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/projects/p2.png?height=600&width=800",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    link: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/projects/p3.png?height=600&width=800",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    link: "#",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/projects/p4.png?height=600&width=800",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    link: "#",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/projects/p5.png?height=600&width=800",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    link: "#",
  },
  {
    id: 6,
    title: "Learning Management System",
    category: "LMS & Integration",
    image: "/projects/p6.png?height=600&width=800",
    description: "A comprehensive LMS with course creation, student management, and payment processing.",
    link: "#",
  },
  {
    id: 7,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/projects/p7.png?height=600&width=800",
    description: "A full-featured e-commerce platform with payment integration and inventory management.",
    link: "#",
  },
  {
    id: 8,
    title: "Quizzes Platform",
    category: "UI/UX Design",
    image: "/projects/p8.png?height=600&width=800",
    description: "A full-featured quizzes platform with payment integration management.",
    link: "#",
  },
]

export default function ProjectsGrid({ activeCategory }) {
  // Filter projects based on the active category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-block text-purple-500 font-medium hover:text-purple-400 transition-colors"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
