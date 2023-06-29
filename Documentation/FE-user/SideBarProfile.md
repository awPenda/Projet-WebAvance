# SideBarProfile Component

The `SideBarProfile` component is a React component that provides a user profile editing functionality. It allows users to update their profile information, including name, email, password, profile picture, student status, and description.

## Usage

To use the `SideBarProfile` component, import it into your React application and include it in your JSX code where profile editing functionality is required. Pass the `hidden` prop to control the visibility of the component.

```jsx
import SideBarProfile from './SideBarProfile';

function App() {
  return (
    <div className="App">
      <SideBarProfile hidden={false} />
    </div>
  );
}
```

## Props

- `hidden` (boolean, optional): Determines whether the component is hidden or visible. When set to `true`, the component is hidden from view. Default value is `false`.

## Functionality

The `SideBarProfile` component provides the following functionality:

- Profile editing: Users can enter and update their name, email, password, new password, student status, and description.
- Profile picture upload: Users can select and upload a new profile picture.
- Form submission: When the form is submitted, the component sends a PUT request to the backend API to update the user's profile information.
- Token authentication: The authentication token is included in the request headers for authorization.
- User data retrieval: After updating the profile, the component fetches the updated user data from the backend API and stores it in the localStorage.

## Dependencies

The component requires the following dependencies:

- React: The React library for building user interfaces.
- useState: A React hook for managing state within a functional component.
- axios: A promise-based HTTP client for making API requests.

Make sure to install these dependencies before using the `SideBarProfile` component.

## Example

Here's an example of using the `SideBarProfile` component in a React application:

```jsx
import React, { useState } from 'react';
import { displayEditProfile } from '../Global';
import axios from 'axios';

export default function SideBarProfile({ hidden }) {
  // State for storing profile information
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [student, setStudent] = useState(true);
  const [image, setProfilePic] = useState(null);
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('newPassword', newPassword);
      formData.append('student', student);
      formData.append('description', description);
      if (image) {
        formData.append('image', image);
      }

      const response = await axios.put(`http://localhost:8000/updateUser`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        fetchUserData();
        const data = response.data;
        console.log(data.message);
        console.log(name, email, password, newPassword, student, image, description);
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.log(name, email, password, newPassword, student, image, description);
      console.error('Error updating user:', error.message);
   
