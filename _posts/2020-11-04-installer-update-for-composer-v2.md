---
layout: article
title: Installer Update for Composer 2.0
tags: announcement
---

Roundcube's plugin installer is built with [Composer](https://getcomposer.org) and implemented
as a custom component to handle packages of type `roundcube-plugin`. Now Composer has released
a new [major version 2.0](https://blog.packagist.com/composer-2-0-is-now-available/) which
brings a few breaking changes.

These changes require an updated version of our plugin installer which is now available as [version 0.2.0](https://packagist.org/packages/roundcube/plugin-installer#0.2.0).

For new installations of Roundcube, the most recent version of the Roundcube plugin installer is pulled and should work fine with both Composer 1.x and Composer 2.0.

If you have an existing Roundcube installation with a `composer.json` and a `composer.lock` file and you have just updated Composer to version 2.0, you might need to enforce an update
of the `roundcube/plugin-installer` package in case you encounter errors when installing or updating plugins. Please execute the following command in your Roundcube's installation directory:

```
$ composer require "roundcube/plugin-installer:>=0.2.0"
```

If updating or installing plugins still doesn't work after this change, please report to
our [bug tracker](https://github.com/roundcube/roundcubemail/issues).
