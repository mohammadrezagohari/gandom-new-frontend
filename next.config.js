/**
 * @type {import('next').NextConfig}
 */
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
//   "./src/i18n/request.js"
);
/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["better-sqlite3"],
  images: {
    unoptimized: true,
  },
  experimental: {},
};

module.exports = withNextIntl(nextConfig);
