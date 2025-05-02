"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Emily Rodriguez",
    role: "Frontend Developer at Spotify",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The Full-Stack Web Development Bootcamp completely transformed my career. I went from a marketing role to a frontend developer position at Spotify within 3 months of completing the program. The instructors were incredibly knowledgeable and supportive throughout the journey.",
    course: "Full-Stack Web Development Bootcamp",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Mobile App Developer at Uber",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "I had some programming experience before joining the React Native course, but this program took my skills to the next level. The hands-on projects and code reviews were invaluable. I now work as a mobile developer at Uber, building features used by millions.",
    course: "Mobile App Development with React Native",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    role: "UI/UX Designer at Adobe",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The UI/UX Design Bootcamp provided me with both the theoretical knowledge and practical skills needed in the industry. The portfolio I built during the course helped me land my dream job at Adobe. I highly recommend this program to anyone interested in design.",
    course: "UI/UX Design Bootcamp",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "DevOps Engineer at Microsoft",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "After 10 years in traditional IT, I wanted to transition to cloud and DevOps. This program made that possible with practical, hands-on training. The instructors brought real-world scenarios that prepared me for my current role at Microsoft.",
    course: "DevOps Engineering Certification",
    rating: 4,
  },
  {
    name: "Aisha Patel",
    role: "Full-Stack Developer at Netflix",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Coming from a non-technical background, I was worried about keeping up, but the step-by-step curriculum and supportive environment made learning to code accessible. Now I'm working as a full-stack developer at Netflix and loving every minute of it!",
    course: "Full-Stack Web Development Bootcamp",
    rating: 5,
  },
  {
    name: "Thomas Wright",
    role: "iOS Developer at Airbnb",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The iOS Development course was comprehensive and well-structured. The focus on Swift and practical app development prepared me for real-world challenges. Within weeks of completing the course, I received multiple job offers and ultimately joined the mobile team at Airbnb.",
    course: "iOS Development with Swift",
    rating: 4,
  },
]

export default function TrainingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our graduates who have transformed their careers through our training programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-purple-400 mt-1">{testimonial.course}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? "bg-purple-500" : "bg-gray-700"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
