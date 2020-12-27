---
layout: article
title: Security updates 1.4.10, 1.3.16 and 1.2.13 released
tags: releases updates security
---

We just published security updates to the stable version 1.4 and the LTS versions 1.3
and 1.2 of Roundcube Webmail. They all contain fixes to a recently reported stored XSS
vulnerability. The 1.4.10 release also contains a few general improvements from our issue tracker.

## Security fix

- Stored cross-site scripting (XSS) via HTML or plain text messages with malicious content

Credits for this finding go to [Alex Birnberg](mailto:birnbergalex@gmail.com).

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.4.10](https://github.com/roundcube/roundcubemail/releases/tag/1.4.10), [1.3.16](https://github.com/roundcube/roundcubemail/releases/tag/1.3.16) and [1.2.13](https://github.com/roundcube/roundcubemail/releases/tag/1.2.13).

We strongly recommend to update all productive installations of Roundcube
with this new versions.

