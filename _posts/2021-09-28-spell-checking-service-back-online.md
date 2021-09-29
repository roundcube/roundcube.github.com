---
layout: article
title: Spell checking service is back online
tags: announcement
---
After the [recent announcement](/news/2021/09/14/spell-roundcube-net-service-down) we received a number of
offers from internet service providers around the globe who offered their support to continue
the free spell checking service for Roundcube.

Now we're happy to announce that we could establish a new sponsoring with [HostingU2](https://hostingu2.nl)
from the Netherlands and that spell.roundcube.net is back online.

Although we can again support existing Roundcube installations with their default settings for
spell checking, we still encourage you to [re-configure](https://github.com/roundcube/roundcubemail/blob/master/config/defaults.inc.php#L921) Roundcube
to use PHP's [pspell](https://www.php.net/manual/en/book.pspell.php) or [enchant](https://www.php.net/manual/en/book.enchant.php) 
API with a locally installed aspell library. We have also created a [Docker image](https://hub.docker.com/r/roundcube/google-spell-pspell) allowing you to run your own instance of the former Google Spell Check service as we do.
