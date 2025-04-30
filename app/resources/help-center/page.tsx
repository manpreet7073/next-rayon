import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input as InputComponent } from "@/components/ui/input"
import {
  ArrowRight,
  Search,
  HelpCircle,
  FileText,
  MessageCircle,
  Video,
  BookOpen,
  Settings,
  AlertCircle,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Help Center - RayonWeb",
  description: "Get help and support for RayonWeb products and services",
}

export default function HelpCenterPage() {
  const categories = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Getting Started",
      description: "Guides to help you get started with our products and services.",
      href: "#",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Account & Billing",
      description: "Manage your account, subscriptions, and billing information.",
      href: "#",
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-primary" />,
      title: "Troubleshooting",
      description: "Solutions to common problems and issues.",
      href: "#",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "User Guides",
      description: "Detailed guides for using our products and services.",
      href: "#",
    },
    {
      icon: <Video className="h-6 w-6 text-primary" />,
      title: "Video Tutorials",
      description: "Visual guides to help you learn our products and services.",
      href: "#",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "Community Forum",
      description: "Connect with other users and share knowledge.",
      href: "#",
    },
  ]

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button in the top right corner of our website. Fill in your details, agree to our terms of service, and click 'Create Account'. You'll receive a confirmation email to verify your account.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through our payment gateway.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "To reset your password, click on the 'Login' button, then select 'Forgot Password'. Enter your email address, and we'll send you a link to reset your password. The link is valid for 24 hours.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time from your account dashboard. Go to 'Subscription', select 'Change Plan', and choose the plan that best suits your needs. Changes take effect immediately or at the end of your billing cycle, depending on the type of change.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "To cancel your subscription, go to your account dashboard, select 'Subscription', and click on 'Cancel Subscription'. Follow the prompts to complete the cancellation process. You'll have access to your account until the end of your current billing period.",
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
              Help Center
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How Can We <span className="text-primary">Help</span> You?
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Find answers to your questions and get the help you need with our products and services.
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-foreground/70" />
              </div>
              <InputComponent
                type="search"
                placeholder="Search for help articles..."
                className="pl-10 py-6 text-base rounded-full"
              />
              <Button className="absolute right-1 top-1 rounded-full">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Browse Help Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                </div>
                <p className="text-foreground/80">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground/80">
              Find quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-foreground/80">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="group">
                <Link href="#">
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
                <p className="text-foreground/80 mb-8">
                  Can't find what you're looking for? Our support team is here to help. Contact us and we'll get back to
                  you as soon as possible.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="group">
                    <Link href="/#contact">
                      Contact Support
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#">Submit a Ticket</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-64 w-64">
                  <HelpCircle className="h-full w-full text-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MessageCircle className="h-24 w-24 text-primary" />
                  </div>
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
