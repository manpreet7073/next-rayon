import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata = {
  title: "Blog - RayonWeb",
  description: "Insights, tips, and news about web development, design, and digital trends",
}

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging technologies and methodologies that will shape the future of web development in the coming years.",
    date: "April 25, 2025",
    author: "John Smith",
    readTime: "8 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "future-web-development-trends-2025",
  }

  const recentPosts = [
    {
      title: "How to Optimize Your Website for Better Performance",
      excerpt:
        "Learn practical techniques to improve your website's loading speed and overall performance for better user experience.",
      date: "April 20, 2025",
      author: "Sarah Johnson",
      readTime: "6 min read",
      category: "Performance",
      image: "/placeholder.svg?height=400&width=600",
      slug: "optimize-website-better-performance",
    },
    {
      title: "The Complete Guide to Responsive Design in 2025",
      excerpt:
        "Everything you need to know about creating responsive websites that work flawlessly across all devices and screen sizes.",
      date: "April 15, 2025",
      author: "Michael Chen",
      readTime: "10 min read",
      category: "Design",
      image: "/placeholder.svg?height=400&width=600",
      slug: "complete-guide-responsive-design-2025",
    },
    {
      title: "Understanding the Importance of Web Accessibility",
      excerpt: "Why web accessibility matters and how to implement inclusive design principles in your web projects.",
      date: "April 10, 2025",
      author: "Emily Rodriguez",
      readTime: "7 min read",
      category: "Accessibility",
      image: "/placeholder.svg?height=400&width=600",
      slug: "understanding-importance-web-accessibility",
    },
    {
      title: "Securing Your Website: Best Practices for 2025",
      excerpt: "Essential security measures to protect your website from common vulnerabilities and cyber threats.",
      date: "April 5, 2025",
      author: "David Wilson",
      readTime: "9 min read",
      category: "Security",
      image: "/placeholder.svg?height=400&width=600",
      slug: "securing-website-best-practices-2025",
    },
    {
      title: "The Rise of AI in Web Development",
      excerpt: "How artificial intelligence is transforming web development processes and creating new possibilities.",
      date: "March 30, 2025",
      author: "Lisa Thompson",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "/placeholder.svg?height=400&width=600",
      slug: "rise-ai-web-development",
    },
    {
      title: "Building Effective E-Commerce User Experiences",
      excerpt:
        "Strategies and best practices for creating e-commerce websites that drive conversions and customer satisfaction.",
      date: "March 25, 2025",
      author: "Robert Garcia",
      readTime: "7 min read",
      category: "E-Commerce",
      image: "/placeholder.svg?height=400&width=600",
      slug: "building-effective-ecommerce-user-experiences",
    },
  ]

  const categories = [
    "All Categories",
    "Web Development",
    "Design",
    "Performance",
    "Security",
    "Accessibility",
    "E-Commerce",
    "AI & Technology",
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Our Blog
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights & <span className="text-primary">Resources</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href="#"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 ? "bg-primary text-primary-foreground" : "bg-card/50 hover:bg-card/80 text-foreground/70"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Post</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                width={1200}
                height={600}
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {featuredPost.category}
                </span>
                <div className="flex items-center text-sm text-foreground/70">
                  <Calendar className="h-4 w-4 mr-1" />
                  {featuredPost.date}
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
              <p className="text-foreground/80 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt={featuredPost.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{featuredPost.author}</span>
                </div>
                <div className="flex items-center text-sm text-foreground/70">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Button asChild className="group">
                <Link href={`/resources/blog/${featuredPost.slug}`}>
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/80 text-primary-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 text-sm text-foreground/70">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/resources/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-foreground/80 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden bg-muted">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link href="#">
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-foreground/80 mb-8">
                Get the latest articles, resources, and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" type="email" className="flex-grow" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}
