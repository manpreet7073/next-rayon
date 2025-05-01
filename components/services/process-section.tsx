"use client"

import { motion } from "framer-motion"
import { MessageSquare, Lightbulb, FileCode, Layers, CheckCircle, Repeat } from "lucide-react"

const processSteps = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Discovery",
    description:
      "We start by understanding your business goals, target audience, and project requirements through in-depth consultations.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Strategy & Planning",
    description:
      "Our team develops a comprehensive strategy and project plan tailored to your specific needs and objectives.",
  },
  {
    icon: <FileCode className="h-8 w-8" />,
    title: "Design & Development",
    description:
      "We create wireframes, prototypes, and then build your solution using the latest technologies and best practices.",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Testing & QA",
    description:
      "Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all devices.",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Deployment",
    description: "We handle the launch process, ensuring a smooth transition and minimal disruption to your business.",
  },
  {
    icon: <Repeat className="h-8 w-8" />,
    title: "Maintenance & Support",
    description:
      "Our relationship continues with ongoing support, updates, and improvements to keep your solution running smoothly.",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We follow a structured approach to deliver high-quality solutions that meet your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-8"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 w-16 h-16 flex items-center justify-center mb-6 text-purple-500">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
