# Deliver Jokes Microservice

This microservice delivers a random joke on request by a user from a web page. Users can select the type of joke from an up-to-date list of available joke types.

## Technologies Used
- Nest.js
- MySQL
- Docker
- Swagger

## Setup Instructions

### Prerequisites
- Node.js
- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ratheshan03/deliver-jokes-microservices.git
   cd deliver-jokes-microservices

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

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# .end variables
PORT=3000
DB_HOST=mysql_db
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=jokes_service_db

## Swagger API Documentation
Access the Swagger UI to explore the API documentation:
URL: http://localhost:3000/api

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License
Nest is [MIT licensed](LICENSE).