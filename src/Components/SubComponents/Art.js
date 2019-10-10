import React, { Component } from 'react';
import {Link} from "react-router-dom";




class Art extends Component {

    


    render() {

        let {art} = this.props

        console.log(art)

        return ( <div>              


                    <Link className="nav-link" to={{
                        pathname: `art/${art.path}`,
                        aboutProps: {
                            info: {art}
                        } 
                    }}
                    
                    ><img src={art.artPicture} alt={art.title} title={art.title} height="350" width="350" /></Link>

               
                </div>
        );
    }
}

export default Art