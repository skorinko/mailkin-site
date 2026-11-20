---
title: "How to Download Translation Languages on Mac for Offline Use"
h1: How to download translation languages on a Mac for offline use
short: Download translation languages
description: "Download languages in System Settings › General › Language & Region › Translation Languages so your Mac translates offline, and turn on On-Device Mode."
layout: article.njk
updated: 2026-11-20
faqItems:
  - ["Where are translation languages on a Mac?", "Open System Settings, click General, then Language & Region, and click Translation Languages. Each language has a Download button."]
  - ["Does my Mac translate offline once a language is downloaded?", "Yes. Translation between two downloaded languages can run on your Mac without an internet connection. Turn on On-Device Mode to keep it on your Mac even when you're online."]
  - ["Does Mailkin need these downloads?", "Yes. Mailkin uses Apple's on-device translation, so each language you choose in Mailkin is downloaded once from Apple. Mailkin starts the download for you during setup."]
---
<p class="answer">To download translation languages on a Mac, open <strong>System Settings › General › Language &amp; Region</strong>, click <strong>Translation Languages</strong> and click <strong>Download</strong> next to each language. Once the languages you translate between are downloaded, your Mac can translate offline, and On-Device Mode keeps translation on your Mac even when you're online.</p>

## Download a language

These steps are from Apple's Mac User Guide for macOS Tahoe 26:

1. Choose **Apple menu › System Settings**.
2. Click **General** in the sidebar, then click **Language & Region** on the right. You may need to scroll down.
3. Click **Translation Languages**.
4. Click **Download** next to each language you want to translate to or from.
5. Optionally, select **On-Device Mode** (see below).
6. Click **Done**.

Download both sides of a pair. To translate German email into English offline, you need German and English. Each language is a separate download, so expect it to take a little time and some disk space; sizes differ between languages.

## What On-Device Mode does

By default, macOS may use Apple's servers to translate when you're connected to the internet. Apple's guide says that to process translations on your Mac even when you're online, you select **On-Device Mode** in the same Translation Languages window.

Apple notes the trade-off honestly: offline translations may be less accurate than translations processed on Apple's servers. For everyday email, the difference is usually small, but it's worth knowing if you're translating something where every word matters.

Two exceptions in Apple's own words: Siri and Safari always process translations online, so downloading languages doesn't change how translating a web page in Safari works.

## Remove a language you no longer need

Go back to **System Settings › General › Language & Region › Translation Languages** and click **Remove** next to the language. This frees the space it used. You can download it again at any time.

## Which features use the downloaded languages

<div class="table">

| Feature | Uses downloaded languages | Notes |
|---|---|---|
| Translate command (Control-click selected text) | Yes | Works offline with both languages downloaded |
| Safari web page translation | No | Apple says Safari always translates online |
| Siri | No | Apple says Siri always translates online |
| Mailkin in Apple Mail | Yes | Always translates on your Mac |

</div>

## How Mailkin uses these languages

[Mailkin](/translate-email-apple-mail/) translates incoming email in Apple Mail with Apple's on-device Translation framework, the same system translation described above. That's why it needs the languages on your Mac:

1. When you set up Mailkin, you choose the language you read email in.
2. You pick the languages you receive email in.
3. macOS downloads each of those languages once from Apple. Mailkin asks for the download, so you don't need to visit System Settings yourself.

After that, emails in those languages open translated in Mail, and the email content never leaves your Mac. If you later get email in a new language, add it in Mailkin and macOS downloads it then. The **Check Setup** button in the app confirms the languages and the Mail extension are ready.

Mailkin supports 25 languages; see the [full list](/languages/). If you'd like a walkthrough for one language, there are guides such as [translating German email](/translate/german-email/) and [translating Japanese email](/translate/japanese-email/).

## Troubleshooting

- **No Download button?** The language may already be downloaded; it then shows **Remove** instead.
- **Download seems stuck?** Check your internet connection and free disk space, then try again.
- **A language isn't listed?** Apple's translation covers a fixed set of languages. Only languages Apple offers can be downloaded.

For the bigger picture on what stays on your Mac, read [whether Apple's on-device translation is private](/guides/apple-translation-privacy/).
