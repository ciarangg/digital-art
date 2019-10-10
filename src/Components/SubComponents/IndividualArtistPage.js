import React, { Component } from 'react';
import {Link} from "react-router-dom";

class IndividualArtistPage extends Component {

    // componentDidMount() {
    //     this.getArtist()
        
    // }

    // getArtist = () => {

    // }

    render() {

        // let info = this.props.location.aboutProps.info.artist
        
        // console.log("edsjk",this.props )

        return ( 
            <div>

                <h1>test</h1>

                {/* <img src={this.props.location.state.artistPicture} height="350" width="350" /> */}

                {/* <h1>{info.artistName}</h1>
                <img src={info.artistPicture} alt={info.artistName} title={info.artistName} height="350" width="350" />
                <p>{info.bio}</p>

                <Link to={info.path}>See {info.artistName}'s work!</Link> */}
            </div>
        );
    }
}

export default IndividualArtistPage