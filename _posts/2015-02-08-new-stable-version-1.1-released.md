---
layout: article
title: New stable version 1.1.0 released
date: 2015-02-08 14:12:00Z
tags: releases stable
---
We're proud to announce the arrival of the next major version 1.1.0 of 
Roundcube webmail which is now available for download. With this 
milestone we introduce new features since version 1.0 as well as 
some clean-up with the 3rd party libraries:

* Allow searching across multiple folders
* Improved support for screen readers and assistive technology using 
  [WCAG 2.0](http://www.w3.org/WAI/GL/WCAG20/) and [WAI ARIA](http://www.w3.org/TR/wai-aria/) standards
* Update to TinyMCE 4.1 to support images in HTML signatures (copy & paste)
* Added namespace filter and folder searching in folder manager
* New config option to disable UI elements/actions
* Stronger password encryption using OpenSSL
* Support for the IMAP SPECIAL-USE extension
* Support for Oracle as database backend
* Manage 3rd party libs with [Composer](https://getcomposer.org/)

In addition to that, we added some new features to improve protection
against possible but yet unknown CSRF attacks - thanks to the help of
[Kolab Systems](https://kolabsystems.com) who supplied the concept
and development resources for this.

Although the new security features are yet experimental and disabled by default,
our wiki describes how to enable the [Secure URLs](http://trac.roundcube.net/wiki/Howto_Config/Secure_URLs)
and give it a try.

And of course, this new version also includes all patches for reported
CSRF and XSS vulnerabilities previously released in the 1.0.x series.

**IMPORTANT**: with the 1.1.x series, we drop support for PHP < 5.3.7
and Internet Explorer < 9. IE7/IE8 support can be restored by
enabling the 'legacy_browser' plugin.

See the complete Changelog at [trac.roundcube.net/wiki/Changelog](http://trac.roundcube.net/wiki/Changelog) 
and download the new packages from  [roundcube.net/download](https://roundcube.net/download). 

