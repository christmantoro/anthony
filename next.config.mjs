/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: false,
      },
      {
        source: '/id',
        destination: '/',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
