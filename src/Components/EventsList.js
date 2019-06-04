import React, { Component } from 'react';
import Event from './SubComponents/Event'

class EventsList extends Component {

    constructor(props) {
        super(props);
        this.state = {theEventsList: []};
    }

    componentDidMount() {
        this.getEventsList();
      }

    getEventsList = () => {
        return fetch('./events.json')
          .then(response => response.json())
          .then(theEventsList => this.setState({theEventsList}))
    }

    render() {
        let {theEventsList} = this.state

        let eventList = theEventsList.map((event, i) => {
            return (<Event key={event[i]} event={event}/> )
        })

        return ( <div>
                    <h1>EVENTS</h1>
                    {eventList}
                </div>
        );
    }
}

export default EventsList