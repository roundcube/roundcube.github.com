---
layout: article
title: Release 0.9-beta ready for download
date: 2013-01-07 21:51:25Z
tags: releases
---
We're proud to announce this beta release of the next major version 0.9. With this milestone we introduce some important changes under the hood as well as some nice and long-awaited features:

* First of all, the Roundcube Framework. The core classes providing the strong base of Roundcube's functionality have been extracted and decoupled into a Framework package. They can be used individually in other open source projects looking for solid functionality around IMAP, SMTP, MIME-handling and more.

* Another major change is the new database abstraction. In order to add support for SQLite3 the PEAR:MDB2 dependency was dropped and Roundcube now uses the native PHP Data Objects (PDO).  ATTENTION: due a small lack in the MySQL PDO driver this version of Roundcube requires PHP 5.3 when using the MySQL database.

* Then we also added some new features:
  * Download all attachments as zip archive (zip module required)
  * Render thumbnails for image attachments (imagemagick is recommended)
  * Compose and mail view in new windows (configurable in user settings)
  * Upload attachment files and contact photos with drag & drop
  * Forward multiple emails as attachments
  * Show contact photos in mail view
  * CSV import for contacts

And of course plenty of small improvements and bug fixes.

See the complete Changelog at [trac.roundcube.net/wiki/Changelog](http://trac.roundcube.net/wiki/Changelog) and download the new packages from [roundcube.net/download](https://roundcube.net/download). Please note that this is a beta release and we recommend to test it on a separate environment.

