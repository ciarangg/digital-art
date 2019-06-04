import React, { Component } from 'react';
import Artist from './SubComponents/Artist'


class ArtistList extends Component {

    constructor(props) {
        super(props);
        this.state = {theArtistList: []};
    }

    componentDidMount() {
        this.getArtistList();
      }

    getArtistList = () => {
        return fetch('./artists.json')
          .then(response => response.json())
          .then(theArtistList => this.setState({theArtistList}))
    }


    render() {

        console.log(this.state.theArtistList)


        return ( <div>
                    <h1>ARTIST</h1>
                </div>
        );
    }
}

export default ArtistList