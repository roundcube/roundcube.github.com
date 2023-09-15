---
layout: article
title: Security update 1.6.3 released
tags: releases updates security
---

We just published a security update to the version 1.6 of Roundcube Webmail.
It provides a fix to a recently reported XSS vulnerability:

- Fix cross-site scripting (XSS) vulnerability in handling of linkrefs in plain text messages,
  reported by Niraj Shivtarkar.

See the full changelog in the release notes in the [release notes](https://github.com/roundcube/roundcubemail/releases/tag/1.6.3) on the Github download page.

We strongly recommend to update all productive installations of Roundcube 1.6.x with this new version.
