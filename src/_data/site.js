// Facts about Mailkin used on every page, in llms.txt and in structured data.
// Keep these in step with the app (mailkin/Config/Base.xcconfig, mailkin/docs/app-store/metadata.json).
import { readFileSync } from "node:fs";

// Latest version and its date come from the Sparkle feed, so they never go stale.
const appcast = readFileSync(new URL("../../appcast.xml", import.meta.url), "utf8");
const latest = appcast.match(/<item>[\s\S]*?<sparkle:shortVersionString>([^<]+)<[\s\S]*?<\/item>/);
const latestDate = appcast.match(/<item>[\s\S]*?<pubDate>([^<]+)</);

// Apple's on-device translation languages (the app's Languages tab), as language codes.
const languages = ["ar", "zh", "da", "nl", "en", "fi", "fr", "de", "he", "hi", "id", "it", "ja", "ko", "ms", "no", "pl", "pt", "ru", "es", "sv", "th", "tr", "uk", "vi"];

// Site locales: the app's 11 languages. `lang` is the reader's language, used to skip a page about
// translating their own language. `paddle` is Paddle checkout's locale code.
const locales = [
  { code: "en", prefix: "", hreflang: "en", intl: "en", og: "en_US", lang: "en", name: "English", paddle: "en" },
  { code: "de", prefix: "/de", hreflang: "de", intl: "de", og: "de_DE", lang: "de", name: "Deutsch", paddle: "de" },
  { code: "es", prefix: "/es", hreflang: "es", intl: "es", og: "es_ES", lang: "es", name: "Español", paddle: "es" },
  { code: "fr", prefix: "/fr", hreflang: "fr", intl: "fr", og: "fr_FR", lang: "fr", name: "Français", paddle: "fr" },
  { code: "it", prefix: "/it", hreflang: "it", intl: "it", og: "it_IT", lang: "it", name: "Italiano", paddle: "it" },
  { code: "ja", prefix: "/ja", hreflang: "ja", intl: "ja", og: "ja_JP", lang: "ja", name: "日本語", paddle: "ja" },
  { code: "ko", prefix: "/ko", hreflang: "ko", intl: "ko", og: "ko_KR", lang: "ko", name: "한국어", paddle: "ko" },
  { code: "pt-br", prefix: "/pt-br", hreflang: "pt-BR", intl: "pt-BR", og: "pt_BR", lang: "pt", name: "Português (Brasil)", paddle: "pt" },
  { code: "pt-pt", prefix: "/pt-pt", hreflang: "pt-PT", intl: "pt-PT", og: "pt_PT", lang: "pt", name: "Português (Portugal)", paddle: "pt" },
  { code: "zh-hans", prefix: "/zh-hans", hreflang: "zh-Hans", intl: "zh-Hans", og: "zh_CN", lang: "zh", name: "简体中文", paddle: "zh-Hans" },
  { code: "zh-hant", prefix: "/zh-hant", hreflang: "zh-Hant", intl: "zh-Hant", og: "zh_TW", lang: "zh", name: "繁體中文", paddle: "zh-Hans" },
];

// Languages with their own landing page (/translate/<slug>-email/). Each needs a sample email in samples.json.
const featured = [
  { code: "de", slug: "german" },
  { code: "fr", slug: "french" },
  { code: "es", slug: "spanish" },
  { code: "it", slug: "italian" },
  { code: "ja", slug: "japanese" },
  { code: "zh", slug: "chinese" },
  { code: "pt", slug: "portuguese" },
  { code: "ru", slug: "russian" },
  { code: "en", slug: "english" },
  { code: "ko", slug: "korean" },
  { code: "ar", slug: "arabic" },
  { code: "nl", slug: "dutch" },
  { code: "pl", slug: "polish" },
  { code: "tr", slug: "turkish" },
  { code: "uk", slug: "ukrainian" },
  { code: "sv", slug: "swedish" },
  { code: "da", slug: "danish" },
  { code: "no", slug: "norwegian" },
  { code: "fi", slug: "finnish" },
  { code: "he", slug: "hebrew" },
  { code: "hi", slug: "hindi" },
  { code: "id", slug: "indonesian" },
  { code: "ms", slug: "malay" },
  { code: "th", slug: "thai" },
  { code: "vi", slug: "vietnamese" },
];

function intlLocale(code) {
  return (locales.find((l) => l.code === code) || locales[0]).intl;
}

function langName(code, localeCode = "en") {
  const intl = intlLocale(localeCode);
  // Chinese readers see "Chinese" as 中文 rather than a script-specific name.
  return new Intl.DisplayNames([intl], { type: "language" }).of(code);
}

const site = {
  url: "https://mailkin.app",
  name: "Mailkin",
  appStoreName: "Mailkin: Mail translator",
  version: latest ? latest[1] : "1.0",
  versionDate: latestDate ? new Date(latestDate[1]).toISOString() : new Date().toISOString(),
  minMacOS: "26",
  price: { eur: "14.99", usd: "14.99" },
  freeEmails: 30,
  languageCount: languages.length,
  appStoreId: "6835083704",
  appStoreUrl: "https://apps.apple.com/app/id6835083704?mt=12",
  appStoreLive: false, // flip when the App Store version is live: shows badges and adds the listing to structured data
  supportEmail: "macapps.support@icloud.com",
  author: "Dmitry Skorinko",
  languages,
  locales,
  featured,
  intlLocale,
  langName,
  build: new Date().toISOString(),
};

export default site;
