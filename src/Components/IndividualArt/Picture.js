import React, { Component } from 'react';


class Picture extends Component {



    render() {

        let info = this.props.location.aboutProps.info.art
        
        console.log(info)

        return ( <div>
                    <h1>{info.title}</h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
        );
    }
}

export default Picture