---
layout: article
title: Trac platform migrated to Github
date: 2016-03-20 22:23:28Z
---
After many ups and downs with our Trac platform which hosted our wiki and the ticket system for years now, we finally migrated the data over to Github where we already host the git repositories. **As of March 25th the trac.roundcube.net site will be shut down**. Starting today, the site is in read-only mode meaning that user logins and ticket reporting have been disabled already.

This means that submitting new tickets now goes through Github and so does the roadmap planning and overview. The entry point for that is our [Github project page](https://github.com/roundcube/roundcubemail).

## Tickets became Issues

Today we just migrated 4.8K tickets from the Trac database to [Github issues](https://github.com/roundcube/roundcubemail/issues), leaving the invalid and duplicate ones behind. Unfortunately the ticket numbers could not be kept and have all been re-assigned. The original trac ticket numbers are mentioned in the migrated issue body and can be used for searching. We'll also install a redirect service which will translate old Trac urls to the corresponding issue pages.

## Wiki migration in process

The wiki will also be translated into Github markdown pages. There's some manual reviewing involved in order to update or remove outdated information during this process. Please give us some more days to complete that task.

