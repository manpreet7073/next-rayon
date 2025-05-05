"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"

interface SubServiceHeroProps {
  title: string
  description: string
  parentService: string
  parentServiceLink: string
  color: string
}

export default function SubServiceHero({
  title,
  description,
  parentService,
  parentServiceLink,
  color,
}: SubServiceHeroProps) {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href={parentServiceLink} className="hover:text-white transition-colors">
              {parentService}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white">{title}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-300 mb-8">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={'/contact'} >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full">
              Get Started
            </Button>
            </Link>
            <Link href={'/projects'} >
            <Button
              variant="outline"
              className="group px-8 py-6 text-lg rounded-full border-gray-700 hover:bg-gray-800"
            >
               Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
