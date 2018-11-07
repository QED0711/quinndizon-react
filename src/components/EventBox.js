import React from 'react'

const EventBox = (props) => {
    const event = props.event;
    // console.log(event)
    return(

        <div className="event-box">

            <div className="event-image">
                <img src={event.image} alt={`${event.title} image`} />
            </div>

            <div className="event-info">
                <h4>{event.title}</h4>
                <h5>{event.dateTime}</h5>
                <h5>{event.location}</h5>
                <hr />
                <p>{event.description}</p>
            </div>

        </div>
    );
}

export default EventBox;