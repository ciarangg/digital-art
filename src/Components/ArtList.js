import React, { Component } from 'react';
import Art from './SubComponents/Art'


import {Route} from "react-router-dom";


import Picture from './IndividualArt/Picture'

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

        // let createRoute = theArtList.map((art, i) => {
        //     let path = `/art/${art.path}`
        //     let component = art.title.replace(" ", "")
        //     console.log(component)
        //     return (<Route path={path} component={component}/>)
        // })

        let createRoute = theArtList.map((art, i) => {
            let path = `/art/${art.path}`
            return (<Route path={path} component={Picture}/>)
        })

        return ( <div>
                    <br />

                    <Route  exact path='/art'  component={() => <div>{artList}</div> }/>
                    {createRoute}
    
                    
                </div>
        );
    }
}

export default ArtList