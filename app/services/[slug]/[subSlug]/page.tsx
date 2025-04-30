import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"
import { notFound } from "next/navigation"

// Define sub-service data structure
const subServices = {
  "web-development": {
    "frontend-development": {
      title: "Frontend Development",
      description:
        "We create responsive, interactive user interfaces using modern frameworks like React, Vue, and Angular.",
      longDescription:
        "Our frontend development services focus on creating responsive, interactive user interfaces that provide exceptional user experiences. We use modern frameworks like React, Vue, and Angular to build fast, scalable frontend applications that meet your business needs.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Responsive web design",
        "Interactive UI/UX",
        "Modern JavaScript frameworks",
        "Performance optimization",
        "Cross-browser compatibility",
        "Accessibility compliance",
      ],
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Tailwind CSS"],
      process: [
        {
          step: "1",
          title: "Requirements Analysis",
          description: "We start by understanding your business needs and user requirements.",
        },
        {
          step: "2",
          title: "UI/UX Design",
          description: "We create wireframes and designs that align with your brand and user expectations.",
        },
        {
          step: "3",
          title: "Development",
          description: "Our developers build the frontend using modern frameworks and best practices.",
        },
        {
          step: "4",
          title: "Testing & Optimization",
          description: "We thoroughly test and optimize the frontend for performance and usability.",
        },
      ],
    },
    "backend-development": {
      title: "Backend Development",
      description: "We build robust server-side applications using Node.js, Python, PHP, and other technologies.",
      longDescription:
        "Our backend development services focus on building robust, scalable server-side applications that power your digital products. We use technologies like Node.js, Python, PHP, and others to create secure, high-performance backend systems.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "API development",
        "Database design and optimization",
        "Authentication and authorization",
        "Server-side logic",
        "Cloud integration",
        "Scalable architecture",
      ],
      technologies: ["Node.js", "Python", "PHP", "MongoDB", "PostgreSQL", "AWS", "Firebase"],
      process: [
        {
          step: "1",
          title: "Architecture Planning",
          description: "We design a scalable architecture that meets your business requirements.",
        },
        {
          step: "2",
          title: "Database Design",
          description: "We create efficient database schemas optimized for your specific use case.",
        },
        {
          step: "3",
          title: "API Development",
          description: "We build robust APIs that connect your frontend and backend systems.",
        },
        {
          step: "4",
          title: "Testing & Deployment",
          description: "We thoroughly test and deploy your backend to ensure reliability and performance.",
        },
      ],
    },
  },
  // Additional sub-services would be defined here for other main services
}

export async function generateMetadata({ params }: { params: { slug: string; subSlug: string } }) {
  const mainService = params.slug
  const subSlug = params.subSlug

  if (
    !subServices[mainService as keyof typeof subServices] ||
    !subServices[mainService as keyof typeof subServices][subSlug as any]
  ) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }

  const subService = subServices[mainService as keyof typeof subServices][subSlug as any]

  return {
    title: `${subService.title} - RayonWeb`,
    description: subService.description,
  }
}

export default function SubServicePage({ params }: { params: { slug: string; subSlug: string } }) {
  const mainService = params.slug
  const subSlug = params.subSlug

  if (
    !subServices[mainService as keyof typeof subServices] ||
    !subServices[mainService as keyof typeof subServices][subSlug as any]
  ) {
    notFound()
  }

  const subService = subServices[mainService as keyof typeof subServices][subSlug as any]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href={`/services/${mainService}`}
                className="inline-flex items-center text-primary mb-6 hover:underline"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to{" "}
                {mainService
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{subService.title}</h1>
              <p className="text-xl text-foreground/80 mb-8">{subService.longDescription}</p>
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
                  src={subService.image || "/placeholder.svg"}
                  alt={subService.title}
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-foreground/80">
              Our {subService.title.toLowerCase()} services include a comprehensive range of features designed to help
              your business succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subService.features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Technologies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-foreground/80">
              We use the latest technologies and frameworks to deliver high-quality {subService.title.toLowerCase()}{" "}
              solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {subService.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-foreground/80">
              Our streamlined process ensures that we deliver high-quality {subService.title.toLowerCase()} solutions
              that meet your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subService.process.map((step, index) => (
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Contact us today to discuss your {subService.title.toLowerCase()} needs and how we can help you achieve
              your goals.
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
