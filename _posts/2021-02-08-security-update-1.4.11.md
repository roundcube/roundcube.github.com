---
layout: article
title: Security update 1.4.11
tags: releases updates security
---

We just published a service and security update to the stable version 1.4 of Roundcube Webmail.
It provides a fix for a recently reported stored XSS vulnerability as well a some
general improvements from our issue tracker.

## Security fix

- Fix cross-site scripting (XSS) via HTML messages with malicious CSS content

Credits for this finding go to Mateusz Szymaniec (CERT Polska).

See the full changelog in the [release notes](https://github.com/roundcube/roundcubemail/releases/tag/1.4.11) on the Github download page.

This release is considered stable and we recommend to update all productive installations
of Roundcube with this version. Download it from [roundcube.net](https://roundcube.net/download).

Please do backup your data before updating!

