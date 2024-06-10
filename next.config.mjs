/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  publicRuntimeConfig: {
    basePath: "/history-site",
  },
  images: {
    unoptimized: true,
  },

  assetPrefix: "/history-site",
};

export default nextConfig;
