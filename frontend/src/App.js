import EventsDetailPage, {
  loader as eventDetailLoader,
  action as eventDeleteAction
} from "./Pages/EventDetailPage";
import EventsPage, { loader as eventLoader } from "./Pages/EventsPage";
import HomePage from "./Pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewEventsPage from "./Pages/NewEventPage";
import EditEventsPage from "./Pages/EditEventPage";
import RootLayout from "./Pages/RootLayout";
import {Action as newEventAction} from "./components/EventForm"
import ErrorPage from "./Pages/ErrorPage";
import EventRootLayout from "./Pages/EventsRootlayout";
import NewsletterPage from "./Pages/Newsletter";
import { action as newsLetterAction } from "./Pages/Newsletter";
import {action as logoutAction} from "./Pages/Logout";
import AuthenticationPage,{action as authenticateAction} from "./Pages/Authentication";
import { tokenLoader,checkAuthLoader} from "./util/auth";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <RootLayout></RootLayout>,
    id:"root",
    loader:tokenLoader,

    children: [
      {
        path: "/events",
        element: <EventRootLayout></EventRootLayout>,
        children: [
          {
            index: true,
            element: <EventsPage></EventsPage>,
            loader: eventLoader,
          },
          {
            path: ":eventId",
            loader: eventDetailLoader,
            id:"event-detail",
            children: [
              {
                index:true,
                element: <EventsDetailPage></EventsDetailPage>,
                action:eventDeleteAction,
               
              },
              {
                path: "edit",
                element: <EditEventsPage></EditEventsPage>,
                action:newEventAction,
              },
            ],
          },

          {
            path: "new",
            action:newEventAction,
            element: <NewEventsPage></NewEventsPage>,
            loader:checkAuthLoader,
          },
        ],
      },

      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path:"/newsletter",
        element:<NewsletterPage></NewsletterPage>,
        action:newsLetterAction
      },
      {
        path:"/auth",
        element:<AuthenticationPage></AuthenticationPage>,
        action:authenticateAction
      },
      {
        path:"/logout",
        action:logoutAction
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
