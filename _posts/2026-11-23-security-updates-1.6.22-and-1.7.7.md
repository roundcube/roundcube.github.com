---
layout: article
title: Security updates 1.6.22 and 1.7.7 released
tags: releases updates security
---

We just published security updates to the 1.6 LTS and 1.7 versions of Roundcube Webmail.
They both contain fixes for recently reported security vulnerabilities.

## Security fixes

- Fix (again) HTTP request injection via the spellcheck ATD backend, reported by Ankesh Singh.
- Fix CSS-scoping bypass via html comments in inline style.
- Fix remote content blocking bypass via CSS comments in SVG FuncIRI attributes, reported by kleju13.
- Fix CSS-scoping bypass via a direct access to CSS proxy and multiple style links, reported by Wahab "NeoX" Khadir.
- Fix response disclosure in the CSS proxy using leading whitespace/BOM, reported by Mohamed Elgzouli.
- Fix namespace-prefixed attribute bypass of the washtml attribute allowlist (PHP < 8.4), reported by nakko.
- Fix (again) bug where insecure attachment content (PDF/PostScript/SVG) was passed to ImageMagick, reported by korosuke587.
- Fix sieve script injection via a comparator name, reported by Lee.
- Fix DoS via uncapped MAPI multi-value loop in rcube_tnef_decoder, reported by Sourabh Singh.
- Fix XML injection in XIMSS driver of the password plugin, reported by Mohammed Fathy (Robusta Technology Group).
- Fix falling back to insecure IMAP/SMTP/Managesieve connection when TLS is configured but no capability reported, reported by Dickson Wu (SEAL & CertiK).
- Fix Sieve script injection via the body/address/envelope part fields, reported by Shu Jie.

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.6.22](https://github.com/roundcube/roundcubemail/releases/tag/1.6.22) and [1.7.7](https://github.com/roundcube/roundcubemail/releases/tag/1.7.7).

We strongly recommend to update all productive installations of Roundcube 1.6.x and 1.7.x with this new versions.

WARNING: This is the last 1.6 release. Please, upgrade to 1.7 asap. It will be the only line that receives security fixes in the future.
