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

    // getArtParams = (json) => {
    //     // console.log(this.props.match.params.name)
    //     console.log("KMS" + json)
    // }

    getArtList = () => {
        return fetch('../art.json')
          .then(response => response.json())
        //   .then(getArtParams(response))
        //   .then(response => console.log(response))
          .then(theArtList => this.setState({theArtList}))
    }


  

    render() {

        let {theArtList} = this.state

        let params = this.props.match.params.name

        const art = this.state.theArtList ?
            this.state.theArtList.map((a) => {
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

        
            // console.log(art)

        // let art = theArtList ?
        //     theArtList.filter(function(e){
        //         if (params === e.artistName) {                
        //             console.log(e.title)
        //             return e.title
        //         }
        //     }) : "loading artist"

        // let art = this.state.theArtList.filter(function(e){
        //     if (params === e.artistName) {                
        //         console.log(e.title)
        //         return (
        //             <div>
        //                 <h1>{e.artistName}</h1>
        //                 <img src={e.artistPicture} alt={e.artistName} title={e.artistName} height="350" width="350" />
        //                 <p>{e.bio}</p>
                

        //                 <Link to={e.path}>See {e.artistName}'s work!</Link>
        //             </div>
        //         )
        //     }
        // })

        // let info = art[0]

        // console.log(info)

        // this.setState({info})

        // if(
        //     theArtList.forEach(function(e){

        //     }
        // ) 
        // {

        // }

        // console.log(info)


        return ( 
            <div>
                <h1> i exist</h1>
                {art}
                {/* <h1>{info.artistName}</h1>
                <img src={info.artistPicture} alt={info.artistName} title={info.artistName} height="350" width="350" />
                <p>{info.bio}</p>
                

                <Link to={info.path}>See {info.artistName}'s work!</Link> */}
            </div>
        );
    }
}

export default IndividualArtistPage

