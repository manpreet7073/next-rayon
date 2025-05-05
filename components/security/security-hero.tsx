"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Server } from "lucide-react"

export default function SecurityHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900 z-0"></div>

      {/* Animated security pattern background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-purple-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-full">
                  <Shield className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise-Grade <span className="gradient-text">Security</span> For Your Digital Assets
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              At Rayon Web Solutions, we implement industry-leading security practices to protect your data,
              applications, and infrastructure from evolving cyber threats.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Lock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Encryption</h3>
              <p className="text-gray-400">
                End-to-end encryption for all sensitive data, both in transit and at rest, using industry-standard
                protocols.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Threat Protection</h3>
              <p className="text-gray-400">
                Advanced threat detection and prevention systems to safeguard against the latest cyber security threats.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Server className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Infrastructure</h3>
              <p className="text-gray-400">
                Hardened infrastructure with regular security audits, penetration testing, and compliance monitoring.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
