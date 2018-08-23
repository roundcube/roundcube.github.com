---
layout: article
title: Security updates 0.9.5 and 0.8.7
date: 2013-10-21 21:37:50Z
tags: updates security
---
We just published new releases which fix a recently reported vulnerability that
allows an attacker to overrwrite configuration settings using user preferences.
This can result in random file access, manipulated SQL queries and even code execution.
The latter one only affects versions 0.8.6 and older.

Please update your installations with the new versions or patch them with the
fixes listed below for the various older versions of Roundcube.

Download the latest version from [roundcube.net/download](https://roundcube.net/download)

[Patch for 0.9.x](https://github.com/roundcube/roundcubemail/commit/4109bb26ce.diff)

[Patch for 0.8.x](https://github.com/roundcube/roundcubemail/commit/eb433aa33c.diff)

[Patch for 0.7.x](https://github.com/roundcube/roundcubemail/commit/1972037274.diff)

More information about this vulnerability will be published under CVE-2013-6172.

