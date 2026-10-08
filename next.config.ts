import type { NextConfig } from "next";

// Static export for GitHub Pages. No basePath: the site is served from the
// root of vutecksolution.com.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
