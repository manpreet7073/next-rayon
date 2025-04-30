import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Users, Award, Clock, Globe } from "lucide-react"

export const metadata = {
  title: "About Us - RayonWeb",
  description: "Learn more about RayonWeb and our mission to create exceptional digital experiences",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                We Create <span className="text-primary">Digital Solutions</span> That Matter
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Founded in 2015, RayonWeb has been at the forefront of web development and digital transformation. We
                believe in creating websites and applications that not only look great but also perform exceptionally
                well.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="#our-story">
                  Our Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl opacity-70" />
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="About RayonWeb"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Our Team" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Our Office" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Team Meeting" fill className="object-cover" />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Working Together"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Small Beginnings to Digital Excellence</h2>
              <p className="text-foreground/80 mb-6">
                RayonWeb started as a small team of passionate developers and designers with a shared vision: to create
                digital experiences that make a difference. Over the years, we've grown into a full-service digital
                agency, but our core values remain the same.
              </p>
              <p className="text-foreground/80 mb-6">
                We believe in the power of technology to transform businesses and improve lives. That's why we're
                committed to delivering solutions that are not only visually stunning but also functional, accessible,
                and user-friendly.
              </p>
              <p className="text-foreground/80 mb-6">
                Today, we're proud to have worked with clients across various industries, from startups to established
                enterprises, helping them achieve their digital goals and make their mark in the online world.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
                  <p className="text-foreground/80">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-foreground/80">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
                  <p className="text-foreground/80">Team Members</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">8+</h3>
                  <p className="text-foreground/80">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us</h2>
            <p className="text-foreground/80">
              Our core values guide everything we do, from how we work with clients to how we develop our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Client-Focused",
                description: "We put our clients' needs first and work closely with them to achieve their goals.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from design to development to support.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Timeliness",
                description: "We respect deadlines and deliver projects on time without compromising quality.",
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description: "We embrace new technologies and approaches to deliver cutting-edge solutions.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Experts</h2>
            <p className="text-foreground/80">
              Our talented team of professionals is passionate about creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Smith",
                position: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Johnson",
                position: "Creative Director",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Chen",
                position: "Lead Developer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Rodriguez",
                position: "UX/UI Designer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Wilson",
                position: "Backend Developer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Lisa Thompson",
                position: "Project Manager",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Robert Garcia",
                position: "SEO Specialist",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Jennifer Lee",
                position: "Content Strategist",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-foreground/70">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Us Apart</h2>
              <p className="text-foreground/80 mb-8">
                At RayonWeb, we're committed to delivering exceptional digital solutions that help our clients succeed.
                Here's why clients choose to work with us:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Expertise & Experience",
                    description:
                      "Our team brings years of experience and deep expertise in web development and digital marketing.",
                  },
                  {
                    title: "Custom Solutions",
                    description:
                      "We create tailored solutions that address your specific business needs and challenges.",
                  },
                  {
                    title: "Results-Driven Approach",
                    description: "We focus on delivering measurable results that help you achieve your business goals.",
                  },
                  {
                    title: "Ongoing Support",
                    description:
                      "We provide continuous support and maintenance to ensure your digital assets perform optimally.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl opacity-70" />
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Why Choose Us"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-foreground/80 mb-8">
                Contact us today to discuss your project requirements and how we can help you achieve your goals.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
