"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DigitalSectors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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

  const sectors = [
    {
      title: "E-Commerce",
      description: "Custom online stores and marketplaces that drive sales and provide seamless shopping experiences.",
      image: "/E-Commerc.png?height=400&width=600",
      link: "/services/e-commerce-solutions",
    },
    {
      title: "FinTech",
      description: "Secure and innovative financial technology solutions for banking, payments, and investments.",
      image: "/fintich.png?height=400&width=600",
      link: "/services",
    },
    {
      title: "Healthcare",
      description:
        "Digital healthcare solutions that improve patient care, streamline operations, and ensure compliance.",
      image: "/Healthcare.png?height=400&width=600",
      link: "/services",
    },
    {
      title: "Education",
      description: "E-learning platforms and educational technology that enhance teaching and learning experiences.",
      image: "/E-Learning.png?height=400&width=600",
      link: "/services",
    },
    {
      title: "Real Estate",
      description: "Digital solutions for property listings, virtual tours, and real estate management.",
      image: "/Real_Estate.png?height=400&width=600",
      link: "/services",
    },
    {
      title: "Cybersecurity",
      description: "Robust security solutions to protect businesses from evolving cyber threats and vulnerabilities.",
      image: "/Cybersecurity.png?height=400&width=600",
      link: "/services/cybersecurity",
    },
  ]

  return (
    <section className="py-20 md:py-32" ref={ref}>
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
            Industries We Serve
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Digital Sector Expertise
          </motion.h2>
          <motion.p variants={itemVariants} className="text-foreground/80">
            We deliver tailored digital solutions across a wide range of industries, helping businesses thrive in the
            digital landscape.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={sector.image || "/placeholder.svg"}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link href={sector.link} className="text-primary-foreground font-medium">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{sector.title}</h3>
                <p className="text-foreground/80 mb-4">{sector.description}</p>
                <Button asChild variant="outline" size="sm" className="group">
                  <Link href={sector.link}>
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
