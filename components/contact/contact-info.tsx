"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card rounded-xl p-8"
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-500 mr-4">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Office Address</h3>
            <p className="text-gray-400">123 Tech Street, Silicon Valley, CA 94043, USA</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-500 mr-4">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
            <p className="text-gray-400">
              <a href="tel:+11234567890" className="hover:text-white transition-colors">
                +1 (123) 456-7890
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-500 mr-4">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Email Address</h3>
            <p className="text-gray-400">
              <a href="mailto:info@rayonwebsolutions.com" className="hover:text-white transition-colors">
                info@rayonwebsolutions.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-500 mr-4">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
            <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-400">Saturday - Sunday: Closed</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-500 mr-4">
            <Globe className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Global Presence</h3>
            <p className="text-gray-400">With remote teams across North America, Europe, and Asia</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
