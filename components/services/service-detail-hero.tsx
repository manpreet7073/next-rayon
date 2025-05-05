"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Cloud, Palette, BookOpen, TestTube } from "lucide-react"
import Link from "next/link"

const iconComponents = {
  Code: Code,
  Smartphone: Smartphone,
  Cloud: Cloud,
  Palette: Palette,
  BookOpen: BookOpen,
  TestTube: TestTube,
}

interface ServiceDetailHeroProps {
  title: string
  description: string
  icon: keyof typeof iconComponents
  color: string
}

export default function ServiceDetailHero({ title, description, icon, color }: ServiceDetailHeroProps) {
  const IconComponent = iconComponents[icon]

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className={`p-6 rounded-full bg-gradient-to-r ${color} w-24 h-24 flex items-center justify-center`}>
              <IconComponent className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
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
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
