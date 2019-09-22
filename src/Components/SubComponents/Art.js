import React, { Component } from 'react';
import {Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import ArtPiecePage from './ArtPiecePage'


class Art extends Component {

    


    render() {
        



        let {art} = this.props

        let artTitleReplace = art.title.replace(' ', '-')

        let artPagePath = `/${artTitleReplace}`
        
        // console.log(artPagePath)


        return ( <div>

                    <NavLink className="nav-link" to="/bask"> <img src={art.picture} alt={art.title} title={art.title} height="350" width="350" /> </NavLink>
               
                </div>
        );
    }
}

export default Art