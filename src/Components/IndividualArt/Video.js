import React, { Component } from 'react';


class Video extends Component {



    render() {

        let info = this.props.location.aboutProps.info.art
        
        console.log(info)

        return ( <div>
                    <h1>VIDEO</h1>
                    
                </div>
        );
    }
}

export default Video