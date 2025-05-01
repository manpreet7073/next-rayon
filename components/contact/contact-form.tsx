"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl p-8"
    >
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center h-full py-12">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-center">Message Sent Successfully!</h3>
          <p className="text-gray-400 text-center mb-6">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <Input id="name" placeholder="John Doe" required className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="How can we help you?"
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                Service You're Interested In
              </label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="app-development">App Development</SelectItem>
                  <SelectItem value="devops-cloud">DevOps & Cloud</SelectItem>
                  <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                  <SelectItem value="lms-integration">LMS & Integration</SelectItem>
                  <SelectItem value="qa-automation">QA & Automation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project or inquiry..."
                required
                className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6"
            >
              Send Message
            </Button>
          </form>
        </>
      )}
    </motion.div>
  )
}
