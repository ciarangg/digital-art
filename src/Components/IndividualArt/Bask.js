import React, { Component } from 'react';


class Bask extends Component {

    constructor(props) {
        super(props);
        this.state = {theArtList: []};
    }

    componentDidMount() {
        this.getArtList();
      }

    getArtList = () => {
        return fetch('./art.json')
          .then(response => response.json())
          .then(theArtList => this.setState({theArtList}))
    }


    render() {

        let {theArtList} = this.state

        let bask = theArtList[0]

        console.log(bask)
        

        return ( <div>
                    <h1>Bask</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
        );
    }
}

export default Bask