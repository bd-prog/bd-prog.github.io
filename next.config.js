/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
};
basePath:
    process.env.NODE_ENV === "production"
      ? "https://bd-prog.github.io"
      : undefined,
};


module.exports = nextConfig;
