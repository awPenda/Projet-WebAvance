# ListUsers Component

The `ListUsers` component is responsible for displaying a list of users (either students or tutors) available for a specific date. It includes a search bar to filter the users based on the date, time, and subject.

## Usage

To use the `ListUsers` component, import it into your React application and include it in your JSX code.

```jsx
import ListUsers from './ListUsers';

function App() {
  return (
    <div className="App">
      <ListUsers isStudent={true} />
    </div>
  );
}
```

## Dependencies

The `ListUsers` component requires the following dependencies:

- `ProfilePage`: A component that displays the profile information of a user. [Documentation](./ProfilePage.md)
- `Icons`: A component that renders different types of icons.
- `axios`: A library used for making HTTP requests.
- `React`: The core React library.
- `useEffect` and `useState` from `react`: Hooks used for handling side effects and managing state.

## Assets

The `ListUsers` component uses the following images:

- `fakeppdidi`: An image representing the profile picture of a user named Didi.
- `fakeppalex`: An image representing the profile picture of a user named Alex.
- `fakepplundy`: An image representing the profile picture of a user named Lundy.

Make sure to import these images and use them as needed.

## Props

The `ListUsers` component accepts the following prop:

- `isStudent` (boolean, required): Indicates whether the user is a student (`true`) or a tutor (`false`).

## Functionality

The `ListUsers` component includes the following functionality:

- It retrieves the date from the URL parameters using the `useParams` hook from `react-router-dom`.
- It formats the date and time values to be displayed in the search input if a date is provided.
- It fetches the list of users (students or tutors) available for a specific date using the `getUsersForSessionDate` function and the `axios` library.
- It renders the list of users as `ProfilePage` components.
- It allows users to filter the list of users based on the selected date, time, and subject using the search bar.
- It updates the list of users when the form is submitted using the `getUsersForSessionDate` function.
- It dynamically updates the list of users by re-rendering the component when the `userslist` state changes.
- It uses the `forceUpdate` function to force a re-render of the component when needed.

Note: Some parts of the code have been commented out or not fully implemented. Make sure to review and modify the code as needed for your specific use case.
