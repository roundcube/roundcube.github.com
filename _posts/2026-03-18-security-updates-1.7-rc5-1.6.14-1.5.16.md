---
layout: article
title: Security updates 1.7-rc5, 1.6.14 and 1.5.13 released
tags: releases updates security
---

We just published security updates to the 1.6 and 1.5 LTS versions of Roundcube Webmail, as well as a release candidate for coming 1.7.
They contain fixes for recently reported set of security vulnerabilities.

## Security fixes

- Fix pre-auth arbitrary file write via unsafe deserialization in redis/memcache session handler, reported by y0us.
- Fix bug where a password could get changed without providing the old password, reported by flydragon777.
- Fix IMAP Injection + CSRF bypass in mail search, reported by Martila Security Research Team.
- Fix remote image blocking bypass via various SVG animate attributes, reported by nullcathedral.
- Fix remote image blocking bypass via a crafted body background attribute, reported by nullcathedral.
- Fix fixed position mitigation bypass via use of !important, reported by nullcathedral.
- Fix XSS issue in a HTML attachment preview, reported by aikido_security.
- Fix SSRF + Information Disclosure via stylesheet links to a local network hosts, reported by Georgios Tsimpidas (aka Frey), Security Researcher at https://i0.rs/.

See the full changelogs in the release notes on the Github download pages for the updated versions

- [1.7-rc5](https://github.com/roundcube/roundcubemail/releases/tag/1.7-rc5)
- [1.6.14](https://github.com/roundcube/roundcubemail/releases/tag/1.6.14)
- [1.5.14](https://github.com/roundcube/roundcubemail/releases/tag/1.5.14).

We strongly recommend to update your productive installations of Roundcube with this new versions.
