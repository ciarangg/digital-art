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

       let artistRoute = `artists/`

       const art = theArtList ?
       theArtList.map((a) => {
            let artistRoute = `artists/${a.artistName}`
            let artistRoutah = `${params}/artists/${a.artistName}`

            if (params === a.title && a.medium === "Canvas") {
                return (<div>
                            <h1>{a.title}</h1>
                            <img src={a.artPicture} alt={a.title} title={a.title} height="350" width="350" />
                            <p>{a.artDescription}</p>
                            <p>Made by {a.artistName} <Link to={artistRoute}>See {a.artistName}'s bio!</Link></p>
                        </div>);
            }

            else if (params === a.title && a.medium === "3D Model") {
                return (<div>
                    <h1>{a.title}</h1>
                    <iframe title="A 3D model" width="640" height="480" src={a.art} frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <p>{a.artDescription}</p>
                    <p>Made by {a.artistName} <Link to={artistRoute}>See {a.artistName}'s bio!</Link></p>
                </div>)
            }

            else if (params === a.title && a.medium === "One channel video") {
                return (<div>
                    <h1>{a.title}</h1>
                    <iframe width="560" height="315" src={a.art} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <p>{a.artDescription}</p>
                    <p>Made by {a.artistName} <Link to={artistRoute}>See {a.artistName}'s bio!</Link></p>
                </div>)
            }
       })
       : "loading artist"

        return (
            <div>
                <h1>BLARP</h1>
                {art}
            </div>
        )

    }
}

export default IndividualArtPage