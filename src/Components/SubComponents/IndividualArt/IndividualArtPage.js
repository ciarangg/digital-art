import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Picture from './Picture'
import ThreeD from './ThreeD'
import Video from './Video'

class IndividualArtPage extends Component {



    render() {

        let info = this.props.location.aboutProps.info.art.medium
        
        console.log(info.medium)


        if (info === "Canvas") {
            return <Picture />;
        }

        else if (info === "3D Model") {
            return <ThreeD />;
        }

        else if (info === "One channel video") {
            return <Video />;
        }

    }
}

export default IndividualArtPage