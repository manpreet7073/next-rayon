"use client"
import Link from "next/link"
import type React from "react"

import { useRouter } from "next/navigation"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  // Function to handle navigation with scroll reset
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    router.push(href)
    window.scrollTo(0, 0)
  }

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Showcase", href: "/showcase" },
        { label: "Training", href: "/training" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "Documentation", href: "/resources/documentation" },
        { label: "Help Center", href: "/resources/help-center" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Service", href: "/legal/terms-of-service" },
        { label: "Cookie Policy", href: "/legal/cookie-policy" },
        { label: "Sitemap", href: "/sitemap.xml" },
      ],
    },
  ]

  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" onClick={(e) => handleNavigation(e, "/")} className="text-2xl font-bold inline-block mb-6">
              Rayon<span className="text-primary">Web</span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              We create modern web solutions that help businesses grow and succeed in the digital world. Our team is
              dedicated to delivering high-quality websites and applications.
            </p>
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

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-medium text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavigation(e, link.href)}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm mb-4 md:mb-0">© {currentYear} RayonWeb. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/legal/privacy-policy"
              onClick={(e) => handleNavigation(e, "/legal/privacy-policy")}
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-of-service"
              onClick={(e) => handleNavigation(e, "/legal/terms-of-service")}
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
