"use client"

import { useState } from "react"
import BlogHero from "@/components/blog/blog-hero"
import BlogCategories from "@/components/blog/blog-categories"
import BlogGrid from "@/components/blog/blog-grid"
import BlogNewsletter from "@/components/blog/blog-newsletter"
import FloatingCta from "@/components/floating-cta"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <BlogHero />
      <BlogCategories onCategoryChange={handleCategoryChange} />
      <BlogGrid activeCategory={activeCategory} />
      <BlogNewsletter />
      <FloatingCta />
    </main>
  )
}
