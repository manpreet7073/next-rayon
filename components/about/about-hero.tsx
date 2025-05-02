"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">Rayon Web Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a team of passionate developers, designers, and digital strategists dedicated to transforming
              businesses through innovative technology solutions.
            </p>
            <p className="text-gray-400 mb-6">
              Founded in 2015, Rayon Web Solutions has grown from a small startup to a leading digital agency with
              clients worldwide. Our mission is to bridge the gap between business goals and technological innovation,
              creating digital experiences that drive growth and success.
            </p>
            <p className="text-gray-400">
              With expertise spanning web development, mobile applications, cloud solutions, UI/UX design, and more, we
              offer comprehensive digital services tailored to your unique needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  src="https://img.freepik.com/free-vector/gradient-particle-wave-background_23-2150511960.jpg?height=600&width=600"
                  alt="Rayon Web Solutions Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl overflow-hidden glass-card p-2 shadow-lg">
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                <Image src="https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?height=200&width=200" alt="Office Space" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
