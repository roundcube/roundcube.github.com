---
layout: article
# name: security-update-for-02-beta
title: Security update for 0.2-beta
date: 2008-12-16 17:51:04Z
categories: []
# permalink: /news/2008/12/security-update-for-02-beta/
---
There were two security issues reported which are now fixed. The first was as possible code injection using the html2text conversion script. The other exploit used the unchecked size parameters of the quota image to let PHP create huge images eating up all the server memory. 

The two vulnerable scripts were updated in the current 0.2-beta package and for existing RoundCube installations we recommend to download [downloads.sourceforge.net/roundcubemail/roundcubemail-0.2-beta-patch.tar.gz](http://downloads.sourceforge.net/roundcubemail/roundcubemail-0.2-beta-patch.tar.gz) and to replace all the files with the new versions found in the archive.

