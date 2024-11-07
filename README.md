# Todo List

This is a simple Todo List Web App built with TypeScript, providing user registration, login, and authorization functionality. It has two main parts the API and the UI.

## Poject URL
roadmap(https://roadmap.sh/projects/todo-list-api)

## API Features

- **User Authentication**: Register, login, and manage sessions securely.
- **Task Management**: Create, update, and delete tasks associated with a user.
- **Authorization**: Protect routes so that only authenticated users can manage their tasks.

## API Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL (running in Docker)
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Containerization**: Docker for PostgreSQL
- **Version Control**: Git
- **UI**: React, Vite (Still in progress)

## API Getting Started

### Prerequisites

- [NodeJS ^18.x](https://nodejs.org/) installed
- [Docker](https://www.docker.com/) installed for running PostgreSQL
- PostgreSQL running in a container (you should use the provided `docker-compose.yml` file)

### Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/GioLop/todo-list-api.git
   ```

2. Change .env.example name into .env and set the variables, you should define this variables by your own, next values are just the example:
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
- GET api/v1/todos: Retrieve all tasks for the authenticated user.
- POST api/v1/todos: Create a new task.
- PUT api/v1/todos/:id: Update an existing task.
- DELETE api/v1/todos/:id: Delete a task.

### curl
To make a request to your API via the shell (using curl), you can perform different HTTP requests like POST, GET, PUT, or DELETE. Below are examples for each type of request to your Todo List API:

1. Register a New User (POST /api/v1/register)
    ```shell
    curl -X POST http://localhost:3000/api/v1/register \
    -H "Content-Type: application/json" \
    -d '{
            "username": "newuser",
            "password": "password123"
        }'
    ```

2. Login a User (POST /api/v1/login)
    ```shell
    curl -X POST http://localhost:3000/api/v1/login \
    -H "Content-Type: application/json" \
    -d '{
            "username": "newuser",
            "password": "password123"
        }'
    ```

3. Refresh Token (POST /api/v1/refresh-token)
    ```shell
    curl -X POST http://localhost:3000/api/v1/refresh-token \
    -H "Content-Type: application/json" \
    -d '{
            "refreshToken": <your_jwt_token>
        }'
    ```

These first three enpoints will return a JWT token which you need to include in the header for subsequent requests.

4. Get All Tasks (GET /api/v1/todos)
    ```shell
    curl -X GET http://localhost:3000/api/v1/todos \
    -H "Authorization: Bearer <your_jwt_token>"
    ```

5. Create a New Task (POST /api/v1/todos)
    ```shell
    curl -X POST http://localhost:3000/api/v1/todos \
    -H "Authorization: Bearer <your_jwt_token>" \
    -H "Content-Type: application/json" \
    -d '{
            "title": "New Task",
            "description": "This is a new task."
        }'
    ```

6. Update an Existing Task (PUT /api/v1/todos/:id)
    ```shell
    curl -X PUT http://localhost:3000/api/v1/todos/1 \
    -H "Authorization: Bearer <your_jwt_token>" \
    -H "Content-Type: application/json" \
    -d '{
            "title": "Updated Task",
            "description": "This task has been updated.",
            "taskState": "<PENDING> | <IN_PROGRESS> | <DONE>"
        }'
    ```

7. Delete a Task (DELETE /api/v1/todos/:id)
    ```shell
    curl -X DELETE http://localhost:3000/api/v1/todos/1 \
    -H "Authorization: Bearer <your_jwt_token>"
    ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.