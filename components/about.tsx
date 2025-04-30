"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl opacity-70" />
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/abouthome.png?height=600&width=600"
                alt="About Us"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={containerVariants}>
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
            >
              About Us
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              We Create Digital Solutions For Your Business
            </motion.h2>

            <motion.p variants={itemVariants} className="text-foreground/80 mb-6">
              Founded in 2015, RayonWeb has been at the forefront of web development and digital transformation. We
              believe in creating websites and applications that not only look great but also perform exceptionally
              well.
            </motion.p>

            <motion.p variants={itemVariants} className="text-foreground/80 mb-8">
              Our team of experienced developers, designers, and digital strategists work together to deliver solutions
              that help businesses grow their online presence and achieve their goals.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
                <p className="text-foreground/80">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="text-foreground/80">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
