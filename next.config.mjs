// const locales = require('./data/locales/locales.js')

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
      {
        protocol: 'http',
        hostname: 'preview.karabakh.edu.az',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.140.46',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.140.46',
        port: ':8080',
        pathname: '/uploads/**',
      },
    ]
  },

  i18n: {
    localeDetection: false,
    locales: ['az', 'en', 'ru'],
    defaultLocale: 'az',
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://preview.karabakh.edu.az/api/:path*',
      },
    ]
  },
};

export default nextConfig;
