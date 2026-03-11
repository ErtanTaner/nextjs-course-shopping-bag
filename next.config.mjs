/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
        remotePatterns: [new URL("https://cdn.dummyjson.com/**")]
    }
};

export default nextConfig;
