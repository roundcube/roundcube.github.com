---
layout: article
title: Security updates 1.6.8 and 1.5.8 released
tags: releases updates security
---

We just published security updates to the 1.6 and 1.5 LTS versions of Roundcube Webmail.
They both contain fixes for recently reported security vulnerabilities.

## Security fixes

- Fix XSS vulnerability in post-processing of sanitized HTML content [CVE-2024-42009]
- Fix XSS vulnerability in serving of attachments other than HTML or SVG [CVE-2024-42008]
- Fix information leak (access to remote content) via insufficient CSS filtering [CVE-2024-42010]

Credits to Oskar Zeino-Mahmalat ([Sonar](https://www.sonarsource.com/)) for all these findings and thanks for providing a very detailed report in a private communication.

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.6.8](https://github.com/roundcube/roundcubemail/releases/tag/1.6.8) and [1.5.8](https://github.com/roundcube/roundcubemail/releases/tag/1.5.8).

We strongly recommend to update all productive installations of Roundcube 1.6.x and 1.5.x with this new versions.
