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
        protocol: 'https',
        hostname: '192.168.195.129',
        port: '8081',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.195.129',
        port: '8081',
        pathname: '/uploads/**',
      },
    ]
  },

  experimental: {
    largePageDataBytes: 512 * 100000,
  },

  i18n: {
    localeDetection: false,
    locales: ['az', 'en', 'ru'],
    defaultLocale: 'az',
  },

};

export default nextConfig;
