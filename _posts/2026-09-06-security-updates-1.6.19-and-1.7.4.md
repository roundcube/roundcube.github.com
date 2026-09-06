---
layout: article
title: Security updates 1.6.19 and 1.7.4 released
tags: releases updates security
---

We just published security updates to the 1.6 LTS and 1.7 versions of Roundcube Webmail.
They both contain fixes for recently reported security vulnerabilities.

## Security fixes

- Fix CSS declaration smuggling via un-encoded ampersand emission, reported by Zach Hanley of Horizon3.ai
- Fix CSS property injection via body `background` attribute, reported by zenithhostingevan
- Fix email header injection via bare CR in the subject field, reported by CVE-Hunter-Leo
- Fix email header injection via C-escape \r in the recipient display name, reported by dogeshark
- Fix email header injection via identity's organization field, reported by dogeshark
- Fix zero-click stored XSS via TNEF MIME tag injection in the attachment URL, reported by nakko
- Fix XSS in the HTML editor using text/enriched part content, reported by Joshua Rogers
- Fix cross-user access in contact group membership (add/remove) in the SQL address book, reported by Joshua Rogers
- Fix is_local_url() bypass via trailing-dot FQDN in stylesheet URL, reported by nept1337
- Fix remote content blocking bypass via CSS escapes in FuncIRI attributes, reported by neoxed
- Fix remote-content blocker bypass via SVG SMIL src animation
- Fix SSRF bypass in Roundcube CSS proxy via hexadecimal IPv6-mapped IPv4 addresses, reported by faceless0x7 and Harish Annavisamy

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.6.19](https://github.com/roundcube/roundcubemail/releases/tag/1.6.19) and [1.7.4](https://github.com/roundcube/roundcubemail/releases/tag/1.7.4).

We strongly recommend to update all productive installations of Roundcube 1.6.x and 1.7.x with this new versions.
