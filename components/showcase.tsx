"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Showcase() {
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
      id: 7,
      title: "Cybersecurity Assessment Tool",
      category: "cybersecurity",
      image: "/placeholder.svg?height=600&width=800",
      description: "Security assessment tool for businesses to identify vulnerabilities in their systems.",
      link: "#",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="showcase" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            Our Work
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-foreground/80">
            Take a look at some of our recent projects and see how we've helped businesses achieve their goals.
          </motion.p>
        </motion.div>

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
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
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

        <motion.div
          className="text-center mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="group">
              <Link href="/showcase">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
