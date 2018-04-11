---
layout: article
title: Security update 1.3.6 released
tags: releases updates security
---

We just published a security update to the stable version 1.3. It primarily fixes a recently
discovered IMAP command injection vulnerability caused by insufficient input 
validation within the archive plugin. Details about the vulnerability
are published under `CVE-2018-9846`.

Additionally, we back-ported some minor fixes from the master branch which
improve PHP 7.2 compatibility as well as PGP signing and key handling for
those who use the Enigma plugin.

See the full changelog in the release notes on the [Github download page](https://github.com/roundcube/roundcubemail/releases/tag/1.3.6).

We strongly recommend to update all productive installations of Roundcube
with this new version. Updates for older LTS versions will follow soon.
