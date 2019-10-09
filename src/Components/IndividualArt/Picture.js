import React, { Component } from 'react';


class Picture extends Component {



    render() {

        let info = this.props.location.aboutProps.info.art
        
        console.log(info)

        return ( <div>
                    <h1>{info.title}</h1>
                    <img src={info.picture} alt={info.title} title={info.title} height="350" width="350" />
                </div>
        );
    }
}

export default Picture