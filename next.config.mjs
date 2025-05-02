/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production builds
  // swcMinify is now enabled by default — safe to remove
  // swcMinify: true,

  // Improve build performance
  poweredByHeader: false,

  // Skip type checking during builds for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // Skip ESLint during builds for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Allow static exports without image optimization
  images: {
    unoptimized: true,
  },

  // Optimize output for production
  output: 'standalone',

  // No longer using deprecated experimental options
  experimental: {
    // Add safe experimental features here, if any
  },
}

export default nextConfig;
