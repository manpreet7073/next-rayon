import BlogHero from "@/components/blog/blog-hero"
import BlogGrid from "@/components/blog/blog-grid"
import BlogCategories from "@/components/blog/blog-categories"
import BlogNewsletter from "@/components/blog/blog-newsletter"

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </div>
  )
}
