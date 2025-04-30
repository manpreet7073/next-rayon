import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - RayonWeb",
  description: "RayonWeb's privacy policy and data protection practices",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 15, 2025"

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-foreground/80">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <p>
              At RayonWeb, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our services. Please read this privacy
              policy carefully. If you do not agree with the terms of this privacy policy, please do not access the
              site.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us. For example, we collect information when you
              create an account, subscribe to our newsletter, fill out a form, participate in any interactive features
              of our services, request customer support, or otherwise communicate with us.
            </p>
            <p>The types of information we may collect include:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, postal address, phone number, and other
                similar contact data.
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, account preferences, and other
                account-specific details.
              </li>
              <li>
                <strong>Payment Information:</strong> Credit card numbers, billing addresses, and other payment details
                (processed securely through our payment processors).
              </li>
              <li>
                <strong>Usage Information:</strong> Information about how you use our website and services, including
                browsing behavior, search queries, and feature usage.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve your experience</li>
            </ul>

            <h2>Sharing of Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party vendors,
                consultants, and other service providers who need access to such information to carry out work on our
                behalf.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose your information if we believe it is necessary to
                comply with applicable laws, regulations, legal processes, or governmental requests.
              </li>
              <li>
                <strong>In Connection with Business Transfers:</strong> We may share your information in connection with
                a merger, acquisition, reorganization, or sale of all or a portion of our assets.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with third parties when we have your
                consent to do so.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, please be aware that no method of transmission over the Internet or method of
              electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your
              personal information, we cannot guarantee its absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section
              below.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or
              the content of these third-party sites. We encourage you to review the privacy policies of any third-party
              sites you visit.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
              information from children under 16. If we learn we have collected or received personal information from a
              child under 16, we will delete that information.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@rayonweb.com">privacy@rayonweb.com</a> or by mail at:
            </p>
            <address>
              RayonWeb
              <br />
              123 Web Street
              <br />
              Digital City, 10001
            </address>
          </div>
        </div>
      </section>

      {/* Related Legal Documents */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Legal Documents</h2>
            <div className="space-y-4">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <Link href="/legal/terms-of-service" className="text-xl font-bold hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <p className="text-foreground/80 mt-2">
                  The terms and conditions governing the use of our website and services.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <Link href="/legal/cookie-policy" className="text-xl font-bold hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
                <p className="text-foreground/80 mt-2">
                  Information about how we use cookies and similar technologies on our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
