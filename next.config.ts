/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.fusacafe.it",
      },
    ],
  },
};

module.exports = nextConfig;