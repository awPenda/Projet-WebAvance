# ConnectionPage Component

The `ConnectionPage` component is a React component that provides a login functionality for users. It allows users to enter their email and password to authenticate and log in to the application. The component also handles token management, user data retrieval, and token refreshing.

## Usage

To use the `ConnectionPage` component, import it into your React application and include it in your JSX code where login functionality is required. Pass the `hidden` prop to control the visibility of the component.

```jsx
import ConnectionPage from './ConnectionPage';

function App() {
  return (
    <div className="App">
      <ConnectionPage hidden={false} />
    </div>
  );
}
```

## Props

- `hidden` (boolean, optional): Determines whether the component is hidden or visible. When set to `true`, the component is hidden from view. Default value is `false`.

## Functionality

The `ConnectionPage` component provides the following functionality:

- User login: Users can enter their email and password and submit the login form to authenticate.
- Token storage: Upon successful login, the authentication token and refresh token are stored in the browser's localStorage.
- User data retrieval: After login, the component retrieves user data from the backend API using the authentication token.
- Token refreshing: An interval is set to automatically refresh the authentication token every 20 minutes (1200000 milliseconds).

## Dependencies

The component requires the following dependencies:

- React: The React library for building user interfaces.
- axios: A promise-based HTTP client for making API requests.
- createContext: A React utility function for creating a context object.
- useState: A React hook for managing state within a functional component.
- useEffect: A React hook for performing side effects in a functional component.

Make sure to install these dependencies before using the `ConnectionPage` component.

## Example

Here's an example of using the `ConnectionPage` component in a React application:

```jsx
import React from 'react';
import axios from 'axios';
import { displayRegisterPage } from '../Global';
import { createContext, useContext, useState, useEffect } from 'react';

export default function ConnectionPage({ hidden }) {
  // State for storing email and password
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Function to handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Sending login data to the backend
    axios
      .post('http://localhost:8000/login', { email, password })
      .then((response) => {
        // Retrieving the authentication token from the response
        const authToken = response.data.authToken;
        const refreshToken = response.data.refreshToken;

        // Storing the token in the localStorage
        localStorage.setItem('token', authToken);
        localStorage.setItem('refreshToken', refreshToken);

        // Retrieving user data
        fetchUserData();

        alert('Connected');
        window.location.href = '/';
      })
      .catch((error) => {
        // Handling login error
        console.error(error);
        window.alert('Login failed T-T');
      });
  };

  // Function to fetch user data from the backend
  const fetchUserData = () => {
    axios
      .get('http://localhost:8000/getUser', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        const userData = response.data;
        const { id, username, imageBuffer, student, email, description } = userData;

        // Storing user information in the localStorage
        localStorage.setItem('id', JSON.stringify(id));
        localStorage.setItem('name', JSON.stringify(username
