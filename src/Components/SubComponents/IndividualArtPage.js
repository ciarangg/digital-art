import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
import Picture from './IndividualArt/Picture'
import ThreeD from './IndividualArt/ThreeD'
import Video from './IndividualArt/Video'

class IndividualArtPage extends Component {

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

       let params = this.props.match.params.title

       const art = theArtList ?
       theArtList.map((a) => {

            if (params === a.title && a.medium === "Canvas") {
                return (<div>
                            <h1>{a.title}</h1>
                            <img src={a.picture} alt={a.title} title={a.title} height="350" width="350" />
                            <p>Made by {a.artistName}</p>
                        </div>);
            }

            else if (params === a.title && a.medium === "3D Model") {
                return (<div>
                    <h1>{a.title}</h1>
                    <iframe title="A 3D model" width="640" height="480" src={a.art} frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <p>Made by {a.artistName}</p>
                </div>)
            }

            else if (params === a.title && a.medium === "One channel video") {
                return (<div>
                    <h1>{a.title}</h1>
                    <iframe width="560" height="315" src={a.art} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <p>Made by {a.artistName}</p>
                </div>)
            }
            else if (params === a.title && a.medium === "Website") {
                return (<div>
                    <h1>{a.title}</h1>
                    <embed src={a.art} width="640" height="480"></embed>
                    <p>{a.artDescription}</p>
                    <p>Made by {a.artistName}</p>
                </div>)
            }
       })
       : "loading artist"

        return (
            <div>
                {art}
            </div>
        )

    }
}

export default IndividualArtPage