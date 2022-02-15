/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/(cv|Cv)",
        destination: "/CV"
      },
      {
        source: "/(projects)",
        destination: "/Projects"
      },
      {
        source: "/(about|About|aboutme|aboutMe)",
        destination: "/AboutMe"
      },
      {
        source: "/(animation)",
        destination: "/Animation",
      },
      {
        source: "/(coding)",
        destination: "/Coding",
      }
    ]
  }
}

module.exports = nextConfig
