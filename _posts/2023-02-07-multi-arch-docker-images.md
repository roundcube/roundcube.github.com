---
layout: article
title: Multi-arch Docker Images for Roundcube
tags: releases docker
---
With the latest release of Roundcube webmail we proudly announce that the Docker images
published under [rouncube/roundcubemail](https://hub.docker.com/r/roundcube/roundcubemail/)
are now multi-platform and can be run on the following architectures:

* linux/386
* linux/amd64
* linux/arm/v6
* linux/arm/v7
* linux/arm64
* linux/ppc64le
* linux/s390x

The multi-arch builds have been a feature request for a long time and finally became possible with 
the power of Github actions and the much appreciated contribution by 
[William Desportes](https://github.com/williamdes) and [Montgomery Auber](https://www.linkedin.com/in/montgomery-auber-658405259/)

Starting with version 1.6.0 all Docker images will now be released multi-arch enabling Roundcube to
run on Raspberry Pi, M1 Macs, AWS EC2 Graviton and many other environments without custom builds.
