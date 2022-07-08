CONTAINER-TAG=cvpaperchallenge/ascender-project-page

.PHONY: build-container
build-container:
	docker build --no-cache --tag ${CONTAINER-TAG} .

.PHONY: build
build:
	docker build --tag ${CONTAINER-TAG} .
	docker run --rm --volume $$(pwd)/src:/home/node/ascender/src --volume $$(pwd)/build:/home/node/ascender/build ${CONTAINER-TAG}

.PHONY: watch
watch:
	docker build --tag ${CONTAINER-TAG} .
	docker run --rm --volume $$(pwd)/src:/home/node/ascender/src --volume $$(pwd)/build:/home/node/ascender/build ${CONTAINER-TAG} --watch src/sass/main.scss --output-style compressed --output build
