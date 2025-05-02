"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "We've been working with Rayon Web Solutions for over 5 years, and they’ve been an incredible tech partner throughout. Their team is sharp, reliable, and deeply skilled — from Django, PostgreSQL, and Heroku/AWS on the backend to ReactJS and Tailwind on the frontend",
    author: "Varun Gulati",
    position: "President & CTO",
    image: "/2x2_1_FfnZ0k4.jpeg?height=100&width=100",
  },
  {
    quote:
      "The team at Rayon delivered our mobile app ahead of schedule and exceeded all our expectations. Their attention to detail is unmatched.",
    author: "Michael Chen",
    position: "CTO, Health Tech Startup",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Rayon was a game-changer for our online learning platform. Their expertise in LMS development helped us scale to thousands of students.",
    author: "Emily Rodriguez",
    position: "Director, Educational Institute",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The DevOps solutions provided by Rayon Web Solutions reduced our deployment time by 70% and significantly improved our system reliability.",
    author: "David Wilson",
    position: "VP of Engineering, SaaS Company",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        next()
      }, 5000)
    }
    return () => {
      resetTimeout()
    }
  }, [current, autoplay])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card rounded-xl p-8 md:p-10">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-purple-500 transform -scale-x-100" />
                        <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-purple-500">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            width={100}
                            height={100}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-xl md:text-2xl text-center mb-6">"{testimonial.quote}"</blockquote>
                    <div className="text-center">
                      <div className="font-bold text-lg">{testimonial.author}</div>
                      <div className="text-purple-400">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-gray-800 hover:bg-gray-700 rounded-full p-3 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-gray-800 hover:bg-gray-700 rounded-full p-3 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  current === index ? "bg-purple-500" : "bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
