---
layout: article
title: Security updates 1.6.16 and 1.7.1 released
tags: releases updates security
---

We just published security updates to the 1.6 LTS and 1.7 versions of Roundcube Webmail.
They both contain fixes for recently reported security vulnerabilities.

## Security fixes

- Fix stored XSS/HTML/CSS injection in subject field of the draft restore dialog, reported by zazy
- Fix CSS injection bypass in HTML sanitizer via SVG `<animate attributeName="style">`, reported by wooseokdotkim
- Fix pre-auth SQL injection in virtuser_query plugin via preg_replace backslash escape bypass, reported by skull
- Fix SSRF bypass via specific local address URLs
- Fix local/private URL fetch bypass when remote resources were not allowed, reported by Orange Cyberdefense Vulnerability Disclosure Team
- Fix bypass of remote image blocking via CSS var(), reported by Geame
- Fix pre-auth arbitrary file delete via redis/memcache session poisoning bypass, reported by valent1
- Fix code injection vulnerability - remove support for code evaluation in LDAP `autovalues` option, reported by Glendaenri

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.6.16](https://github.com/roundcube/roundcubemail/releases/tag/1.6.16) and [1.7.1](https://github.com/roundcube/roundcubemail/releases/tag/1.7.1).

We strongly recommend to update all productive installations of Roundcube 1.6.x and 1.7.x with this new versions.
