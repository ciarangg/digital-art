import React, { Component } from 'react';
import Event from './SubComponents/Event'

class EventsList extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {theEventsList: []};
    // }

    // componentDidMount() {
    //     this.getEventsList();
    //   }

    // getEventsList = () => {
    //     return fetch('./events.json')
    //       .then(response => response.json())
    //       .then(theEventsList => this.setState({theEventsList}))
    // }

    render() {

        console.log(this.props)
        

        // let {theEventsList} = this.state

        // let eventList = theEventsList.map((event, i) => {
        //     return (<Event key={event[i]} event={event}/> )
        // })

        return ( <div>
                    <h1>hello</h1>
                    {/* {eventList} */}
                </div>
        );
    }
}

export default EventsList