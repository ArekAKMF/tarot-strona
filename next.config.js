/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "",
  },
};

module.exports = nextConfig;
