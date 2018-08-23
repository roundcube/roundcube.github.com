---
layout: article
title: Stable version 0.9.0 released
date: 2013-04-15 21:44:23Z
tags: releases stable
---
We proudly announce the next stable release of Roundcube. This version enhances the webmail experience with these new features:

* Improved rendering of forwarded and attached messages
* Optionally display and compose email messages a new windows
* Unified UI for message view and composition
* Show sender photos from contacts in email view
* Render thumbnails for image attachments
* Download all attachments as zip archive (using the zipdownload plugin)
* Forward multiple emails as attachments
* CSV import for contacts

The major change of this version isn't really visible to the users but even more important for the developers: the Roundcube framework. We decoupled the core functions for IMAP access, SMTP email sending, database abstraction, caching, etc. from the webmail application in order to make them usable for other free software products.

Another major change since the 0.8 series is the new database abstraction layer. In order to add support for SQLite3, the PEAR:MDB2 dependency was dropped and Roundcube now uses the native PHP Data Objects (PDO). It's enabled by default since PHP 5.1 and is considered stable and well-developed. One drawback, however, is a small lack in the MySQL PDO driver which makes PHP 5.3 a requirement for this version of Roundcube when using the MySQL database.

After lots of testing and collecting your feedback, this version is considered stable and it also includes the recently discovered vulnerability that allows an attacker to modify its users preferences in a way that he can then read arbitrary files from the server. We therefore recommend to update all productive installations of Roundcube.

Download both the webmail and the framework packages from [roundcube.net/download](https://roundcube.net/download)

Read the full list of changes here: [trac.roundcube.net/wiki/Changelog](http://trac.roundcube.net/wiki/Changelog)

P.S. Starting with version 0.9.0, there's now professional service and support available for Roundcube. See [https://kolabsys.com/news/roundcube-services-and-support-roundcubes-lead-developers](https://kolabsys.com/news/roundcube-services-and-support-roundcubes-lead-developers)

