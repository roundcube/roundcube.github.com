---
layout: article
title: Security updates 1.5.5 and 1.4.15 released
tags: releases updates security
---

We just published security updates to the LTS versions 1.4 and 1.5 of Roundcube Webmail.
They all contain a fix for recently reported security vulnerability.

## Security fix

Fix cross-site scripting (XSS) vulnerability in handling of SVG in HTML messages (#9168).
Credits for this finding go to separately by Matthieu Faou (ESET) and Denys Klymenko.

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.5.5](https://github.com/roundcube/roundcubemail/releases/tag/1.5.5) and [1.4.15](https://github.com/roundcube/roundcubemail/releases/tag/1.4.15).

We strongly recommend to update all productive installations of Roundcube 1.4.x and 1.5.x with this new versions.
