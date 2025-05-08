import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingCTA from "@/components/floating-cta"
import Script from "next/script"

// Optimize font loading
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rayon Web Solutions | Your Vision, Our Code",
  description:
    "Turning Ideas into Reality - Web Development, App Development, DevOps & Cloud, UI/UX Design, LMS & Integration, QA & Automation",
  keywords: [
    "Rayon Web Solutions",
    "Web Development",
    "App Development",
    "DevOps",
    "Cloud Services",
    "UI/UX Design",
    "LMS Integration",
    "QA Testing",
    "Automation",
  ],
  authors: [{ name: "Rayon Web Solutions", url: "https://rayonweb.com" }],
  creator: "Rayon Web Solutions",
  publisher: "Rayon Web Solutions",
  metadataBase: new URL("https://rayonweb.com"),
  openGraph: {
    title: "Rayon Web Solutions | Your Vision, Our Code",
    description:
      "Turning Ideas into Reality - Web Development, App Development, DevOps & Cloud, UI/UX Design, LMS & Integration, QA & Automation",
    url: "https://rayonweb.com",
    siteName: "Rayon Web Solutions",
    images: [
      {
        url: "https://rayonweb.com/images/new-1.png",
        width: 1200,
        height: 630,
        alt: "Rayon Web Solutions Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayon Web Solutions | Your Vision, Our Code",
    description:
      "We build cutting-edge web & app solutions tailored to your vision — from development to design, cloud, DevOps, and more.",
    images: ["https://rayonweb.com/images/new-1.png"], // Same or separate image for Twitter
    creator: "@rayonweb", // Optional: your Twitter handle
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} font-sans bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 min-h-screen`}
      >
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-68457LHBSZ`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-68457LHBSZ');
            `,
          }}
        />

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
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
        />

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
