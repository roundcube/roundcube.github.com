---
layout: article
title: Version 0.6-beta released
date: 2011-08-20 11:12:36Z
categories: []
---
We're proud to announce the next major release of the Roundcube webmail package: 0.6 is out now as beta. And it's packed with new features, some of them have been awaited for long time.

So what's new?

### A full-featured address book with rich contact information

The address book UI was finally extended to store rich contact data including photos. We worked hard to create a flexible and intuitive UI to enter and manage the contact data. Along with that, import and export of vcards was improved to support all the new fields. If you have LDAP directories configured as address sources, you might review the configuration and map the new contact fields to the according LDAP attributes using the 'fieldmap' property.

### Group support for LDAP address books

While speaking of LDAP, the LDAP wrapper of Roundcube now also supports address groups thanks to the contribution of Andreas Dick. This requires some additional configuration which is described in the comments of config/main.inc.php.dist

### ACL rights/namespace management plugin

The new package includes a plugin which extends the folder manager to manage Access Control Lists according to RFC4314 and RFC2086. This allows one to share folders with other users if the IMAP server supports ACL. If there's a LDAP directory configured, the ACL manager even does auto-completion when adding a new user.

### memcache support for session storage

As an alternative to the SQL-based storage of user sessions, Roundcube 0.6 is now capable of using memcache for fast and redundant storage of session data. Set 'session_storage' and 'memcache_hosts' config options to enable it.

### File uploads with progress display

Using the features of the APC module, Roundcube can now display the progress of file uploads. This has to be enabled in config using the 'upload_progress' option. Make sure APC is available in PHP and that apc.rfc1867 is set in php.ini

### Automated update process with database schema check

Upgrading Roundcube installations has become an easy task with the new update shell script. Unpack the new package in some directory and then run `bin/installto.sh <TARGETDIR>` from there. TARGETDIR is the location of the Roundcube installation which you want to upgrade. The script then copies all files to the target directory and does all modifications necessary to get the database and config files up-to-date.

### Exchange logo by config

And last but not least, one can now set a customized logo by config without the necessity to create a new skin. We'd like to encourage all hosting providers to set the 'skin_logo' config option with an URL to their logo. This will hopefully clarify to your users, what service they're actually using. We registered an increased amount of support requests from users who don't understand that Roundcube is not a public service but that they have to contact their ISP for help.

Of course there are also many improvements under the hood to make Roundcube faster, more stable and more secure.

So go forth and install Roundcube 0.6 beta on your servers. We recommend to test it on a separate environment and report bugs to our bug tracking system. An improved and stabilized version will follow soon.

A little note for skin developers: the new address book also brings the following new template objects which need to be placed in the HTML templates: contactphoto, contacthead, contactedithead, photouploadform. Have a look at the default skin templates to get inspiration for the placement and styling.

Many thanks to all who use and improve Roundcube every day!

