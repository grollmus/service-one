# Service One

## Description

Template for Azure DevOps WebHooks. Based on [Nest](https://github.com/nestjs/nest) framework.

## Installation

```bash
$ npm install
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
      - NODE_ENV=productions
      - COLLECTIONURL=http://devops/
      - TOKEN=awesometoken
    ports:
      - 3000:3000
```

## License

[MIT licensed](LICENSE)
