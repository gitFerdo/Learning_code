# Self-Learning

## JWT Authentication with Node.js and Express

This repository demonstrates how to implement JWT (JSON Web Token) authentication in a Node.js and Express application.

### Technologies Used

- Node.js
- Express
- JWT Authentication

### Getting Started

#### Prerequisites

Make sure you have Node.js and npm installed on your system.

#### Installation

1. Clone the repository:

```sh
git clone https://github.com/gitFerdo/Learning_code.git
cd Learning_code
```

2. Install the dependencies:

```sh
npm install
```

#### Running the Application

To run the backend, use the following command:

```sh
npm run devStart
```

To run the authentication service, use:

```sh
npm run devStartAuth
```

#### Creating Secret Keys

You need to create secret keys for signing tokens. In your terminal, run:

1. Open terminal:

```sh
node
```

2. Generate a secret key:

```js
require("crypto").randomBytes(64).toString("hex");
```

3. Copy the generated key and add it to your `.env` file:

```
ACCESS_TOKEN_SECRET=<your_access_token_secret>
REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
```

#### API Endpoints

- **Login**: Authenticate a user and generate tokens.

```http
POST /login
Content-Type: application/json

{
    "username": "your_username"
}
```

- **Get Posts**: Retrieve posts of the authenticated user.

```http
GET /posts
Authorization: Bearer <ACCESS_TOKEN>
```

- **Refresh Token**: Generate a new access token using the refresh token.

```http
POST /token
Content-Type: application/json

{
    "token": "<REFRESH_TOKEN>"
}
```

- **Logout**: Invalidate the refresh token.

```http
DELETE /logout
Content-Type: application/json

{
    "token": "<REFRESH_TOKEN>"
}
```

#### How to Use

1. Go to `request.rest` file (if using REST Client in VS Code).
2. Send a request in the login section to get the tokens.
3. Copy the refresh token and paste it into the `token` field in the token and delete sections.
4. Send a request in the token section to see the access token being updated.
5. Send a request in the delete section to log out and invalidate the refresh token.
6. Send a request in the token section again to verify it returns a forbidden error (403).

### Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
