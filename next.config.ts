import type { NextConfig } from "next";
import withMDX from "@next/mdx";

// ✅ Step 1 — Enable MDX page support
const mdx = withMDX({
  extension: /\.mdx?$/, // Enable MDX support
});

const nextConfig: NextConfig = mdx({
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"], // Support MDX pages
  output: "export", // ✅ Static HTML export

  // ✅ Step 1 — Add static image + hosting fixes
  images: {
    unoptimized: true, // Needed for static export (Hostinger, etc.)
  },
  trailingSlash: true, // Helps static routes like /about/ work correctly

  // ✅ Optional security headers (if host supports them)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
});

export default nextConfig;
