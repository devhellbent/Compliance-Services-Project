import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },

  // Fix Turbopack panic: Windows MAX_PATH (260 chars) exceeded because the
  // project lives in a very deeply-nested folder. Setting the turbopack root
  // to the project directory stops Turbopack from encoding all parent
  // directory names into chunk filenames.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
