---
layout: article
title: The new skin is now ready for testing
date: 2012-03-02 18:27:37Z
---
The just released version 0.8-beta introduces the all new user interface design of Roundcube. The new skin codename "Larry" isn't enabled by default but you can easily enable and test the new look by setting `$rcmail_config['skin'] = 'larry'`; in your local config/main.inc.php file.

Some plugins may not yet provide templates and styles for the new skin, so expect certain things to appear broken. We hereby kindly invite all plugin developers to adapt their plugins to the new skin.

Said that, we'd also like to mention that Internet Explorer 6 is no longer supported from this version on. Roundcube itself still works with IE6 but the new skin doesn't and we'll officially drop IE6 support anytime soon.

Beside the new UI, this version also contains some bugfixes and improvements (see CHANGELOG) as well as some code refactorings.

These can potentially break some plugins if they use calls to renamed or refactored functions. Please watch your logs and in case you should notice any errors, please report them to the according plugin developers.

In addition to the technical and visual changes, starting with this release, Roundcube is now licensed under the GNU General Public License (GPL) Version 3 or later (with exceptions for skins & plugins) as we recently announced here.

Please note that this is a beta release and we recommend to test it on a separate environment. The new skin most likely requires some CSS hacking until we're ready for the 0.8 stable release. Please report all problems to our bug tracking system at [trac.roundcube.net](http://trac.roundcube.net)

