uname_S := $(shell uname -s)

all: check-env-file build up

build:
	docker-compose build
	@echo "Application has been built succesfully."

up:
	docker-compose down -v
	docker-compose up -d

cli:
	docker-compose run --rm app bash

logs:
	docker-compose logs -f

unit-test:
	docker-compose run --rm -w /app app bash -c "yarn test"

lint:
	docker-compose run --rm -w /app app bash -c "yarn lint"

local:
	docker-compose run --rm -w /app app bash -c "yarn local"

stage-deploy:
	docker-compose run --rm -w /app app bash -c "yarn deploy stage"

stage-delete:
	docker-compose run --rm -w /app app bash -c "yarn delete stage"

check-env-file:
	@test -f .env || { echo ".env file does not exists. You can create one starting from env.template"; exit 1; }
