/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.geesthachter-eisenbahn.de"],
  },

  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
