import React, { Component } from 'react';


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

        console.log(this.state.theEventsList)

        return ( <div>
                    <h1>EVENTS</h1>
                </div>
        );
    }
}

export default EventsList