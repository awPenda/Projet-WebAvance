## Session Management API Documentation

The Session Management API allows you to manage sessions, including adding, retrieving, updating, and deleting session information. This API provides endpoints to perform these operations on sessions stored in a database. The API is built using Node.js and Express.js and interacts with a MongoDB database using Mongoose.

### Prerequisites

Before using the Session Management API, ensure that you have the following:

- Node.js installed on your system
- MongoDB installed and running
- Required dependencies installed (Express, Mongoose)

### API Endpoints

#### Add Session

- Endpoint: `POST /session/add`
- Description: Creates a new session and adds it to the database.
- Request Body:
  - `allDay` (boolean): Indicates if the session lasts the entire day.
  - `start` (string): Start time of the session.
  - `end` (string): End time of the session.
  - `slotDuration` (number): Duration of each time slot in minutes.
  - `title` (string): Title or name of the session.
  - `url` (string): URL associated with the session.
  - `interactive` (boolean): Indicates if the session is interactive.
  - `extendedProps` (object): Additional properties of the session.
    - `description` (string): Description of the session.
    - `status` (string): Status of the session.
    - `priority` (string): Priority of the session.
    - `tutors` (array): Array of tutor IDs associated with the session.
    - `student` (string): ID of the student associated with the session.
- Response:
  - `201 Created`: Session added successfully. Returns a success message and the session object.

#### Get Sessions by Student

- Endpoint: `GET /session/student`
- Description: Retrieves all sessions associated with a specific student.
- Request Query Parameters:
  - `extendedProps.student` (string): ID of the student.
- Response:
  - `200 OK`: Sessions retrieved successfully. Returns an array of session objects matching the provided student ID.
  - `404 Not Found`: No sessions found for the student.
  - `500 Internal Server Error`: Error retrieving sessions.

#### Get Sessions by Tutors

- Endpoint: `GET /session/tutors`
- Description: Retrieves all sessions associated with a specific group of tutors.
- Request Query Parameters:
  - `extendedProps.tutors` (array): Array of tutor IDs.
- Response:
  - `200 OK`: Sessions retrieved successfully. Returns an array of session objects matching the provided tutor IDs.
  - `404 Not Found`: No sessions found for the tutors.
  - `500 Internal Server Error`: Error retrieving sessions.

#### Get Session by ID

- Endpoint: `GET /session/:id`
- Description: Retrieves session information by its ID.
- Request Parameters:
  - `id` (string): ID of the session to retrieve.
- Response:
  - `200 OK`: Session retrieved successfully. Returns the session object.
  - `404 Not Found`: Session not found.
  - `500 Internal Server Error`: Error retrieving session.

#### Update Session

- Endpoint: `PUT /session/:id`
- Description: Updates a session with new information.
- Request Parameters:
  - `id` (string): ID of the session to update.
- Request Body:
  - `fieldToUpdate` (string): Name of the field to update.
  - `updatedValue` (any): New value for the field to update.
- Response:
  - `200 OK`: Session updated successfully. Returns a success message and the updated session object.
  - `404 Not Found`: Session not found.
  - `500 Internal Server Error`: Error updating session.

#### Delete Session

- Endpoint: `DELETE /session/delete`
- Description: Deletes a session from the database.
- Request Body:
  - `ID` (string): ID of the session to delete.
  - `title` (string): Title of the session to delete (alternative to using ID).
- Response:
  - `200 OK`: Session deleted successfully. Returns a success message.
  - `404 Not Found`: Session not found.
  - `500 Internal Server Error`: Error deleting session.

### Error Responses

The Session Management API uses standard HTTP status codes to indicate the success or failure of each request. In case of an error, additional information may be provided in the response body.

- `400 Bad Request`: The request was invalid or missing required parameters.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.

### Usage

To use the Session Management API, follow these steps:

1. Install the required dependencies (`Express`, `Mongoose`).
2. Set up a MongoDB database and ensure it is running.
3. Create the necessary models and schemas for the `Session` entity using Mongoose.
4. Set up the API endpoints in your Express application, using the provided code.
5. Start your Node.js server and test the API endpoints using an API client like Postman or cURL.

### Conclusion

This documentation provides an overview of the Session Management API, including its endpoints, request/response formats, and error handling. With this API, you can perform various operations to manage sessions in your application. Feel free to customize the code and endpoints to fit your specific requirements.
