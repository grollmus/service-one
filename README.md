# Service One

[![CircleCI](https://circleci.com/gh/grollmus/service-one.svg?style=svg)](https://circleci.com/gh/grollmus/service-one)

## Description

Template for Azure DevOps WebHooks. Based on [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
```

## Development

Use ngrok for a public url to your development service. Use `ngrok help` for usage.

```bash
# create public url on mac
$ npm run ngrok:mac

# or for windows
$ npm run ngrok:win
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Docker Compose File

```yaml
version: '2'
services:
  service-one:
    image: service-one
    container_name: service-one
    restart: always
    environment:
      - NODE_ENV=production
      - COLLECTIONURL=http://devops/
      - TOKEN=awesometoken
    ports:
      - 3000:3000
```

## License

[MIT licensed](LICENSE)
