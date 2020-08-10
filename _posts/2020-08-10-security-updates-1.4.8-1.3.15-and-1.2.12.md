---
layout: article
title: Security updates 1.4.8, 1.3.15 and 1.2.12 released
tags: releases updates security
---

We just published security updates to the stable version 1.4 and the LTS versions 1.3
and 1.2 of Roundcube Webmail. They all contain two recently reported cross-site scripting (XSS)
vulnerabilities. The 1.4.8 release also contains a number of general improvements from our issue tracker.

## Security fixes

- Fix cross-site scripting (XSS) via HTML messages with malicious svg content (`CVE-2020-16145`)
- Fix cross-site scripting (XSS) via HTML messages with malicious math content

Credits for these two findings go to Łukasz Pilorz from [Pentesters](https://www.pentesters.pl).

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.4.8](https://github.com/roundcube/roundcubemail/releases/tag/1.4.8), [1.3.15](https://github.com/roundcube/roundcubemail/releases/tag/1.3.15) and [1.2.12](https://github.com/roundcube/roundcubemail/releases/tag/1.2.12).

We strongly recommend to update all productive installations of Roundcube
with this new versions.

