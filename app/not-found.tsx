import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Search, Compass } from "lucide-react"

export const metadata = {
  title: "Page Not Found | Rayon Web Solutions",
  description: "The page you're looking for doesn't exist. Let us help you find what you need.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* 404 Heading with animation */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-bold opacity-10 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-card rounded-full p-8 neon-glow">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">Page Not Found</h2>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has been moved. Don't worry, we'll help you find your way back.
          </p>

          {/* Navigation options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href="/" className="w-full">
              <Button variant="outline" size="lg" className="w-full glass-card hover-neon-glow">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="/services" className="w-full">
              <Button variant="outline" size="lg" className="w-full glass-card hover-neon-glow">
                <Compass className="mr-2 h-4 w-4" />
                Explore Services
              </Button>
            </Link>
            <Link href="/contact" className="w-full">
              <Button variant="outline" size="lg" className="w-full glass-card hover-neon-glow">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </Link>
            <Link href="/blog" className="w-full">
              <Button variant="outline" size="lg" className="w-full glass-card hover-neon-glow">
                <Search className="mr-2 h-4 w-4" />
                Browse Resources
              </Button>
            </Link>
          </div>

          {/* Popular links */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Popular Destinations:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/web-development" className="text-sm text-primary hover:underline">
                Web Development
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/services/app-development" className="text-sm text-primary hover:underline">
                App Development
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/services/ui-ux-design" className="text-sm text-primary hover:underline">
                UI/UX Design
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/about" className="text-sm text-primary hover:underline">
                About Us
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/contact" className="text-sm text-primary hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-pulse-slow">
          <Link href="/contact">
            <Button size="lg" className="neon-glow">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-primary/10 blur-xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-purple-500/10 blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-blue-500/10 blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
