/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Force Webpack 5 for compatibility with Node.js 22+
    config.resolve.fallback = { crypto: false };

    return config;
  },
});
