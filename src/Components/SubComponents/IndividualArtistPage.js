import React, { Component } from 'react';


class IndividualArtistPage extends Component {



    render() {

        let info = this.props.location.aboutProps.info.artist
        
        console.log(info)

        return ( 
            <div>
                <h1>{info.artistName}</h1>
                <img src={info.artistPicture} alt={info.artistName} title={info.artistName} height="350" width="350" />
                <p>{info.bio}</p>
            </div>
        );
    }
}

export default IndividualArtistPage