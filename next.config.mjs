/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Matches any hostname
      },
      {
        protocol: 'http',
        hostname: '**', // Matches any hostname
      },
    ],
  },
};

export default nextConfig;
