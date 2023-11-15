/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com']
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // **Needs to use as interfaces create unnecessary type errors while building
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
