import ProjectsHero from "@/components/projects/projects-hero"
import ProjectsGrid from "@/components/projects/projects-grid"
import ProjectsFilter from "@/components/projects/projects-filter"
import ProjectsCTA from "@/components/projects/projects-cta"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <ProjectsHero />
      <ProjectsFilter />
      <ProjectsGrid />
      <ProjectsCTA />
    </div>
  )
}
