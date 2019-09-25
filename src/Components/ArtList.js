import React, { Component } from 'react';
import Art from './SubComponents/Art'

import Particles from 'react-particles-js'

import {Route} from "react-router-dom";
import MonaLisa from './IndividualArt/MonaLisa'
import Bask from './IndividualArt/Bask'

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

        // console.log(theArtList)

        let artList = theArtList.map((art, i) => {
            return (<Art key={art[i]} art={art}/> )
        })

        let createRoute = theArtList.map((art, i) => {
            let path = `/art/${art.path}`
            let component = art.title.replace(" ", "")
            console.log(component)
            return (<Route path={path} component={component}/>)
        })

        console.log(createRoute)

        return ( <div>
                    <br />

                    {/* {artList} */}
                    <Route  exact path='/art'  component={() => <div>{artList}</div> }/>

                    {/* <Route path="/art/mona-lisa" component={MonaLisa}/>
                    <Route path="/art/bask" component={Bask}/> */}

                    {createRoute}

                    

                    
                    
                </div>
        );
    }
}

export default ArtList