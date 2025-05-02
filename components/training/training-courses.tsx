"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Smartphone, Cloud, Palette, Clock, Users, CheckCircle } from "lucide-react"

const courses = [
  {
    category: "web",
    items: [
      {
        title: "Full-Stack Web Development Bootcamp",
        description:
          "Comprehensive training covering front-end and back-end technologies including React, Node.js, and databases.",
        duration: "12 weeks",
        level: "Beginner to Intermediate",
        features: ["Live coding sessions", "Real-world projects", "Job placement assistance"],
        popular: true,
      },
      {
        title: "Advanced JavaScript Mastery",
        description:
          "Deep dive into modern JavaScript, covering ES6+, async programming, design patterns, and performance optimization.",
        duration: "8 weeks",
        level: "Intermediate to Advanced",
        features: ["Code reviews", "Algorithm challenges", "Advanced concepts"],
        popular: false,
      },
      {
        title: "React & Next.js Development",
        description: "Master React and Next.js framework for building high-performance, SEO-friendly web applications.",
        duration: "6 weeks",
        level: "Intermediate",
        features: ["Component architecture", "State management", "Server-side rendering"],
        popular: true,
      },
    ],
  },
  {
    category: "mobile",
    items: [
      {
        title: "Mobile App Development with React Native",
        description: "Build cross-platform mobile applications using React Native for iOS and Android platforms.",
        duration: "10 weeks",
        level: "Intermediate",
        features: ["Cross-platform development", "Native APIs integration", "App store deployment"],
        popular: true,
      },
      {
        title: "iOS Development with Swift",
        description: "Learn to build native iOS applications using Swift and the latest Apple frameworks.",
        duration: "8 weeks",
        level: "Beginner to Intermediate",
        features: ["SwiftUI", "Core Data", "App architecture"],
        popular: false,
      },
      {
        title: "Flutter Development Masterclass",
        description:
          "Create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
        duration: "8 weeks",
        level: "Intermediate",
        features: ["Dart programming", "Widget customization", "State management"],
        popular: true,
      },
    ],
  },
  {
    category: "devops",
    items: [
      {
        title: "DevOps Engineering Certification",
        description: "Master the tools and practices for implementing DevOps in your organization.",
        duration: "10 weeks",
        level: "Intermediate to Advanced",
        features: ["CI/CD pipelines", "Infrastructure as Code", "Monitoring and logging"],
        popular: true,
      },
      {
        title: "Cloud Architecture on AWS",
        description:
          "Design and implement scalable, highly available, and fault-tolerant systems on Amazon Web Services.",
        duration: "8 weeks",
        level: "Intermediate to Advanced",
        features: ["AWS services", "Serverless architecture", "Security best practices"],
        popular: true,
      },
      {
        title: "Docker & Kubernetes Fundamentals",
        description:
          "Learn containerization with Docker and orchestration with Kubernetes for modern application deployment.",
        duration: "6 weeks",
        level: "Intermediate",
        features: ["Container management", "Kubernetes clusters", "Deployment strategies"],
        popular: false,
      },
    ],
  },
  {
    category: "design",
    items: [
      {
        title: "UI/UX Design Bootcamp",
        description: "Comprehensive training in user interface and user experience design principles and tools.",
        duration: "8 weeks",
        level: "Beginner to Intermediate",
        features: ["Design thinking", "Wireframing", "Prototyping"],
        popular: true,
      },
      {
        title: "Advanced UI Design with Figma",
        description: "Master Figma for creating stunning user interfaces, design systems, and interactive prototypes.",
        duration: "6 weeks",
        level: "Intermediate",
        features: ["Component libraries", "Auto layout", "Interactive prototypes"],
        popular: false,
      },
      {
        title: "Design Systems Workshop",
        description: "Learn to create and maintain scalable design systems for product consistency and efficiency.",
        duration: "4 weeks",
        level: "Intermediate to Advanced",
        features: ["Component architecture", "Documentation", "Implementation strategies"],
        popular: true,
      },
    ],
  },
]

export default function TrainingCourses() {
  const [activeTab, setActiveTab] = useState("web")

  return (
    <section id="courses" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-purple-500/30 text-purple-400 bg-purple-500/10">
            Our Curriculum
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Training Programs</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from our diverse range of tech training programs designed to equip you with in-demand skills for
            today's digital economy.
          </p>
        </div>

        <Tabs defaultValue="web" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-900/50 p-1 rounded-xl">
              <TabsTrigger
                value="web"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 rounded-lg"
              >
                <Code className="h-4 w-4 mr-2" />
                Web Development
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 rounded-lg"
              >
                <Smartphone className="h-4 w-4 mr-2" />
                Mobile Apps
              </TabsTrigger>
              <TabsTrigger
                value="devops"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 rounded-lg"
              >
                <Cloud className="h-4 w-4 mr-2" />
                DevOps & Cloud
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 rounded-lg"
              >
                <Palette className="h-4 w-4 mr-2" />
                UI/UX Design
              </TabsTrigger>
            </TabsList>
          </div>

          {courses.map((category) => (
            <TabsContent key={category.category} value={category.category} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.items.map((course, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-xl ${
                      course.popular ? "border border-purple-500/30" : "border border-gray-800"
                    } bg-gray-900/50 p-6 transition-all hover:shadow-lg hover:shadow-purple-500/10`}
                  >
                    {course.popular && (
                      <div className="absolute top-5 right-5">
                        <Badge className="bg-gradient-to-r from-purple-600 to-blue-600">Popular</Badge>
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                    <p className="text-gray-400 mb-4">{course.description}</p>

                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 text-purple-400 mr-2" />
                      <span className="text-sm text-gray-300">{course.duration}</span>
                    </div>

                    <div className="flex items-center mb-4">
                      <Users className="h-4 w-4 text-purple-400 mr-2" />
                      <span className="text-sm text-gray-300">{course.level}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">Learn More</Button>
                  </div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full px-8 border-gray-700 hover:bg-gray-800">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
