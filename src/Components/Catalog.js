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
        let {theCatalog} = this.state
        console.log(theCatalog)

        return ( <div>
                    <h1>CATALOG</h1>
                    <h4>{theCatalog.title}</h4>
                    <p>{theCatalog.text}</p>
                </div>
        );
    }
}

export default Catalog