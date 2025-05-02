"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with custom product configurator and payment integration.",
    image: "https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431747.jpg?height=600&width=800",
    href: "/projects/ecommerce-platform",
  },
  {
    title: "Health & Fitness App",
    category: "App Development",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics.",
    image: "https://img.freepik.com/free-vector/virtual-gym-concept-illustrated_23-2148520430.jpg?height=600&width=800",
    href: "/projects/health-fitness-app",
  },
  {
    title: "Learning Management System",
    category: "LMS & Integration",
    description: "Custom LMS with course creation, student management, and payment processing.",
    image: "https://img.freepik.com/free-vector/online-job-interview_23-2148613123.jpg?height=600&width=800",
    href: "/projects/learning-management-system",
  },
  {
    title: "Cloud Migration",
    category: "DevOps & Cloud",
    description: "Migration of legacy systems to AWS cloud infrastructure with CI/CD pipeline implementation.",
    image: "https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-cloud-connection-icons-server-racks-wired-cloud-with-sync-sign-vector-illustration_1284-65966.jpg?height=600&width=800",
    href: "/projects/cloud-migration",
  },
  {
    title: "Banking App Redesign",
    category: "UI/UX Design",
    description: "Complete redesign of a banking application with focus on user experience and accessibility.",
    image: "https://img.freepik.com/free-vector/mobile-banking-concept-illustration_114360-13928.jpg?height=600&width=800",
    href: "/projects/banking-app-redesign",
  },
  {
    title: "Automated Testing Framework",
    category: "QA & Automation",
    description: "Custom testing framework for automated regression testing of a complex SaaS platform.",
    image: "https://img.freepik.com/free-vector/characters-fixing-computer-chatbot-isometric-icon-3d_1284-63049.jpg?height=600&width=800",
    href: "/projects/automated-testing-framework",
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Property listing and management platform with virtual tours and agent dashboard.",
    image: "https://img.freepik.com/free-vector/landing-page-concept-house-searching_23-2148298747.jpg?height=600&width=800",
    href: "/projects/real-estate-platform",
  },
  {
    title: "Inventory Management System",
    category: "Web Development",
    description: "Comprehensive inventory tracking system with barcode scanning and analytics.",
    image: "https://img.freepik.com/free-vector/handling-order-processing-abstract-concept-vector-illustration-order-documentation-processing-system-handling-customer-request-logistics-automated-logistics-operations-abstract-metaphor_335657-1789.jpg?height=600&width=800",
    href: "/projects/inventory-management-system",
  },
  {
    title: "Travel Booking App",
    category: "App Development",
    description: "Mobile app for booking flights, hotels, and experiences with offline functionality.",
    image: "https://img.freepik.com/free-vector/travel-destination-choosing-accommodation-booking-system_335657-2503.jpg?height=600&width=800",
    href: "/projects/travel-booking-app",
  },
]

export default function ProjectsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
