import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import logo from '../pictures/fequalsd.jpg'


class About extends Component {


    render() {

        return ( <div>
                    {/* <p>About F=D</p>
                    <h6>About F=D</h6> */}
                    <br />
                    <h4>About F=D</h4>
                    <br />
                    <img src={logo} alt="logo" height="300" width="600"></img>
                    <br />
                    <br />
                    <br />
                    <p> "Fixity Equals Death" or "F=D" is an on and offline art gallery space that was designed as a project for "The Wrong", a digital arts biennial. </p>
                    <br />
                    {/* <button type="button" class="btn btn-outline-secondary">Enter Digital Pavillion</button> */}
                    {/* <button type="button" class="btn btn-outline-secondary"><NavLink className="nav-link" to="/art">Enter Digital Pavillion</NavLink></button> */}
                    <NavLink to="/art"><button type="button" class="btn btn-outline-secondary">Enter Digital Pavillion</button></NavLink>
                </div>
        );
    }
}

export default About