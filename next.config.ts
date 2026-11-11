import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    cpus: 1,
  },
  async redirects() {
    return [
      { source: '/about', destination: '/', permanent: true },
      { source: '/services', destination: '/', permanent: true },
      { source: '/facilities', destination: '/', permanent: true },
      { source: '/sustainability', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
