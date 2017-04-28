---
layout: article
title: Security updates 1.2.5, 1.1.9 and 1.0.11 released
tags: releases updates security
---

We just published updates to all stable versions 1.x delivering  important bug fixes 
and improvements which we picked from the upstream branch.

The updates primarily fix a recently discovered vulnerability in the virtualmin and sasl
drivers of the password plugin (CVE-2017-8114). Security-wise the update is therefore 
only relevant for those installations of Roundcube using the password plugin with either 
one of these drivers.

See the full changelog for the according version in the release notes on the Github
download pages:
[v1.2.5](https://github.com/roundcube/roundcubemail/releases/tag/1.2.5),
[v1.1.9](https://github.com/roundcube/roundcubemail/releases/tag/1.1.9),
[v1.0.11](https://github.com/roundcube/roundcubemail/releases/tag/1.0.11)

All versions are considered stable and we recommend to update all productive installations
of Roundcube with either of these versions.

As usual, don't forget to backup your data before updating!
