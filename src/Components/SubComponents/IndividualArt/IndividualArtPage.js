import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Picture from './Picture'
import ThreeD from './ThreeD'
import Video from './Video'

class IndividualArtPage extends Component {



    render() {

        // let info = this.props.location.aboutProps.info.art.medium
        
        // console.log(info.medium)


        let {theArtList} = this.props

        console.log(theArtList.medium)


        if (theArtList.medium === "Canvas") {
            return (<Picture />);
        }

        else if (theArtList.medium === "3D Model") {
            return <ThreeD />;
        }

        else if (theArtList.medium === "One channel video") {
            return <Video />;
        }

        // return (
        //     <div>
        //         <h1>BLARP</h1>
        //     </div>
        // )

    }
}

export default IndividualArtPage