import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FullShowcase } from "@/components/full-showcase"

export const metadata = {
  title: "Project Showcase - RayonWeb",
  description: "Explore our portfolio of web development and digital projects",
}

export default function ShowcasePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Project</span> Showcase
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Explore our portfolio of successful projects across various industries and see how we've helped businesses
              achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      <FullShowcase />
      <Footer />
    </main>
  )
}
