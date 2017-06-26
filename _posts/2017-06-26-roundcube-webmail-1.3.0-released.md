---
layout: article
title: Roundcube Webmail 1.3.0 released
tags: releases stable
---
We proudly announce the stable version 1.3.0 of Roundcube Webmail which is now available for download.
With this milestone we introduce new features since the 1.2 version:

* Widescreen layout aka Three Column View
* Possibility to display QR code for contacts data
* New identicon plugin
* Attach contact vCards to composed message
* Support WEBP images and MathML preview
* Preview, download and rename attachments when composing a message
* Message/rfc822 attachment preview
* Various Enigma (PGP) and Managesieve plugin improvements
* "Flattened" the Larry theme giving it a fresher look

### Plus security and deployment improvements:

* Improve randomness of password salts and random hashes
* Fixed redundancy in sql caching system and compatibility with Galera Cluster

### And finally some code-cleanup:

* Dropped support for legacy browsers (IE < 10; removed `legacy_browser` plugin)
* Require PHP >= 5.4
* Removed PHP `mail()` support
* Removed 3rd party javascript libraries from repo
* Require jQuery 3.x which has breaking changes to older versions

**IMPORTANT**: The code-cleanup part brings major changes and possibly incompatibilities to your 
existing Roundcube installations. So please read the [Changelog](https://github.com/roundcube/roundcubemail/wiki/Changelog) 
carefully and thoroughly test your upgrade scenario.

### Please note that Roundcube 1.3

1. no longer runs on PHP 5.3
2. no longer supports IE < 10 and old versions of Firefox, Chrome and Safari
3. requires an SMTP server connection to send mails
4. uses jQuery 3.2 and will not work with current jQuery mobile plugin

With the release of Roundcube 1.3.0, the previous stable release branches 1.2.x
and 1.1.x will switch in to LTS low maintenance mode which means they will only
receive important security updates but no longer any regular improvement updates.
