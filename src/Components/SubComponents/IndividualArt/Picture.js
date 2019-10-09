import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Picture extends Component {



    render() {

        let info = this.props.location.aboutProps.info.art
        
        console.log(info)

        return ( <div>
                    <h1>{info.title}</h1>
                    <img src={info.artPicture} alt={info.title} title={info.title} height="350" width="350" />
                    <p>{info.artDescription}</p>
                    <p>Made by {info.artistName} <Link to={info.artistPath}>See {info.artistName}'s bio!</Link></p>
                </div>
        );
    }
}

export default Picture