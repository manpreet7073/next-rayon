"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [service, setService] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const validateForm = () => {
    return (
      form.name.trim() !== "" &&
      form.email.includes("@") &&
      form.subject.trim() !== "" &&
      service.trim() !== "" &&
      form.message.trim() !== ""
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      setError("Please fill in all fields correctly.")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Send JSON instead of FormData
      const payload = {
        subject: `${form.subject} [Service: ${service}]`,
        message: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        email: form.email, // optional reply-to
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData?.message || "Something went wrong.")
      }

      setIsSubmitted(true)
      setForm({ name: "", email: "", subject: "", message: "" })
      setService("")
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
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
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="How can we help you?"
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                Service You're Interested In
              </label>
              <Select onValueChange={setService}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="App Development">App Development</SelectItem>
                  <SelectItem value="DevOps & Cloud">DevOps & Cloud</SelectItem>
                  <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                  <SelectItem value="LMS & Integration">LMS & Integration</SelectItem>
                  <SelectItem value="QA & Automation">QA & Automation</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project or inquiry..."
                required
                className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </>
      )}
    </motion.div>
  )
}
