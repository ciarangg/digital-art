import React, { Component } from 'react';


class Artist extends Component {


    render() {
        let {artist} = this.props

        return ( <div>
                    <h4>{artist.artistName}</h4>
                    <img src={artist.picture} alt={artist.artistName} height="350" width="350" />
                    <p>{artist.artTitle}</p>
                </div>
        );
    }
}

export default Artist