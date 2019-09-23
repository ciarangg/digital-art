import React, { Component } from 'react';
import {Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import ArtPiecePage from './ArtPiecePage'


class Art extends Component {

    


    render() {

        let {art} = this.props

        // let artTitleEdit = art.title.replace(' ', '-').toLowerCase()

        // let artPagePath = `/${artTitleEdit}`

        let blah = {... this.props}

        console.log(blah)


        return ( <div>


                    <Link className="nav-link" to={{
                        pathname: `${art.path}`,
                        aboutProps: {
                            info: `${blah}`
                        }
                    }}
                    
                    ><img src={art.picture} alt={art.title} title={art.title} height="350" width="350" /></Link>

               
                </div>
        );
    }
}

export default Art