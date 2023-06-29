# ProfilePage Component

The `ProfilePage` component represents a user profile page with profile information and a booking functionality.

## Usage

To use the `ProfilePage` component, import it into your React application and include it in your JSX code.

```jsx
import ProfilePage from './ProfilePage';

function App() {
  const otherUserData = {
    username: "John Doe",
    description: "Lorem ipsum dolor sit amet",
    imageBuffer: "base64-encoded-image",
  };

  return (
    <div className="App">
      <ProfilePage
        other_user_data={otherUserData}
        date={"2023-06-30"}
        is_booked={false}
      />
    </div>
  );
}
```

## Props

The `ProfilePage` component accepts the following props:

- `other_user_data` (object, required): An object containing the user's profile data, including `username`, `description`, and `imageBuffer`.
- `date` (string): The date for which the session is being booked.
- `is_booked` (boolean): A flag indicating whether the session is already booked or not.

## Dependencies

The `ProfilePage` component relies on the following assets and dependencies:

- `defaultPP.png`: An image file representing the default profile picture.
- React: The React library for building user interfaces.

Make sure to import the `defaultPP.png` image and include it in the appropriate directory. Also, ensure that React is installed in your project.

## Functionality

The `ProfilePage` component includes the following functionality:

- It displays the user's profile picture, username, and description.
- It conditionally renders a "book a session" button based on the `is_booked` prop.
- When the "book a session" button is clicked, it stores the `other_user_data` in local storage and redirects the user to the booking page for the specified date and user.
- It handles the image source (`imgSrc`) by checking if `other_user_data.imageBuffer` is null. If it is null, it uses the default profile picture (`defaultPP.png`).
- It renders the user profile box with the profile picture, username, description, and booking button.

Note: The code provided assumes the existence of certain assets and functionalities. Make sure to review and modify the code as needed to fit your project's requirements and structure.
