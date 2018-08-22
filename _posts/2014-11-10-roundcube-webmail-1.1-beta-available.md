---
layout: article
title: Roundcube Webmail 1.1-beta available
date: 2014-11-10 20:13:25Z
tags: releases
---
We're proud to announce that the beta release of the next major version 1.1 of 
Roundcube webmail is now available for download and testing. With this 
milestone we introduce a bunch of new features and some clean-up with the 3rd 
party libraries Roundcube uses:

* Allow searching across multiple folders
* Improved support for screen readers and assistive technology using 
  [WCAG 2.0](http://www.w3.org/WAI/GL/WCAG20/) and [WAI ARIA](http://www.w3.org/TR/wai-aria/) standards
* Support images in HTML signatures (copy & paste)
* Added namespace filter and folder searching in folder manager
* New config option to disable UI elements/actions
* Stronger password encryption using OpenSSL
* Support for the IMAP SPECIAL-USE extension
* Support for Oracle databases
* Moved 3rd party libs to `vendor` directory, managed by [Composer](https://getcomposer.org/)

And of course plenty of small improvements and bug fixes.

**IMPORTANT**: with this version, we dropped support for PHP < 5.3.7 and 
Internet Explorer < 9. IE7/IE8 support can be restored by enabling the 
`legacy_browser` plugin.

See the complete Changelog at [trac.roundcube.net/wiki/Changelog](http://trac.roundcube.net/wiki/Changelog) 
and download the new packages from  [roundcube.net/download](https://roundcube.net/download). Please note that this 
is a beta release and we recommend to test it on a separate environment. And 
don't forget to backup your data before installing it.
