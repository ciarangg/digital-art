import React, { Component } from 'react';
import Artist from './SubComponents/Artist'
import Particles from 'react-particles-js'

import {Route} from "react-router-dom";
import MonaLisa from './IndividualArt/MonaLisa'


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
        let {theArtistList} = this.state

        let artistList = theArtistList.map((artist, i) => {
            return (<Artist key={artist[i]} artist={artist}/> )
        })

        return ( <div>
                    {artistList}
                </div>
        );
    }
}

export default ArtistList