---
layout: article
title: Security updates 1.6.7 and 1.5.7 released
tags: releases updates security
---

We just published security updates to the 1.6 and 1.5 LTS versions of Roundcube Webmail.
They both contain fixes for recently reported security vulnerabilities.

## Security fixes

- Fix cross-site scripting (XSS) vulnerability in handling SVG animate attributes.
  Credits for this finding to Valentin T. and Lutz Wolf of CrowdStrike.
- Fix cross-site scripting (XSS) vulnerability in handling list columns from user preferences.
  Credits for this finding to Huy Nguyễn Phạm Nhật.
- Fix command injection via crafted im_convert_path/im_identify_path on Windows.
  Credits for this finding to Huy Nguyễn Phạm Nhật.

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.6.7](https://github.com/roundcube/roundcubemail/releases/tag/1.6.7) and [1.5.7](https://github.com/roundcube/roundcubemail/releases/tag/1.5.7).

We strongly recommend to update all productive installations of Roundcube 1.6.x and 1.5.x with this new versions.
