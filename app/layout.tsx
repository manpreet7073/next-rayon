import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingCTA from "@/components/floating-cta"
import { Head } from "next/document"

// Optimize font loading
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap", // Improves performance by allowing text to display in fallback font while custom font loads
})

export const metadata: Metadata = {
  title: "Rayon Web Solutions | Your Vision, Our Code",
  description:
    "Turning Ideas into Reality - Web Development, App Development, DevOps & Cloud, UI/UX Design, LMS & Integration, QA & Automation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-68457LHBSZ`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-68457LHBSZ');
            `,
          }}
        ></script>

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '23863632866572138');
              fbq('track', 'PageView');
            `,
          }}
        ></script>
      </Head>
      <body
        className={`${manrope.variable} font-sans bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 min-h-screen`}
      >
        <div className="relative">
          <Navbar />
          <main className="pt-20">{children}</main>
          <FloatingCTA />
          <Footer />
        </div>
      </body>
    </html>
  )
}
