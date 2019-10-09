import React, { Component } from 'react';


class ThreeD extends Component {



    render() {

        let info = this.props.location.aboutProps.info.art
        
        console.log(info)

        return ( <div>
                    <h1>{info.title}</h1>
                    <iframe title="A 3D model" width="640" height="480" src={info.art} frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
        );
    }
}

export default ThreeD