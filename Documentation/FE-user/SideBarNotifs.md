# SideBarNotifs Component

The `SideBarNotifs` component represents a sidebar panel that displays notifications for the user.

## Usage

To use the `SideBarNotifs` component, import it into your React application and include it in your JSX code.

```jsx
import SideBarNotifs from './SideBarNotifs';

function App() {
  return (
    <div className="App">
      <SideBarNotifs user_data={...} hidden={...} />
    </div>
  );
}
```

## Dependencies

The `SideBarNotifs` component relies on the following dependencies:

- React: The React library for building user interfaces.
- axios: A promise-based HTTP client for making API requests.
- Icons: A component that renders different types of icons.
- toggleSideBarNotifs: A function imported from `../Global` that toggles the visibility of the notifications sidebar.
- useEffect: A hook from React that allows performing side effects in functional components.
- useState: A hook from React that allows managing state in functional components.

Make sure to have React, axios, and the required dependencies installed in your project before using the `SideBarNotifs` component.

## Functionality

The `SideBarNotifs` component includes the following functionality:

- It retrieves notifications for the user by making an API request to the specified endpoint.
- The `getUsersNotifs` function is used to simulate retrieving user notifications. You should replace it with your actual implementation to fetch the notifications data from your backend or any other data source.
- The component manages the state of the notifications list using the `useState` hook. Initially, the notifications list is empty.
- When the component is mounted, it makes an API request to fetch the user's notifications data and updates the state with the received data.
- The fetched notifications are stored in the local storage for future reference.
- The sidebar panel is rendered with the notifications list when the data is available.
- The sidebar panel includes a header with a close button and an icon indicating notifications.
- The list of notifications is rendered using the `NotifBox` component for each notification item.
- The visibility of the sidebar panel is controlled by the `hidden` prop. When `hidden` is `true`, the panel is hidden; otherwise, it is visible.
- The sidebar panel also provides an empty `<div>` element at the end.

Note: The code provided assumes the existence of an API endpoint that returns the user's notifications data. Make sure to adjust the API endpoint and response handling code to match your specific implementation.

Remember to adjust the code and add necessary styling to fit your project's requirements and design.
