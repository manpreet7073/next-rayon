"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: What to Expect in 2023",
    category: "Web Development",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?height=600&width=800",
    date: "June 15, 2023",
    author: "John Smith",
    excerpt: "Explore the upcoming trends and technologies that will shape web development in the coming year.",
    link: "#",
  },
  {
    id: 2,
    title: "Building Cross-Platform Mobile Apps with React Native",
    category: "Mobile Apps",
    image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?height=600&width=800",
    date: "May 28, 2023",
    author: "Sarah Johnson",
    excerpt: "Learn how to create efficient and performant mobile applications that work on both iOS and Android.",
    link: "#",
  },
  {
    id: 3,
    title: "DevOps Best Practices for Startups",
    category: "DevOps",
    image: "https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149370940.jpg?height=600&width=800",
    date: "May 10, 2023",
    author: "Michael Brown",
    excerpt: "Implement effective DevOps strategies to streamline your startup's development and deployment processes.",
    link: "#",
  },
  {
    id: 4,
    title: "UI/UX Design Principles Every Developer Should Know",
    category: "UI/UX Design",
    image: "https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?height=600&width=800",
    date: "April 22, 2023",
    author: "Emily Chen",
    excerpt: "Discover essential design principles that can help developers create more user-friendly applications.",
    link: "#",
  },
  {
    id: 5,
    title: "The Impact of AI on Modern Software Development",
    category: "Technology",
    image: "https://img.freepik.com/free-vector/robotic-process-automation-illustration_23-2149237081.jpg?height=600&width=800",
    date: "April 5, 2023",
    author: "David Wilson",
    excerpt: "Explore how artificial intelligence is transforming the way we build and maintain software applications.",
    link: "#",
  },
  {
    id: 6,
    title: "How to Scale Your Tech Business in a Competitive Market",
    category: "Business",
    image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169851.jpg?height=600&width=800",
    date: "March 18, 2023",
    author: "Lisa Rodriguez",
    excerpt: "Strategies for growing your technology business and staying ahead of the competition.",
    link: "#",
  },
]

export default function BlogGrid({ activeCategory }) {
  // Filter blog posts based on the active category
  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  href={post.link}
                  className="inline-block text-purple-500 font-medium hover:text-purple-400 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
