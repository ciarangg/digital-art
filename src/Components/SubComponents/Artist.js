import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Artist extends Component {


    render() {
        let {artist} = this.props

        return ( <div>
                    <Link className="nav-link" to={{
                        pathname: `artists/${artist.artistPath}`,
                        aboutProps: {
                            info: {artist}
                        } 
                    }}
                    
                    ><img src={artist.artistPicture} alt={artist.artistName} title={artist.artistName} height="350" width="350" /></Link>

                    <p></p>
                </div>
        );
    }
}

export default Artist