"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  {
    category: "Frontend",
    techs: [
      { name: "React", logo: "/technologies/react.png?height=60&width=60" },
      { name: "Next.js", logo: "/technologies/next.png?height=60&width=60" },
      { name: "Vue.js", logo: "/technologies/vue.png?height=60&width=60" },
      { name: "Angular", logo: "/technologies/angularjs.png?height=60&width=60" },
      { name: "Tailwind CSS", logo: "/technologies/tailwind.png?height=60&width=60" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", logo: "/technologies/node.png?height=60&width=60" },
      { name: "Python", logo: "/technologies/python.png?height=60&width=60" },
      { name: "PHP", logo: "/technologies/php.png?height=60&width=60" },
      { name: "Java", logo: "/technologies/java.png?height=60&width=60" },
      { name: ".NET", logo: "/technologies/net.png?height=60&width=60" },
    ],
  },
  {
    category: "Mobile",
    techs: [
      { name: "React Native", logo: "/technologies/react-native.png?height=60&width=60" },
      { name: "Flutter", logo: "/technologies/flutter.png?height=60&width=60" },
      { name: "Swift", logo: "/technologies/swift.png?height=60&width=60" },
      { name: "Kotlin", logo: "/technologies/kotlin.png?height=60&width=60" },
    ],
  },
  {
    category: "DevOps",
    techs: [
      { name: "Docker", logo: "/technologies/docker.png?height=60&width=60" },
      { name: "Kubernetes", logo: "/technologies/kubernetes.png?height=60&width=60" },
      { name: "AWS", logo: "/technologies/aws.png?height=60&width=60" },
      { name: "Azure", logo: "/technologies/azure.png?height=60&width=60" },
      { name: "Google Cloud", logo: "/technologies/gcp.jpeg?height=60&width=60" },
    ],
  },
]

export default function TechnologiesSection() {
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
            Technologies We <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We leverage the latest technologies to build scalable, secure, and high-performance solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {technologies.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{category.category}</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-20 h-20 glass-card rounded-xl flex items-center justify-center p-4 mb-3">
                      <Image
                        src={tech.logo || "/technologies/next.png"}
                        alt={tech.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-400">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
