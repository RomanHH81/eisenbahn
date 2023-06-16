/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.geesthachter-eisenbahn.de"],
  },

  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
