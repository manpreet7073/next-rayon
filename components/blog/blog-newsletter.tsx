"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function BlogNewsletter() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 z-0"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10 py-16 px-8 md:py-24 md:px-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 w-16 h-16 flex items-center justify-center text-purple-500">
                <Mail className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Subscribe to Our <span className="gradient-text">Newsletter</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Stay updated with the latest insights, trends, and news in technology and digital innovation.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white py-6 px-4 rounded-full"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
