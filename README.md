# Todo List API

This is a simple Todo List API built with TypeScript, providing user registration, login, and authorization functionality. The API allows users to create, manage, and update tasks efficiently.

## Features

- **User Authentication**: Register, login, and manage sessions securely.
- **Task Management**: Create, update, and delete tasks associated with a user.
- **Authorization**: Protect routes so that only authenticated users can manage their tasks.

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL (running in Docker)
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Containerization**: Docker for PostgreSQL
- **Version Control**: Git

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Docker](https://www.docker.com/) installed for running PostgreSQL
- PostgreSQL running in a container (you can use the provided `docker-compose.example.yml` file)

### Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/GioLop/todo-list-api.git
   ```

2. Change .env.example name into .env and set the variables, you should define this variables by your own, next values are just an example:
   ```shell
    # Shared Variables [Mandatory]
    POSTGRES_SERVICE_NAME=todo-db-service
    POSTGRES_DB=todo-db
    POSTGRES_USER=some_user_name
    POSTGRES_PASSWORD=some_user_password
    POSTGRES_PORT=5432

    # PGADMIN Variables [Optional if you want to use it]
    PGADMIN_DEFAULT_EMAIL=admin@email.com
    PGADMIN_DEFAULT_PASSWORD=some_admin_password
    PGADMIN_PORT=8080

    # API Variables [Mandatory]
    API_SERVICE_NAME=todo-api-service
    API_SERVICE_PORT=3000
    API_DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_SERVICE_NAME}:${POSTGRES_PORT}/todo-list?schema=public
    JWT_ACCESS_SECRET_KEY=some_secret_to_firm_tokens
    JWT_ACCESS_EXPIRATION_TIME=5m
    JWT_REFRESH_SECRET_KEY=8h
    JWT_REFRESH_EXPIRATION_TIME=5m
    SALT_ROUNDS=10
   ```
3. Start the db and api containers via npm script:
    ```shell
   npm run start:api-db
   ```
4. Now you could do requests to the api using you prefered HTTP client tool like postman or using curl in your shell.

### API Endpoints

#### Authentication
- POST api/v1/register: Register a new user.
- POST api/v1/login: Log in and obtain a JWT.

#### Tasks
- GET api/v1/tasks: Retrieve all tasks for the authenticated user.
- POST api/v1/tasks: Create a new task.
- PUT api/v1/tasks/:id: Update an existing task.
- DELETE api/v1/tasks/:id: Delete a task.

### curl
To make a request to your API via the shell (using curl), you can perform different HTTP requests like POST, GET, PUT, or DELETE. Below are examples for each type of request to your Todo List API:

1. Register a New User (POST /register)
    ```shell
    curl -X POST http://localhost:3000/api/v1/register \
    -H "Content-Type: application/json" \
    -d '{
    "username": "newuser",
    "password": "password123"
    }'
    ```

2. Login a User (POST /login)
    ```shell
    curl -X POST http://localhost:3000/api/v1/login \
    -H "Content-Type: application/json" \
    -d '{
    "username": "newuser",
    "password": "password123"
    }'
    ```

This will return a JWT token which you need to include in the header for subsequent requests.

3. Get All Tasks (GET api/v1/tasks)
    ```shell
    curl -X GET http://localhost:3000/api/v1/tasks \
    -H "Authorization: Bearer <your_jwt_token>"
    ```

4. Create a New Task (POST api/v1/tasks)
    ```shell
    curl -X POST http://localhost:3000/api/v1/tasks \
    -H "Authorization: Bearer <your_jwt_token>" \
    -H "Content-Type: application/json" \
    -d '{
    "title": "New Task",
    "description": "This is a new task."
    }'
    ```

5. Update an Existing Task (PUT api/v1/tasks/:id)
    ```shell
    curl -X PUT http://localhost:3000/api/v1/tasks/1 \
    -H "Authorization: Bearer <your_jwt_token>" \
    -H "Content-Type: application/json" \
    -d '{
    "title": "Updated Task",
    "description": "This task has been updated."
    }'
    ```

6. Delete a Task (DELETE api/v1/tasks/:id)
    ```shell
    curl -X DELETE http://localhost:3000/api/v1/tasks/1 \
    -H "Authorization: Bearer <your_jwt_token>"
    ```