import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service - RayonWeb",
  description: "Terms and conditions for using RayonWeb's services and website",
}

export default function TermsOfServicePage() {
  const lastUpdated = "April 15, 2025"

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-foreground/80">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <p>
              Welcome to RayonWeb. These Terms of Service ("Terms") govern your access to and use of our website and
              services. Please read these Terms carefully before using our services. By accessing or using our services,
              you agree to be bound by these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do
              not agree to these Terms, you may not access or use our services.
            </p>

            <h2>2. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will provide notice of any material changes by posting the
              updated Terms on our website and updating the "Last Updated" date. Your continued use of our services
              after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              To access certain features of our services, you may be required to register for an account. You agree to
              provide accurate, current, and complete information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your account credentials and for all activities that occur under your
              account. You agree to notify us immediately of any unauthorized use of your account or any other breach of
              security.
            </p>

            <h2>4. User Content</h2>
            <p>
              Our services may allow you to post, upload, publish, submit, or transmit content ("User Content"). By
              making any User Content available through our services, you grant us a worldwide, non-exclusive,
              transferable, royalty-free license to use, copy, modify, create derivative works based upon, distribute,
              publicly display, and publicly perform your User Content.
            </p>
            <p>
              You are solely responsible for your User Content and the consequences of posting or publishing it. You
              represent and warrant that you own or have the necessary rights to post your User Content and that your
              User Content does not violate the rights of any third party.
            </p>

            <h2>5. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use our services in any manner that could interfere with, disrupt, negatively affect, or inhibit other
                users from fully enjoying our services, or that could damage, disable, overburden, or impair the
                functioning of our services
              </li>
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>
                Attempt to circumvent any content-filtering techniques we employ, or attempt to access areas or features
                of our services that you are not authorized to access
              </li>
              <li>
                Develop or use any third-party applications that interact with our services without our prior written
                consent
              </li>
              <li>Use our services for any harmful or nefarious purpose</li>
              <li>Violate any applicable law or regulation</li>
            </ul>

            <h2>6. Intellectual Property Rights</h2>
            <p>
              Our services and their contents, features, and functionality are owned by RayonWeb and are protected by
              copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              These Terms do not grant you any right, title, or interest in our services, content, trademarks, or other
              intellectual property.
            </p>

            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability,
              for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use our services will immediately cease. If you wish to terminate your
              account, you may simply discontinue using our services.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED,
              OR THAT OUR SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL
              COMPONENTS.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL RAYONWEB, ITS AFFILIATES, OR THEIR
              RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS,
              GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY
              TO USE, OUR SERVICES.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless RayonWeb, its affiliates, and their respective officers,
              directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses,
              including without limitation reasonable attorney's fees and costs, arising out of or in any way connected
              with your access to or use of our services or your violation of these Terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without
              regard to its conflict of law provisions.
            </p>

            <h2>12. Dispute Resolution</h2>
            <p>
              Any dispute arising from or relating to these Terms or our services shall be resolved through binding
              arbitration in accordance with the rules of [Arbitration Association]. The arbitration shall be conducted
              in [City, State/Country].
            </p>

            <h2>13. Severability</h2>
            <p>
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and
              interpreted to accomplish the objectives of such provision to the greatest extent possible under
              applicable law and the remaining provisions will continue in full force and effect.
            </p>

            <h2>14. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and RayonWeb regarding our services and supersede
              all prior and contemporaneous agreements, proposals, or representations, written or oral, concerning our
              services.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@rayonweb.com">legal@rayonweb.com</a> or by mail at:
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
