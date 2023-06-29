# RegistrationPage Component

The `RegistrationPage` component represents a registration form for users to create an account.

## Usage

To use the `RegistrationPage` component, import it into your React application and include it in your JSX code.

```jsx
import RegistrationPage from './RegistrationPage';

function App() {
  return (
    <div className="App">
      <RegistrationPage />
    </div>
  );
}
```

## Dependencies

The `RegistrationPage` component relies on the following dependencies:

- React: The React library for building user interfaces.
- axios: A library for making HTTP requests.

Make sure to have React and axios installed in your project before using the `RegistrationPage` component.

## Functionality

The `RegistrationPage` component includes the following functionality:

- It captures and manages user input for the registration form fields: `name`, `student`, `email`, and `password`.
- When the registration form is submitted, it sends a POST request to the backend server with the user registration data.
- If the request is successful, it displays a success message to the user and redirects them to the login page.
- If the request fails, it displays an error message to the user.
- The user can select their role (`student` or `tutor`) using a dropdown menu.
- The user's input for the name, email, and password fields is validated to ensure they are not empty or invalid.
- The form includes a "Registration" button that triggers the registration process when clicked.
- It includes a "Connect here" link for users who already have an account to navigate to the login page.

Note: The code provided assumes the existence of a backend server that handles user registration and returns appropriate responses. Make sure to configure the backend server endpoint (`http://localhost:8000/register`) and the response handling logic to match your specific backend implementation.

Remember to adjust the code and add necessary styling to fit your project's requirements and design.
