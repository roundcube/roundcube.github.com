---
layout: article
title: spell.roundcube.net service down
tags: announcement
---
For years the Roundcube project has run a public spell checking service spell.roundcube.net
as a privacy-safe alternative to the former Spell Check service by Google. This has been
the default backend for Roundcube's spell checking function and **has now gone offline forever**.

We ran this service on a dedicated server sponsored by xs4all.nl using a [PHP port of google-spell](https://github.com/roundcube/google-spell-pspell). Now this sponsoring has come to an end and unfortunately there's no replacement in sight.

New releases of Roundcube will therefore have the spell checking function disabled by default.
The best replacement is of course to use PHP's [pspell](https://www.php.net/manual/en/book.pspell.php) or
[enchant](https://www.php.net/manual/en/book.enchant.php) API with a locally installed aspell library
and to [configure Roundcube accordingly](https://github.com/roundcube/roundcubemail/blob/master/config/defaults.inc.php#L921).

We'll add this feature to future releases of our Docker images but for now, you need to re-configure your Roundcube installations.

**Apologies for the inconvenience and for the bad news!**
