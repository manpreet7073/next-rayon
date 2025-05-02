"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function TrainingCta() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Accelerate Your Tech Career?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join thousands of successful graduates who have transformed their careers through our industry-leading
            training programs. The next cohort starts soon!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8"
            >
              <Link href="/contact" className="flex items-center">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-gray-600 hover:bg-gray-800">
              <Link href="#courses">Browse Courses</Link>
            </Button>
          </div>

          <div className="mt-10 p-6 border border-purple-500/20 rounded-xl bg-gray-900/50">
            <p className="text-gray-300 font-medium">
              "Investing in your skills is the best career decision you'll ever make. Our graduates see an average
              salary increase of 40% after completing our programs."
            </p>
            <p className="mt-4 text-purple-400 font-medium">— Dr. Sarah Johnson, Lead Instructor</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
