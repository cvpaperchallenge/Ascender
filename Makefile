.PHONY: black
black:
	poetry run black --check src tests

.PHONY: black-lint
black-lint:
	poetry run black src tests

.PHONY: flake8
flake8:
	poetry run flake8 src tests

.PHONY: isort
isort:
	poetry run isort --check-only src tests

.PHONY: isort-lint
isort-lint:
	poetry run isort src tests

.PHONY: mypy
mypy:
	poetry run mypy src

.PHONY: test
test:
	poetry run pytest tests --cov=src --cov-report term-missing --durations 5

.PHONY: lint
lint:
	$(MAKE) black-lint
	$(MAKE) isort-lint

.PHONY: test-all
test-all:
	$(MAKE) black
	$(MAKE) flake8
	$(MAKE) isort
	$(MAKE) mypy
	$(MAKE) test