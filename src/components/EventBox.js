import React from 'react'

const EventBox = (props) => {
    const event = props.event;
    // console.log(event)
    return(

        <div className="event-box">

            <div className="event-image">
                <img src={event.image} alt={`${event.title}`} />
            </div>

            <div className="event-info">
                <h3>{event.title}</h3>
                <h4>{event.dateTime}</h4>
                <h4>{event.location}</h4>
                <hr />
                <p>{event.description}</p>
            </div>

        </div>
    );
}

export default EventBox;