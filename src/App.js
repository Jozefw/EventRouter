import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Error from "./pages/Error";

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const routes = createBrowserRouter([
  {path:'/', element:<Root></Root>,
  errorElement: <Error></Error>,
  children:[
    {path:'/events',element:<EventsPage></EventsPage>},
    {path:'/events/:eventId',element:<EventDetailPage></EventDetailPage>},
    {path:'/events/new',element:<NewEventPage></NewEventPage>},
    {path:'/events/:eventId/edit',element:<EditEventPage></EditEventPage>},
  ]},
 
])

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
