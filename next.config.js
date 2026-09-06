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
  serverExternalPackages: ["mysql2"],
  async redirects() {
    return [
      { source: "/article/:path*", destination: "/en/article/:path*", permanent: true },
      { source: "/weblog/:path*", destination: "/en/weblog/:path*", permanent: true },
      { source: "/videos/:path*", destination: "/en/videos/:path*", permanent: true },
      { source: "/team/:path*", destination: "/en/team/:path*", permanent: true },
      { source: "/portfolio/:path*", destination: "/en/portfolio/:path*", permanent: true },
      { source: "/contact", destination: "/en/contact", permanent: true },
      { source: "/landing", destination: "/en", permanent: true },
      { source: "/tvideo", destination: "/en/videos", permanent: true },
      { source: "/:locale(fa|en)/weblog/:id/:slug*", destination: "/:locale/article/:id/:slug*", permanent: true },
      { source: "/:locale(fa|en)/service/seo", destination: "/:locale/service/2/search-engine-optimization", permanent: true },
      { source: "/:locale(fa|en)/landing", destination: "/:locale", permanent: true },
      { source: "/:locale(fa|en)/tvideo", destination: "/:locale/videos", permanent: true },
    ];
  },
  images: {
    unoptimized: true,
  },
  experimental: {},
};

module.exports = withNextIntl(nextConfig);
