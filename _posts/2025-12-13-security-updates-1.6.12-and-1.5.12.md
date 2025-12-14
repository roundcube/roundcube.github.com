---
layout: article
title: Security updates 1.6.12 and 1.5.12 released
tags: releases updates security
---

We just published security updates to the 1.6 and 1.5 LTS versions of Roundcube Webmail.
They both contain fixes for recently reported two security vulnerabilities.

## Security fixes

- Fix Cross-Site-Scripting vulnerability via SVG's animate tag reported by Valentin T., CrowdStrike.
- Fix Information Disclosure vulnerability in the HTML style sanitizer reported by somerandomdev.

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.6.12](https://github.com/roundcube/roundcubemail/releases/tag/1.6.12) and [1.5.12](https://github.com/roundcube/roundcubemail/releases/tag/1.5.12).

We strongly recommend to update all productive installations of Roundcube 1.6.x and 1.5.x with this new versions.
