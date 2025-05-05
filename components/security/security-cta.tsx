"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SecurityCTA() {
  const router = useRouter()

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
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-full">
                  <Shield className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready for <span className="gradient-text">Enterprise-Grade Security?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Contact our security experts to learn how we can help protect your business with our comprehensive
              security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full"
                onClick={() => router.push("/contact")}
              >
                Schedule a Security Consultation
              </Button>
              <Button
                variant="outline"
                className="group px-8 py-6 text-lg rounded-full border-gray-700 hover:bg-gray-800"
                onClick={() => router.push("/services")}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
