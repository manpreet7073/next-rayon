import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// Define service data
const services = {
  "web-development": {
    title: "Web Development",
    description: "Custom websites built with the latest technologies to ensure performance, security, and scalability.",
    longDescription:
      "Our web development services focus on creating custom, high-performance websites that help businesses achieve their goals. We use the latest technologies and best practices to ensure that your website is fast, secure, and scalable.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Custom website design and development",
      "E-commerce solutions",
      "Content management systems",
      "Progressive web applications",
      "API development and integration",
      "Website maintenance and support",
    ],
    subServices: [
      {
        title: "Frontend Development",
        description:
          "We create responsive, interactive user interfaces using modern frameworks like React, Vue, and Angular.",
        slug: "frontend-development",
      },
      {
        title: "Backend Development",
        description: "We build robust server-side applications using Node.js, Python, PHP, and other technologies.",
        slug: "backend-development",
      },
      {
        title: "Full-Stack Development",
        description: "End-to-end web development services covering both frontend and backend aspects of your project.",
        slug: "full-stack-development",
      },
      {
        title: "E-commerce Development",
        description: "Custom online stores built with platforms like Shopify, WooCommerce, or custom solutions.",
        slug: "e-commerce-development",
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Redesign",
        description: "Increased conversion rates by 35% through UX improvements and performance optimization.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "SaaS Application Development",
        description: "Built a scalable SaaS platform that now serves over 10,000 users worldwide.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "User-centered design that focuses on creating intuitive and engaging user experiences.",
    longDescription:
      "Our UI/UX design services focus on creating intuitive, engaging user experiences that delight your customers and help you achieve your business goals. We follow a user-centered design approach to ensure that your digital products are both beautiful and functional.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "User research and analysis",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design",
      "Usability testing",
      "Design systems",
    ],
    subServices: [
      {
        title: "User Research",
        description: "We conduct comprehensive user research to understand your target audience and their needs.",
        slug: "user-research",
      },
      {
        title: "UX Design",
        description: "We create intuitive user experiences that make your digital products easy and enjoyable to use.",
        slug: "ux-design",
      },
      {
        title: "UI Design",
        description: "We design beautiful, consistent user interfaces that align with your brand identity.",
        slug: "ui-design",
      },
      {
        title: "Design Systems",
        description: "We create comprehensive design systems that ensure consistency across all your digital products.",
        slug: "design-systems",
      },
    ],
    caseStudies: [
      {
        title: "Mobile App Redesign",
        description: "Improved user engagement by 45% through intuitive navigation and streamlined workflows.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "E-commerce UX Optimization",
        description: "Reduced cart abandonment by 30% through improved checkout process and user flow.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "seo-optimization": {
    title: "SEO Optimization",
    description: "Improve your website's visibility in search engines and drive more organic traffic.",
    longDescription:
      "Our SEO optimization services are designed to improve your website's visibility in search engines and drive more organic traffic to your business. We use data-driven strategies and best practices to help you rank higher in search results and reach your target audience.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Keyword research and analysis",
      "On-page SEO optimization",
      "Technical SEO audits",
      "Content strategy and creation",
      "Link building",
      "SEO performance tracking and reporting",
    ],
    subServices: [
      {
        title: "On-Page SEO",
        description: "We optimize your website's content and structure to improve its visibility in search engines.",
        slug: "on-page-seo",
      },
      {
        title: "Technical SEO",
        description:
          "We identify and fix technical issues that may be affecting your website's search engine rankings.",
        slug: "technical-seo",
      },
      {
        title: "Local SEO",
        description:
          "We help local businesses improve their visibility in local search results and attract more customers.",
        slug: "local-seo",
      },
      {
        title: "E-commerce SEO",
        description: "We optimize online stores to improve their visibility in search engines and drive more sales.",
        slug: "e-commerce-seo",
      },
    ],
    caseStudies: [
      {
        title: "Local Business SEO Campaign",
        description: "Increased organic traffic by 150% and improved local search rankings for key terms.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "E-commerce SEO Optimization",
        description: "Doubled organic traffic and increased revenue by 75% through comprehensive SEO strategy.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "mobile-development": {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    longDescription:
      "Our mobile development services focus on creating native and cross-platform mobile applications that deliver exceptional user experiences. We use the latest technologies and best practices to ensure that your mobile app is fast, secure, and user-friendly.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Native iOS development",
      "Native Android development",
      "Cross-platform development",
      "Mobile app design",
      "App store optimization",
      "Mobile app maintenance and support",
    ],
    subServices: [
      {
        title: "iOS Development",
        description: "We create native iOS applications using Swift and Objective-C for iPhone and iPad devices.",
        slug: "ios-development",
      },
      {
        title: "Android Development",
        description: "We build native Android applications using Kotlin and Java for a wide range of Android devices.",
        slug: "android-development",
      },
      {
        title: "Cross-Platform Development",
        description: "We develop cross-platform mobile applications using React Native, Flutter, and other frameworks.",
        slug: "cross-platform-development",
      },
      {
        title: "Mobile App Design",
        description: "We design beautiful, intuitive mobile app interfaces that provide exceptional user experiences.",
        slug: "mobile-app-design",
      },
    ],
    caseStudies: [
      {
        title: "Fitness Tracking App",
        description: "Developed a cross-platform fitness app with over 100,000 downloads and 4.8-star rating.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "E-commerce Mobile App",
        description: "Built a native shopping app that increased mobile sales by 200% in the first quarter.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to help you reach your target audience and grow your business.",
    longDescription:
      "Our digital marketing services are designed to help you reach your target audience, build brand awareness, and drive conversions. We use data-driven strategies and creative approaches to help you achieve your marketing goals and grow your business.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Search engine marketing (SEM)",
      "Social media marketing",
      "Content marketing",
      "Email marketing",
      "Conversion rate optimization",
      "Analytics and reporting",
    ],
    subServices: [
      {
        title: "Search Engine Marketing",
        description: "We create and manage paid search campaigns to drive targeted traffic to your website.",
        slug: "search-engine-marketing",
      },
      {
        title: "Social Media Marketing",
        description:
          "We develop and implement social media strategies to build brand awareness and engage your audience.",
        slug: "social-media-marketing",
      },
      {
        title: "Content Marketing",
        description: "We create valuable, relevant content that attracts and engages your target audience.",
        slug: "content-marketing",
      },
      {
        title: "Email Marketing",
        description: "We design and implement email marketing campaigns that nurture leads and drive conversions.",
        slug: "email-marketing",
      },
    ],
    caseStudies: [
      {
        title: "B2B Lead Generation Campaign",
        description: "Generated 500+ qualified leads in 3 months through targeted digital marketing efforts.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "E-commerce Marketing Strategy",
        description: "Increased online sales by 120% through integrated digital marketing approach.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  "e-commerce-solutions": {
    title: "E-Commerce Solutions",
    description: "Custom e-commerce platforms that drive sales and provide seamless shopping experiences.",
    longDescription:
      "Our e-commerce solutions are designed to help businesses sell products and services online effectively. We create custom e-commerce platforms that drive sales, provide seamless shopping experiences, and help you grow your online business.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Custom e-commerce development",
      "Shopping cart and checkout optimization",
      "Payment gateway integration",
      "Inventory management",
      "Order fulfillment and shipping integration",
      "E-commerce analytics and reporting",
    ],
    subServices: [
      {
        title: "Shopify Development",
        description: "We create custom Shopify stores with unique designs and advanced functionality.",
        slug: "shopify-development",
      },
      {
        title: "WooCommerce Development",
        description: "We build custom WooCommerce solutions for WordPress-based online stores.",
        slug: "woocommerce-development",
      },
      {
        title: "Custom E-commerce Development",
        description: "We develop bespoke e-commerce platforms tailored to your specific business requirements.",
        slug: "custom-ecommerce-development",
      },
      {
        title: "E-commerce Optimization",
        description: "We optimize existing online stores to improve conversion rates and increase sales.",
        slug: "ecommerce-optimization",
      },
    ],
    caseStudies: [
      {
        title: "Fashion E-commerce Platform",
        description: "Built a custom e-commerce platform that increased sales by 85% in the first year.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "B2B E-commerce Solution",
        description: "Developed a B2B ordering system that streamlined processes and reduced costs by 30%.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: `${service.title} - RayonWeb`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-foreground/80 mb-8">{service.longDescription}</p>
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
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
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
              Our {service.title.toLowerCase()} services include a comprehensive range of features designed to help your
              business succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
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

      {/* Sub-Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Specialized Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our {service.title} Services</h2>
            <p className="text-foreground/80">
              We offer a range of specialized services within our {service.title.toLowerCase()} expertise to meet your
              specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.subServices.map((subService, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{subService.title}</h3>
                <p className="text-foreground/80 mb-6">{subService.description}</p>
                <Button asChild variant="outline" className="group">
                  <Link href={`/services/${params.slug}/${subService.slug}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Success Stories</h2>
            <p className="text-foreground/80">
              Take a look at some of our successful {service.title.toLowerCase()} projects and the results we've
              achieved for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.caseStudies.map((caseStudy, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Contact us today to discuss your {service.title.toLowerCase()} needs and how we can help you achieve your
              goals.
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
