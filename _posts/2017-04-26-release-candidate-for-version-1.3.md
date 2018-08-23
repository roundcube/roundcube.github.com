---
layout: article
title: Release Candidate for version 1.3
date: 2017-04-25 20:22:16Z
tags: releases
---
We just published the feature-complete version for the next major version 1.3 of Roundcube webmail
for final testing. After dropping support for older browsers and PHP versions and adding 
some new features  like the widescreen layout, the release candidate finalizes that 
work and also fixes two security issues plus adds improvements to the Managesieve 
and Enigma plugins.

We also slightly polished the Larry theme to make it look a little less 2010. Still, the default
theme doesn't work on mobile devices but a fully responsive skin is currently being worked on.

As a reminder: if you're installing the dependent package or run Roundcube directly 
from source, you now need to install the removed 3rd party javascript modules by 
executing the following install script:

```
$ bin/install-jsdeps.sh
```

With the upcoming stable release of 1.3.0 the old 1.x series will only receive important 
security fixes.

See the complete [Changelog](https://github.com/roundcube/roundcubemail/wiki/Changelog) 
and download the new packages from [roundcube.net/download](https://roundcube.net/download). 

Please note that this is a release candidate and we recommend to test it on a
separate environment. And don't forget to backup your data before installing it.
