import React, { Component } from 'react';
import Art from './SubComponents/Art'

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

        console.log(this.state.theArtList)

        return ( <div>
                    <h1>ART</h1>
                    <Art />
                </div>
        );
    }
}

export default ArtList