"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, FileCheck, UserCheck, AlertTriangle, RefreshCw, Eye, Database, Server } from "lucide-react"

export default function SecurityFeatures() {
  const features = [
    {
      icon: <Lock />,
      title: "Advanced Encryption",
      description:
        "AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring your information remains secure.",
    },
    {
      icon: <ShieldCheck />,
      title: "Vulnerability Management",
      description:
        "Regular security assessments and automated vulnerability scanning to identify and address potential risks.",
    },
    {
      icon: <UserCheck />,
      title: "Identity & Access Control",
      description:
        "Multi-factor authentication, role-based access control, and least privilege principles to prevent unauthorized access.",
    },
    {
      icon: <Database />,
      title: "Data Protection",
      description:
        "Comprehensive data protection strategies including backup, recovery, and secure deletion procedures.",
    },
    {
      icon: <AlertTriangle />,
      title: "Incident Response",
      description:
        "24/7 monitoring with rapid incident response protocols to detect and mitigate security events quickly.",
    },
    {
      icon: <RefreshCw />,
      title: "Business Continuity",
      description:
        "Robust disaster recovery and business continuity plans to ensure minimal downtime in case of incidents.",
    },
    {
      icon: <FileCheck />,
      title: "Compliance Management",
      description: "Adherence to industry standards and regulations including GDPR, HIPAA, PCI DSS, and SOC 2.",
    },
    {
      icon: <Eye />,
      title: "Security Monitoring",
      description: "Continuous monitoring and logging of all system activities to detect suspicious behavior.",
    },
    {
      icon: <Server />,
      title: "Secure Development",
      description:
        "Secure coding practices, code reviews, and automated security testing throughout the development lifecycle.",
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
              Comprehensive <span className="gradient-text">Security Features</span>
            </h2>
            <p className="text-xl text-gray-300">
              Our multi-layered security approach protects your digital assets at every level, from infrastructure to
              application.
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
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
