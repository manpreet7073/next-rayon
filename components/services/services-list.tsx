"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Smartphone, Cloud, Palette, BookOpen, TestTube, Brain, ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description: "Custom websites, e-commerce solutions, and CMS integrations tailored to your business needs.",
    href: "/services/web-development",
    color: "from-purple-500 to-blue-500",
    subServices: [
      { name: "Custom Website Design", href: "/services/web-development/custom-website-design" },
      { name: "E-commerce Solutions", href: "/services/web-development/ecommerce-solutions" },
      { name: "CMS Integration", href: "/services/web-development/cms-integration" },
    ],
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "App Development",
    description: "Native and cross-platform mobile applications for Android, iOS, and Progressive Web Apps.",
    href: "/services/app-development",
    color: "from-blue-500 to-cyan-500",
    subServices: [
      { name: "Android & iOS Apps", href: "/services/app-development/mobile-apps" },
      { name: "Progressive Web Apps", href: "/services/app-development/progressive-web-apps" },
      { name: "Cross-Platform Apps", href: "/services/app-development/cross-platform-apps" },
    ],
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "DevOps & Cloud",
    description: "Cloud infrastructure setup, CI/CD pipelines, Docker, Kubernetes, and monitoring solutions.",
    href: "/services/devops-cloud",
    color: "from-cyan-500 to-teal-500",
    subServices: [
      { name: "Cloud Setup", href: "/services/devops-cloud/cloud-setup" },
      { name: "CI/CD Pipelines", href: "/services/devops-cloud/ci-cd-pipelines" },
      { name: "Docker & Kubernetes", href: "/services/devops-cloud/docker-kubernetes" },
    ],
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "User-centered design with wireframes, prototypes, and comprehensive design systems.",
    href: "/services/ui-ux-design",
    color: "from-pink-500 to-purple-500",
    subServices: [
      { name: "Wireframes & Prototyping", href: "/services/ui-ux-design/wireframes-prototyping" },
      { name: "Web & Mobile App Design", href: "/services/ui-ux-design/web-mobile-design" },
      { name: "Design Systems", href: "/services/ui-ux-design/design-systems" },
    ],
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "LMS & Integration",
    description: "Custom Learning Management Systems and third-party integrations for seamless workflows.",
    href: "/services/lms-integration",
    color: "from-amber-500 to-orange-500",
    subServices: [
      { name: "Custom LMS", href: "/services/lms-integration/custom-lms" },
      { name: "Payment Integration", href: "/services/lms-integration/payment-integration" },
      { name: "CRM & API Integration", href: "/services/lms-integration/crm-api-integration" },
    ],
  },
  {
    icon: <TestTube className="h-10 w-10" />,
    title: "QA & Automation",
    description: "Comprehensive testing strategies with manual and automated testing to ensure quality.",
    href: "/services/qa-automation",
    color: "from-green-500 to-emerald-500",
    subServices: [
      { name: "Manual Testing", href: "/services/qa-automation/manual-testing" },
      { name: "Automated CI Tests", href: "/services/qa-automation/automated-ci-tests" },
      { name: "Performance Audits", href: "/services/qa-automation/performance-audits" },
    ],
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions including natural language processing, computer vision, and custom ML models.",
    href: "/services/ai-ml",
    color: "from-blue-600 to-violet-600",
    subServices: [
      { name: "Natural Language Processing", href: "/services/ai-ml/natural-language-processing" },
      { name: "LLM Integration (Langchain)", href: "/services/ai-ml/llm-integration" },
      { name: "Hugging Face Models", href: "/services/ai-ml/hugging-face-models" },
      { name: "Computer Vision", href: "/services/ai-ml/computer-vision" },
      { name: "Model Training & Deployment", href: "/services/ai-ml/model-training-deployment" },
    ],
  },
]

export default function ServicesList() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleExpand = (title: string) => {
    setExpandedService(expandedService === title ? null : title)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div
                  className={`p-4 rounded-full bg-gradient-to-r ${service.color} w-16 h-16 flex items-center justify-center mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                <div className="flex flex-col space-y-4">
                  <Link href={service.href} className="flex items-center text-purple-500 font-medium group">
                    <span>View Service Details</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => toggleExpand(service.title)}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span>{expandedService === service.title ? "Hide Sub-Services" : "Show Sub-Services"}</span>
                    <ArrowRight
                      className={`ml-2 h-5 w-5 transition-transform ${expandedService === service.title ? "rotate-90" : ""}`}
                    />
                  </button>
                </div>

                {expandedService === service.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-gray-800"
                  >
                    <h4 className="text-lg font-semibold mb-4">Sub-Services</h4>
                    <ul className="space-y-3">
                      {service.subServices.map((subService, idx) => (
                        <li key={idx}>
                          <Link
                            href={subService.href}
                            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                          >
                            <ArrowRight className="mr-2 h-4 w-4" />
                            <span>{subService.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
