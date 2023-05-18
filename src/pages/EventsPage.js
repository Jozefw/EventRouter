import React from 'react';
import {Link} from 'react-router-dom';


const EVENTS = [

    {id:'Event1',title:'Event One Details'},
    {id:'Event2',title:'Event Two Details'},
    {id:'Event3',title:'Event Three Details'},
    {id:'Event4',title:'Event Four Details'},
];
function EventsPage(){
    return(
        <>
        <h1>Events Page</h1>
        {EVENTS.map((event)=>{return(<li key={event.id}><Link to={`/events/${event.id}`}>{event.title}</Link></li>)})}
        </>
    )
}

export default EventsPage;