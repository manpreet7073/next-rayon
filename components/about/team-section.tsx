"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Github } from "lucide-react"

const team = [
  {
    name: "Arshpreet Singh",
    position: "Co-Founder & Managing Partner",
    bio: "With over 8 years of experience in tech, Arshpreet founded Rayon Web Solutions with a vision to create innovative digital solutions for businesses worldwide.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/arshpreet-singh-4a7b7a192/",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Manpreet Singh",
    position: "Co-Founder & Managing Partner",
    bio: "A visionary leader with over 8 years of experience in software engineering, Manpreet drives business strategy and oversees end-to-end technology execution at Rayon Web Solutions.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://www.linkedin.com/in/er-manpreet-singh-0a5a7a192/",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Ritika Sharma",
    position: "Creative Director",
    bio: "Ritika brings a flair for innovative UI/UX design and brand storytelling, ensuring every project is visually compelling and user-centric.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Ankit Verma",
    position: "Head of Development",
    bio: "Ankit leads the development team with precision, delivering scalable solutions using modern frameworks with a focus on performance and maintainability.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Ajay Deshmukh",
    position: "AI Specialist",
    bio: "Ajay is the brain behind our AI innovations, leveraging machine learning, NLP, and data engineering to build intelligent solutions that drive business growth.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Anusha Reddy",
    position: "Cybersecurity Expert",
    bio: "Anusha ensures our systems and products are secure, compliant, and resilient, with deep expertise in ethical hacking, threat analysis, and cloud security.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Priya Nair",
    position: "DevOps Lead",
    bio: "Priya ensures seamless deployments, robust infrastructure, and high availability across all environments through her expertise in cloud platforms and automation tools.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Rajeev Kumar",
    position: "Project Manager",
    bio: "Rajeev coordinates client communication, timelines, and resource allocation, ensuring every project is delivered on time and meets the highest standards.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];



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
