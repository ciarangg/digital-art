import React, { Component } from 'react';


class Video extends Component {



    render() {

        let info = this.props.location.aboutProps.info.art
        
        console.log(info)

        return ( <div>
                    <h1>{info.title}</h1>
                    <iframe width="560" height="315" src={info.art} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
        );
    }
}

export default Video