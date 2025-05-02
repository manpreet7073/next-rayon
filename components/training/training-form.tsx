"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import emailjs from "emailjs-com" // ✅ EmailJS import

export default function TrainingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: "",
    date: null,
    agreeToTerms: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      experience: formData.experience,
      message: formData.message,
      date: formData.date ? format(formData.date, "PPP") : "Not selected",
    }

    emailjs
      .send(
        "service_y65a4nk",     // 🔁 Replace with your EmailJS service ID
        "template_bvynfqg",    // 🔁 Replace with your EmailJS template ID
        templateParams,
        "SqT44vVqpwTb018cW"      // 🔁 Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
          setIsSubmitted(true)
          setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              phone: "",
              course: "",
              experience: "",
              message: "",
              date: null,
              agreeToTerms: false,
            })
          }, 3000)
        },
        (error) => {
          console.log("FAILED...", error)
          alert("Something went wrong. Please try again.")
        }
      )
  }

  return (
    <section id="apply" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for Training</h2>
            <p className="text-xl text-gray-400">
              Fill out the form below to apply for our training programs. Our team will contact you shortly.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-900/20 border border-green-500/30 rounded-xl p-8 text-center"
            >
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
              <p className="text-gray-300">
                Thank you for your interest in our training programs. We'll contact you within 24 hours to discuss the
                next steps.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Preferred Course</Label>
                  <Select value={formData.course} onValueChange={(value) => handleSelectChange("course", value)}>
                    <SelectTrigger id="course" className="bg-gray-700 border-gray-600">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development Bootcamp</SelectItem>
                      <SelectItem value="mobile-apps">Mobile App Development</SelectItem>
                      <SelectItem value="devops">DevOps & Cloud Engineering</SelectItem>
                      <SelectItem value="ui-ux">UI/UX Design Masterclass</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => handleSelectChange("experience", value)}
                  >
                    <SelectTrigger id="experience" className="bg-gray-700 border-gray-600">
                      <SelectValue placeholder="Select your experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (No experience)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (Some experience)</SelectItem>
                      <SelectItem value="advanced">Advanced (Experienced)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-gray-700 border-gray-600"
                      >
                        {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={formData.date} onSelect={handleDateChange} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and what you hope to achieve from this training..."
                  className="bg-gray-700 border-gray-600 min-h-[120px]"
                />
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={handleCheckboxChange} />
                <Label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to the terms and conditions and privacy policy
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                disabled={!formData.agreeToTerms}
              >
                Submit Application
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
