import React, { Component } from 'react';
import {Link} from "react-router-dom";

class IndividualArtistPage extends Component {

    constructor(props) {
        super(props);
        this.state = {theArtList: []};
    }

    componentDidMount() {
        this.getArtList();
      }


    getArtList = () => {
        return fetch('../art.json')
          .then(response => response.json())
          .then(theArtList => this.setState({theArtList}))
    }

    render() {

        let {theArtList} = this.state

        let params = this.props.match.params.name
        
            const art = theArtList ?
            theArtList.map((a) => {
                return (
                    <div key={a.title}>
                        {params === a.artistName ?   

                        <div>
                            <h1>{a.artistName}</h1>
                            <img src={a.artistPicture} alt={a.artistName} title={a.artistName} height="350" width="350" />
                            <p>{a.bio}</p>
                            <Link to={a.path}>See {a.artistName}'s work!</Link>
                        </div>

                        : null }
                        
                    </div>
                )
            })
            : "loading artist"

        return ( 
            <div>
                {art}
            </div>
        );
    }
}

export default IndividualArtistPage

