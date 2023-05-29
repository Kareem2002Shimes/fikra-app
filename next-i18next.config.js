const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    pages: {
      "*": ["common"],
    },
    reloadOnPrerender: process.env.NODE_ENV === "development",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};
