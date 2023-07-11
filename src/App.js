import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import EventsPage,{loader as eventsLoader} from "./pages/EventsPage";
import EventDetailPage,{eventDetailsLoader} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";



// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const routes = createBrowserRouter([
  {path:'', element:<Root></Root>,
  errorElement: <Error></Error>,
  children:[
    {index: true ,element:<HomePage></HomePage>},
    {path: 'events' ,element:<EventsRoot></EventsRoot>,children:[
      {index:true,
        element:<EventsPage></EventsPage>, 
        loader: eventsLoader},
      {path:':eventId',element:<EventDetailPage></EventDetailPage>,loader:eventDetailsLoader},
      {path:'new',element:<NewEventPage></NewEventPage>},
      {path:':eventId/edit',element:<EditEventPage></EditEventPage>},
    ]},
  ]},
 
])

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
