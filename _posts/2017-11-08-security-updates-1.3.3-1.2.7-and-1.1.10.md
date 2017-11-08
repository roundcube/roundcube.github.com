---
layout: article
title: Security updates 1.3.3, 1.2.7 and 1.1.10 released
tags: releases updates security
---

We just published updates to all stable versions from 1.1.x onwards delivering 
fixes for a recently discovered file disclosure vulnerability in Roundcube Webmail.

Apparently this zero-day exploit is already being used by hackers to read
Roundcube's configuration files. It requires a valid username/password as the
exploit only works with a valid session. More details will be published soon under
`CVE-2017-16651`.

The Roundcube series 1.0.x is not affected by this vulnerability but we nevertheless
back-ported the fix in order to protect from yet unknown exploits.

See the full changelog for the according version in the release notes on the Github
download pages:
[v1.3.3](https://github.com/roundcube/roundcubemail/releases/tag/1.3.3),
[v1.2.7](https://github.com/roundcube/roundcubemail/releases/tag/1.2.7),
[v1.1.10](https://github.com/roundcube/roundcubemail/releases/tag/1.1.10)
[v1.0.12](https://github.com/roundcube/roundcubemail/releases/tag/1.0.12)

We strongly recommend to update all productive installations of Roundcube
with either one of these versions.

## Mitigation

In order to check whether your Roundcube installation has been compromised
check the access logs for requests like `?_task=settings&_action=upload-display&_from=timezone`.
As mentioned above, the file disclosure only works for authenticated users and
by finding such requests in the logs you should also be able to identify the
account used for this unauthorized access. For mitigation we recommend to change
the all credentials to external services like database or LDAP address books
and preferably also the `des_key` option in your config.
