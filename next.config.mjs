/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'apikarabagh.testedumedia.com',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'preview.karabakh.edu.az',
        port: '',
        pathname: '/uploads/**',
      },
    ]
  },
};

export default nextConfig;
