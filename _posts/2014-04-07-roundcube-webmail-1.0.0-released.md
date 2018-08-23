---
layout: article
title: Roundcube Webmail 1.0.0 released
date: 2014-04-07 21:44:23Z
tags: releases stable
---
We're very proud to announce the stable version 1.0 of Roundcube Webmail. After more
than 8 years since the project was published, we feel confident to name it one-dot-oh.
From the last stable version we added to following new features:

* Cleaned up the configuration into a single file
* Importing email messages and contact group assignments
* Advanced LDAP address book functionality
* A toggle to switch between HTML and plaintext view
* Save drafts in local storage for recovery
* Canned responses to save and recall boilerplate texts
* Improved keyboard navigation in messages list
* Optimized UI to work on tablet devices
* Attachment reminder plugin

And mainly we were busy cleaning up the codebase, fixing a lot of bugs, making it
more stable and writing more documentation.

With this release, we'd also like to introduce the Roundcube plugins repository at
[plugins.roundcube.net](https://plugins.roundcube.net). This central platform should help you
find the right plugins for your Roundcube installation and makes it simple to keep them up-to-date.
The installation and update mechanism is based on [Composer](https://getcomposer.org)
and [Packagist](https://packagist.org/).

We'd also like to encourage plugin developers to publish their plugins on this platform.
Please read the [instructions](https://plugins.roundcube.net/about) how to prepare your
plugin for publishing.

After lots of testing and collecting your feedback, this version is considered stable
and we recommend to update all productive installations of Roundcube.

Download the fresh webmail and framework packages from [roundcube.net/download](https://roundcube.net/download)

Read the full list of changes here: [trac.roundcube.net/wiki/Changelog](http://trac.roundcube.net/wiki/Changelog)

**WARNING**: when upgrading from <= 0.9 the old configuration files named `main.inc.php`
and `db.inc.php` are now deprecated and should be replaced with one single `config.inc.php` file.
Run the `./bin/update.sh` script to get this conversion done or manually merge  the files.
*NOTE*: the new `config.inc.php` should only contain options that differ from the ones listed
in `defaults.inc.php`.

