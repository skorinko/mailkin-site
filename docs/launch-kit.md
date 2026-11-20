# Mailkin launch kit

Ready-to-paste copy for listings, launch posts, pitches and video. Part of month 1 in
[content-strategy.md](content-strategy.md). Keep the facts identical everywhere; if a fact
changes (price, languages, App Store availability), update `src/_data/site.js` and this file
together.

## Before you launch anything

- [ ] **People can pay.** Paddle live checkout is still off (`assets/buy.js`, `LIVE` is empty) and the App Store version is "coming soon". Launch posts send a burst of visitors once; make sure at least one way to buy works first, otherwise they'll use 30 free emails and leave.
- [ ] Search Console and Bing Webmaster Tools set up, sitemap submitted.
- [ ] 60-second demo video uploaded (see below), so every listing can link it.
- [ ] Screenshots ready: `assets/translated.png`, `assets/options.png`, plus one of the setup and one of Settings.
- [ ] Decide on the launch week; space posts out (Product Hunt one day, Reddit and HN on other days) so you can answer every comment.

**Always:** say you're the developer, answer questions quickly and plainly, never ask friends to upvote (Product Hunt, HN and Reddit penalize it), and link to `https://mailkin.app/` with a `utm_source` so PostHog shows where people came from (e.g. `https://mailkin.app/?utm_source=producthunt`).

## Core facts (copy from here)

- **One-liner:** Mailkin is a Mac app that automatically translates emails inside Apple Mail, on your Mac, in 25 languages.
- **Tagline (≤60 chars):** Read every email in your language, right in Apple Mail
- **Price:** 30 translated emails free, then €14.99 / US$14.99 once. No subscription.
- **Requirements:** macOS 26 or later, Apple Mail.
- **Privacy:** Apple's on-device translation; emails never leave the Mac; no account.
- **Links:** https://mailkin.app/ · https://mailkin.app/press/ (fact sheet, screenshots, icon)

## Short and medium descriptions

**Short (≤160 chars):**
> Mailkin translates emails in other languages right inside Apple Mail on your Mac. On-device and private, 25 languages, pay once.

**Medium (directories, ~80 words):**
> Mailkin adds automatic translation to Apple Mail on the Mac. Open an email in German, Japanese, Spanish or any of 25 languages and it appears in your language, in place, with its layout intact. Translation runs on your Mac with Apple's built-in engine, so emails never leave it. A banner shows the original language and Show Original brings it back. Always or never translate specific senders. No account, no subscription: 30 emails free, then a one-time purchase.

**Tags / categories:** Apple Mail, Mail extension, email, translation, translator, macOS, privacy, productivity, on-device AI.

## Product Hunt

- **Name:** Mailkin
- **Tagline:** Read every email in your language, right in Apple Mail
- **Topics:** Mac, Email, Productivity, Privacy
- **Description (≤260 chars):**
  > Apple Mail can't translate a whole email. Mailkin can: emails in 25 languages open already translated, in place, with their layout. It runs on your Mac with Apple's on-device translation, so nothing is sent anywhere. 30 emails free, then pay once.
- **Gallery:** demo video first, then translated email, options popup, languages, setup.
- **Maker's first comment:**
  > Hi Product Hunt! I'm Dmitry, the developer of Mailkin.
  >
  > [Your real reason for building it, in 1–2 sentences: which emails you kept copying into a translator, and how often.] Apple Mail can translate a selected sentence, but not the email.
  >
  > Mailkin is a Mail extension that does it for you: open an email in one of the languages you pick, and Mail shows it translated, keeping links, tables and images. It uses Apple's on-device translation, so your email never leaves your Mac, and there's no account.
  >
  > What it doesn't do yet: translate what you write. That's next on my list, and I'd love to hear what else you'd want in Mail.
  >
  > The first 30 translated emails are free, then it's a one-time purchase. Happy to answer anything!

  *(Fill in the bracketed part with your own story; a real reason beats a polished one.)*

## Hacker News (Show HN)

- **Title:** Show HN: Mailkin – on-device translation for Apple Mail (MailKit extension)
- **URL:** https://mailkin.app/
- **First comment:**
  > I built a Mail extension that translates incoming email in place in Apple Mail on macOS 26.
  >
  > How it works: it's a MailKit message security handler, which lets an extension rewrite the message Mail displays without touching the stored message. Language detection uses fastText's lid.176 model with NLLanguageRecognizer as a fallback; translation uses Apple's Translation framework with installed languages only, so nothing leaves the machine. It keeps the HTML, skips quoted replies and signed messages, and caches results.
  >
  > Limits: Apple's 25 on-device languages, incoming mail only, very long newsletters need a click.
  >
  > Pricing is 30 free translations then a one-time €14.99. Happy to go into MailKit's quirks, which are many.

## Reddit

**r/macapps** (check the sub's self-promotion rules and flair first):
- **Title:** I made Mailkin: emails in other languages open translated in Apple Mail, on-device
- **Body:**
  > Developer here. Apple Mail lets you translate a selected sentence, but not a whole email, so I built a Mail extension that does it automatically.
  >
  > - Emails in the languages you choose open already translated, in place, layout intact
  > - Apple's on-device translation: nothing is sent anywhere, no account
  > - 25 languages; Show Original is one click; always/never translate per sender
  > - Works with every account in Mail (iCloud, Gmail, Outlook, IMAP)
  > - macOS 26+. 30 emails free, then €14.99 once, no subscription
  >
  > It doesn't translate what you write yet. Feedback very welcome: https://mailkin.app/?utm_source=reddit

**Answering existing threads** (r/applehelp, r/MacOS, r/expats, r/germany, r/japanlife, Apple Community) — only where someone asks how to translate email on a Mac; answer the question fully first:
> On a Mac, Mail can translate selected text: select it, Control-click, choose Translate. It's one selection at a time in a pop-up. If you want whole emails translated automatically, there are Mail extensions for that. Disclosure: I make one, Mailkin (mailkin.app), which does it on-device. Outlook for Mac also has a built-in translator if you use Outlook.

## AlternativeTo

- List as **alternative to:** Mate Translate, DeepL, Google Translate, Mailbutler, Microsoft Translator.
- **License:** Commercial, free trial. **Platforms:** Mac. **Tags:** email, translation, apple-mail, privacy, offline.
- Description: use the medium description.

## Mac directories

- **MacUpdate / Softpedia Mac / MacMenuBar-style lists:** medium description, category "Email" or "Productivity", link to `https://mailkin.app/download`.
- **awesome-mac** (GitHub, section "Email"), one line in their format:
  > [Mailkin](https://mailkin.app/) - Automatically translates emails in Apple Mail, on-device. ![Freeware][Freeware Icon] *(use their "commercial with free trial" marker if they have one)*
- **Setapp:** apply as a developer if you want subscription-bundle reach; it requires a Setapp build.

## Press pitch

Send one at a time, personalized, to the writer who covers Mac apps or Mail. Attach nothing; link the press kit.

**Subject:** Apple Mail still can't translate an email. This on-device extension fixes it

> Hi <name>,
>
> I'm an independent Mac developer. Apple Mail can translate a selected sentence, but not a whole email, so I built Mailkin, a Mail extension that does it automatically: open an email in German, Japanese or any of 25 languages and Mail shows it translated, in place, with its layout.
>
> It uses Apple's on-device Translation framework, so email never leaves the Mac and there's no account. 30 emails free, then €14.99 once.
>
> Press kit with screenshots and facts: https://mailkin.app/press/
> Happy to send a license key or answer questions.
>
> Thanks,
> Dmitry

**German version (Macwelt, iFun, Mac & i):**

> Betreff: Apple Mail übersetzt keine E-Mails. Diese Erweiterung schon, direkt auf dem Mac
>
> Hallo <Name>,
>
> ich bin unabhängiger Mac-Entwickler. Apple Mail kann markierten Text übersetzen, aber keine ganze E-Mail. Mailkin ist eine Mail-Erweiterung, die das automatisch erledigt: E-Mails in 25 Sprachen erscheinen beim Öffnen direkt übersetzt, mit Layout.
>
> Übersetzt wird mit Apples On-Device-Übersetzung, die E-Mails verlassen den Mac also nie, und es gibt kein Konto. 30 E-Mails gratis, danach einmalig 14,99 €.
>
> Pressematerial: https://mailkin.app/press/ – gern schicke ich einen Lizenzschlüssel.
>
> Viele Grüße
> Dmitry

## Demo video (60 seconds)

- **YouTube title:** How to translate emails in Apple Mail on Mac (automatically)
- **Description:** first two lines = the medium description + `https://mailkin.app/?utm_source=youtube`; then chapters.
- **Script:**
  1. *(0–5 s)* A German email open in Mail, untranslated. "Apple Mail can't translate this email."
  2. *(5–20 s)* Mailkin setup: choose English, pick German, tick Mailkin in Mail › Settings › Extensions.
  3. *(20–35 s)* Open the same email: it's in English, banner "Translated from German". Scroll: links and table intact.
  4. *(35–45 s)* Options › Show Original, then "Always translate this sender".
  5. *(45–55 s)* A Japanese email opens translated. "25 languages, translated on your Mac. Nothing is sent anywhere."
  6. *(55–60 s)* mailkin.app — 30 emails free.
- After uploading, embed it on `/translate-email-apple-mail/` and add `VideoObject` structured data.

## Social posts

- **Mastodon / Bluesky / X:**
  > Apple Mail can translate a sentence, but not an email. So I built Mailkin: emails in 25 languages open already translated, right in Mail, on-device. 30 emails free, then pay once. https://mailkin.app
- **LinkedIn:**
  > If you work with suppliers, clients or colleagues abroad, you know the copy-paste-into-a-translator routine. I built Mailkin to end it for Apple Mail users: emails in other languages open translated in place, on your Mac, with nothing sent to a server. Would love feedback from anyone who reads email in more than one language. https://mailkin.app/?utm_source=linkedin
