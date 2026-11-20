# Mailkin content and SEO strategy

Living document. Owner: Dmitry. Started 2026-11-20. Review monthly (see "Monthly routine").

## 1. Goal and positioning

**Goal.** People who get email in a language they don't read, and use Apple Mail on a Mac, should find Mailkin through Google, Bing, the App Store and AI assistants (ChatGPT, Claude, Gemini, Perplexity, Copilot), and the answer they get should name Mailkin.

**The opening.** Apple Mail has no automatic translation, only the macOS Translate command on selected text. The results for "translate email in Apple Mail" are Apple Community threads, a Mate Translate help page and Outlook docs. No product owns the topic.

**Brand frame.** "Mailkin: tools for Apple Mail on Mac." Translation is the first feature. Each future feature (AI assistant, summaries, reply drafts, productivity tools) gets its own hub page, guides and comparisons, all on the same domain and template. Until a second feature ships, titles and the homepage lead with "Mail translator", because that's what people search for.

**Canonical one-liner.** Use it word for word on the site, App Store, directories, social bios and llms.txt, so search engines and LLMs learn one consistent fact:

> Mailkin is a Mac app that automatically translates emails inside Apple Mail, on your Mac, in 25 languages.

**Three pillars**
1. *Own the problem queries.* Cover every way people phrase "translate email in Apple Mail / Mac Mail", in 11 languages and per source language.
2. *Be the quotable source.* Pages open with a direct answer and carry a consistent fact block (price, free quota, macOS 26+, 25 languages, on-device, no account) that AI answers can quote.
3. *Exist off-site.* LLMs recommend what the wider web says. That means listings, reviews, community answers and press, all using the same one-liner.

## 2. What's built (site architecture)

Eleventy site in `src/`, built to `_site/` and deployed by `.github/workflows/pages.yml`. English is at the root; the 10 other locales are under `/de/ /es/ /fr/ /it/ /ja/ /ko/ /pt-br/ /pt-pt/ /zh-hans/ /zh-hant/`.

| Section | URL | Locales | Target queries |
|---|---|---|---|
| Home | `/` | 11 | mail translator mac, Mailkin |
| Feature hub: translation | `/translate-email-apple-mail/` | 11 | translate email apple mail, auto translate mac mail |
| Languages | `/languages/` | 11 | apple mail translation languages |
| Language pages | `/translate/<lang>-email/` (de, fr, es, it, ja, zh, pt, ru, en) | 11, except a reader's own language | translate german email mac, … |
| Pricing, Support, FAQ | `/buy/ /support/ /faq/` | 11 | mailkin price, questions |
| Guides | `/guides/…` | en | how-to queries |
| Comparisons | `/compare/…` | en | X vs Y, alternatives |
| Changelog, Press kit | `/changelog/ /press/` | en | freshness, journalists, LLM facts |
| Legal | `/privacy/ /terms/ /refunds/` | en | (none) |
| Machine-readable | `robots.txt sitemap.xml llms.txt llms-full.txt feed.xml` | n/a | crawlers, AI agents |

**Where content lives**
- `src/_data/site.js` holds the facts: price, languages, locales, App Store flag. Version and date come from `appcast.xml`.
- `src/_data/i18n/<locale>.json` holds all strings for the localized pages. `en.json` is the source.
- `src/_data/samples.json` holds the sample email for each language page, and `src/_data/sampleTr/<locale>.json` holds its translation and a language note.
- Guides and comparisons are Markdown in `src/guides/` and `src/compare/`, with `title`, `h1`, `short`, `description`, `updated` and `faqItems` in the front matter.
- Structured data is produced in `eleventy.config.js` (`jsonld`). The types are SoftwareApplication with offers, Organization, WebSite, FAQPage, Article and BreadcrumbList. There are no ratings until real reviews exist.

**Rules for every new page**
- The first two sentences answer the query directly. Use question-style H2s, a table where something is compared, and 3–4 FAQs.
- Each page has one H1, a unique title under 60 characters, a description under 155, a visible "Last updated" date and at least 3 internal links (hub, language and guide pages).
- No thin programmatic pages. A language page ships only with a real sample email and a language note.
- Stay factual. Comparisons include a "when the other option is better" section and the date the competitor facts were checked.
- Run `npm run build && npm run check` before pushing. It checks titles, canonicals, JSON-LD, reciprocal hreflang, links, the sitemap and locale-key parity.

## 3. Content backlog

Priority: P1 = next month, P2 = months 2–3, P3 = later or when a feature ships. Pick the next pages from Search Console queries once data exists.

### Month 1 status (2026-11-20)
- Done: all 25 languages have landing pages in every locale (16 added); use-case pages for expats, import/export, freelancers, customer support and families (`/for/`); new guides and comparisons in `src/guides/` and `src/compare/`; [launch-kit.md](launch-kit.md) with listing, post, pitch and video copy.
- Skipped: Mailkin vs Lazie. Lazie's own site describes a selected-text translator, with nothing on translating incoming email and no clear pricing, so there's nothing reliable to compare. Revisit if that changes.
- Open: the off-site actions in the launch kit (yours), and native review of the new sample emails (written by AI, like the rest of the translations).

### Language pages (P1, done)
Add the rest of Apple's on-device languages: Korean, Arabic, Dutch, Polish, Turkish, Ukrainian, Swedish, Danish, Norwegian, Finnish, Hebrew, Hindi, Indonesian, Malay, Thai and Vietnamese. For each one:
- Add it to `site.featured`.
- Write a sample email in `samples.json`.
- Add a translation and note to every `sampleTr/<locale>.json`.
- Run `node scripts/i18n-check.mjs`.

Start with Korean, Dutch, Polish, Turkish and Arabic (high expat and trade volume).

### Guides (en first, then localize the winners)
| P | Title | Target query |
|---|---|---|
| P1 | How to download translation languages for offline use on Mac | download languages mac translate offline |
| P1 | Is Apple's on-device translation private? | apple translate privacy on device |
| P1 | Translate email on Mac without Google Translate or copy-paste | translate email without google translate |
| P1 | How to reply to an email in a language you don't speak | reply email foreign language |
| P1 | Best Apple Mail extensions (honest roundup, includes competitors) | best apple mail extensions |
| P2 | How to read emails from German authorities/landlords (expat guide; also de-language version for the reverse case) | german letter email translate expat |
| P2 | Common phrases in German / French / Japanese business emails (glossary hubs: `/email-phrases/<lang>/`) | "mit freundlichen grüßen meaning", "お世話になっております 意味" |
| P2 | Apple Mail tips for international teams | apple mail multiple languages |
| P2 | How to translate a PDF attachment on Mac | translate pdf attachment mac |
| P3 | (with AI features) How to summarize long emails in Apple Mail | summarize email apple mail |
| P3 | (with productivity features) Send later / snooze / templates in Apple Mail | apple mail send later, templates |

### Comparisons (P1 unless noted)
- Mailkin vs DeepL / Google Translate copy-paste
- Mailkin vs Outlook for Mac Translator
- Mailkin vs Lazie
- Mailkin vs Apple Intelligence Writing Tools: what they do and don't do for translation
- P3: "Mailbutler alternative", only once productivity features exist. Don't claim parity before then.

### Use-case pages (P2), `/for/…`
Expats and immigrants · import/export and sourcing (Chinese suppliers) · freelancers with international clients · customer support teams · families with schools abroad. Each one gets a scenario, two sample emails, setup steps and FAQ.

### Feature hubs (P3, per shipped feature)
For each new feature, create:
- a hub at `/<verb>-email-apple-mail/`, localized from day one with the same i18n pattern;
- 2–3 guides and 1–2 comparisons;
- a `pageKey` in each new hub, and a link from the homepage feature grid and the nav.

Rename the nav item "How it works" to "Features" once there are two hubs.

## 4. Technical SEO checklist

Done on the `seo-foundation` branch:
- [x] Canonical, hreflang (11 locales and x-default), Open Graph and Twitter tags, OG image (`assets/og.png`).
- [x] JSON-LD on every page.
- [x] robots.txt explicitly allows search and AI crawlers, plus a sitemap with hreflang alternates.
- [x] llms.txt and llms-full.txt are generated from the same data as the pages.
- [x] RSS feed (`/feed.xml`) for releases and guides.
- [x] Custom 404, an apple-touch-icon on all pages, and a localized price format on `/buy/`.
- [x] IndexNow key file in `static/` (`<key>.txt`).
- [x] `assets/buy.js` reads its strings from the button, and Paddle checkout opens in the page's language.

Your steps:
- [ ] **GitHub:** repo Settings › Pages › Source = "GitHub Actions". Do this *before* merging, because the old root HTML files are gone.
- [ ] **Cloudflare (mailkin.app zone):**
  - Check that Security › Bots › "Block AI bots" / AI Crawl Control does **not** block the crawlers allowed in robots.txt.
  - Check that the managed robots.txt option is off, so it doesn't prepend its own rules.
  - Use AI Crawl Control analytics to see which AI bots visit, since GitHub Pages has no logs.
- [ ] **Google Search Console:**
  - Add a domain property for mailkin.app (DNS TXT record via Cloudflare).
  - Submit `https://mailkin.app/sitemap.xml`.
  - Request indexing for `/`, `/translate-email-apple-mail/` and `/de/`.
- [ ] **Bing Webmaster Tools:** import from GSC and submit the sitemap. Bing feeds ChatGPT search and Copilot, so this matters for LLM visibility.
- [ ] **IndexNow:** after each deploy, ping `https://api.indexnow.org/indexnow?url=<changed url>&key=<key>`. It can be automated later in the workflow.
- [ ] **When the App Store version is live:**
  - Set `appStoreLive: true` in `src/_data/site.js`. This shows the badges and adds the listing to structured data.
  - Add `pt=<provider id>` to `site.appStoreUrl` so analytics.js can add campaign tokens.
  - Set the App Store "Marketing URL" to https://mailkin.app/ and "Support URL" to https://mailkin.app/support/.
- [ ] **Rich Results Test** on `/`, `/faq/` and one language page after the first deploy.

## 5. Off-site: be where people and LLMs look

LLM answers draw heavily on third-party pages: review sites, Reddit, "best X" lists and app directories. These steps matter as much as the site. Use the one-liner every time.

**Ready-to-paste copy**

Short (≤160 chars):
> Mailkin translates emails in other languages right inside Apple Mail on your Mac. On-device and private, 25 languages, pay once.

Medium (directories):
> Mailkin adds automatic translation to Apple Mail on the Mac. Open an email in German, Japanese, Spanish or any of 25 languages and it appears in your language, in place, with its layout intact. Translation runs on your Mac with Apple's built-in engine, so emails never leave it. No account, no subscription: 30 emails free, then a one-time purchase.

Tags: apple mail, mail extension, email translation, translator, macos, privacy, on-device, productivity.

**Listings (P1)**
- AlternativeTo: list as an alternative to Mate Translate, DeepL, Mailbutler and Spark.
- Product Hunt launch, on a Tuesday, with the demo video.
- MacUpdate, Softpedia (Mac), MacMenuBar-style lists, the `awesome-mac` GitHub list (PR under "Email").
- Indie Hackers product page, Hacker News "Show HN" (lead with the on-device angle).
- Setapp application, which may be worth it for reach.

**Communities (ongoing, always disclose you're the developer)**
- Launch posts: r/macapps and r/MacOS.
- Answer existing questions on r/applehelp, r/expats, r/germany, r/japanlife, r/iwantout and the Apple Community threads that ask how to translate Mail, where a reply is still allowed.
- Answer questions on Stack Exchange's Ask Different.

**Press (P2)**
- Pitch MacStories, 9to5Mac, MacRumors, AppleInsider, Six Colors and Michael Tsai's blog.
- Pitch local Mac press: Macwelt and iFun (de), MacGeneration and iGeneration (fr), Mac Fan and ITmedia Mac (ja), iPhoneItalia and SaggiaMente (it), Applesfera (es), MacMagazine (pt-BR).
- Angle: "Apple Mail still can't translate an email. This on-device extension fixes that."
- Attach the press kit link.

**Video (P1):** a 60-second demo on YouTube and short versions on social. Title it "How to translate emails in Apple Mail on Mac (automatically)". Embed it on the hub page and add `VideoObject` schema.

**Reviews:** add an in-app prompt after about 10 successful translations to rate on the App Store (once live) and Product Hunt. Real reviews can later back `aggregateRating`. Never invent ratings.

## 6. App Store optimization (ASO)

Keep the App Store and the site saying the same things.
- Keywords per locale should match the site's queries. Current en-US: `translate,translation,email,language,foreign,inbox,private,offline,german,spanish,french,japanese`. Consider adding "mail", "extension" and "reader" once you check rank data. Apple already indexes the words in the name and subtitle, so don't repeat them.
- Localize screenshot captions using the site's H1s and card titles.
- Promotional text can be updated without review. Use it for "New: …" announcements that match `/changelog/`.

## 7. Measurement

- **Search Console / Bing:** impressions, clicks and position by folder (`/translate/`, `/guides/`, `/de/`…). Watch for queries that rank 8–20 and write or strengthen a page for each.
- **PostHog** (`assets/analytics.js`): pageviews carry `$referrer`.
  - Create an insight that groups referring domains for chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com and bing.com.
  - Build a funnel: landing page → `download_clicked` → `dmg_download` → `purchase`, broken down by landing folder.
- **Cloudflare AI Crawl Control:** crawl volume per AI bot.
- **Monthly LLM check.** Ask each assistant (ChatGPT, Claude, Gemini, Perplexity, Copilot), logged out where possible, and record whether Mailkin is named and whether its facts are right:
  1. How do I translate emails in Apple Mail on Mac?
  2. Is there an app that automatically translates emails in Apple Mail?
  3. Best email translator for Mac
  4. How can I read German emails in English on my Mac without sending them to Google?
  5. Apple Mail extension for translation
  6. Private, offline email translation on Mac
  7. Mate Translate alternative for email
  8. How do I translate a Japanese business email on Mac?
  9. Does Apple Mail have a translate button?
  10. Best Apple Mail extensions 2026

  Keep a table in this file: date, assistant, prompt number, mentioned (y/n), facts correct (y/n), cited URL.

## 8. Localization notes

- Translations were drafted by AI translators working from the app's `Localizable.xcstrings` and the App Store copy. **Each locale should get a native read-through** before you promote it heavily, starting with de, ja, fr and es.
- Known choices to review:
  - The German site uses "Sie"; the app uses "du". Pick one. Matching the app is usually better.
  - The app's **"Activate"** button (`Mailkin/App/Direct/DirectUnlockView.swift`) is missing from `Localizable.xcstrings`, so it may show in English in every language. The site uses "Aktivieren", "Activer", "Activar", "Attiva", "Ativar", アクティベート, 활성화, 激活 and 啟用.
  - The German and French apps name the product "Mailkin Übersetzer" / "Mailkin Traducteur". The site keeps "Mailkin Translator Lifetime" for the purchase.
  - In fr, es, it and pt, language-page titles start with the language name ("Allemand : traduire…"), because the name is lowercase mid-sentence.
- Add a new string to every locale file. `node scripts/i18n-check.mjs` and the CI check fail until all locales have it.

## 9. Monthly routine (about 2 hours)

1. Review GSC/Bing queries and pick two new pages from the backlog or from rising queries.
2. Update the `updated` dates on pages you touched. Never bump dates without a real change.
3. Run the LLM check and log the results.
4. Do one off-site action: a listing, a community answer or a pitch.
5. After each release, `appcast.xml` updates the changelog, version, feed and llms.txt automatically. Update the App Store promotional text to match.
