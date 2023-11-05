---
layout: article
title: Security updates 1.6.5 and 1.5.6 released
tags: releases updates security
---

We just published security updates to the 1.6 and 1.5 LTS versions of Roundcube Webmail.
They all contain a fix for recently reported security vulnerability.

## Security fix

Fix cross-site scripting (XSS) vulnerability in setting Content-Type/Content-Disposition for attachment preview/download.
Credits for this finding go to Rene Rehme (rehme.infosec).

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.6.5](https://github.com/roundcube/roundcubemail/releases/tag/1.6.5) and [1.5.6](https://github.com/roundcube/roundcubemail/releases/tag/1.5.6).

We strongly recommend to update all productive installations of Roundcube 1.6.x and 1.5.x with this new versions.
