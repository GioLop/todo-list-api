# Todo List

This is a simple Fullstack Todo List Web App built with TypeScript, providing user registration, login, and authorization functionality.

## Poject URL
roadmap(https://roadmap.sh/projects/todo-list-api)

## Table of Contents
1. [Features](#features)
2. [Tech Stack](##techstack)
3. [Getting Started](#gettingStarted)
4. [API Endpoints](#apiendpoints)
5. [UI Screens](#uiscreens)

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
- **UI**: React, Vite (Still in progress)

## Getting Started

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

    # UI Variables
    UI_SERVICE_NAME=ui_service_name
    UI_SERVICE_PORT=8000
   ```
3. Start the fullsatck project via npm script:
    ```shell
    npm run start:all
    ```
4. In your shell you will see the local urls for the ui and the api services, for example:
    ```shell
        ui_service   |   ➜  Local:   http://localhost:8000/
        ui_service   |   ➜  Network: http://172.19.0.5:8000/
        api_service  | Server listening on http://localhost:3000
    ```

5. You could also do requests to the api service using you prefered HTTP client tool like postman or using curl in your shell.

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

### UI Screens

#### Login
![login](https://github.com/user-attachments/assets/f0779ce2-cdcd-4e2c-8ae8-7303b924151b)

#### Register
![register](https://github.com/user-attachments/assets/bccdd87d-b01b-46f4-8e58-8f6a616a0748)

#### Tasks List
![tasks](https://github.com/user-attachments/assets/26035acf-3e03-4952-a9ff-ef4bacb6d02c)

#### Add Tasks
![add_task](https://github.com/user-attachments/assets/e0b77164-52e1-4cb1-b7a5-bf39fe07da80)

#### Edit Tasks
![edit_1](https://github.com/user-attachments/assets/5fc037e5-47e1-461e-8c73-31d74fb033ee)
![Edit_2](https://github.com/user-attachments/assets/b33c607e-8198-489e-957e-6817d1953f5d)

#### Delete Task
![edit_1](https://github.com/user-attachments/assets/5fc037e5-47e1-461e-8c73-31d74fb033ee)

#### Update Status
![update_status](https://github.com/user-attachments/assets/37b98cd2-7f49-4900-985f-17a511fa1b19)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
