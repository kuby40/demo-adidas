/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com']
  },
  experimental: {
     appDir: true,
    // swcPlugins: [
    //   ["next-superjson-plugin", {}]
    // ]
  }
}
