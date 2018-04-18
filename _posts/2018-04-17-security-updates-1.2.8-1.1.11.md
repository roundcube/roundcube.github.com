---
layout: article
title: Security updates 1.2.8 and 1.1.11 released
tags: releases updates security
---

Following the [recent security update for 1.3](/news/2018/04/11/security-update-1.3.6),
here now come the promised updates for the LTS versions 1.2 and 1.1. They both fix the 
recently reported vulnerability allowing IMAP command injection via a GET parameters.
More details about this are published under `CVE-2018-9846`.

Another fix included in these updates is about a missed remote content blocking
on HTML messages with specially crafted image and style tags.

See the full changelog in the release notes on the according Github download pages:
* [release 1.2.8](https://github.com/roundcube/roundcubemail/releases/tag/1.2.8).
* [release 1.1.11](https://github.com/roundcube/roundcubemail/releases/tag/1.1.11).

We strongly recommend to update all productive installations of Roundcube 1.2.x and 1.1.x respectively.
Please do backup your data before updating!
