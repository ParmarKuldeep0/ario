<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
=======
export default {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
};
>>>>>>> e5514791ff592634a564f5d9b1fad9a2a31e1dbf
