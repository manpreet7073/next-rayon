"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt';
import { Code, Smartphone, Cloud, Palette, BookOpen, TestTube, ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description: "Custom websites, e-commerce solutions, and CMS integrations tailored to your business needs.",
    href: "/services/web-development",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "App Development",
    description: "Native and cross-platform mobile applications for Android, iOS, and Progressive Web Apps.",
    href: "/services/app-development",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "DevOps & Cloud",
    description: "Cloud infrastructure setup, CI/CD pipelines, Docker, Kubernetes, and monitoring solutions.",
    href: "/services/devops-cloud",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "User-centered design with wireframes, prototypes, and comprehensive design systems.",
    href: "/services/ui-ux-design",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "LMS & Integration",
    description: "Custom Learning Management Systems and third-party integrations for seamless workflows.",
    href: "/services/lms-integration",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <TestTube className="h-10 w-10" />,
    title: "QA & Automation",
    description: "Comprehensive testing strategies with manual and automated testing to ensure quality.",
    href: "/services/qa-automation",
    color: "from-green-500 to-emerald-500",
  },
]

const defaultTiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.5,
}

export default function FeaturedServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Tilt options={defaultTiltOptions}>
                <Link href={service.href}>
                  <div className="service-card h-full flex flex-col">
                    <div
                      className={`p-4 rounded-full bg-gradient-to-r ${service.color} w-16 h-16 flex items-center justify-center mb-6`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                    <div className="flex items-center text-purple-500 font-medium group">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
