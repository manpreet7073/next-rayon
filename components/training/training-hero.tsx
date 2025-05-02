"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GraduationCap, Users, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function TrainingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/20 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Expert-Led</span> Tech Training Programs
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Elevate your career with our comprehensive training programs designed by industry experts. Master
              cutting-edge technologies and stay ahead in the competitive tech landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8"
              >
                <Link href="#courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-gray-600 hover:bg-gray-800">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-card rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-5 text-center">
                  <GraduationCap className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-1">20+</h3>
                  <p className="text-sm text-gray-400">Training Courses</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-5 text-center">
                  <Users className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-1">1,500+</h3>
                  <p className="text-sm text-gray-400">Students Trained</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-5 text-center">
                  <Calendar className="h-10 w-10 text-teal-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Flexible</h3>
                  <p className="text-sm text-gray-400">Learning Schedule</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-5 text-center">
                  <Award className="h-10 w-10 text-amber-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Industry</h3>
                  <p className="text-sm text-gray-400">Recognized Certification</p>
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-4 border border-purple-500/20">
                <p className="text-center text-sm">
                  <span className="text-purple-400 font-medium">Limited Time Offer:</span> Get 20% off on all courses
                  when you enroll before June 30, 2025
                </p>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/30 rounded-full filter blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
