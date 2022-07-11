CONTAINER-TAG=cvpaperchallenge/ascender-project-page

.PHONY: build-container
build-container:
	docker build --no-cache --tag ${CONTAINER-TAG} .
	docker run --rm --volume $$(pwd):/home/node/ascender ${CONTAINER-TAG}

.PHONY: build
build:
	docker run --rm --volume $$(pwd):/home/node/ascender ${CONTAINER-TAG} run build

.PHONY: watch
watch:
	docker run --rm --volume $$(pwd):/home/node/ascender ${CONTAINER-TAG} run watch

.PHONY: shell
shell:
	docker run --rm --volume $$(pwd):/home/node/ascender --entrypoint bash --interactive --tty ${CONTAINER-TAG}
