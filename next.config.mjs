/** @type {import('next').NextConfig} */

// Learn Data Systems (github.com/rupokghosh/learn-data-systems) is its own static
// site on Vercel. Serve it under this path on rupokghosh.com.
const LDS_PATH = "/designing-data-intensive-applications";
const LDS_ORIGIN = "https://learn-data-systems-neon.vercel.app";

const nextConfig = {
  async rewrites() {
    return {
      // Before the app's own routes, so the [slug] page never sees these paths.
      beforeFiles: [
        { source: LDS_PATH, destination: `${LDS_ORIGIN}/` },
        { source: `${LDS_PATH}/:path*`, destination: `${LDS_ORIGIN}/:path*` },
      ],
    };
  },
};

export default nextConfig;
