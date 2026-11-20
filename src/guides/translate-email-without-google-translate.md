---
title: "Translate Email on Mac Without Google Translate"
h1: How to translate email on a Mac without Google Translate
short: Translate email without Google Translate
description: "Stop copying emails into Google Translate. Use the Translate command in Apple Mail, or have emails open already translated with Mailkin."
layout: article.njk
updated: 2026-11-20
faqItems:
  - ["Can I translate an email on Mac without a website?", "Yes. Select the text in Mail, Control-click it and choose Translate. macOS shows the translation in a pop-up, and with downloaded languages it works offline."]
  - ["How do I translate whole emails without copying and pasting?", "Use a Mail extension such as Mailkin. Emails in the languages you choose open already translated in Apple Mail, with their layout, links and images."]
  - ["Is it safe to paste emails into Google Translate?", "The text is sent to Google to be translated. For ordinary messages that may be fine; for contracts, invoices or personal details, a translator that runs on your Mac is the safer choice."]
---
<p class="answer">To translate email on a Mac without Google Translate, use the Translate command built into macOS: select text in Mail, Control-click and choose <strong>Translate</strong>. To skip copying and selecting altogether, add the Mailkin extension to Apple Mail so emails open already translated, on your Mac.</p>

## Why people look for an alternative

Copying an email into Google Translate works, but it has costs:

- **It's slow.** Select, copy, switch to the browser, paste, read, switch back. For every email.
- **The layout is lost.** Tables, links and images don't come along, so an invoice or a booking confirmation becomes a wall of text.
- **The content leaves your Mac.** The text goes to Google's servers. That's worth thinking about for anything personal or confidential.

Both options below avoid the website, and both can translate without the email leaving your Mac.

## Option 1: The Translate command in macOS

macOS has system-wide translation, and it works in Apple Mail:

1. Open the email in Mail.
2. Select the text you want translated. To select the whole message, click in it and press <kbd>⌘A</kbd>.
3. Control-click the selection and choose **Translate "…"**.
4. Check the languages at the top of the pop-up and change them if needed. Click **Copy Translation** to keep the text.

To make this work offline, and to keep it on your Mac even when you're online, download the languages in **System Settings › General › Language & Region › Translation Languages** and select **On-Device Mode** ([step by step](/guides/download-translation-languages-mac/)).

**Good for:** the occasional foreign email. **Limits:** it's still one selection at a time, the translation disappears when the pop-up closes, and formatting isn't kept.

## Option 2: Let Apple Mail translate emails as you open them

[Mailkin](/translate-email-apple-mail/) is a Mail extension that translates incoming emails in place. There's nothing to select or paste:

1. [Download Mailkin](/download) and choose the language you read email in.
2. Pick the languages you receive email in. macOS downloads each one once from Apple.
3. Turn on Mailkin in **Mail › Settings › Extensions** ([how to turn on Mail extensions](/guides/enable-mail-extensions-mac/)).

From then on, an email in one of those languages opens translated, with its layout, links and images intact. A banner shows which language it was in, and **Options › Show Original** brings back the original text.

A few controls help with real-world inboxes:

- Always or never translate a particular sender, or a single email.
- For each language, choose **automatic**, **only when you ask**, or **never**.
- If the language was detected wrongly, correct it.
- Very long emails (over 20,000 characters) can be translated with **Options › Translate This Email**.

Mailkin uses Apple's on-device translation, so email content never leaves your Mac, and it works with every account in Apple Mail, including Gmail and Outlook accounts. It translates the emails you receive; it doesn't translate what you write. The first 30 translated emails are free, then it's a one-time purchase of €14.99 / US$14.99 ([pricing](/buy/)).

## Compared side by side

<div class="table">

| | Google Translate website | macOS Translate command | Mailkin |
|---|---|---|---|
| Steps per email | Copy, switch, paste | Select, Control-click | None |
| Keeps layout, links, images | No | No | Yes |
| Email leaves your Mac | Yes | No, with downloaded languages and On-Device Mode | No |
| Languages | Over 100 | Apple's set | 25 |
| Cost | Free | Free | 30 free, then one-time |

</div>

Google Translate supports more languages, so it's still useful for a language Apple doesn't cover. Check the [list of Mailkin's 25 languages](/languages/) first.

## If you use Gmail in a browser

Gmail on the web has its own translate option for messages, which uses Google's translation. If you'd rather keep Gmail but read it in Apple Mail, add the account to Mail; Mailkin then translates those emails like any other. More on the different apps in [how to translate emails automatically on a Mac](/guides/translate-emails-automatically-mac/).
