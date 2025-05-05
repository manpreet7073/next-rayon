"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function SecurityProcess() {
  const securitySteps = [
    {
      title: "Security Assessment",
      description:
        "We begin with a comprehensive security assessment to identify potential vulnerabilities and establish a security baseline.",
      details: [
        "Vulnerability scanning and penetration testing",
        "Security architecture review",
        "Risk assessment and threat modeling",
        "Compliance gap analysis",
      ],
    },
    {
      title: "Security Implementation",
      description:
        "Based on the assessment, we implement robust security controls and measures tailored to your specific needs.",
      details: [
        "Access control and authentication systems",
        "Encryption and data protection mechanisms",
        "Security monitoring and logging solutions",
        "Network security and firewall configuration",
      ],
    },
    {
      title: "Continuous Monitoring",
      description:
        "Our security operations center provides 24/7 monitoring to detect and respond to security incidents in real-time.",
      details: [
        "Real-time threat detection and alerting",
        "Security incident response",
        "Log analysis and correlation",
        "Behavioral analytics and anomaly detection",
      ],
    },
    {
      title: "Regular Security Updates",
      description:
        "We perform regular security updates and patches to protect against emerging threats and vulnerabilities.",
      details: [
        "Scheduled vulnerability assessments",
        "Patch management and updates",
        "Security configuration reviews",
        "Third-party dependency scanning",
      ],
    },
    {
      title: "Security Auditing",
      description: "Regular security audits ensure ongoing compliance with industry standards and regulations.",
      details: [
        "Compliance audits and reporting",
        "Security control effectiveness testing",
        "Policy and procedure reviews",
        "Security metrics and KPI tracking",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Security <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              We follow a systematic approach to ensure the highest level of security for your applications and data.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

          {securitySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-16 last:mb-0"
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 z-10 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-300 mb-6">{step.description}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
