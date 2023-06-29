# Notif Management API

The Notif Management API provides endpoints for managing notifications in your application. With this API, you can create, retrieve, update, and delete notifications for users.

## Installation

To use the Notif Management API, follow these steps:

1. Install the required dependencies (`Express`, `Mongoose`).
2. Set up a MongoDB database and ensure it is running.
3. Create the necessary models and schemas for the `Notif` entity using Mongoose.
4. Set up the API endpoints in your Express application, using the provided code.
5. Start your Node.js server and test the API endpoints using an API client like Postman or cURL.

## Endpoints

The Notif Management API provides the following endpoints:

- `POST /notif/create`: Create a new notification.
- `GET /notif/all`: Get all notifications for a user.
- `PUT /notif/:id`: Update a notification by ID.
- `DELETE /notif/:id`: Delete a notification by ID.

## Create a Notification

- Endpoint: `POST /notif/create`
- Description: Creates a new notification.
- Request Body:
  - `title` (string): Title of the notification.
  - `bodytext` (string): Body text of the notification.
  - `url` (string): URL associated with the notification.
  - `user_id` (string): ID of the user the notification is for.
- Response:
  - `201 Created`: Notification added successfully. Returns the created notification.
  - `500 Internal Server Error`: Error adding notification.

## Get All Notifications for a User

- Endpoint: `GET /notif/all`
- Description: Retrieves all notifications for a user.
- Query Parameters:
  - `user_id` (string): ID of the user.
- Response:
  - `200 OK`: Notifications retrieved successfully. Returns an array of notifications.
  - `404 Not Found`: Notifications not found.
  - `500 Internal Server Error`: Error retrieving notifications.

## Update a Notification

- Endpoint: `PUT /notif/:id`
- Description: Updates a notification by its ID.
- Path Parameters:
  - `id` (string): ID of the notification to update.
- Request Body:
  - `fieldToUpdate` (string): Field of the notification to update.
  - `updatedValue` (string): Updated value for the field.
- Response:
  - `200 OK`: Notification updated successfully. Returns the updated notification.
  - `404 Not Found`: Notification not found.
  - `500 Internal Server Error`: Error updating notification.

## Delete a Notification

- Endpoint: `DELETE /notif/:id`
- Description: Deletes a notification by its ID.
- Path Parameters:
  - `id` (string): ID of the notification to delete.
- Response:
  - `200 OK`: Notification deleted successfully.
  - `404 Not Found`: Notification not found.
  - `500 Internal Server Error`: Error deleting notification.

## Error Responses

The Notif Management API uses standard HTTP status codes to indicate the success or failure of each request. In case of an error, additional information may be provided in the response body.

- `400 Bad Request`: The request was invalid or missing required parameters.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.

### Conclusion

This documentation provides an overview of the Notif Management API, including its endpoints, request/response formats, and error handling. With this API, you can create, retrieve, update, and delete notifications for users in your application. Feel free to customize the code and endpoints to fit your specific requirements.
