---
layout: article
title: Roundcube Webmail 1.2-beta out now
date: 2015-11-23 16:30:25Z
tags: releases
---
We're proud to announce that the beta release of the next major version 1.2 of 
Roundcube webmail is out now for download and testing. With this milestone 
we introduce new features primarily focusing on security and PGP encryption:

* PHP7 compatibility
* PGP encryption
* Drag-n-drop attachments from mail preview to compose window
* Mail messages searching with predefined date interval
* Improved security measures to protect from brute-force attacks

And of course plenty of small improvements and bug fixes.

The PGP encryption support in Roundcube comes with two options:

## Mailvelope

The integration of this [browser plugin](https://www.mailvelope.com) for Firefox 
and Chrome comes  out of the box in Roundcube 1.2 and is enabled if the Mailvelope 
API is detected in a user's browser. See the [Mailvelope documentation](https://www.mailvelope.com/en/help#watchlist) 
how to enable it for your site.

Read more about the [Mailvelope integration](https://kolabian.wordpress.com/2015/10/10/mailvelope-integration-pgp-encryption/) 
and how this looks like.

## Enigma plugin

This Roundcube plugin adds server-side PGP encryption features to Roundcube. Enabling this 
means that users need to fully trust the webmail server as encryption is done on the server 
(using [GnuPG](https://gnupg.org)) and private keys are also stored there.

In order to activate server-side PGP encryption for all your users, the 'enigma'
plugin, which is shipped with this package, has to be enabled in the Roundcube config.
See the plugin's README for details.

Also read [this blogpost](https://kolabian.wordpress.com/2015/10/13/enigma-plugin-pgp-encryption/) 
about the Enigma plugin and how it works.

**IMPORTANT**: with this version, we finally deprecate some [old Roundcube library functions](https://github.com/roundcube/roundcubemail/blob/release-1.2/program/include/bc.php).
Please test your plugins thoroughly and look for deprecation warnings in the logs.

See the complete Changelog at [trac.roundcube.net/wiki/Changelog](http://trac.roundcube.net/wiki/Changelog) 
and download the new packages from  [roundcube.net/download](https://roundcube.net/download). 

Please note that this is a beta release and we recommend to test it on a
separate environment. And don't forget to backup your data before installing it.
