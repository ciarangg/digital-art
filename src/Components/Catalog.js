import React, { Component } from 'react';


class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {theCatalog: []};
    }

    componentDidMount() {
        this.getCatalog();
      }

    getCatalog = () => {
        return fetch('./catalog.json')
          .then(response => response.json())
          .then(theCatalog => this.setState({theCatalog}))
    }


    render() {

        console.log(this.state.theCatalog)

        return ( <div>
                    <h1>CATALOG</h1>
                </div>
        );
    }
}

export default Catalog