# NotifBox Component

The `NotifBox` component is a notification box that displays a title, body, and a link. It includes different icons and styles based on the priority of the notification.

## Usage

To use the `NotifBox` component, import it into your React application and include it in your JSX code.

```jsx
import NotifBox from './NotifBox';

function App() {
  return (
    <div className="App">
      <NotifBox
        id={1}
        priority={"0"}
        title={"Notification Title"}
        body={"Notification Body"}
        url={"https://example.com"}
      />
    </div>
  );
}
```

## Dependencies

The `NotifBox` component requires the following dependencies:

- `Icons`: A component that renders different types of icons.

Make sure to import the `Icons` component and use it as needed.

## Props

The `NotifBox` component accepts the following props:

- `id` (number, required): The unique identifier of the notification box.
- `priority` (string, required): The priority level of the notification. It can be "0" for informational notifications or any other value for warning notifications.
- `title` (string, required): The title of the notification.
- `body` (string, required): The body content of the notification.
- `url` (string, required): The URL to redirect when the link is clicked.

## Functionality

The `NotifBox` component includes the following functionality:

- It displays different icons (`info_ico` or `warning_ico`) based on the priority level of the notification.
- It applies different border colors (`info_color_notif` or `warning_color_notif`) based on the priority level of the notification.
- It generates a unique key for each `NotifBox` component based on the `id` prop.
- It expands or collapses the notification body when the notification box is clicked using the `expand` function.
- It redirects to the specified URL when the link is clicked using the `redirectlink` function.
- It renders the notification box with the title, body, link, and trash icon.

Note: Some parts of the code have been commented out or not fully implemented. Make sure to review and modify the code as needed for your specific use case.
