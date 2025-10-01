"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

interface BookConsultationModalProps {
  showModal: boolean
  onClose: () => void
}

export default function BookConsultationModal({ showModal, onClose }: BookConsultationModalProps) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" })
  const [service, setService] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  if (!showModal) return null

  const validateForm = () => {
    return form.name && form.email.includes("@") && form.company && service && form.message
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
      const payload = {
        subject: `Book Consultation [Service: ${service}]`,
        message: `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`,
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
      setForm({ name: "", email: "", company: "", message: "" })
      setService("")
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Failed to send request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDone = () => {
    setIsSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl bg-[#1e1e2f] text-white rounded-lg shadow-lg p-6 md:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Consultation Booked!</h3>
            <p className="text-gray-400 text-center mb-6">
              Thank you! We'll reach out shortly to confirm your consultation.
            </p>
            <Button
              onClick={handleDone}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Done
            </Button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">Book a Free Consultation</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-sm text-gray-400 block mb-2">
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
                  <label htmlFor="email" className="text-sm text-gray-400 block mb-2">
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
                <label htmlFor="company" className="text-sm text-gray-400 block mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Acme Inc."
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="service" className="text-sm text-gray-400 block mb-2">
                  Service You Need
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
                <label htmlFor="message" className="text-sm text-gray-400 block mb-2">
                  Describe Your Needs
                </label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what you're looking for..."
                  required
                  className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                {isLoading ? "Submitting..." : "Book Consultation"}
              </Button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  )
}
