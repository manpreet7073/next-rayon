import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, BookOpen, HelpCircle, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Resources - RayonWeb",
  description: "Access helpful resources, guides, and support for RayonWeb products and services",
}

export default function ResourcesPage() {
  const resources = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Blog",
      description:
        "Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing.",
      href: "/resources/blog",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Case Studies",
      description:
        "Explore our portfolio of successful client projects and learn how we solve real-world challenges with innovative solutions.",
      href: "/resources/case-studies",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Documentation",
      description: "Find detailed guides, tutorials, and reference materials for our products, services, and APIs.",
      href: "/resources/documentation",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <HelpCircle className="h-12 w-12 text-primary" />,
      title: "Help Center",
      description:
        "Get help and support for our products and services, including FAQs, troubleshooting guides, and more.",
      href: "/resources/help-center",
      image: "/placeholder.svg?height=300&width=400",
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
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Helpful <span className="text-primary">Resources</span> & Support
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Access a wealth of resources to help you get the most out of our products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="p-8 flex flex-col">
                    <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                      {resource.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h2>
                    <p className="text-foreground/80 mb-6 flex-grow">{resource.description}</p>
                    <Button asChild variant="outline" className="group w-full sm:w-auto">
                      <Link href={resource.href}>
                        Explore {resource.title}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-foreground/80 mb-8">
                Subscribe to our newsletter to receive the latest updates, resources, and news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" type="email" className="flex-grow" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Need Help?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Support Team</h2>
              <p className="text-foreground/80 mb-8">
                Can't find what you're looking for? Our support team is here to help. Contact us and we'll get back to
                you as soon as possible.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative h-64 w-64">
                <MessageCircle className="h-full w-full text-primary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <HelpCircle className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}
