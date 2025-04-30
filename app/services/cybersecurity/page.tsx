import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check, Shield, Lock, AlertTriangle, Eye } from "lucide-react"

export const metadata = {
  title: "Cybersecurity Services - RayonWeb",
  description: "Protect your business with our comprehensive cybersecurity solutions",
}

export default function CybersecurityPage() {
  const services = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Security Assessments",
      description:
        "Comprehensive evaluation of your systems and networks to identify vulnerabilities and security gaps.",
      slug: "security-assessments",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Data Protection",
      description:
        "Implement robust data protection measures to safeguard sensitive information and ensure compliance.",
      slug: "data-protection",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-primary" />,
      title: "Threat Detection & Response",
      description: "Proactive monitoring and rapid response to security threats and incidents.",
      slug: "threat-detection",
    },
    {
      icon: <Eye className="h-10 w-10 text-primary" />,
      title: "Security Monitoring",
      description: "24/7 monitoring of your systems and networks to detect and respond to security incidents.",
      slug: "security-monitoring",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/services" className="inline-flex items-center text-primary mb-6 hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Solutions</h1>
              <p className="text-xl text-foreground/80 mb-8">
                Protect your business from cyber threats with our comprehensive cybersecurity solutions. We help you
                identify vulnerabilities, implement robust security measures, and respond effectively to security
                incidents.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl opacity-70" />
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Cybersecurity Services"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Cybersecurity Solutions</h2>
            <p className="text-foreground/80">
              We offer a wide range of cybersecurity services to help protect your business from evolving cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                  <Link href={`/services/cybersecurity/${service.slug}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Trusted Cybersecurity Partner</h2>
              <p className="text-foreground/80 mb-8">
                At RayonWeb, we understand the critical importance of cybersecurity in today's digital landscape. Here's
                why businesses trust us with their security needs:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Expert Team",
                    description:
                      "Our team of certified security professionals brings years of experience in protecting businesses from cyber threats.",
                  },
                  {
                    title: "Comprehensive Approach",
                    description:
                      "We take a holistic approach to security, addressing technical, operational, and human factors.",
                  },
                  {
                    title: "Tailored Solutions",
                    description:
                      "We develop customized security strategies based on your specific business needs and risk profile.",
                  },
                  {
                    title: "Proactive Protection",
                    description: "We focus on proactive measures to prevent security incidents before they occur.",
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
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-foreground/80">
              See how we've helped businesses strengthen their security posture and protect their valuable assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Institution Security Overhaul",
                description:
                  "Implemented comprehensive security measures for a regional bank, reducing security incidents by 85%.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Healthcare Provider Data Protection",
                description:
                  "Developed a robust data protection strategy for a healthcare provider, ensuring HIPAA compliance and patient data security.",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                  <p className="text-foreground/80">{caseStudy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Contact us today to discuss your cybersecurity needs and how we can help protect your business from
              evolving threats.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="#contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
