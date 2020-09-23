install:
	npm install
brain-prime:
	node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .