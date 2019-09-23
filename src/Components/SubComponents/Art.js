import React, { Component } from 'react';
import {Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import ArtPiecePage from './ArtPiecePage'


class Art extends Component {

    


    render() {
        


        let {art} = this.props

        let artTitleEdit = art.title.replace(' ', '-').toLowerCase()

        let artPagePath = `/${artTitleEdit}`
        
        console.log(artPagePath)


        return ( <div>

                    {/* <Link to={{
                        pathname: '/contact',
                        aboutProps: {
                            name: 'this worked'
                        }

                    }}
                    
                    > Contact Us </Link> */}



                    {/* <NavLink className="nav-link" to={artPagePath}> <img src={art.picture} alt={art.title} title={art.title} height="350" width="350" /> </NavLink> */}



                    {/* <Link className="nav-link" to={artPagePath}> <img src={art.picture} alt={art.title} title={art.title} height="350" width="350" /> </Link> */}




                    {/* <Link className="nav-link" to={{
                        pathname: {artPagePath},
                        aboutProps: {
                            name: 'this worked'
                        }
                    }}
                    
                    ><img src={art.picture} alt={art.title} title={art.title} height="350" width="350" /></Link> */}

                    {/* <NavLink className="nav-link" to={artPagePath} params={{ testvalue: "hello" }}> <img src={art.picture} alt={art.title} title={art.title} height="350" width="350" /> </NavLink> */}

                    <Link className="nav-link" to={artPagePath} params={{ testvalue: "hello" }}
                    > <img src={art.picture} alt={art.title} title={art.title} height="350" width="350" /> </Link>
               
                </div>
        );
    }
}

export default Art