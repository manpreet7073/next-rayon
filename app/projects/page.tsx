"use client"

import { useState } from "react"
import ProjectsHero from "@/components/projects/projects-hero"
import ProjectsFilter from "@/components/projects/projects-filter"
import ProjectsGrid from "@/components/projects/projects-grid"
import ProjectsCta from "@/components/projects/projects-cta"
import FloatingCta from "@/components/floating-cta"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <ProjectsHero />
      <ProjectsFilter onCategoryChange={handleCategoryChange} />
      <ProjectsGrid activeCategory={activeCategory} />
      <ProjectsCta />
      <FloatingCta />
    </main>
  )
}
