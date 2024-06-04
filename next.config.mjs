/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  publicRuntimeConfig: {
  basePath: "/history-site",
  },
  
  assetPrefix: "/history-site",
};

export default nextConfig;
