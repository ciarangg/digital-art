import React, { Component } from 'react';
import Art from './SubComponents/Art'

import Particles from 'react-particles-js'

import {Route} from "react-router-dom";
import MonaLisa from './IndividualArt/MonaLisa'

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
                    {/* {artList} */}
                    <Route  exact path='/art'  component={() => <div>{artList}</div> }/>
                    <Route path="/art/mona-lisa" component={MonaLisa}/>
                    
                </div>
        );
    }
}

export default ArtList