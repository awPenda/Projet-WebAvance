# Routes Documentation

The `App` component utilizes the `react-router-dom` package to define and handle different routes within the application. These routes determine which components to render based on the current URL path.

## Route Structure

The `Routes` component from `react-router-dom` is used to define the routing configuration. Within the `Routes` component, individual `Route` components are used to specify the path and corresponding component to render.

## Available Routes

The `App` component defines the following routes:
### Private Routes

Private routes are only accessible to logged-in users. They are wrapped inside a parent Route component with the element prop set to <PrivateRoutes />. The PrivateRoutes component handles the authentication and redirects the user if not logged in.

- Index Route:
    - Path: `/`
    - Component: `CalendarPage`
    - Description: Renders the `CalendarPage` component, which displays the main calendar view.

- Find Session Route:
    - Path: `/findsession/:date?`
    - Component: `ListUsers`
    - Description: Renders the `ListUsers` component, which shows a list of users available for sessions. An optional date parameter can be provided to filter the list.

- Session Route:
    - Path: `/session/:id`
    - Component: `SessionPage`
    - Description: Renders the `SessionPage` component, which displays details of a specific session based on the provided id parameter.

- Book Session Route:
    - Path: `/booksession/:date/:askedUser/:isbooked?/:id?`
    - Component: `BookSession`
    - Description: Renders the `BookSession` component, which allows the user to book a session with a specific user. The route accepts several optional parameters.

### Other Routes

These routes are accessible to all users, including non-logged-in users.

- Login Route:
    - Path: `/login`
    - Component: `ConnectionPage`
    - Description: Renders the `ConnectionPage` component, which provides a login form for users.

- Registration Route:
    - Path: `/registration`
    - Component: `RegistrationPage`
    - Description: Renders the `RegistrationPage` component, which allows users to register for an account.

- Landing Route:
    - Path: `/landing`
    - Component: `LandingPage`
    - Description: Renders the `LandingPage` component, which represents the landing page of the application.

- Sources Route:
    - Path: `/sources`
    - Component: `Sources`
    - Description: Renders the `Sources` component, which provides information about the sources used in the application.

## Note

The routes and their corresponding components are defined within the `Routes` component in the `App` component's JSX structure. Additional routes and components can be added or modified based on the application's requirements.