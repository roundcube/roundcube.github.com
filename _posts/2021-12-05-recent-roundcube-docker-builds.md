---
layout: article
title: Recent Roundcube Docker Builds
tags: releases docker
---
After the release of Roundcube 1.5 and the recent security updates we
have also published new [Roundcube Docker images](https://hub.docker.com/r/roundcube/roundcubemail).
We'd like to highlight a few changes to the latest builds and give some general information about the
Roundcube Docker images:

## Version 1.5.1

After we removed spell.roundcube.net as the default spell checking service in version 1.5.0
the 1.5.1 images now come with aspell pre-installed and a new env variable named
`ROUNDCUBEMAIL_ASPELL_DICTS` to define aspell dictionaries to be installed for spell checking.
Adding them all by default would significantly increase the image size and thus they are installed
on demand.

For those who want to connect with an external spell checking API (`spell.roundcube.net` or
[self-hosted](https://hub.docker.com/r/roundcube/google-spell-pspell)) the env variable
`ROUNDCUBEMAIL_SPELLCHECK_URI` is available too.

See the [README](https://github.com/roundcube/roundcubemail-docker#configurationenvironment-variables)
file for detailed descriptions of these variables.

## Redis support built in

The new images for versions 1.4.12 and 1.5.1 now have the PHP Redis module included
which allows to configure Redis as caching engine or session storage backend.

## Image tagging schema

The Roundcube Docker images are available in three variants (`apache`, `fpm` and `fpm-alpine`)
and can be referenced by `<version>-<variant>`. In addition to the exact version we 
also publish tags like `1.4.x-<variant>` and `latest-<variant>` which can be used
to pull in automatic updates for the according major release branch.
The `latest` tag is an alias of `latest-apache`.

## Docker Compose, Kubernetes and Helm Charts

Have a look at our [examples](https://github.com/roundcube/roundcubemail-docker/tree/master/examples)
for complete setups with MariaDB or Postgres and Nginx using `docker-compose` or a set of Kubernetes
resources. Besides the plain containers and the docker-compose examples, there are also two
Helm Charts for Roundcube currently available:

 - [mlohr/roundcube](https://artifacthub.io/packages/helm/mlohr/roundcube)
 - [volker-raschek/roundcube-charts](https://artifacthub.io/packages/helm/volker-raschek/roundcube)

If you find bugs or have feature requests, please open issues at the [roundcubemail-docker](https://github.com/roundcube/roundcubemail-docker/issues) repository.
