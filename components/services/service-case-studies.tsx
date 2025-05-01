"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CaseStudy {
  title: string
  description: string
  image: string
  results: string
}

interface ServiceCaseStudiesProps {
  caseStudies: CaseStudy[]
}

export default function ServiceCaseStudies({ caseStudies }: ServiceCaseStudiesProps) {
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
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore how we've helped our clients achieve their business goals with our solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                <p className="text-gray-400 mb-4">{caseStudy.description}</p>
                <div className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full inline-block">
                  <span className="text-purple-400 font-medium">Results: {caseStudy.results}</span>
                </div>
                <Link href="/projects" className="flex items-center text-purple-500 font-medium group">
                  <span>View Case Study</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
