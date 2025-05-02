"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"

const instructors = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Web Development Instructor",
    bio: "Former Senior Engineer at Google with 12+ years of experience in full-stack development. PhD in Computer Science.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["JavaScript", "React", "Node.js"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Mobile App Development Lead",
    bio: "Ex-Apple developer with expertise in iOS and Android. Created multiple apps with millions of downloads.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["React Native", "Swift", "Flutter"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Olivia Rodriguez",
    role: "UI/UX Design Instructor",
    bio: "Award-winning designer with experience at top design agencies. Passionate about creating intuitive user experiences.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Figma", "User Research", "Design Systems"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "James Wilson",
    role: "DevOps & Cloud Instructor",
    bio: "Cloud architecture expert with AWS certification. Helped scale infrastructure for Fortune 500 companies.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["AWS", "Kubernetes", "CI/CD"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export default function TrainingInstructors() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-purple-500/30 text-purple-400 bg-purple-500/10">
            Expert Team
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your Instructors</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn from industry veterans with years of real-world experience and a passion for teaching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/30 transition-all overflow-hidden h-full">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                  <p className="text-purple-400 text-sm mb-3">{instructor.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{instructor.bio}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-gray-800 text-gray-300">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={instructor.social.linkedin}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href={instructor.social.twitter}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href={instructor.social.github}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
