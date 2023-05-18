import react from 'react';
import {Link,useParams} from 'react-router-dom';


function EventDetailsPage(){
    const EventDetailPage = useParams();
    return(
        <>
            <h1>Event Details Page</h1>
            {EventDetailPage.eventId}
        </>
    )
}

export default EventDetailsPage;