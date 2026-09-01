VERSION ?= dev
IMAGE := quay.io/kaplan-infra/kaplan-web

.PHONY: build push login publish render

build:
	podman build --pull -f deploy/Containerfile -t $(IMAGE):$(VERSION) .

push:
	podman push $(IMAGE):$(VERSION)

login:
	podman login quay.io

publish: login build push

render:
	kustomize build deploy
