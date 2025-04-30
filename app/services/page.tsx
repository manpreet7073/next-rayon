import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Globe, Smartphone, BarChart, Layers } from "lucide-react"

export const metadata = {
  title: "Services - RayonWeb",
  description: "Explore our comprehensive web development and digital services",
}

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description:
        "Custom websites built with the latest technologies to ensure performance, security, and scalability.",
      slug: "web-development",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design that focuses on creating intuitive and engaging user experiences.",
      slug: "ui-ux-design",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "SEO Optimization",
      description: "Improve your website's visibility in search engines and drive more organic traffic.",
      slug: "seo-optimization",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      slug: "mobile-development",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to help you reach your target audience and grow your business.",
      slug: "digital-marketing",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "E-Commerce Solutions",
      description: "Custom e-commerce platforms that drive sales and provide seamless shopping experiences.",
      slug: "e-commerce-solutions",
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
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive <span className="text-primary">Digital Solutions</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              We offer a wide range of services to help your business succeed in the digital world. From web development
              to digital marketing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/80 mb-6">{service.description}</p>
                <Button asChild variant="outline" className="group">
                  <Link href={`/services/${service.slug}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-foreground/80">
              Our streamlined process ensures that we deliver high-quality solutions that meet your specific needs and
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and requirements.",
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed plan and strategy tailored to your specific needs.",
              },
              {
                step: "03",
                title: "Execution",
                description: "Our team works diligently to bring your vision to life with precision.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deliver the final product and provide ongoing support and maintenance.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">{step.title}</h3>
                <p className="text-foreground/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                <p className="text-foreground/80 mb-8">
                  Contact us today to discuss your project requirements and how we can help you achieve your goals.
                </p>
                <Button asChild size="lg" className="group">
                  <Link href="#contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Contact Us"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
