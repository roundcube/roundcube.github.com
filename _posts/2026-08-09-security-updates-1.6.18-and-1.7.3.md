---
layout: article
title: Security updates 1.6.18 and 1.7.3 released
tags: releases updates security
---

We just published security updates to the 1.6 LTS and 1.7 versions of Roundcube Webmail.
They both contain fixes for recently reported security vulnerabilities.

## Security fixes

- Add basic validation for content proxied by the css proxy
- Fix SSRF bypass via specific local address URLs using 100.64.0.0/10 and fe80::/10 nets, reported by Dmytro Ivanenko
- Fix SSRF filter bypass via various forms of nip.io/sslip.io hostnames evading is_local_url() check, reported by Milan Hoppe
- Fix remote content blocking bypass via unclosed url() in a FuncIRI attribute, reported by Milan Hoppe
- Fix LDAP filter injection via unescaped %u/%fu/%d substitution into the `search_filter`, reported by Milan Hoppe
- Fix arbitrary Sieve script injection via a filter rule name bypassing `managesieve_disabled_actions`, reported by Milan Hoppe
- Fix RCE via cmd_learn driver of markasjunk plugin, reported by nept1337
- Fix IMAP command injection via mail search and LITERAL+ byte-count desynchronization, reported by Zach Hanley of Horizon3.ai
- Fix password's modoboa driver leak of an authentication token to a user-controlled host, reported by [meifukun](https://github.com/meifukun)
- Fix stored XSS in "Add to address book" action, reported by Paulos Yibelo from pwn.ai
- Fix HTML/CSS sanitization bypass via SVG animate `by` attribute, reported by vectrain

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.6.18](https://github.com/roundcube/roundcubemail/releases/tag/1.6.18) and [1.7.3](https://github.com/roundcube/roundcubemail/releases/tag/1.7.3).

We strongly recommend to update all productive installations of Roundcube 1.6.x and 1.7.x with this new versions.
