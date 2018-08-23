---
layout: article
title: Roundcube Webmail 1.3-beta out now
date: 2017-01-05 20:14:25Z
tags: releases
---
We're proud to announce the beta release of the next major version 1.3 of Roundcube webmail.
With this milestone we introduce some new features:

* Widescreen layout aka Three Column View
* Possibility to display QR code for contacts data
* New identicon plugin
* Attach contact vCards to composed message
* Support WEBP images and MathML preview
* Preview, download and rename attachments when composing a message
* message/rfc822 attachment preview
* Various Enigma (PGP) and Managesieve plugin improvements

Plus security and deployment improvements:

* Improve randomness of password salts and random hashes
* Fixed redundancy in sql caching system and compatibility with Galera Cluster

And finally some code-cleanup:

* Dropped support for legacy browsers (IE < 10; removed `legacy_browser` plugin)
* Require PHP >= 5.4
* Removed PHP `mail()` support
* Removed 3rd party javascript libraries from repo

**IMPORTANT**: The code-cleanup part brings major changes and possibly incompatibilities
to your existing Roundcube installations. So please read the changelog carefully
and thoroughly test your upgrade scenario.

Please note that Roundcube 1.3

1. no longer runs on PHP 5.3
2. no longer supports IE < 10 and old versions of Firefox, Chrome and Safari
3. requires an SMTP server connection to send mails

That last item means you need to review your SMTP server settings as described
in our [wiki](https://github.com/roundcube/roundcubemail/wiki/Configuration#sending-messages-via-smtp)
if you have set the `smtp_server` option to an empty value and are thus using PHP's `mail()` function.

In case you're running Roundcube directly from source, you now need to install
the removed 3rd party javascript modules by executing the following install script:

    $ bin/install-jsdeps.sh

See the complete [Changelog](http://trac.roundcube.net/wiki/Changelog) 
and download the new packages from [roundcube.net/download](https://roundcube.net/download). 

Please note that this is a beta release and we recommend to test it on a
separate environment. And don't forget to backup your data before installing it.
