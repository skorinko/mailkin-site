// One entry per localized language landing page: every featured language, in every site locale,
// except a page about translating the reader's own language.
import site from "./site.js";

export default site.locales.flatMap((locale) =>
  site.featured
    .filter((f) => f.code !== locale.lang)
    .map((f) => ({ ...locale, source: f, pageKey: `lang-${f.code}` }))
);
