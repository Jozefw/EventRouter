import { useLoaderData, json } from 'react-router-dom';
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
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
  //  throw new Response(JSON.stringify({message:'Could Not Fetch Data'}),{status:500})
  throw json(
    {message:'Could Not Fetch Data'},{status:500})

  } else { 
    
   return response;
  }
}
