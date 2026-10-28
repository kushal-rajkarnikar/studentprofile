/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Tells Next.js to generate a static HTML export
  images: {
    unoptimized: true, // Required because Next.js default image optimization won't work on static hosting
  },
  // ONLY include basePath if your repository is NOT a user/organization page (e.g., https://github.io)
  basePath: process.env.NODE_ENV === "production" ? "/studentprofile" : "",
};

export default nextConfig;
