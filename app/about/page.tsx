import AboutHero from "@/components/about/about-hero"
import Timeline from "@/components/about/timeline"
import TeamSection from "@/components/about/team-section"
import MissionValues from "@/components/about/mission-values"
import CerberSection from "@/components/about/cerber-section"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <AboutHero />
      <Timeline />
      <MissionValues />
      <TeamSection />
      <CerberSection />
    </div>
  )
}
