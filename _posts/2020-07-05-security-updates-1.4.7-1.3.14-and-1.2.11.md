---
layout: article
title: Security updates 1.4.7, 1.3.14 and 1.2.11 released
tags: releases updates security
---

We just published security updates to the stable version 1.4 and the LTS versions 1.3
and 1.2 of Roundcube Webmail. They all contain a recently reported cross-site scripting (XSS)
vulnerability. The 1.4.7 release also contains a number of general improvements from our issue tracker.

## Security fix

Prevent cross-site scripting (XSS) via HTML messages with malicious svg/namespace (`CVE-2020-15562`).
Credits for this finding go to [SSD Secure Disclosure](https://ssd-disclosure.com/).

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.4.7](https://github.com/roundcube/roundcubemail/releases/tag/1.4.7), [1.3.14](https://github.com/roundcube/roundcubemail/releases/tag/1.3.14) and [1.2.11](https://github.com/roundcube/roundcubemail/releases/tag/1.2.11).

We strongly recommend to update all productive installations of Roundcube
with this new versions.

