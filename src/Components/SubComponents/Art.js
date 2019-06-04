import React, { Component } from 'react';


class Art extends Component {


    render() {
        let {art} = this.props


        return ( <div>
                    <h4>{art.title}</h4>
                    <img src={art.picture} alt={art.title} height="350" width="350" />
                    <p>{art.artistName}</p>
                </div>
        );
    }
}

export default Art