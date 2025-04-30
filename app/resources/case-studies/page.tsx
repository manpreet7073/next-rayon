import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Case Studies - RayonWeb",
  description: "Explore our successful client projects and learn how we solve real-world challenges",
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "E-Commerce Platform Redesign",
      client: "FashionTrend",
      category: "E-Commerce",
      description:
        "Complete redesign and development of an e-commerce platform resulting in a 35% increase in conversion rates and 50% improvement in page load times.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "ecommerce-platform-redesign",
      results: [
        "35% increase in conversion rates",
        "50% improvement in page load times",
        "28% reduction in bounce rate",
      ],
    },
    {
      title: "Healthcare Patient Portal",
      client: "MediCare Solutions",
      category: "Web Development",
      description:
        "Development of a secure patient portal allowing users to schedule appointments, access medical records, and communicate with healthcare providers.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "healthcare-patient-portal",
      results: [
        "60% reduction in administrative tasks",
        "95% patient satisfaction rate",
        "40% increase in appointment bookings",
      ],
    },
    {
      title: "Financial Services Website Optimization",
      client: "Global Finance",
      category: "Performance",
      description:
        "Optimization of a financial services website to improve performance, accessibility, and search engine rankings.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "financial-services-website-optimization",
      results: [
        "70% improvement in page load times",
        "45% increase in organic traffic",
        "30% increase in lead generation",
      ],
    },
    {
      title: "Mobile App for Fitness Tracking",
      client: "FitLife",
      category: "Mobile Development",
      description:
        "Development of a cross-platform mobile app for fitness tracking, workout planning, and nutrition management.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "mobile-app-fitness-tracking",
      results: ["100,000+ downloads in first quarter", "4.8-star average rating", "85% user retention rate"],
    },
    {
      title: "Enterprise Security Dashboard",
      client: "SecureTech",
      category: "Cybersecurity",
      description:
        "Development of a real-time security monitoring dashboard for enterprise networks with threat detection and response capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "enterprise-security-dashboard",
      results: [
        "85% reduction in incident response time",
        "60% improvement in threat detection",
        "40% reduction in security breaches",
      ],
    },
    {
      title: "Educational Platform Redesign",
      client: "LearnWell Academy",
      category: "UX/UI Design",
      description:
        "Comprehensive redesign of an educational platform to improve user experience, engagement, and learning outcomes.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "educational-platform-redesign",
      results: [
        "50% increase in student engagement",
        "40% improvement in course completion rates",
        "65% increase in user satisfaction",
      ],
    },
  ]

  const categories = [
    "All Categories",
    "E-Commerce",
    "Web Development",
    "Mobile Development",
    "Cybersecurity",
    "UX/UI Design",
    "Performance",
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Case Studies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Success</span> Stories
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Explore our portfolio of successful client projects and learn how we solve real-world challenges with
              innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href="#"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 ? "bg-primary text-primary-foreground" : "bg-card/50 hover:bg-card/80 text-foreground/70"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/80 text-primary-foreground">
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/resources/case-studies/${study.slug}`}>{study.title}</Link>
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4">Client: {study.client}</p>
                  <p className="text-foreground/80 mb-6 line-clamp-3">{study.description}</p>
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start">
                          <span className="text-primary mr-2">•</span> {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full group">
                    <Link href={`/resources/case-studies/${study.slug}`}>
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
                <p className="text-foreground/80 mb-8">
                  Contact us today to discuss your project requirements and how we can help you achieve your business
                  goals.
                </p>
                <Button asChild size="lg" className="group">
                  <Link href="/#contact">
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
