# Calendar Component

The `CalendarPage` component is responsible for rendering a calendar using the `@fullcalendar/react` library. It displays events fetched from the backend and allows users to interact with the calendar.

## Dependencies

The following dependencies are required for the `CalendarPage` component:

- `react`
- `@fullcalendar/react`
- `@fullcalendar/interaction`
- `@fullcalendar/daygrid`
- `@fullcalendar/timegrid`
- `@fullcalendar/list`
- `axios`

Make sure to install these dependencies before using the `CalendarPage` component.

## Usage

To use the `CalendarPage` component, import it into your application and include it within your component hierarchy. Here's an example:

```jsx
import CalendarPage from './CalendarPage';

function App() {
  return (
    <div>
      {/* Other components */}
      <CalendarPage />
      {/* Other components */}
    </div>
  );
}

export default App;
```

## Functionality

The `CalendarPage` component provides the following functionality:

- Fetches events from the backend based on the user's ID and role (student/tutor).
- Renders a calendar using the `@fullcalendar/react` library.
- Allows users to interact with the calendar, such as clicking on dates and events.
- Provides navigation options to switch between different views (month, week, day, etc.).
- Displays event details when clicked on.
- Handles responsive behavior for smaller screen sizes.

## Notes

- The `axiosGetEvents` function fetches events from the backend and returns them in a specific format. Modify this function to match your backend API and data structure.
- The `events` variable holds the fetched events and is used to render the calendar. Modify this variable or update it dynamically based on your requirements.
- You may need to adjust the API URLs in the `axios.get` calls to match your backend endpoints.
- Customize the rendering, styling, and event handling as needed by referring to the official FullCalendar documentation.
- Make sure to include the required CSS files for FullCalendar styles in your application.

For more information and detailed usage, refer to the FullCalendar documentation and their GitHub repository.
