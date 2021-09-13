# Description

Basic chat example with node using NestJS and Websocket

## Dependencies

- NestJS Websockets and platform-socket.io
    `npm i --save @nestjs/websockets @nestjs/platform-socket.io`

- Socket.io types only for dev enviroment:
    `npm i --save-dev @types/socket.io`

- Servidor web para rodar a aplicação
    `npm i -g http-server`

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

## Running http server

- Acessar a pasta client:
    `cd .\src\client\`

- Rodar o HTTP server
    `http-server -c1`

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Mysliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
