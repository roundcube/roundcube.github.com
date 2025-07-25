.PHONY: all css serve-dev

all:
	@echo '# These are the available make targets'
	@grep '^[^#[:space:]\.].*:' Makefile | grep -v all: | tr -d :

css:
	npm install
	npx less --clean-css="--s1 --advanced"  styles/styles.less > styles/styles.min.css

serve-dev:
	docker run -it -p 4000:4000 -v $(pwd):/site -w /site library/ruby bash -c 'bundle install && bundle exec jekyll serve -H 0.0.0.0'
