// Mailkin website. Source in src/, output in _site/ (deployed to GitHub Pages by .github/workflows/pages.yml).
// Files served as they are: assets/, appcast.xml (Sparkle update feed, written by mailkin/scripts/release-direct.sh),
// CNAME, and static/ (copied to the site root).
import site from "./src/_data/site.js";

const strip = (html) => String(html).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

// Structured data for a page, as one JSON-LD @graph. `schema` lists the extra parts a page wants:
// "app" (SoftwareApplication with offers), "home" (WebSite + Organization), "article".
// FAQPage comes from `faq` ([question, answer] pairs), BreadcrumbList from `crumbs`.
function jsonld({ locale, t, title, description, url, schema = [], faq, crumbs, updated }) {
  const abs = (u) => (u.startsWith("http") ? u : site.url + u);
  const lang = locale.hreflang;
  const org = { "@type": "Organization", "@id": `${site.url}/#org`, name: "Mailkin", url: `${site.url}/`, logo: `${site.url}/assets/icon.png`, email: site.supportEmail, founder: { "@type": "Person", name: site.author } };
  const app = {
    "@type": "SoftwareApplication",
    "@id": `${site.url}/#app`,
    name: "Mailkin",
    alternateName: site.appStoreName,
    description: t.oneLiner,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Email translation",
    operatingSystem: `macOS ${site.minMacOS} or later`,
    softwareVersion: site.version,
    url: `${site.url}/`,
    downloadUrl: `${site.url}/download`,
    image: `${site.url}/assets/icon.png`,
    screenshot: `${site.url}/assets/translated.png`,
    inLanguage: site.locales.map((l) => l.hreflang),
    featureList: ["Automatic translation of incoming email in Apple Mail", "On-device translation with Apple's Translation framework", `${site.languageCount} languages`, "Show Original", "Per-sender and per-language rules", "No account"],
    offers: [
      { "@type": "Offer", name: "Free download (30 translated emails)", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Mailkin Translator Lifetime", price: site.price.usd, priceCurrency: "USD", url: `${site.url}/buy/` },
      { "@type": "Offer", name: "Mailkin Translator Lifetime", price: site.price.eur, priceCurrency: "EUR", url: `${site.url}/buy/` },
    ],
    publisher: { "@id": `${site.url}/#org` },
    ...(site.appStoreLive ? { sameAs: [site.appStoreUrl] } : {}),
  };
  const graph = [];
  const pageNode = {
    "@type": schema.includes("article") ? "Article" : faq && schema.includes("faq") ? "FAQPage" : "WebPage",
    "@id": `${abs(url)}#page`,
    url: abs(url),
    name: title,
    ...(schema.includes("article") ? { headline: title, author: { "@type": "Person", name: site.author }, publisher: { "@id": `${site.url}/#org` }, image: `${site.url}/assets/og.png` } : {}),
    description,
    inLanguage: lang,
    isPartOf: { "@id": `${site.url}/#website` },
    ...(updated ? { dateModified: new Date(updated).toISOString().slice(0, 10) } : {}),
    ...(schema.includes("app") || schema.includes("home") ? { about: { "@id": `${site.url}/#app` } } : {}),
  };
  if (faq && schema.includes("faq")) {
    pageNode.mainEntity = faq.map(([q, a]) => ({ "@type": "Question", name: strip(q), acceptedAnswer: { "@type": "Answer", text: strip(a) } }));
  }
  graph.push(pageNode);
  graph.push({ "@type": "WebSite", "@id": `${site.url}/#website`, url: `${site.url}/`, name: "Mailkin", publisher: { "@id": `${site.url}/#org` }, inLanguage: site.locales.map((l) => l.hreflang) });
  if (schema.includes("home") || schema.includes("app")) graph.push(org, app);
  if (crumbs && crumbs.length) {
    const items = [{ name: t.breadcrumbHome, url: `${locale.prefix}/` }, ...crumbs.map((c) => ({ name: c.name, url: c.url || url }))];
    graph.push({ "@type": "BreadcrumbList", itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.url) })) });
  }
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

export default function (cfg) {
  cfg.addPassthroughCopy("assets");
  cfg.addPassthroughCopy("appcast.xml");
  cfg.addPassthroughCopy("CNAME");
  cfg.addPassthroughCopy({ static: "/" });

  // "{lang} emails" style placeholders. {Lang} capitalises the first letter for the page's locale.
  cfg.addFilter("fmt", function (str, vars = {}) {
    if (typeof str !== "string") return str;
    return str.replace(/\{(\w+)\}/g, (m, key) => {
      const lower = key.charAt(0).toLowerCase() + key.slice(1);
      if (key !== lower && vars[lower] !== undefined) {
        const v = String(vars[lower]);
        return v.charAt(0).toLocaleUpperCase(vars._locale || "en") + v.slice(1);
      }
      return vars[key] !== undefined ? vars[key] : m;
    });
  });

  // Language name in a locale, from ICU (no hand-written name tables).
  cfg.addFilter("langName", (code, localeCode) => site.langName(code, localeCode));

  // Every page sharing a pageKey is a translation of the same page: used for hreflang and the language switcher.
  cfg.addFilter("alternates", (all, key) => {
    if (!key) return [];
    const order = site.locales.map((l) => l.code);
    return all
      .filter((p) => p.data.locale && (p.data.locale.pageKey || p.data.pageKey) === key)
      .map((p) => ({ url: p.url, hreflang: p.data.locale.hreflang, code: p.data.locale.code, name: p.data.locale.name }))
      .sort((a, b) => order.indexOf(a.code) - order.indexOf(b.code));
  });

  cfg.addFilter("localDate", (date, localeCode = "en") =>
    new Intl.DateTimeFormat(site.intlLocale(localeCode), { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(date)));
  cfg.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));
  cfg.addFilter("rfc822", (date) => new Date(date).toUTCString());
  cfg.addFilter("absolute", (url) => (url.startsWith("http") ? url : site.url + url));
  cfg.addFilter("xmlEscape", (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"));
  cfg.addFilter("plainText", (html) => String(html).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());

  cfg.addFilter("jsonld", jsonld);
  // US dollars always say "US$" so they can't be read as another dollar.
  cfg.addFilter("money", (amount, currency, intl = "en") =>
    new Intl.NumberFormat(intl, { style: "currency", currency, currencyDisplay: currency === "USD" ? "code" : "symbol" })
      .format(Number(amount)).replace("USD", "US$").replace(/US\$\s/, "US$"));
  cfg.addFilter("cap", (s, intl = "en") => String(s).charAt(0).toLocaleUpperCase(intl) + String(s).slice(1));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
