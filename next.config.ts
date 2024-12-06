import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
