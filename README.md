# Node.js User Authentication & Authorization API

This is a secure REST API for user authentication and authorization built with Node.js, Express, Mongoose, and JWT.

## Features

- **MVC Architecture**: Clean and organized folder structure.
- **User Registration**: Secure registration with password hashing using bcrypt.
- **User Login**: JWT-based authentication.
- **Protected Routes**: Middleware to verify Bearer tokens.
- **Error Handling**: Consistent error response format.
- **Database**: MongoDB integration with Mongoose.

## Tech Stack

- Node.js
- Express.js
- Mongoose (MongoDB)
- JSON Web Token (JWT)
- Bcrypt.js
- Dotenv
- Cors

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed locally or a MongoDB Atlas URI

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory (one is already provided) and set your variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/my-auth-app
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

3. Start the server in development mode:
   ```bash
   npm run dev
   ```

## API Endpoints

### Auth Routes

- **POST /api/auth/register**
  - Register a new user.
  - Body: `{ "username": "johndoe", "email": "john@example.com", "password": "password123" }`

- **POST /api/auth/login**
  - Authenticate user and get token.
  - Body: `{ "email": "john@example.com", "password": "password123" }`

### User Routes (Protected)

- **GET /api/users/me**
  - Get current user's profile.
  - Headers: `Authorization: Bearer <token>`

## Documentation

A Postman collection JSON file (`Postman_Collection.json`) is included in the root directory for easy testing.
