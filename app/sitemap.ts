import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rayonweb.com"

  // Main pages
  const mainRoutes = ["", "/about", "/services", "/showcase", "/training", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Service pages
  const serviceRoutes = [
    "/services/web-development",
    "/services/ui-ux-design",
    "/services/seo-optimization",
    "/services/mobile-development",
    "/services/digital-marketing",
    "/services/e-commerce-solutions",
    "/services/cybersecurity",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Resource pages
  const resourceRoutes = [
    "/resources",
    "/resources/blog",
    "/resources/case-studies",
    "/resources/documentation",
    "/resources/help-center",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  // Legal pages
  const legalRoutes = ["/legal", "/legal/privacy-policy", "/legal/terms-of-service", "/legal/cookie-policy"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    }),
  )

  return [...mainRoutes, ...serviceRoutes, ...resourceRoutes, ...legalRoutes]
}
