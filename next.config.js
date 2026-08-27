const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  // The resume route builds its font paths at runtime, so static tracing can't
  // see them; name them explicitly or the OTFs are missing in the deployment.
  outputFileTracingIncludes: {
    "/api/resume": [
      "./node_modules/pretendard/dist/public/static/Pretendard-Regular.otf",
      "./node_modules/pretendard/dist/public/static/Pretendard-SemiBold.otf",
      "./node_modules/pretendard/dist/public/static/Pretendard-Bold.otf",
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.(".svg"));
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
