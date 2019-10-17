import React, { Component } from 'react';
import Art from './SubComponents/Art'

import {Route} from "react-router-dom";

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


        return ( <div className="lists" >
                    <br />

                    <Route  exact path='/art'  component={() => <div>{artList}</div> }/>
                    {/* {createRoute} */}
    
                    
                </div>
        );
    }
}

export default ArtList