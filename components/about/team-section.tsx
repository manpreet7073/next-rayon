"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Github } from "lucide-react"

const team = [
  {
    name: "Alex Johnson",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in tech, Alex founded Rayon Web Solutions with a vision to create innovative digital solutions for businesses worldwide.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Chen",
    position: "CTO",
    bio: "Sarah leads our technical strategy and ensures we stay at the cutting edge of technology, with expertise in cloud architecture and AI integration.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    position: "Creative Director",
    bio: "Michael brings over a decade of design experience, leading our UI/UX team to create beautiful, functional, and user-centered digital experiences.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emily Patel",
    position: "Head of Development",
    bio: "Emily oversees all development projects, ensuring high-quality code, on-time delivery, and seamless implementation of client requirements.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "David Kim",
    position: "DevOps Lead",
    bio: "David specializes in cloud infrastructure, CI/CD pipelines, and ensuring our solutions are scalable, secure, and optimized for performance.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Lisa Wong",
    position: "Project Manager",
    bio: "Lisa ensures smooth project execution, effective communication, and that all deliverables meet our high standards of quality and client expectations.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our talented team of experts is passionate about creating innovative digital solutions that drive business
            success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass-card rounded-xl overflow-hidden h-full">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

                  {/* Social icons */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.linkedin}
                      className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.github}
                      className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.position}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
