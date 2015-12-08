NAME=calebeverett/echoapp
VERSION=`git rev-parse --verify HEAD`
CORE_VERSION=HEAD

all: prepare build

prepare:
    git clone -o docker/soulpurpose.tar HEAD

build:
    docker build -t $(NAME):$(VERSION) --rm docker

tag_latest:
    docker tag $(NAME):$(VERSION) $(NAME):latest

push:
    docker push $(NAME):$(VERSION)