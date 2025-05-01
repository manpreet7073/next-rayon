import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingCTA from "@/components/floating-cta"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Rayon Web Solutions | Your Vision, Our Code",
  description:
    "Turning Ideas into Reality - Web Development, App Development, DevOps & Cloud, UI/UX Design, LMS & Integration, QA & Automation",
    generator: 'v0.dev'
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative">
            <Navbar />
            <main className="pt-20">{children}</main>
            <FloatingCTA />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
