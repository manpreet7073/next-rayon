import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingCTA from "@/components/floating-cta"

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
