import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, Shield, Lock } from "lucide-react"

export const metadata = {
  title: "Legal - RayonWeb",
  description: "Legal information, policies, and terms for RayonWeb",
}

export default function LegalPage() {
  const legalDocuments = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Terms of Service",
      description:
        "The terms and conditions governing the use of our website and services. These terms outline your rights and responsibilities when using our platform.",
      href: "/legal/terms-of-service",
      lastUpdated: "April 15, 2025",
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Privacy Policy",
      description:
        "Information about how we collect, use, and protect your personal data. Our privacy policy explains our data practices and your privacy rights.",
      href: "/legal/privacy-policy",
      lastUpdated: "April 15, 2025",
    },
    {
      icon: <Lock className="h-12 w-12 text-primary" />,
      title: "Cookie Policy",
      description:
        "Information about how we use cookies and similar technologies on our website. Learn about the types of cookies we use and how to manage them.",
      href: "/legal/cookie-policy",
      lastUpdated: "April 15, 2025",
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
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Legal Information</h1>
            <p className="text-xl text-foreground/80 mb-8">
              Important legal documents, policies, and terms governing the use of our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {legalDocuments.map((document, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="grid md:grid-cols-5 gap-6 items-center">
                  <div className="md:col-span-1 flex justify-center md:justify-start">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                      {document.icon}
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h2 className="text-2xl font-bold mb-2">{document.title}</h2>
                    <p className="text-foreground/80 mb-2">{document.description}</p>
                    <p className="text-sm text-foreground/60">Last Updated: {document.lastUpdated}</p>
                  </div>
                  <div className="md:col-span-1 flex justify-center md:justify-end">
                    <Link
                      href={document.href}
                      className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Additional Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Compliance</h3>
                <p className="text-foreground/80">
                  RayonWeb is committed to complying with all applicable laws and regulations, including but not limited
                  to data protection laws such as GDPR and CCPA. We take your privacy and security seriously and
                  implement appropriate measures to protect your information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Changes to Legal Documents</h3>
                <p className="text-foreground/80">
                  We may update our legal documents from time to time to reflect changes in our practices, services, or
                  applicable laws and regulations. We will notify you of any material changes by posting the updated
                  documents on our website and updating the "Last Updated" date.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="text-foreground/80">
                  If you have any questions or concerns about our legal documents or practices, please contact us at{" "}
                  <a href="mailto:legal@rayonweb.com" className="text-primary hover:underline">
                    legal@rayonweb.com
                  </a>{" "}
                  or by mail at:
                </p>
                <address className="mt-2 not-italic text-foreground/80">
                  RayonWeb
                  <br />
                  123 Web Street
                  <br />
                  Digital City, 10001
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
