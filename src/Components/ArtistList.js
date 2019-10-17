import React, { Component } from 'react';
import Artist from './SubComponents/Artist'
import {Route} from "react-router-dom";



class ArtistList extends Component {

    constructor(props) {
        super(props);
        this.state = {theArtistList: []};
    }

    componentDidMount() {
        this.getArtistList();
      }

    getArtistList = () => {
        return fetch('./art.json')
          .then(response => response.json())
          .then(theArtistList => this.setState({theArtistList}))
    }


    render() {
        let {theArtistList} = this.state

        let artistList = theArtistList.map((artist, i) => {
            return (<Artist key={artist[i]} artist={artist}/> )
        })


        return ( <div className="lists" >
                    {/* {artistList} */}

                    <Route  exact path='/artists'  component={() => <div>{artistList}</div> }/>
                    {/* {createRoute} */}
                </div>
        );
    }
}

export default ArtistList