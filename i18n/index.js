var en = require("./translations.en.json");
var ja = require("./translations.ja.json");

const i18n = {
  translations: {
    en: en.i18n,
    ja: ja.i18n,
  },
  defaultLang: "en",
};

module.exports = i18n;
