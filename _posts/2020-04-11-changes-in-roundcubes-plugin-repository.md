---
layout: article
title: Changes in Roundcube's Plugin Repository
tags: announcement
---

Roundcube's plugin repository is built around [Composer](https://getcomposer.org) which is used to install plugins and their dependencies. For many years we've been running our own plugin repository [from a fork](https://roundcube.net/news/2016/08/05/plugin-repository-pimped-up) of the most popular [packagist.org](https://packagist.org) service. Over time source code repositories like Github, Gitlab or Bitbucket as well as the Packagist codebase changed significantly which made it hard for us to maintain our fork. We therefore decided to give it up in favor of the well maintained packagist.org service.

The plan is to **move all Roundcube plugins currently registered at plugins.roundcube.net to packagist.org**. They're already Composer packages of type `roundcube-plugin` and thus don't need any changes in their code or structure. The [plugins.roundcube.net](https://plugins.roundcube.net) service remains active as a Composer repository but will be changed to read-only mode.

So what does this mean for you?

### For Roundcube users

For the consumer side using Composer to pull Roundcube plugins and updates to them, nothing changes.
You don't even need to change your `composer.json` file as all currently registered plugins will still be listed at plugins.roundcube.net while updates will be pulled from packagist.org which is the default repository for Composer anyway.

### For plugin developers

Unfortunately there's no way for us to feed all Roundcube plugins registered in our repository to packagist.org. Therefore, as a plugin developer you're required to [sign up at packagist.org](https://packagist.org/login/) and then register your plugin(s) there. It's as simple as it was on plugins.roundcube.net and only takes you a minute or two. We strongly encourage you to do so even if you're not currently pushing new releases to your plugin.

### Roadmap

We'd like to make the switch on **May 17th 2020**. On this day, the repository data of plugins.roundcube.net will be frozen and the current Packagist service will be replaced by a read-only clone that'll keep on serving requests from Composer to install Roundcube plugins. After that day, all updates and new registrations for Roundcube plugins need to be submitted to packagist.org. Once a plugin is listed at packagist.org, Roundcube's plugin repository will no longer list it in order to make packagist.org the only source.

We'd like to thank all plugin developers for their efforts and contributions. Only with the rich variety of plugins, Roundcube webmail became the powerful open source software product it is today.

