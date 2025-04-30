import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Head from "next/head"  // Import the Head component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rayon Web - Modern Web Solutions",
  description: "We create modern web solutions for businesses of all sizes",
  keywords: ["web development", "design", "digital solutions", "next.js"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {/* Add favicon in the head tag */}
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.history.scrollRestoration = 'manual';
                
                // Reset scroll position on page load
                window.addEventListener('load', function() {
                  window.scrollTo(0, 0);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
