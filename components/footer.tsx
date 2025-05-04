"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"


export default function Footer() {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
    // Add a small timeout to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="bg-gray-950 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
          <Link href="/" className="flex items-center">
             <Image
              src={"/logo3.png"}
              alt={"logo"}
              height='200'
              width='300'
              className="object-cover"
            /></Link>
            <p className="text-gray-400 mb-6">
              Your Vision, Our Code – Turning Ideas into Reality. We build cutting-edge web and mobile solutions for
              businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573818253676" target="_blank" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.instagram.com/rayonwebsolutions/" target="_blank" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/rayonwebsolutions/?viewAsMember=true" target="_blank" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/about")
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/services")
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/projects")
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/blog")
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/careers")
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/training"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/training")
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Training
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/contact")
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/sitemap"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/sitemap")
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                <span className="text-gray-400">Mohali</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-500 mr-3" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-500 mr-3" />
                <a
                  href="mailto:info@rayonweb.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@rayonweb.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to receive updates and tech insights.</p>
            <div className="space-y-3">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Rayon Web Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation("/privacy-policy")
              }}
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation("/terms")
              }}
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
