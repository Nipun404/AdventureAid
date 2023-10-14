/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or modify the output configuration
  // output: 'export', // This line should be removed or modified to be compatible with the Image Optimization feature

  // Add the images configuration to disable Image Optimization
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
