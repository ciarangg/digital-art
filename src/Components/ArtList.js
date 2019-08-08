import React, { Component } from 'react';
import Art from './SubComponents/Art'

import Particles from 'react-particles-js'

class ArtList extends Component {

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

        let artList = theArtList.map((art, i) => {
            return (<Art key={art[i]} art={art}/> )
        })

        return ( <div>
                    <br />
                    {artList}
                    
                </div>
        );
    }
}

export default ArtList