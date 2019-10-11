import React, { Component } from 'react';
import {Link} from "react-router-dom";


class ThreeD extends Component {



    render() {

        // let info = this.props.location.aboutProps.info.art
        
        // console.log(info)

        return ( <div>
                    <h1>ThreeD component</h1>
                    {/* <h1>{info.title}</h1>
                    <iframe title="A 3D model" width="640" height="480" src={info.art} frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <p>{info.artDescription}</p>
                    <p>Made by {info.artistName} <Link to={info.artistPath}>See {info.artistName}'s bio!</Link></p> */}
                </div>
        );
    }
}

export default ThreeD