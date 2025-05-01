import Hero from "@/components/home/hero"
import FeaturedServices from "@/components/home/featured-services"
import RecentProjects from "@/components/home/recent-projects"
import Testimonials from "@/components/home/testimonials"
import ClientLogos from "@/components/home/client-logos"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <FeaturedServices />
      <RecentProjects />
      <Testimonials />
      <ClientLogos />
      <CTASection />
    </div>
  )
}
