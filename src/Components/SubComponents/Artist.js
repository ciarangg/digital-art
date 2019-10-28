import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Artist extends Component {


    render() {
        let {artist} = this.props

        let route = `/art/${artist.title}`

        return ( <div>
                    <Link className="nav-link" to={route}>
                        <p> {artist.artistName} </p>
                    </Link>
                </div>
        );
    }
}

export default Artist