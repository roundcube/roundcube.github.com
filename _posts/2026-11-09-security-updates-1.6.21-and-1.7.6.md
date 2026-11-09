---
layout: article
title: Security updates 1.6.21 and 1.7.6 released
tags: releases updates security
---

We just published security updates to the 1.6 LTS and 1.7 versions of Roundcube Webmail.
They both contain fixes for recently reported security vulnerabilities.

## Security fixes

- Fix open redirect via IMAP error recovery on attachment get, reported by Santhoshkumar S.
- Fix so Received: header includes only trusted hostname and forwarded IP from a trusted proxy, reported by Squirt1e, Atum, N0b0dy, Gh0u1L5.
- Fix bug where some managesieve destructive actions could have been triggered cross-site via GET, reported by Squirt1e, Atum, N0b0dy, Gh0u1L5.
- Fix Sieve script injection via a rule operator, reported by Squirt1e, Atum, N0b0dy, Gh0u1L5.
- Fix Sieve script injection via set/include modifiers, reported by Squirt1e, Atum, N0b0dy, Gh0u1L5.
- Fix bug where resolve_url() ignored trusted host setting, reported by Squirt1e, Atum, N0b0dy, Gh0u1L5.
- Fix mail header injection via a MDN subject, reported by Squirt1e, Atum, N0b0dy, Gh0u1L5
- Fix HTTP request injection via the spellcheck ATD backend, reported by Squirt1e, Atum, N0b0dy, Gh0u1L5.
- Fix IMAP command injection via CRLF in _uid parameter with messages_cache enabled, reported by dexx-tech.
- Fix SSRF in CSS proxy via incomplete is_local_url() nip.io/sslip.io bypass, reported by blacksw0rd.
- Fix CSRF validation bypass for file-only POST requests, reported by skad00sh.
- Fix `disabled_actions` restriction bypass by writing '_' instead of '-' in the action name, reported by skad00sh.
- Fix CSRF validation bypass for mail purge/expunge commands, reported by threalwinky.
- Fix passing potentally unsafe attachment content into ImageMagick on image type conversion, reported by José Luis Sánchez Pérez - Cybersecurity Blue & Red Team.
- Fix Unbounded CPU loop/DoS in rcube_session::unserialize() via a negative length token, reported by Guang.
- Fix SSRF filter (is_local_url()) bypass via 6to4 (2002::/16) addresses, reported by wyx98765.
- Fix so IMAP host input is validated more strictly, reported by Mohamed Elgzouli.

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.6.21](https://github.com/roundcube/roundcubemail/releases/tag/1.6.21) and [1.7.6](https://github.com/roundcube/roundcubemail/releases/tag/1.7.6).

We strongly recommend to update all productive installations of Roundcube 1.6.x and 1.7.x with this new versions.

WARNING: The 1.6 branch is four years old. Please, plan your upgrade to 1.7 soon. Backporting security patches became increasingly time consuming,
annoying and error prone. 1.6 will be discontinued rather soon.
