import React, { Component } from 'react';
import {Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import ArtPiecePage from './ArtPiecePage'


class Art extends Component {


    render() {
        let {art} = this.props

        let artTitleReplace = art.title.replace(' ', '-')

        let artPagePath = `/${artTitleReplace}`
        
        console.log(artPagePath)


        return ( <div>

                    {/* <Route path="/about" component={About} /> */}

                    <NavLink to={artPagePath}> {art.title} </NavLink>
                    
                    <p>{art.artistName}</p>


                    {/* <h6>{art.title}</h6> */}
                    <img src={art.picture} alt={art.title} height="350" width="350" />
                    
                </div>
        );
    }
}

export default Art