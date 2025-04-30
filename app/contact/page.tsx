import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Contact Us - RayonWeb",
  description: "Get in touch with our team for inquiries, quotes, or support",
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      details: "info@rayonweb.com",
      link: "mailto:info@rayonweb.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit Us",
      details: "123 Web Street, Digital City, 10001",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Have a question or want to work together? We'd love to hear from you. Fill out the form below and we'll
              get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-foreground/70 hover:text-primary transition-colors">
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-foreground/70">{item.details}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-8 mt-8 border-t border-border/50">
                <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((platform, index) => (
                    <a
                      key={index}
                      href="#"
                      className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label={platform}
                    >
                      <span className="sr-only">{platform}</span>
                      {/* Icons would go here in a real implementation */}
                      <div className="h-5 w-5 bg-primary/70 rounded-sm" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-foreground/80">Visit our office to meet the team and discuss your project in person.</p>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden">
            {/* This would be replaced with an actual map in a real implementation */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Office Location Map"
                fill
                className="object-cover"
              />
              <div className="absolute">
                <MapPin className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground/80">Find quick answers to common questions about our services and process.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to complete a project?",
                answer:
                  "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "We offer flexible pricing options including fixed-price quotes for defined projects and hourly rates for ongoing work. Each project is unique, so we provide custom quotes based on your specific requirements.",
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer:
                  "Yes, we offer various maintenance and support packages to ensure your website or application continues to perform optimally after launch. Our support includes regular updates, security patches, and technical assistance.",
              },
              {
                question: "Can you help with existing websites or only new ones?",
                answer:
                  "We work with both new projects and existing websites. Our team can help improve, redesign, or optimize your current website to enhance its performance, user experience, and conversion rates.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-foreground/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
