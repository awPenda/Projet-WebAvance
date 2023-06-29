## Documentation for User Authentication API

This documentation provides an overview and descriptions of the functions and endpoints available in the User Authentication API.

### Introduction

The User Authentication API allows users to register, login, update their profile information, retrieve user data, refresh authentication tokens, and perform logout operations. The API supports user authentication using JSON Web Tokens (JWT) for secure communication.

### Prerequisites

- Node.js and npm installed on the server or development environment.
- MongoDB or another compatible database for storing user information.
- Express.js framework for building the API.

### Installation

To use the User Authentication API, follow these steps:

1. Clone the repository or download the source code files.
2. Install the required dependencies by running the command `npm install`.
3. Set up the database connection by providing the necessary configuration in the `.env` file or as environment variables.
4. Start the API server by running the command `npm start`.

### API Endpoints

#### Register User

- Endpoint: `POST /register`
- Description: Registers a new user with the provided information.
- Request Body:
  - `name` (string): User's name.
  - `student` (boolean): Indicates if the user is a student.
  - `email` (string): User's email address.
  - `password` (string): User's password.
- Response:
  - `200 OK`: User registered successfully.
  - `409 Conflict`: User already exists.
  - `500 Internal Server Error`: Error registering user.

#### User Login

- Endpoint: `POST /login`
- Description: Logs in a user with the provided credentials and generates authentication tokens.
- Request Body:
  - `email` (string): User's email address.
  - `password` (string): User's password.
- Response:
  - `200 OK`: User logged in successfully. Returns the authentication tokens.
  - `401 Unauthorized`: Invalid credentials.
  - `500 Internal Server Error`: Error logging in user.

#### User Logout

- Endpoint: `POST /logout`
- Description: Logs out a user by invalidating the authentication token.
- Request Body:
  - `email` (string): User's email address.
- Request Headers:
  - `Authorization` (string): Bearer token for user authentication.
- Response:
  - `200 OK`: User logged out successfully.
  - `400 Bad Request`: User is already logged out.
  - `404 Not Found`: User not found.
  - `500 Internal Server Error`: Error logging out user.

#### Refresh Token

- Endpoint: `POST /refresh-token`
- Description: Generates a new authentication token using a refresh token.
- Request Body:
  - `refreshToken` (string): Refresh token for generating a new authentication token.
- Response:
  - `200 OK`: New authentication and refresh tokens generated successfully.
  - `400 Bad Request`: Refresh token not provided.
  - `404 Not Found`: User not found.
  - `500 Internal Server Error`: Error refreshing token.

#### Update User Profile

- Endpoint: `PUT /user`
- Description: Updates the user's profile information.
- Request Body:
  - `name` (string, optional): Updated user's name.
  - `student` (boolean, optional): Updated student status.
  - `email` (string, optional): Updated email address.
  - `password` (string, optional): Current password for security verification.
  - `newPassword` (string, optional): Updated password.
  - `description` (string, optional): Updated user description.
  - `file` (file, optional): Updated user profile image.
- Request Headers:
  - `Authorization` (string): Bearer token for user authentication
- Response:
  - `200 OK`: User profile updated successfully. Returns the updated user object.
  - `400 Bad Request`: Incorrect password provided.
  - `404 Not Found`: User not found.
  - `500 Internal Server Error`: Error updating user.

#### Get User Profile

- Endpoint: `GET /user`
- Description: Retrieves the user's profile information.
- Request Headers:
  - `Authorization` (string): Bearer token for user authentication.
- Response:
  - `200 OK`: User profile retrieved successfully. Returns the user's ID, username, image, student status, email, and description.
  - `404 Not Found`: User not found.
  - `500 Internal Server Error`: Error retrieving user.

#### Get Specific User

- Endpoint: `GET /user/:id`
- Description: Retrieves the profile information of a specific user.
- Request Parameters:
  - `id` (string): ID of the user to retrieve.
- Response:
  - `200 OK`: User profile retrieved successfully. Returns the username, image, student status, email, and description of the specified user.
  - `404 Not Found`: User not found.
  - `500 Internal Server Error`: Error retrieving user.

#### Get All Users

- Endpoint: `GET /users`
- Description: Retrieves the profiles of all users or users with a specific student status.
- Query Parameters:
  - `student` (boolean, optional): Filters users based on student status (true/false).
- Response:
  - `200 OK`: Users retrieved successfully. Returns an array of user objects containing their ID, username, image, student status, email, and description.
  - `404 Not Found`: No users found.
  - `500 Internal Server Error`: Error retrieving users.

#### Delete User

- Endpoint: `DELETE /user`
- Description: Deletes a user account.
- Request Body:
  - `email` (string): User's email address.
- Response:
  - `200 OK`: User deleted successfully.
  - `404 Not Found`: User not found.
  - `500 Internal Server Error`: Error deleting user.

### Authentication and Authorization

The User Authentication API uses JSON Web Tokens (JWT) for authentication. Users receive an authentication token upon successful login, which they include in the `Authorization` header for subsequent authenticated requests using the Bearer token scheme.

To protect certain routes from unauthorized access, the `authenticateToken` middleware function is used. This middleware verifies the authenticity of the provided token and attaches the user ID to the request object (`req.userId`) for further processing.

### Error Handling

The API provides appropriate HTTP status codes and error messages in case of errors. Errors can occur due to validation failures, database issues, or other internal errors. Detailed error messages are logged for debugging purposes.

### Conclusion

The User Authentication API provides a set of endpoints for user registration, login, profile management, and user data retrieval. It utilizes JSON Web Tokens for secure authentication and supports various operations such as updating user information, refreshing tokens, and logging out.

Please note that this documentation provides an overview of the API's functionality, but actual usage may require additional setup and customization based on your specific requirements.
