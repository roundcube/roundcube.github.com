---
layout: article
title: Security updates 1.6.17 and 1.7.2 released
tags: releases updates security
---

We just published security updates to the 1.6 LTS and 1.7 versions of Roundcube Webmail.
They both contain fixes for recently reported security vulnerabilities.

## Security fixes

- Fix an infinite loop in TNEF (winmail.dat) decoder (#10193), reported by stafra.
- Fix various vulnerabilities in the password plugin using session-injected username, reported by Glendaenri and peppersghost.
- Fix stored XSS via unescaped attachment MIME type on the attachment-validation warning page [CVE-2026-54432], reported by Bohdan Kurinnoy, Samsung R&D Institute Ukraine (SRUKR).
- Fix SSRF bypass via specific local address URLs - two new cases, reported by Leenear.
- Fix zero-click stored XSS in plain-text rendering [CVE-2026-54433], reported by Bohdan Kurinnoy, Samsung R&D Institute Ukraine (SRUKR).
- Fix DoS via crafted compressed-RTF size in the TNEF (winmail.dat) file, reported by h0rk1p.

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.6.17](https://github.com/roundcube/roundcubemail/releases/tag/1.6.17) and [1.7.2](https://github.com/roundcube/roundcubemail/releases/tag/1.7.2).

We strongly recommend to update all productive installations of Roundcube 1.6.x and 1.7.x with this new versions.
