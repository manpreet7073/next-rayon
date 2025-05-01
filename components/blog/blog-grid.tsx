"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    title: "10 Essential Web Development Trends for 2023",
    excerpt: "Explore the latest trends in web development that are shaping the digital landscape in 2023.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web Development",
    date: "May 15, 2023",
    author: "Alex Johnson",
    href: "/blog/web-development-trends-2023",
  },
  {
    title: "The Future of Mobile App Development",
    excerpt: "Discover how AI, AR, and other technologies are transforming the mobile app development landscape.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Mobile Apps",
    date: "April 28, 2023",
    author: "Sarah Chen",
    href: "/blog/future-of-mobile-app-development",
  },
  {
    title: "DevOps Best Practices for Startups",
    excerpt: "Learn how startups can implement DevOps practices to streamline development and deployment processes.",
    image: "/placeholder.svg?height=600&width=800",
    category: "DevOps",
    date: "April 10, 2023",
    author: "David Kim",
    href: "/blog/devops-best-practices-startups",
  },
  {
    title: "UI/UX Design Principles for Better Conversion",
    excerpt: "Explore design principles that can help improve user engagement and conversion rates on your website.",
    image: "/placeholder.svg?height=600&width=800",
    category: "UI/UX Design",
    date: "March 22, 2023",
    author: "Michael Rodriguez",
    href: "/blog/ui-ux-design-principles-conversion",
  },
  {
    title: "The Rise of Headless CMS in Modern Web Development",
    excerpt: "Understand how headless CMS is changing the way we build and manage content-driven websites.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web Development",
    date: "March 5, 2023",
    author: "Emily Patel",
    href: "/blog/rise-of-headless-cms",
  },
  {
    title: "How AI is Transforming Business Operations",
    excerpt: "Discover the ways artificial intelligence is revolutionizing business processes across industries.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Technology",
    date: "February 18, 2023",
    author: "Lisa Wong",
    href: "/blog/ai-transforming-business-operations",
  },
]

export default function BlogGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <Link href={post.href} className="block">
                <div className="rounded-xl overflow-hidden glass-card h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-purple-500 bg-opacity-90 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-purple-500 font-medium group">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
