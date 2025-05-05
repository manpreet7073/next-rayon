"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function SecurityCertifications() {
  const certifications = [
    {
      name: "ISO 27001",
      description:
        "Information Security Management System (ISMS) certification ensuring systematic approach to managing sensitive company information.",
      category: "Information Security",
    },
    {
      name: "SOC 2 Type II",
      description:
        "Service Organization Control report verifying our controls relevant to security, availability, processing integrity, confidentiality, and privacy.",
      category: "Compliance",
    },
    {
      name: "GDPR Compliant",
      description:
        "Full compliance with the General Data Protection Regulation for handling personal data of EU citizens.",
      category: "Data Protection",
    },
    {
      name: "PCI DSS",
      description:
        "Payment Card Industry Data Security Standard compliance for organizations that handle credit card information.",
      category: "Payment Security",
    },
    {
      name: "HIPAA Compliant",
      description:
        "Health Insurance Portability and Accountability Act compliance for protecting sensitive patient health information.",
      category: "Healthcare",
    },
    {
      name: "NIST Cybersecurity Framework",
      description:
        "Adherence to the National Institute of Standards and Technology framework for improving critical infrastructure cybersecurity.",
      category: "Cybersecurity",
    },
  ]

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Security <span className="gradient-text">Certifications</span> & Compliance
            </h2>
            <p className="text-xl text-gray-300">
              We maintain industry-leading certifications and comply with global security standards to ensure your data
              is protected.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{cert.name}</h3>
                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                  {cert.category}
                </Badge>
              </div>
              <p className="text-gray-400">{cert.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our security certifications are regularly audited and renewed to ensure we maintain the highest standards of
            security and compliance in the industry.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
