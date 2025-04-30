import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input as InputUI } from "@/components/ui/input"
import { ArrowRight, Search, FileText, Book, Code, Server, Database, Shield, Settings } from "lucide-react"

export const metadata = {
  title: "Documentation - RayonWeb",
  description: "Comprehensive documentation for our products, services, and APIs",
}

export default function DocumentationPage() {
  const categories = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly with our products and services.",
      links: [
        { title: "Introduction", href: "#" },
        { title: "Quick Start Guide", href: "#" },
        { title: "Installation", href: "#" },
        { title: "Configuration", href: "#" },
      ],
    },
    {
      icon: <Book className="h-6 w-6 text-primary" />,
      title: "User Guides",
      description: "Detailed guides for using our products and services effectively.",
      links: [
        { title: "Dashboard Overview", href: "#" },
        { title: "Content Management", href: "#" },
        { title: "User Management", href: "#" },
        { title: "Settings & Preferences", href: "#" },
      ],
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "API Reference",
      description: "Comprehensive documentation for our APIs and integrations.",
      links: [
        { title: "Authentication", href: "#" },
        { title: "Endpoints", href: "#" },
        { title: "Request & Response Formats", href: "#" },
        { title: "Rate Limits", href: "#" },
      ],
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Deployment",
      description: "Learn how to deploy and manage your applications in various environments.",
      links: [
        { title: "Deployment Options", href: "#" },
        { title: "Environment Setup", href: "#" },
        { title: "Continuous Integration", href: "#" },
        { title: "Monitoring & Logging", href: "#" },
      ],
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Data Management",
      description: "Guides for managing, securing, and optimizing your data.",
      links: [
        { title: "Data Models", href: "#" },
        { title: "Database Setup", href: "#" },
        { title: "Migrations", href: "#" },
        { title: "Backups & Recovery", href: "#" },
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Security",
      description: "Best practices for securing your applications and data.",
      links: [
        { title: "Security Best Practices", href: "#" },
        { title: "Authentication & Authorization", href: "#" },
        { title: "Data Protection", href: "#" },
        { title: "Compliance", href: "#" },
      ],
    },
  ]

  const popularDocs = [
    { title: "Getting Started with RayonWeb CMS", href: "#" },
    { title: "API Authentication Guide", href: "#" },
    { title: "Deploying Your First Application", href: "#" },
    { title: "Security Best Practices", href: "#" },
    { title: "Database Optimization Guide", href: "#" },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Documentation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Comprehensive</span> Documentation
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Find detailed guides, tutorials, and reference materials for our products, services, and APIs.
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-foreground/70" />
              </div>
              <InputUI
                type="search"
                placeholder="Search documentation..."
                className="pl-10 py-6 text-base rounded-full"
              />
              <Button className="absolute right-1 top-1 rounded-full">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="font-medium">Popular:</span>
            <div className="flex flex-wrap justify-center gap-4">
              {popularDocs.map((doc, index) => (
                <Link
                  key={index}
                  href={doc.href}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {doc.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>
                <p className="text-foreground/80 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-foreground/70 hover:text-primary flex items-center gap-2 transition-colors"
                      >
                        <span className="text-primary">•</span> {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild variant="outline" size="sm" className="group">
                    <Link href="#">
                      View All
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
            <p className="text-foreground/80">
              Explore our additional resources to help you get the most out of our products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              <Settings className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Developer Tools</h3>
              <p className="text-foreground/80 mb-4">
                Access SDKs, libraries, and tools to help you build and integrate with our platform.
              </p>
              <Button asChild variant="outline" size="sm" className="group">
                <Link href="#">
                  Explore Tools
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              <Code className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Code Examples</h3>
              <p className="text-foreground/80 mb-4">
                Browse our collection of code examples and sample projects to jumpstart your development.
              </p>
              <Button asChild variant="outline" size="sm" className="group">
                <Link href="#">
                  View Examples
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              <FileText className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Tutorials</h3>
              <p className="text-foreground/80 mb-4">
                Step-by-step tutorials to help you learn and master our products and services.
              </p>
              <Button asChild variant="outline" size="sm" className="group">
                <Link href="#">
                  View Tutorials
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
              <p className="text-foreground/80 mb-8">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/resources/help-center">
                    Visit Help Center
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
