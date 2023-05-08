/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './app/image.ts',
  },
  experimental: {
    appDir: true,
  },
};
 
module.exports = nextConfig;