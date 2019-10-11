import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Video extends Component {



    render() {

        // let info = this.props.location.aboutProps.info.art
        
        // console.log(info)

        return ( <div>
                    <h1>Video component</h1>
                    {/* <h1>{info.title}</h1>
                    <iframe width="560" height="315" src={info.art} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <p>{info.artDescription}</p>
                    <p>Made by {info.artistName} <Link to={info.artistPath}>See {info.artistName}'s bio!</Link></p> */}
                </div>
        );
    }
}

export default Video