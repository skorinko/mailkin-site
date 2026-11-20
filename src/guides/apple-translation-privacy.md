---
title: "Is Apple's On-Device Translation Private?"
h1: Is Apple's on-device translation private?
short: Apple translation privacy
description: "What Apple's translation on Mac keeps on your device, what can go to Apple's servers, how On-Device Mode works, and how it compares with online tools."
layout: article.njk
updated: 2026-11-20
faqItems:
  - ["Does Apple Translate send my text to Apple?", "It can. Apple says text you translate may be sent to Apple to process the request, unless both languages are downloaded, in which case processing takes place on your device."]
  - ["How do I make sure translation stays on my Mac?", "Download the languages in System Settings › General › Language & Region › Translation Languages and select On-Device Mode. Apple notes that Siri and Safari always translate online."]
  - ["Does Mailkin send my emails anywhere?", "No. Mailkin translates with Apple's on-device translation, so email content never leaves your Mac, and there's no account."]
---
<p class="answer">Apple's translation is private when it runs on your device: once both languages are downloaded, Apple says processing takes place on your Mac, and On-Device Mode keeps it there even when you're online. Without downloaded languages, text you translate may be sent to Apple's servers, tied to a random identifier rather than your Apple Account.</p>

## What runs on your Mac and what can go to Apple

Apple describes this in its **Translation & Privacy** statement and in the Mac User Guide for macOS Tahoe 26:

<div class="table">

| Situation | Where translation happens |
|---|---|
| Both languages downloaded | On your device |
| On-Device Mode selected | On your Mac, even when connected to the internet |
| Languages not downloaded, online | May be sent to Apple's servers |
| Safari web page translation | Online (Apple: Safari always translates online) |
| Siri | Online (Apple: Siri always translates online) |

</div>

When text does go to Apple, Apple says:

- Requests are associated with a **random, rotating identifier**, not your Apple Account or email address.
- Text you send for translation is **not stored by Apple unless you opt in** to Improve Siri & Dictation or Improve Siri & Apple Intelligence.

That's a reasonable policy, but "may be sent" is still not the same as "never leaves your Mac". If you translate contracts, medical letters or anything personal, it's worth making sure translation stays local.

## Keep translation on your Mac

1. Open **System Settings › General › Language & Region**.
2. Click **Translation Languages**.
3. Click **Download** next to every language you translate to or from.
4. Select **On-Device Mode**, then click **Done**.

Apple's guide notes that offline translations may be less accurate than those processed on its servers. That's the trade-off for keeping text local. There's a step-by-step version in [how to download translation languages](/guides/download-translation-languages-mac/).

## What about apps that use Apple's translation?

Apps can use Apple's **Translation framework** to translate on the device with the same downloaded languages. What the app itself does with your text is up to the app, so check its privacy policy.

[Mailkin](/translate-email-apple-mail/) is one such app. It's a Mail extension that translates incoming email in Apple Mail using Apple's on-device translation:

- **Email content never leaves your Mac.** Translation happens on the device, and Mailkin doesn't send the text, subject or sender of your emails anywhere.
- **No account.** There's nothing to sign up for.
- **Your mailbox isn't changed.** Mailkin shows the translation when you open an email; the stored message stays as it was. Signed emails are left untouched.

The language models themselves are downloaded once from Apple, which is the only translation-related download involved.

## How this compares with online translators

Web translators and browser extensions work differently: the text is sent to the provider's servers to be translated. That's how services such as Google Translate, DeepL, Microsoft Translator or a chatbot work, and many of them translate well. Their privacy depends on each provider's terms, which can cover storing text or using it to improve the service.

<div class="table">

| | Apple translation, languages downloaded | Online translator |
|---|---|---|
| Text leaves your Mac | No | Yes |
| Works offline | Yes | No |
| Account needed | No | Sometimes |
| Translation quality | Good; Apple notes it may be less accurate than online | Often strong, varies by service |
| Languages | Apple's set | Usually more |

</div>

For a closer look at Apple's built-in option next to Mailkin, see [Mailkin vs macOS Translate](/compare/mailkin-vs-macos-translate/). If you want to stop pasting emails into websites altogether, read [how to translate email without Google Translate](/guides/translate-email-without-google-translate/). More questions about Mailkin's privacy are answered in the [FAQ](/faq/).
