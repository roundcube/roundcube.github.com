---
layout: article
title: Security updates 0.8.6 and 0.7.3
date: 2013-03-27 21:37:50Z
tags: updates security
---
We just published new releases which fix a recently reported vulnerability that allows an attacker to access files on the server. Please update your installations with the new versions or patch them with the fix which is also published in the downloads section or our sourceforge.net page.

Download the latest version from [roundcube.net/download](https://roundcube.net/download)

Patch for 0.9.x: [ow.ly/jtQD0](http://ow.ly/jtQD0)

Patch for 0.8.x: [ow.ly/jtQHM](http://ow.ly/jtQHM)

Patch for 0.7.x: [ow.ly/jtQK0](http://ow.ly/jtQK0)

Patch for 0.6: [ow.ly/jtQNd](http://ow.ly/jtQNd)

In order to find out whether one of your users has vulnerable preferences, you can run the following query on the Roundcube user database:

SELECT * FROM users WHERE preferences LIKE '%generic_message_footer%'

If this returns any results, you should block that user because he or she most likely tried to exploit your system.

And here's some background about the vulnerability: [lists.roundcube.net/pipermail/dev/2013-March/022328.html](http://lists.roundcube.net/pipermail/dev/2013-March/022328.html)

