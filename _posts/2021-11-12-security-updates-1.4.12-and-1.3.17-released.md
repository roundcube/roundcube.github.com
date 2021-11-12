---
layout: article
title: Security updates 1.4.12 and 1.3.17 released
tags: releases updates security
---

We just published security updates to the LTS versions 1.4 and 1.3 of Roundcube Webmail.
They both contain fixes to two recently discovered SQL injection and XSS vulnerabilities.
The 1.4.12 release also contains a few general improvements from our issue tracker.

## Security fixes

- Fix XSS issue in handling attachment filename extension in mimetype mismatch warning
- Fix possible SQL injection via some session variables

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.4.12](https://github.com/roundcube/roundcubemail/releases/tag/1.4.12) and [1.3.17](https://github.com/roundcube/roundcubemail/releases/tag/1.3.17).

We strongly recommend to update all productive installations of Roundcube
with these new versions.

