---
layout: article
title: Phishing Alert
tags: security
---
We have been receiving many reports about phishing attempts appearing out in the wild which are targeting end users of webmail services powered by Roundcube.

The fake emails pretend to come from „Roundcube Webmail“ or alike and trick users to enter their email password on fake sites. The attackers take advantage of the fact that most users think Roundcube is a service like Gmail or Hotmail and aren’t aware who is actually running their email: the individual hosting providers using the Roundcube software for their webmail service.

## If you use Roundcube for reading and writing your emails

Please understand that

> **ROUNDCUBE IS NOT A SEVICE AND YOU DO NOT HAVE AN ACCOUNT WITH US!**

Roundcube is free software your email hosting provider has installed on their servers.

Therefore we do not send out email messages about upcoming account suspension or asking you to enter your email password anywhere. Do not follow any of those requests!

## If you are a hosting provider deploying Roundcube for webmail access

Please act now:

* Customize your Roundcube installation with your [individual logo](https://github.com/roundcube/roundcubemail/blob/master/config/defaults.inc.php#L393) and [product name](https://github.com/roundcube/roundcubemail/blob/master/config/defaults.inc.php#L597). Make sure to configure the [support_url](https://github.com/roundcube/roundcubemail/blob/master/config/defaults.inc.php#L389) and provide proper guidance for your existing and new users.

* Inform your users about the ongoing phishing attempts and make them aware about who is responsible for the email system they are using every day. There is no thing like a „Roundcube webmail service“.

* Secure your SMTP server to deny sending with arbitrary sender addresses. This is a general suggestion but also helps avoiding fraudulent messages being sent.

