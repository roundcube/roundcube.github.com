---
layout: article
title: Security updates 1.4.4, 1.3.11 and 1.2.10 released
tags: releases updates security
---

We just published service and security updates to the stable version 1.4 and the LTS
versions 1.3 and 1.2 of Roundcube Webmail. They contain four fixes for recently reported
security vulnerabilities as well a number of general improvements from our issue tracker.

## Security fixes

- CSRF attack can cause an authenticated user to be logged out
- Cross-Site Scripting (XSS) via malicious HTML content (`CVE-2020-12625`) <sup>**</sup>
- Remote code execution via crafted config options (`CVE-2020-12641`) <sup>**</sup>
- Path traversal vulnerability allowing local file inclusion via crafted 'plugins' option (`CVE-2020-12640`) <sup>**</sup>

The latter two vulnerabilities are classified minor because they only affect Roundcube installations
with public access to the Roundcube installer. That's generally a high-risk situation and is expected
to be rare or practically non-existent in productive Roundcube deployments. However, the fixes are done
in core in order to also prevent from future and yet unknown attack vectors.

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.4.4](https://github.com/roundcube/roundcubemail/releases/tag/1.4.4), [1.3.11](https://github.com/roundcube/roundcubemail/releases/tag/1.3.11) and [1.2.10](https://github.com/roundcube/roundcubemail/releases/tag/1.2.10).

We strongly recommend to update all productive installations of Roundcube
with this new versions.

<sup>**</sup> Credits to the security researchers: Matei "Mal" Badanoiu
