import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';


function EventsPage() {
  const eventsData = useLoaderData();
  if(eventsData.isError){
    console.log(eventsData)
    return<p>{eventsData.message}</p>
  }
  const events = eventsData.events;
  return (
      <EventsList events={events} />
  );
}
export default EventsPage;

export async function loadEventData(){
  const response = await fetch('http://localhost:8080/esvents');

  if (!response  .ok) {
   throw{isError:true, message:"Could not fetch data"}
  } else {
    
   return response;
  }
}
