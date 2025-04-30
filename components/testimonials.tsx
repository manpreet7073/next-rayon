"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "RayonWeb transformed our online presence completely. Their team delivered a website that not only looks stunning but also performs exceptionally well. The attention to detail and commitment to quality is impressive.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthLabs",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with RayonWeb was a game-changer for our business. They understood our vision perfectly and created a website that exceeded our expectations. The site is fast, responsive, and has significantly improved our conversion rates.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, CreativeMinds",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "I can't recommend RayonWeb enough! Their team is not only technically skilled but also incredibly creative. They took our vague ideas and turned them into a beautiful, functional website that perfectly represents our brand.",
      rating: 4,
    },
    {
      name: "David Wilson",
      position: "CTO, InnovateTech",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The cybersecurity solutions provided by RayonWeb have given us peace of mind. Their team's expertise in identifying vulnerabilities and implementing robust security measures has been invaluable to our organization.",
      rating: 5,
    },
    {
      name: "Jennifer Lee",
      position: "E-commerce Manager, StyleShop",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Our e-commerce platform redesign by RayonWeb resulted in a 40% increase in sales within the first month. The intuitive user interface and seamless checkout process have significantly improved our customer experience.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setActiveIndex(index)
  }

  // Display 3 testimonials on desktop, 1 on mobile
  const visibleTestimonials = () => {
    // For mobile (1 testimonial)
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [testimonials[activeIndex]]
    }

    // For desktop (3 testimonials)
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  return (
    <section id="testimonials" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            Testimonials
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-foreground/80">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {visibleTestimonials().map((testimonial, index) => (
              <motion.div key={`testimonial-${activeIndex + index}`} variants={itemVariants}>
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 h-full flex flex-col hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-foreground/70 text-sm">{testimonial.position}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-foreground/80 italic flex-grow">"{testimonial.quote}"</blockquote>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 items-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full mr-4"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Cursor Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-primary scale-125" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full ml-4"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
