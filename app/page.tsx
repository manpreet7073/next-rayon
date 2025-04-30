import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { Showcase } from "@/components/showcase"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { TrustedBy } from "@/components/trusted-by"
import { DigitalSectors } from "@/components/digital-sectors"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <DigitalSectors />
      <Testimonials />
      <Showcase />
      <Contact />
      <Footer />
    </main>
  )
}
