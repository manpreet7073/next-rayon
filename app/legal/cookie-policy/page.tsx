import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Cookie Policy - RayonWeb",
  description: "Information about how RayonWeb uses cookies and similar technologies",
}

export default function CookiePolicyPage() {
  const lastUpdated = "April 15, 2025"

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-foreground/80">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <p>
              This Cookie Policy explains how RayonWeb ("we", "us", or "our") uses cookies and similar technologies on
              our website. This policy is designed to help you understand what cookies are, how we use them, and the
              choices you have regarding their use.
            </p>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a
              website. Cookies are widely used to make websites work more efficiently and provide information to the
              website owners. They help us recognize your device and remember information about your visit, such as your
              preferences and settings.
            </p>

            <h2>Types of Cookies We Use</h2>
            <p>We use the following types of cookies on our website:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
                They enable core functionality such as security, network management, and account access. You cannot opt
                out of these cookies.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously. They help us improve the functionality of
                our website.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you make
                (such as your username, language, or region) and provide enhanced, more personal features.
              </li>
              <li>
                <strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements more
                relevant to you and your interests. They are also used to limit the number of times you see an
                advertisement and help measure the effectiveness of advertising campaigns.
              </li>
            </ul>

            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
              the website, deliver advertisements, and so on. These cookies may include:
            </p>
            <ul>
              <li>
                <strong>Analytics Cookies:</strong> We use Google Analytics to help us understand how users engage with
                our website. These cookies collect information about your use of our website, including your IP address.
              </li>
              <li>
                <strong>Social Media Cookies:</strong> These cookies allow you to share our content on social media
                platforms and to interact with our content on those platforms.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> These cookies are used by advertising companies to serve ads that
                are relevant to your interests.
              </li>
            </ul>

            <h2>How Long Do Cookies Stay on My Device?</h2>
            <p>
              The length of time a cookie will remain on your device depends on whether it is a "persistent" or
              "session" cookie:
            </p>
            <ul>
              <li>
                <strong>Persistent Cookies:</strong> These cookies remain on your device until they expire or are
                deleted manually.
              </li>
              <li>
                <strong>Session Cookies:</strong> These cookies are temporary and are deleted from your device when you
                close your web browser.
              </li>
            </ul>

            <h2>Cookie Management</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can usually find these settings
              in the "Options" or "Preferences" menu of your browser. You can also use the "Help" option in your browser
              for more details.
            </p>
            <p>Here are links to instructions for managing cookies in common browsers:</p>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p>
              Please note that if you choose to block or delete cookies, you may not be able to access certain areas or
              features of our website, and some services may not function properly.
            </p>

            <h2>Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your
              online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
            </p>

            <h2>Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last Updated" date.
            </p>
            <p>
              We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies and
              similar technologies.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at{" "}
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
                <Link href="/legal/privacy-policy" className="text-xl font-bold hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <p className="text-foreground/80 mt-2">
                  Information about how we collect, use, and protect your personal data.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <Link href="/legal/terms-of-service" className="text-xl font-bold hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <p className="text-foreground/80 mt-2">
                  The terms and conditions governing the use of our website and services.
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
