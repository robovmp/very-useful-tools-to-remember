# Very Useful Tools To Remember

The project consists of an API to store useful tools , providing query forms.

## Stack used

**Back-end:** Node, NestJs

**Database:** Postgresql

## Instalação

Install very-useful-tools-to-remember with npm

```bash
    git clone git@github.com:robovmp/very-useful-tools-to-remember.git
    cd very-useful-tools-to-remember
    npm install or npm i
```

PS: You need a postgres database running on your operating system.

## Environment variables

To run this project, you will need to add the following environment variables to your .env, exemple:

`DATABASE_URL` = `postgresql://janedoe:mypassword@localhost:26257/mydb?schema=public`

## API Documentation

#### Return swagger GUI

```http
  GET /swagger
```

## Running the tests

To run the tests, run the following command

```bash
  npm run test
```

## Deploy with Docker

To deploy this project run

```bash
  docker-compose up
```

## Autores

- [@robovmp](https://github.com/robovmp)
