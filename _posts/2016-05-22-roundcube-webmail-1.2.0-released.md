---
layout: article
title: Roundcube Webmail 1.2.0 released
tags: releases stable
---
We proudly announce the stable version 1.2.0 of Roundcube Webmail which is now available for download.
It introduces new features since version 1.1 covering security and PGP encryption topics:

* PHP7 compatibility
* PGP encryption
* Drag-n-drop attachments from mail preview to compose window
* Mail messages searching with predefined date interval
* Improved security measures to protect from brute-force attacks

And of course plenty of small improvements and bug fixes.

As already announced with the [1.2-beta release](/news/2015/11/23/roundcube-webmail-1.2-beta-out-now/), 
PGP encryption comes in two flavours: client-side using the Mailvelope browser extension 
and server-side with the Enigma plugin using GnuPG on the server.

Support with the Mailvelope browser plugin comes out of the box and 
is automatically enabled if the Mailvelope API is detected in a user's browser. 
The [Mailvelope documentation](https://www.mailvelope.com/en/help#watchlist) 
explains how to enable it for your site.

The features of the Enigma plugin, which comes with the release package 
and simply needs to be activated for your Roundcube installation are 
explained in [this blog post](https://kolabian.wordpress.com/2015/10/13/enigma-plugin-pgp-encryption/).

**IMPORTANT**: with this version, we finally deprecate some [old Roundcube library functions](https://github.com/roundcube/roundcubemail/blob/release-1.2/program/include/bc.php). 
Please test your plugins thoroughly and look for deprecation warnings in the logs.

With the release of Roundcube 1.2.0, the previous stable release branches 1.0.x 
and 1.1.x will switch in to LTS low maintenance mode which means they will only 
receive important security updates but no longer any regular improvement updates.

See the complete [Changelog](https://github.com/roundcube/roundcubemail/wiki/Changelog) in our wiki 
and download the new packages from [roundcube.net/download](https://roundcube.net/download).
