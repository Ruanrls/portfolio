const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});

module.exports = withNextra({
  i18n: {
    locales: ["default", "en", "pt"],
    defaultLocale: "default",
    localeDetection: true,
  },
  images: {
    domains: ["scontent.cdninstagram.com"],
  },
});
