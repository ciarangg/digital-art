import React, { Component } from 'react';


class Event extends Component {


    render() {
        let {event} = this.props
        console.log(event)

        return ( <div>
                    <h4>{event.name}</h4>
                    <img src={event.picture} alt={event.name} title={event.name} height="350" width="350" />
                    <p>{event.date}</p>
                </div>
        );
    }
}

export default Event