---
title: "How to Turn On Mail Extensions on Mac (macOS 26)"
h1: How to install and turn on Mail extensions on a Mac
short: Turn on Mail extensions
description: "Mail extensions add features to Apple Mail on the Mac. Here's how to install one, turn it on in Mail › Settings › Extensions, and fix it when it doesn't appear."
layout: article.njk
updated: 2026-11-20
faqItems:
  - ["Where are Mail extensions on a Mac?", "In Mail, choose Mail › Settings (or press ⌘,) and click Extensions. Every installed Mail extension is listed there with a checkbox."]
  - ["Why doesn't my Mail extension show up?", "Make sure the app that contains it is in your Applications folder and has been opened once, then quit and reopen Mail."]
  - ["Are Mail extensions safe?", "Mail extensions use Apple's MailKit framework, which limits what they can do and asks for your permission. They can't read your other apps or change emails without permission."]
---
<p class="answer">To turn on a Mail extension on a Mac, install the app that contains it, open the app once, then in Mail choose <strong>Mail › Settings › Extensions</strong> and tick the extension. Mail extensions are how apps such as Mailkin add features to Apple Mail.</p>

## What a Mail extension is

Since macOS 12, apps can add features to Mail through **MailKit**, Apple's framework for Mail extensions. An extension lives inside a normal app: you install the app, and Mail lists its extension in Settings. Extensions can, for example, change how a message is displayed, add actions to the compose window, or block trackers. They only get the access you allow.

## Install and turn on an extension

1. **Install the app.** Download it from the Mac App Store or from the developer's website. For a downloaded app, open the disk image and drag the app to **Applications**.
2. **Open the app once.** This lets macOS register its Mail extension. Many apps, including [Mailkin](/translate-email-apple-mail/), walk you through setup.
3. **Open Mail's settings.** In Mail, choose **Mail › Settings…** or press <kbd>⌘,</kbd>.
4. **Click Extensions** and tick the checkbox next to the extension.
5. **Review what it can access.** Select the extension to see its permissions, such as reading messages to display them.

The extension starts working right away. With Mailkin, open an email in another language: it appears translated, with a banner at the top.

## The extension doesn't appear

- **Check where the app is.** It needs to be in **Applications**, not still in the disk image or Downloads.
- **Open the app, then quit and reopen Mail.** Mail looks for extensions when it starts.
- **Check your macOS version.** Each extension has a minimum version; Mailkin needs macOS 26 or later.
- **Look in System Settings.** **System Settings › General › Login Items & Extensions** lists extensions by type; make sure the Mail extension isn't switched off there.
- **Use the app's own check.** Mailkin has a **Check Setup** button that tests each step and can open a test email.

## Turn an extension off or remove it

Untick it in **Mail › Settings › Extensions** to turn it off. To remove it completely, also move the app to the Trash. Extensions like Mailkin never change the emails in your mailbox, so nothing needs cleaning up.
