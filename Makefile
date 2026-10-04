.PHONY: all css js serve-dev

define update_cache_buster
	hash=$$(sha256sum "$(1)" | cut -c1-8); \
	perl -0pi -e "s|(^[[:space:]]*$(2):.*?url: '/)[^']*(')|\$$1$(1)?v=$$hash\$$2|ms" _config.yml
endef

define update_sri
	hash=$$(openssl dgst -sha384 -binary "$(1)" | openssl base64 -A); \
	perl -0pi -e "s|(^[[:space:]]*$(2):.*?sri: ')[^']*(')|\$$1sha384-$$hash\$$2|ms" _config.yml
endef

all:
	@echo '# These are the available make targets'
	@grep '^[^#[:space:]\.].*:' Makefile | grep -v all: | tr -d :

css:
	npm install
	npx lessc --clean-css="--s1 --advanced" styles/styles.less > styles/styles.min.css
	$(call update_cache_buster,styles/styles.min.css,css)
	$(call update_sri,styles/styles.min.css,css)

js:
	npm install
	@for file in js/*.js; do \
		case "$$file" in \
			*.min.js) continue ;; \
		esac; \
		minified="$${file%.js}.min.js"; \
		name="$$(basename "$$file" .js)"; \
		npx uglifyjs "$$file" -c -m -o "$$minified"; \
		$(call update_cache_buster,$$minified,$$name); \
		$(call update_sri,$$minified,$$name); \
	done

serve-dev:
	docker run -it -p 4000:4000 -v $(PWD):/site -w /site library/ruby:3 bash -c 'bundle install && bundle exec jekyll serve -H 0.0.0.0'
