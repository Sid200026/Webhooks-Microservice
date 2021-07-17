# Webhooks-Microservice

Webhooks Microservice using Moleculer and a backend using Express

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Sid200026/Webhooks-Microservice
   ```
2. Change directory
   ```sh
   cd Webhooks-Microservice
   ```
3. Create a `.env` file with the following content

   ```env
   PORT=<Port on which to run the application>
   DATABASE_USER=<User of the database>
   DATABASE_PASSWORD=<Password of the database>
   DATABASE_NAME=<Name of database to be used>
   DATABSE_HOST=<URL on which PostgreSQL server is running Eg: 127.0.01, database ( if using docker )>
   DATABASE_PORT=<Port on which database is running Eg. 5432>
   ```

   For example, if installing the application via docker, following is a valid env file

   ```env
   PORT=8000
   DATABASE_USER=postgres
   DATABASE_PASSWORD=********
   DATABASE_NAME=postgres
   DATABSE_HOST=database
   DATABASE_PORT=5432
   ```

#### Via NPM

1. Install the dependencies

   ```sh
   npm install
   ```

2. Run the server

   ```sh
   npm run dev
   ```

#### Via Docker

1. Built the docker service

   ```sh
   docker-compose build
   ```

2. Attach container to each of the services

   ```sh
   docker-compose up -d
   ```
