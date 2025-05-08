"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Code, Smartphone, Cloud, Palette, BookOpen, TestTube } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import BookConsultationModal from "./contact/BookConsultationModal"

const services = [
  {
    name: "Web Development",
    href: "/services/web-development",
    icon: <Code className="h-5 w-5" />,
    subServices: [
      { name: "Custom Website Design", href: "/services/web-development/custom-website-design" },
      { name: "E-commerce Solutions", href: "/services/web-development/ecommerce-solutions" },
      { name: "CMS Integration", href: "/services/web-development/cms-integration" },
    ],
  },
  {
    name: "App Development",
    href: "/services/app-development",
    icon: <Smartphone className="h-5 w-5" />,
    subServices: [
      { name: "Android & iOS Apps", href: "/services/app-development/mobile-apps" },
      { name: "Progressive Web Apps", href: "/services/app-development/progressive-web-apps" },
      { name: "Cross-Platform Apps", href: "/services/app-development/cross-platform-apps" },
    ],
  },
  {
    name: "DevOps & Cloud",
    href: "/services/devops-cloud",
    icon: <Cloud className="h-5 w-5" />,
    subServices: [
      { name: "Cloud Setup", href: "/services/devops-cloud/cloud-setup" },
      { name: "CI/CD Pipelines", href: "/services/devops-cloud/ci-cd-pipelines" },
      { name: "Docker & Kubernetes", href: "/services/devops-cloud/docker-kubernetes" },
    ],
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    icon: <Palette className="h-5 w-5" />,
    subServices: [
      { name: "Wireframes & Prototyping", href: "/services/ui-ux-design/wireframes-prototyping" },
      { name: "Web & Mobile App Design", href: "/services/ui-ux-design/web-mobile-design" },
      { name: "Design Systems", href: "/services/ui-ux-design/design-systems" },
    ],
  },
  {
    name: "LMS & Integration",
    href: "/services/lms-integration",
    icon: <BookOpen className="h-5 w-5" />,
    subServices: [
      { name: "Custom LMS", href: "/services/lms-integration/custom-lms" },
      { name: "Payment Integration", href: "/services/lms-integration/payment-integration" },
      { name: "CRM & API Integration", href: "/services/lms-integration/crm-api-integration" },
    ],
  },
  {
    name: "QA & Automation",
    href: "/services/qa-automation",
    icon: <TestTube className="h-5 w-5" />,
    subServices: [
      { name: "Manual Testing", href: "/services/qa-automation/manual-testing" },
      { name: "Automated CI Tests", href: "/services/qa-automation/automated-ci-tests" },
      { name: "Performance Audits", href: "/services/qa-automation/performance-audits" },
    ],
  },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", dropdown: true, items: services },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Training", href: "/training" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }
  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-gray-900/80 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
             <Image
              src={"/new-1.png"}
              alt={"logo"}
              height='200'
              width='300'
              className="object-cover"
            /></Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={cn(
                      "flex items-center text-gray-300 hover:text-white transition-colors",
                      pathname.startsWith(link.href) && "text-white font-medium",
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        openDropdown === link.name && "rotate-180",
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-gray-300 hover:text-white transition-colors",
                      pathname === link.href && "text-white font-medium",
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-72 rounded-xl glass-card overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {link.items?.map((item) => (
                            <div key={item.name}>
                              <div className="flex items-center px-4 py-3 hover:bg-gray-800/50 transition-colors">
                                <span className="mr-3 text-purple-500">{item.icon}</span>
                                <div>
                                  <Link href={item.href} className="font-medium">
                                    {item.name}
                                  </Link>
                                  <div className="mt-1">
                                    <ul className="flex flex-wrap gap-2 text-xs text-gray-400">
                                      {item.subServices.map((subService, idx) => (
                                        <li key={idx}>
                                          <Link
                                            href={subService.href}
                                            className="hover:text-purple-400 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            {subService.name}
                                            {idx < item.subServices.length - 1 && <span className="ml-2">•</span>}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button onClick={handleOpenModal} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-6">
              Book a Consultation
            </Button>
          </div>
          

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium",
                          pathname.startsWith(link.href)
                            ? "bg-gray-800 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        )}
                      >
                        {link.name}
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-200",
                            openDropdown === link.name && "rotate-180",
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {link.items?.map((item) => (
                              <div key={item.name} className="mt-2">
                                <div className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                  <span className="mr-3 text-purple-500">{item.icon}</span>
                                  <Link href={item.href}>{item.name}</Link>
                                </div>
                                <div className="pl-8 mt-1">
                                  <ul className="space-y-1">
                                    {item.subServices.map((subService) => (
                                      <li key={subService.name}>
                                        <Link
                                          href={subService.href}
                                          className="block px-3 py-1 text-xs text-gray-400 hover:text-white"
                                        >
                                          {subService.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-3 py-2 rounded-md text-base font-medium",
                        pathname === link.href
                          ? "bg-gray-800 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button onClick={handleOpenModal} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <BookConsultationModal showModal={showModal} onClose={handleCloseModal} />
    </header>
  )
}
