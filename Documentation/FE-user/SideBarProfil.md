# SideBarProfile Component

The `SideBarProfile` component represents a sidebar panel that displays the user's profile information and provides options to edit the profile or log out.

## Usage

To use the `SideBarProfile` component, import it into your React application and include it in your JSX code.

```jsx
import SideBarProfile from './SideBarProfile';

function App() {
  return (
    <div className="App">
      <SideBarProfile user_data={...} hidden={...} />
    </div>
  );
}
```

## Dependencies

The `SideBarProfile` component relies on the following dependencies:

- React: The React library for building user interfaces.
- Icons: A component that renders different types of icons.
- defaultPP: An image file representing the default profile picture.
- toggleSideBarProfile: A function imported from `../Global` that toggles the visibility of the profile sidebar.
- displayEditProfile: A function imported from `../Global` that displays the edit profile functionality.
- axios: A promise-based HTTP client for making API requests.
- useEffect: A hook from React that allows performing side effects in functional components.
- useState: A hook from React that allows managing state in functional components.

Make sure to have React, axios, and the required dependencies installed in your project before using the `SideBarProfile` component.

## Functionality

The `SideBarProfile` component includes the following functionality:

- The `handleLogout` function is called when the user clicks the "Log out" button. It sends a POST request to the logout endpoint on the backend to log out the user. After successful logout, the user's information is removed from the local storage, and the page is redirected to the home page.
- The visibility of the sidebar panel is controlled by the `hidden` prop. When `hidden` is `true`, the panel is hidden; otherwise, it is visible.
- The sidebar panel includes a close button, a user profile picture, a "Log out" button, and the user's name, email, and description.
- If the user has a profile picture (`user_data.pp`), it is displayed; otherwise, the default profile picture is used.
- The "Log out" button triggers the `handleLogout` function when clicked.
- The user's name, email, and description are displayed in the sidebar panel.
- The "Edit Profile" button allows the user to edit their profile. Clicking on it triggers the `displayEditProfile` function.
- The `EditProfile` component is rendered below the user's profile information, providing the functionality to edit the profile.

Note: The code provided assumes the existence of an API endpoint for logging out the user. Make sure to adjust the API endpoint and response handling code to match your specific implementation.

Remember to adjust the code and add necessary styling to fit your project's requirements and design.
