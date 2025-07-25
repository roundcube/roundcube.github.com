roundcube.github.io
===================

GitHub Pages repository for the Roundcube project website.

The pages are rendered with Jekyll and kindly hosted by github.

## Run it locally

... with Docker:

```
docker run -it -p 4000:4000 -v $(pwd):/site -w /site library/ruby bash -c 'bundle install && bundle exec jekyll serve -H 0.0.0.0'
```
