import React, { Component } from 'react';


class MonaLisa extends Component {


    render() {

        console.log(this.props.location.aboutProps)

        return ( <div>
                    <h1>Mona Lisa</h1>

                </div>
        );
    }
}

export default MonaLisa