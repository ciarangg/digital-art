import React, { Component } from 'react';


class Picture extends Component {



    render() {

        let info = this.props.location.aboutProps.info.art
        
        console.log(info)

        return ( <div>
                    <h1>{info.title}</h1>
                    <img src={info.picture} alt={info.title} title={info.title} height="350" width="350" />

                    <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/ca5ab51fcf1044e1990ec6cc9d004fd2/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
        );
    }
}

export default Picture