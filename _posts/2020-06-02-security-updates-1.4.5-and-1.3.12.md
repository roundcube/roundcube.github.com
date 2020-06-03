---
layout: article
title: Security updates 1.4.5 and 1.3.12 released
tags: releases updates security
---

We just published service and security updates to the stable version 1.4 and the LTS
version 1.3 of Roundcube Webmail. They contain four fixes for recently reported
security vulnerabilities as well a number of general improvements from our issue tracker.

## Security fixes

- Fix XSS issue in template object `username` <sup>**</sup>
- Fix cross-site scripting (XSS) via malicious XML attachment <sup>*</sup>
- Fix a couple of XSS issues in Installer <sup>**</sup>
- Better fix for `CVE-2020-12641`

The latter two vulnerabilities again are related to public access to the Roundcube installer
and are therefore classified minor.

See the full changelogs in the release notes on the Github download pages for the updated versions
[1.4.5](https://github.com/roundcube/roundcubemail/releases/tag/1.4.5) and [1.3.12](https://github.com/roundcube/roundcubemail/releases/tag/1.3.12).

We strongly recommend to update all productive installations of Roundcube
with this new versions.

<sup>*</sup> Credits to the security researcher Matei "Mal" Badanoiu  
<sup>**</sup> Credits to the security researcher LoRexxar@knownsec 404Team
