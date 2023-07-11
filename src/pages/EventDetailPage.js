import EventItem from '../components/EventItem';
import {json,useParams,useLoaderData} from 'react-router-dom';


function EventDetailsPage(){
    const EventDetailPage = useParams();
    const eventDetailData = useLoaderData();
    console.log(EventDetailPage)
    return(
        <>
            <EventItem event={eventDetailData.event}></EventItem>
        </>
    )
}

export default EventDetailsPage;

export async function eventDetailsLoader(request,params){
    const paramId = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${paramId}`);

    if(!response.ok){
        throw json({message:'Could not fetch details for chosen event'},{status:500})
    }else{
        return response;
    }
}