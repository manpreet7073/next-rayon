"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function FullShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("all")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "cybersecurity", name: "Cybersecurity" },
  ]

  const projects = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      category: "ecommerce",
      image: "/placeholder.svg?height=600&width=800",
      description: "A fully responsive e-commerce platform with advanced filtering and payment integration.",
      link: "#",
    },
    {
      id: 2,
      title: "Corporate Website Redesign",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete redesign of a corporate website with improved UX and performance optimization.",
      link: "#",
    },
    {
      id: 3,
      title: "Mobile Banking Application",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
      description: "Secure and user-friendly mobile banking application with biometric authentication.",
      link: "#",
    },
    {
      id: 4,
      title: "Real Estate Listing Platform",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "Property listing website with advanced search, filtering, and virtual tours.",
      link: "#",
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
      description: "Mobile app for food ordering and delivery with real-time tracking and payment processing.",
      link: "#",
    },
    {
      id: 6,
      title: "Online Learning Platform",
      category: "ecommerce",
      image: "/placeholder.svg?height=600&width=800",
      description: "E-learning platform with course management, video streaming, and subscription services.",
      link: "#",
    },
    {
      id: 7,
      title: "Cybersecurity Assessment Tool",
      category: "cybersecurity",
      image: "/placeholder.svg?height=600&width=800",
      description: "Security assessment tool for businesses to identify vulnerabilities in their systems.",
      link: "#",
    },
    {
      id: 8,
      title: "Healthcare Patient Portal",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "Secure patient portal for healthcare providers with appointment scheduling and medical records.",
      link: "#",
    },
    {
      id: 9,
      title: "Inventory Management System",
      category: "ecommerce",
      image: "/placeholder.svg?height=600&width=800",
      description: "Comprehensive inventory management system for retail businesses with real-time tracking.",
      link: "#",
    },
    {
      id: 10,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
      description: "Mobile app for tracking workouts, nutrition, and fitness goals with social features.",
      link: "#",
    },
    {
      id: 11,
      title: "Network Security Dashboard",
      category: "cybersecurity",
      image: "/placeholder.svg?height=600&width=800",
      description: "Real-time security monitoring dashboard for enterprise networks with threat detection.",
      link: "#",
    },
    {
      id: 12,
      title: "Travel Booking Platform",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "Comprehensive travel booking platform with flight, hotel, and activity reservations.",
      link: "#",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/50 hover:bg-card/80 text-foreground/70"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <Link href={project.link} className="text-primary-foreground flex items-center gap-2 font-medium">
                    View Project <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {categories.find((c) => c.id === project.category)?.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
